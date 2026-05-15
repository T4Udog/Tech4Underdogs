@AGENTS.md

# Tech 4 Underdogs — Design System

**Source of truth for layout, type, color, and components across the site.** When building a new page or component, use the utility classes defined in `src/app/globals.css`. Do not reintroduce ad-hoc Tailwind chains for patterns that already have a utility class.

---

## Brand voice

Direct, warm, plain-language. Mascot Archie is a confident underdog dog. Headlines are short, declarative, often italicized for emphasis. No agency-speak.

---

## Color tokens

Defined in `src/app/globals.css` `@theme`. Use Tailwind classes (`bg-orange`, `text-navy`, etc.) — never raw hex in components.

| Token | Hex | Tailwind | Usage |
|---|---|---|---|
| Orange | `#FF6633` | `bg-orange`, `text-orange` | Primary CTA, accent words in headlines, italic emphasis |
| Navy | `#1E2A3A` | `bg-navy`, `text-navy` | Headings on light bg, secondary button, marquee bg |
| Sky | `#CCE1E7` | `bg-sky`, `text-sky` | Section bg (Guide, Portfolio) |
| Cream | `#F8F0E6` | `bg-cream` | Hero / Navbar bg |
| Dark | `#111111` | `bg-dark` | Reserved (currently unused — gradient preferred) |

**Gradient (dark sections):** apply `.bg-teal-gradient` — never re-declare the gradient inline.

```css
linear-gradient(175deg, #1e7890 0%, #0d5068 35%, #073a4f 70%, #052b3a 100%);
```

**Opacity conventions** (on text):
- Body on light bg: `text-navy/75`
- Eyebrow on light bg: `text-navy/60` (handled by `.eyebrow`)
- Body on dark bg: `text-white/75`
- Eyebrow on dark bg: `text-white/60` (handled by `.eyebrow-dark`)
- Secondary/meta text: `/50`–`/55`

---

## Typography

Two families, loaded as @font-face in `globals.css`:

- **Eurostile Extended Black** (`var(--font-eurostile)`) — all headings, taglines, stats. Always uppercase. Italics for emphasis words.
- **Exo** (`var(--font-exo)`) — body, buttons, eyebrows, footer. Weights 500/600/700/800/900 loaded.

### Type scale (use the utility class)

| Class | Size | Where |
|---|---|---|
| `.h-section` | `clamp(1.5rem, 3vw, 2.75rem)` | Section H1/H2 |
| `.h-compact` | `clamp(1.1rem, 2vw, 1.75rem)` | Stats, FAQ — short heading after major content |
| `.body-text` | `1rem / line-height 1.75` | Paragraphs (light bg) |
| `.body-text-dark` | adds `color: rgba(255,255,255,0.75)` | Paragraphs (dark bg) |
| `.tagline` | `1.3rem → 1.5rem` Eurostile uppercase | End-of-section punchline |
| `.eyebrow` | `text-xs tracking-[0.22em]` font-bold uppercase | Small label above heading (light bg) |
| `.eyebrow-dark` | adds `color: rgba(255,255,255,0.6)` | Small label above heading (dark bg) |

### Outlined heading variants

Use sparingly — **one** outlined word per heading for emphasis variation. Pair with `italic`.

- `.text-outlined-navy` — for light backgrounds
- `.text-outlined-white` — for dark backgrounds
- `.text-outlined-orange` — accent variant (use only if there's no orange-filled word nearby)

Headline pattern: 2–3 phrases, mix of filled-orange + outlined for visual rhythm. Examples:
- "Three things" (orange) → "done right." (outlined-white)
- "fought hard" (orange) → "business." (outlined-navy) → "protect it." (orange)
- "Impact" (outlined-navy) + "Numbers" (orange) + "Results." (orange italic)

---

## Layout

### Section container & padding

Every full-width section uses:
```jsx
<section className="bg-<color>">
  <div className="section-container section-y">
    {/* content */}
  </div>
</section>
```

- `.section-container` → `max-width: 1400px; margin: auto; padding-inline: 1.5rem (lg: 3.5rem)`
- `.section-y` → `padding-block: 4rem (md: 5rem, lg: 7rem)`

**Never override these for full sections** unless there's a real reason (e.g. hero needs custom layout). Then still anchor against the same horizontal padding.

### Section background order on home

`cream → navy → sky → teal-gradient → white → sky → white → white+gradient → white → white`

Always alternate light/dark to create visual rhythm. New pages should follow the same rhythm pattern.

---

## Components

### Buttons

```jsx
<a href="..." className="btn btn-primary">Talk to a Real Person <span aria-hidden="true">✦</span></a>
```

| Class | Result |
|---|---|
| `.btn` | Base — Exo extrabold, tracking 0.18em, uppercase, rounded-md, min-h 44px, padding 0.875rem 1.5rem |
| `.btn-sm` | Smaller padding (0.75rem 1.25rem) — for navbar, service cards |
| `.btn-lg` | Larger padding (1rem 2rem) — for primary contact CTA |
| `.btn-primary` | Orange bg, white text, hover #e85a2b |
| `.btn-secondary` | Navy bg, white text, hover navy/85 |

**All buttons end in `✦` (decorative spark).** Never use emoji as icons.

### Eyebrow label

```jsx
<p className="eyebrow mb-5">
  <span className="eyebrow-mark">✺</span>
  Section label text
</p>
```

Use `eyebrow eyebrow-dark` on dark backgrounds. The `✺` (eight-pointed asterisk) is the brand mark — always paired with eyebrow text.

### Tagline (end-of-section)

```jsx
<p className="tagline text-navy">
  Calm. Capable.{" "}
  <span className="italic text-orange">On your side.</span>
</p>
```

Three short statements, last one italic-orange. Sits below the main body paragraph, anchors the section's emotional close.

### Decorative `*` (large)

Reserved for two contexts:
- **GuideSection** — top-right giant orange `*` (clamp 10rem → 22rem)
- **ProofSection** — left-side large `*` (9rem) as visual anchor

Don't add more elsewhere. The brand mark for inline use is `✺` (in `.eyebrow-mark`).

---

## Image conventions

All Archie illustrations and assets live in `public/images/`.

- Hero/CTA: `Archie-Toolbelt-e1773949293728.png`
- Problem: `Archie-Computers.png`
- Guide: `Archie-Capable.png`
- Transformation: `Archie-On-Your-Side.png`

Always use Next `<Image>` with `width`, `height`, descriptive `alt`. Add `priority` only to above-the-fold hero. Use `loading="lazy"` everywhere else.

---

## Building new pages

**Layout shell is global** — `src/app/layout.tsx` already wraps every route with `<MarqueeBanner />` + `<Navbar />` + `<main>{children}</main>` + `<Footer />`. New pages just export their section content from `src/app/<route>/page.tsx`.

Nav links live in `Navbar.tsx`'s `navLinks` array. Add a new route by:
1. Add it to `navLinks` (e.g. `{ label: "Pricing", href: "/pricing" }`)
2. Create `src/app/<route>/page.tsx` exporting the sections

### Per-page section pattern

1. Wrap each section in `<section className="bg-{token}">` → `<div className="section-container section-y">`.
2. Follow the rhythm:
   - `.eyebrow` (with `✺` mark) — `eyebrow-dark` on dark bg
   - `.h-section` heading (2–3 phrase mix: filled-orange + one outlined word)
   - `.body-text` paragraph (max-width ~480-600px for readability) — `.body-text-dark` on dark bg
   - Optional `.tagline` close
   - CTA: `.btn .btn-primary` (or `.btn-secondary`)
3. Alternate light/dark bg between sections to maintain rhythm.
4. End with a CTA section using `.bg-teal-gradient` linking to `/#contact`.

### Page metadata

Every page exports a `metadata` object:
```tsx
export const metadata: Metadata = {
  title: "Page Name | Tech 4 Underdogs",
  description: "...",
};
```

### Accessibility checklist

- All interactive elements ≥44px min height (`.btn` enforces this).
- Decorative icons get `aria-hidden="true"`.
- Headings sequential h1→h2→h3 — no skipping.
- Focus ring already set globally in `globals.css` (`outline: 2px solid #FF6633`).
- Contrast: body text on cream/white must stay at navy/70+. Body on navy/teal-gradient must stay at white/70+.

### Anti-patterns to avoid

- **Don't** repeat the Tailwind chain `bg-orange text-white font-exo font-extrabold ...` — use `.btn .btn-primary`.
- **Don't** redeclare `max-w-[1400px] mx-auto px-6 lg:px-14` — use `.section-container`.
- **Don't** use raw hex in components — use Tailwind tokens (`bg-navy`, etc.) or utility classes.
- **Don't** use emoji as icons. Use SVG, the `✺` brand mark, or the `✦` button spark.
- **Don't** add a fifth color. Stick to orange/navy/sky/cream + white/teal-gradient.
- **Don't** put more than one outlined word per heading — emphasis loses meaning.
- **Don't** mix tagline sizes or styles — always `.tagline` class.
- **Don't** ship lorem ipsum or fake contact info. Real email is `contact@tech4underdogs.com`.

---

## Files

- `src/app/globals.css` — fonts, tokens, all utility classes. **Edit here, not in components.**
- `src/app/layout.tsx` — root layout (imports globals).
- `src/app/page.tsx` — homepage section order.
- `src/components/*.tsx` — one file per section. Keep them lean — no inline style chains for things a utility class covers.
