/**
 * The Local Business Scorecard — locked content.
 * Source: Local-Business-Scorecard-Phase-2-Build-Spec.md (Phase 2 FINAL).
 * Do not edit copy here without updating the spec.
 */

export type CategoryKey = "website" | "presence" | "management" | "it";
export type Band = "at-risk" | "needs-work" | "strong";

export interface Option {
  text: string;
  points: number | null; // null = unscored ("we haven't compared")
  flag?: "blind-spot";
}

export interface Question {
  id: string; // e.g. "website.q1"
  prompt: string;
  options: Option[];
}

export interface Category {
  key: CategoryKey;
  name: string;
  sub: string;
  questions: Question[];
  paragraphs: Record<Band, string>;
  opportunity: {
    headline: string;
    body: string;
    weakLine: string; // dynamic stakes line for email
  };
}

export const TIER_LABELS: Array<{ max: number; label: string }> = [
  { max: 30, label: "Off the Map" },
  { max: 50, label: "Scrappy & Exposed" },
  { max: 70, label: "In the Hunt" },
  { max: 88, label: "Front of the Pack" },
  { max: 100, label: "Top Dog" },
];

export const BAND_META: Record<Band, { label: string; hex: string; range: [number, number] }> = {
  "at-risk":    { label: "At Risk",    hex: "#E0563F", range: [0, 40] },
  "needs-work": { label: "Needs Work", hex: "#E8A13C", range: [41, 70] },
  strong:       { label: "Strong",     hex: "#54B978", range: [71, 100] },
};

/* Tie-breaker (spec §4): IT → Online Presence → Website → Management.
   First in this list wins when lowest scores tie. */
export const OPPORTUNITY_ORDER: CategoryKey[] = ["it", "presence", "website", "management"];

export const DISCLAIMER = {
  cta: `A quick, honest note: this scorecard is a general evaluation based on your own answers — built to flag likely areas of concern, not to serve as a precise audit. We can't give you an exact analysis of your specific situation without a closer look. That's what the free consultation is for. To find out what these results really mean for your business, book your free 15-minute consultation here →`,
  footer: `These results are general evaluations based on self-reported information and do not constitute a complete or exact analysis. A precise assessment requires a closer examination of your specific systems and situation.`,
};

export const CATEGORIES: Category[] = [
  {
    key: "website",
    name: "Your Website",
    sub: "Does it earn trust?",
    questions: [
      {
        id: "website.q1",
        prompt: "Last time your website was meaningfully updated (photos, text, design)?",
        options: [
          { text: "Years ago / not sure", points: 0 },
          { text: "Over a year ago", points: 1 },
          { text: "In the last year", points: 2 },
          { text: "In the last few months", points: 3 },
        ],
      },
      {
        id: "website.q2",
        prompt: "How long ago was your site built or last redesigned?",
        options: [
          { text: "5+ years / don't know", points: 0 },
          { text: "3–5 years", points: 1 },
          { text: "1–3 years", points: 2 },
          { text: "Within the last year", points: 3 },
        ],
      },
      {
        id: "website.q3",
        prompt: "Compared to your top competitors, how does your site stack up?",
        options: [
          { text: "Mine's behind", points: 0 },
          { text: "About even", points: 1 },
          { text: "Mine holds up well / better", points: 3 },
          { text: "We haven't compared", points: null, flag: "blind-spot" },
        ],
      },
      {
        id: "website.q4",
        prompt: "Is your site genuinely easy to use on a phone?",
        options: [
          { text: "Clearly built for desktop first", points: 0 },
          { text: "Okay, a little clunky", points: 1 },
          { text: "Fine on a phone", points: 2 },
          { text: "Built mobile-first", points: 3 },
        ],
      },
      {
        id: "website.q5",
        prompt: "How easy is it to call you straight from your site?",
        options: [
          { text: "Have to hunt for a number", points: 0 },
          { text: "Number, but no tap-to-call", points: 1 },
          { text: "Tap-to-call works", points: 2 },
          { text: "Tap-to-call + clear contact everywhere", points: 3 },
        ],
      },
    ],
    paragraphs: {
      "at-risk":
        "Your website is quietly working against you. People size up a site in about 50 milliseconds — a twentieth of a second — and that snap judgment is mostly about how it looks, not what it says. With roughly 60% of web traffic now happening on phones, a site that's dated or clunky on mobile doesn't get a second chance: people hit back and call the competitor whose site looked the part. And 75% of people decide whether a business is credible based on its website alone. Right now, yours is costing you trust before you've said a word — and it's usually the highest-visibility fix in this whole report.",
      "needs-work":
        "Your website does its job, but it isn't pulling its weight. It probably looks fine to you — and \"fine\" is exactly the problem when a sharper competitor is one click away. The gaps are small things that stack up: a design a step behind, mobile that's a little clunky, a look that hasn't been freshened in a while. Nothing's broken. It's just leaving easy wins on the table — and those are the quick ones to claim.",
      strong:
        "Your website is an asset, not a liability — and that already puts you ahead of most local businesses. It looks credible, works on a phone, and makes it easy to do business with you. The job now is keeping it that way: sites drift out of date faster than owners expect, so the work shifts from fixing to defending the edge you've built.",
    },
    opportunity: {
      headline: "Your biggest opportunity: your website.",
      body: "It's the first thing a customer judges you on, and right now it's the easiest place to win back the trust you're losing. A focused redesign — modern look, fast, built for phones first — is the highest-visibility move you can make. Let's talk about what that looks like for your business.",
      weakLine:
        "A dated or clunky-on-mobile site costs you trust before a customer ever calls — and it's usually the highest-visibility thing to fix.",
    },
  },
  {
    key: "presence",
    name: "Your Online Presence",
    sub: "Can customers find you?",
    questions: [
      {
        id: "presence.q1",
        prompt: 'Search your service + "near me" (phone, not logged in). Where are you?',
        options: [
          { text: "Don't see us", points: 0 },
          { text: "Way down the list", points: 1 },
          { text: "First page, not top map", points: 2 },
          { text: "Top 3 map results", points: 3 },
        ],
      },
      {
        id: "presence.q2",
        prompt: "How's your Google Business Profile?",
        options: [
          { text: "None / never claimed", points: 0 },
          { text: "Old, outdated, untouched", points: 1 },
          { text: "Claimed, accurate, not managed", points: 2 },
          { text: "Full + actively managed", points: 3 },
        ],
      },
      {
        id: "presence.q3",
        prompt: "What do your Google reviews look like?",
        options: [
          { text: "Few/none or all old", points: 0 },
          { text: "Decent but old, I don't reply", points: 1 },
          { text: "Steady, but we don't ask/reply", points: 2 },
          { text: "Recent, steady, we reply", points: 3 },
        ],
      },
      {
        id: "presence.q4",
        prompt: "How often does your website bring in leads?",
        options: [
          { text: "Rarely / never", points: 0 },
          { text: "~Once a month", points: 1 },
          { text: "A few a week", points: 2 },
          { text: "Several a day", points: 3 },
        ],
      },
      {
        id: "presence.q5",
        prompt: "Are your listings (name/address/phone) consistent across the web?",
        options: [
          { text: "No idea / probably not", points: 0 },
          { text: "Some right, some outdated", points: 1 },
          { text: "Mostly consistent", points: 2 },
          { text: "Consistent + managed", points: 3 },
        ],
      },
    ],
    paragraphs: {
      "at-risk":
        "When a customer searches for what you do, you're hard to find — the most expensive kind of invisible, because you never see the jobs you lose. The top three map results pull about 44% of all the clicks, and the businesses sitting there get 126% more traffic than the ones just below. If you're not showing up, those customers aren't choosing a competitor over you — they never saw you at all. This is usually the fastest-moving needle in the report.",
      "needs-work":
        "You're on the map, but you're not the obvious choice — one option among several instead of the one people call first. Small gaps hold you back: reviews that have gone quiet, a Google Business Profile that isn't actively managed (a complete, active profile makes customers 70% more likely to visit), or listings that don't match across the web — and 62% of people back away from a business when they find inconsistent info online. Tightening these is low-cost, and it usually pays back within 60–90 days.",
      strong:
        "You're winning the search that matters. You show up where customers look, your reviews do the selling, and your profile works for you — right where you want to be, because 76% of people who run a \"near me\" search on their phone visit a business that same day. The play now is to protect and compound that lead, because the top spots are exactly what your competitors are gunning for.",
    },
    opportunity: {
      headline: "Your biggest opportunity: getting found.",
      body: "The customers searching for what you do right now mostly can't see you — and that's fixable faster than almost anything else here. Tightening your Google Business Profile, reviews, and local listings is the highest-ROI move on the board. Let's map where you're losing visibility and how to claim it back.",
      weakLine:
        "If customers can't find you in the local map results, you never even get the chance to win them — and that's one of the fastest things to turn around.",
    },
  },
  {
    key: "management",
    name: "Website Management & Maintenance",
    sub: "Who's minding it?",
    questions: [
      {
        id: "management.q1",
        prompt: "How is your website currently being managed?",
        options: [
          { text: "Just a host keeps it online", points: 0 },
          { text: "We call someone only when needed", points: 1 },
          { text: "We pay someone to maintain it", points: 2 },
          { text: "Reliable partner updates + secures it", points: 3 },
        ],
      },
      {
        id: "management.q2",
        prompt: "Who keeps your site's software/security updated (platform, plugins, SSL)?",
        options: [
          { text: "No one I know of", points: 0 },
          { text: "Only when it breaks", points: 1 },
          { text: "Host/person handles some", points: 2 },
          { text: "Partner proactively manages it", points: 3 },
        ],
      },
      {
        id: "management.q3",
        prompt: "If your site went down today, how fast back up?",
        options: [
          { text: "Wouldn't know who to call", points: 0 },
          { text: "Eventually", points: 1 },
          { text: "A day or two", points: 2 },
          { text: "Quickly — someone's on it", points: 3 },
        ],
      },
      {
        id: "management.q4",
        prompt: "Do you have a recent backup if something went wrong?",
        options: [
          { text: "No idea / probably not", points: 0 },
          { text: "Maybe, no real plan", points: 1 },
          { text: "Host backs it up, I think", points: 2 },
          { text: "Yes — could restore fast", points: 3 },
        ],
      },
      {
        id: "management.q5",
        prompt: "How confident are you the site's in good hands right now?",
        options: [
          { text: "Not at all", points: 0 },
          { text: "A question mark", points: 1 },
          { text: "Mostly", points: 2 },
          { text: "Very — it's handled", points: 3 },
        ],
      },
    ],
    paragraphs: {
      "at-risk":
        "Right now, no one's really minding your website — a quiet liability sitting under your business. Most small-business sites run on WordPress, and 96% of its security holes trace back to out-of-date plugins — exactly the kind of thing a maintenance plan catches and a \"set it and forget it\" site doesn't. If your site goes down, gets hacked, or simply breaks, the honest answer to \"who fixes it?\" is probably \"not sure\" — and mid-emergency is the worst time to learn you have no backup. The fix isn't expensive. Not having it is.",
      "needs-work":
        "Your site is being kept alive, but it isn't being looked after. Someone hosts it, maybe pokes at it when there's a problem — but no one's handling updates, security, and backups before things go wrong. That's the gap between \"it's online\" and \"it's in good hands,\" and it usually doesn't surface as a problem until the day it does. Closing it is mostly about putting a reliable system in place, not writing a big check.",
      strong:
        "Your website is genuinely looked after — updated, secured, backed up, with someone clearly on the hook for it. Most local businesses can't say that, and it's the difference between a small hiccup and a small disaster. Keep that partnership tight; its value is invisible right up until the moment it isn't.",
    },
    opportunity: {
      headline: "Your biggest opportunity: getting your website properly looked after.",
      body: "Right now it's running without a safety net — no one clearly responsible for updates, security, and backups. A simple care plan turns \"hope nothing breaks\" into \"handled.\" Let's walk through what it'd take to put yours in good hands.",
      weakLine:
        "Right now your site's running without a safety net — no one clearly on the hook for updates, security, or backups until something breaks.",
    },
  },
  {
    key: "it",
    name: "Business Technology (IT)",
    sub: "Will it hold up?",
    questions: [
      {
        id: "it.q1",
        prompt: "Do team computers have active, paid security protection?",
        options: [
          { text: "No / not sure", points: 0 },
          { text: "Just free built-in", points: 1 },
          { text: "Some, not all", points: 2 },
          { text: "Yes, all of them", points: 3 },
        ],
      },
      {
        id: "it.q2",
        prompt: "If a computer died or got ransomware tomorrow, could you get files back?",
        options: [
          { text: "Probably lose everything", points: 0 },
          { text: "On laptops/thumb drives, no real plan", points: 1 },
          { text: "Mostly cloud, disorganized", points: 2 },
          { text: "Auto-backed-up, recover in a day or two", points: 3 },
        ],
      },
      {
        id: "it.q3",
        prompt: "How do software/security updates get installed?",
        options: [
          { text: "They don't, really", points: 0 },
          { text: "Each person, when prompted", points: 1 },
          { text: "Someone checks now and then", points: 2 },
          { text: "Managed automatically for the team", points: 3 },
        ],
      },
      {
        id: "it.q4",
        prompt: "Does your team use email on your own domain?",
        options: [
          { text: "No, personal Gmail/Yahoo", points: 0 },
          { text: "Some do, some don't", points: 1 },
          { text: "Yes, but unsure who secures it", points: 2 },
          { text: "Yes — professional + secured", points: 3 },
        ],
      },
      {
        id: "it.q5",
        prompt: "If files got locked or the network went down, do you have a reliable IT pro to call?",
        options: [
          { text: "No, we'd scramble", points: 0 },
          { text: 'An employee/friend who\'s "decent with computers"', points: 1 },
          { text: "Someone we use occasionally", points: 2 },
          { text: "Reliable IT partner, there when needed", points: 3 },
        ],
      },
    ],
    paragraphs: {
      "at-risk":
        "This is the area most likely to hurt you — and the one owners think about least until it's too late. 40% of small businesses say a single attack costing $100,000 or less would put them out of business, and small and mid-sized businesses are now on the receiving end of 88% of ransomware-related breaches. When they pay, the median ransom runs about $115,000. If your computers aren't properly protected, your files aren't reliably backed up, and you've got no one to call, you're not \"too small to be a target\" — you're exactly the target, because attackers know the defenses are thin. Prevention costs a fraction of recovery. Take this one seriously now, not later.",
      "needs-work":
        "Your tech mostly works — but it's holding together more by luck than by plan. There's some protection, but the gaps are real: backups nobody's tested, updates that happen whenever someone remembers, no clear person to call when something breaks. It's fine until the day it isn't, and the downside is steep — roughly one in five small businesses that get hit end up closing or filing for bankruptcy. This is the highest-peace-of-mind move in the report.",
      strong:
        "Your technology is in solid shape — protected, backed up, current, with someone accountable for it. That's rare for a business your size, and it's the foundation that lets you focus on the work instead of worrying about a dead laptop or a locked file. The job now is keeping it current as you grow, because the threats don't stand still.",
    },
    opportunity: {
      headline: "Your biggest opportunity: locking down your business technology.",
      body: "This is the gap with the steepest downside — and the one most owners don't fix until after something's gone wrong. Managed IT means protection, backups, and a real person to call, before you need them. Let's talk about closing this gap while it's still cheap to close.",
      weakLine:
        "This is the gap with the steepest downside: 40% of small businesses say a single six-figure attack would end them — and it's the one most owners fix only after something goes wrong.",
    },
  },
];

export const QUESTIONS_FLAT = CATEGORIES.flatMap((c) => c.questions);
export const TOTAL_QUESTIONS = QUESTIONS_FLAT.length;

export function getCategory(key: CategoryKey): Category {
  const cat = CATEGORIES.find((c) => c.key === key);
  if (!cat) throw new Error(`Unknown category: ${key}`);
  return cat;
}
