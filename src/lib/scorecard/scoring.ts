import {
  BAND_META,
  CATEGORIES,
  type Band,
  type Category,
  type CategoryKey,
  OPPORTUNITY_ORDER,
  TIER_LABELS,
} from "./spec";

/** Map of questionId → selected option index (0–3). */
export type AnswerMap = Record<string, number>;

export interface CategoryResult {
  key: CategoryKey;
  name: string;
  score: number;            // 0–100
  band: Band;
  blindSpot: boolean;       // any unscored option chosen in this category
  rawPoints: number;
  rawMax: number;
}

export interface ScorecardResult {
  overall: number;
  tier: string;
  categories: CategoryResult[];
  biggest: CategoryKey;
  biggestResult: CategoryResult;
}

export function bandForScore(score: number): Band {
  if (score <= BAND_META["at-risk"].range[1]) return "at-risk";
  if (score <= BAND_META["needs-work"].range[1]) return "needs-work";
  return "strong";
}

export function tierForScore(score: number): string {
  return TIER_LABELS.find((t) => score <= t.max)?.label ?? "Top Dog";
}

function scoreCategory(cat: Category, answers: AnswerMap): CategoryResult {
  let raw = 0;
  let max = 0;
  let blindSpot = false;

  for (const q of cat.questions) {
    const choice = answers[q.id];
    if (choice == null) continue; // shouldn't happen — UI gates completion
    const opt = q.options[choice];
    if (!opt) continue;
    if (opt.points == null) {
      blindSpot = true;
      continue; // unscored — excluded from this category's max
    }
    raw += opt.points;
    max += 3;
  }

  const score = max === 0 ? 0 : Math.round((raw / max) * 100);
  return {
    key: cat.key,
    name: cat.name,
    score,
    band: bandForScore(score),
    blindSpot,
    rawPoints: raw,
    rawMax: max,
  };
}

export function computeScorecard(answers: AnswerMap): ScorecardResult {
  const categories = CATEGORIES.map((c) => scoreCategory(c, answers));
  const overall = Math.round(
    categories.reduce((sum, c) => sum + c.score, 0) / categories.length,
  );

  // Lowest category — tiebreaker via OPPORTUNITY_ORDER (first listed wins).
  const lowestScore = Math.min(...categories.map((c) => c.score));
  const tied = categories.filter((c) => c.score === lowestScore);
  const biggest =
    tied.length === 1
      ? tied[0].key
      : OPPORTUNITY_ORDER.find((k) => tied.some((t) => t.key === k)) ?? tied[0].key;

  const biggestResult = categories.find((c) => c.key === biggest)!;

  return {
    overall,
    tier: tierForScore(overall),
    categories,
    biggest,
    biggestResult,
  };
}
