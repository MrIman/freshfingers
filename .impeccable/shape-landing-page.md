# Shape brief — Fresh Fingers landing page (index.html)

Status: awaiting user confirmation. Shape output only; no direction contract, no code.
Seed key: 3b2a7bd1 (re-roll 1, bolder register). Chosen: challenger `architecture-inhabitable-space-daylight-section`, kind challenger.
Decision comp: .impeccable/mocks/decision/r1-daylight.png (the round's hand, not yet the approved build comp).
Quality bar: .impeccable/worlds/daylight-section-board.webp, .impeccable/worlds/daylight-section-hero.webp
Build path: comp (recorded default, untouched).
Next command when building starts:
  node "<skill-base-dir>/scripts/build-phase.mjs" start --direction 3b2a7bd1 --kind challenger --chosen architecture-inhabitable-space-daylight-section --register bolder

## 1. Job and audience
Mode: Persuade. Retail/distribution partners and investors arrive (often from a deck link or a sales conversation), Polish-speaking, evaluating in minutes. They must get FRESH FINGERS → FRESH WHEN YOU NEED IT. → pocket oral freshness in the first screen, understand that one product ships as four brands, and reach "Pobierz deck" / "Kontakt".

## 2. Outcome and proof
Primary actions: download the partner/investor deck (PDF, to be supplied), contact (partner vs investor). Proof on hand: the brief's insight and claim ladder, four real pack designs (dielines), product facts from the pack. No photos, tests, or traction: pack imagery is generated from the dielines and labelled as renders; no testimonials, logos, or claims beyond the pack.

## 3. Selected direction — A Day in Section
World: architect's daylight section. Limewash ground, charcoal section poche, one gold light band, four brand colour rooms; inclined display caps with tabular time stamps and leader-line annotations; the whole page is ONE continuous horizontal section that never wraps.
Thesis: life happens between brushings, so the page is a single day cut in section; the light band travels 08:12 → 23:40 and every room it reaches is a Fresh Fingers moment.
Sequence: (1) Hero section: headline + time-stamp rail + four rooms, light on room one. (2) The day: scroll scrubs the light band along the section through kawa / lunch / spotkanie / randka / klub; each occasion is one annotated room with its claim from the brief. (3) One product: the wipe explained as a drawing detail (pack, wipe, 10 szt., no water, sugar-free), pack facts only. (4) Four brands: the section widens into four rooms, each brand's colour floods its room, pack render standing inside, private-label positioning. (5) For partners / for investors: two annotated "rooms" with what each gets; deck download as the section's final annotation; contact. (6) Footer as the title block of a drawing: ADA Group, Katowice, legal.
Focal moment: the gold light band moving through the rooms as you scroll and re-lighting each brand's room.
Signature interaction: scroll-driven light band + "now" marker on the time rail; headline draws itself as one continuous stroke on load.
Raises carried: continuous-stroke headline reveal (neon), unbroken rail + now marker (drum machine), palette law: each brand owns exactly its colours, nothing off-palette (arcade).
Implementation consequence: static HTML/CSS/JS; GSAP + ScrollTrigger for the master timeline; rooms as SVG/CSS section drawings with generated pack plates; one master timeline drives all motion.

## 4. Scope and boundaries
Fidelity: production-ready single page, desktop + mobile, Polish copy, English brand claims verbatim from the brief. Breadth: one route (index.html) with in-page anchors Partnerzy / Inwestorzy / Kontakt. Untouched: brand names, pack designs, claims list from the brief. Anti-goals: dark/nightclub ground; pharmacy/dental/medical look; any metaphor that replaces the product (booth, stage, market); invented proof; a shop.

## 5. States and ranges
Content is fixed (4 brands, 5 occasions, ~8 pack facts). States: reduced-motion (light band static at noon, all rooms lit), no-JS (full page readable, rooms lit), deck missing (button links to contact until PDF supplied), mobile (section stacks to one room per viewport, time rail becomes a vertical spine).

## 6. Interaction and layout
Hierarchy: wordmark → headline → time rail → rooms → CTA annotations. Topology: one horizontal section on desktop, vertical spine on mobile. Motion: master GSAP timeline scrubbed by scroll; hover on a room brightens it (active edge in that brand's colour); keyboard reachable anchors; motion never hides content.

## 7. Constraints and open decisions
Platform web, static, deploy anywhere. Accessibility: WCAG AA contrast on every coloured room, reduced-motion honoured. Polish only. Open (do not invent): deck PDF and recipient emails for partner vs investor enquiries; whether sister brands are named (currently: yes, all four); exact occasions/time stamps copy for the day rail.


## Correction after comp round (2026-09-05)
User chose comp 2 (mural section) and removed the times-of-day axis entirely. Four rooms = four brands, each a stylistically different interior matching its brand. No timeline, no clock stamps. Light stays as room lighting, not as a day.
