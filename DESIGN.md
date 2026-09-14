---
name: Fresh Fingers
description: White paper, ink type, four drenched brand fields, and the mascot's finger that wipes each brand's colour layer away by hand before the page is yours.
colors:
  paper: "#ffffff"
  ink: "#111111"
  grey: "#6b6b6b"
  grey-on-ink: "#9a9a9a"
  fresh-fingers-blue: "#1f49b5"
  clean-go-red: "#e3262b"
  freshmate-navy: "#0f2f7a"
  finger-fresh-lime: "#c8f542"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.2rem, 11.4vw, 10.6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  display-brand:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.8rem, 6.6vw, 6.2rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  display-menu:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 9vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 96"
  headline:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 96"
  headline-large:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 96"
  headline-medium:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.7rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 96"
  brandmark:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 96"
  accent-italic:
    fontFamily: "Newsreader, Georgia, serif"
    fontWeight: 500
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.3rem, 2.4vw, 2.2rem)"
    fontWeight: 500
  body:
    fontFamily: "Figtree, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'opsz' 14"
  body-lead:
    fontFamily: "Figtree, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.05rem, 1.3vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Figtree, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  label-button:
    fontFamily: "Figtree, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  label-marquee:
    fontFamily: "Figtree, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  none: "0"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 4vw, 72px)"
  column: "1240px"
  section: "clamp(80px, 12vh, 160px)"
  statement: "clamp(72px, 11vh, 140px)"
  chapter: "120px"
  card: "clamp(28px, 4vw, 56px)"
  grid: "clamp(24px, 4vw, 56px)"
  stack: "1.2rem"
components:
  button-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.5em"
  button-pill-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-pill-large:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: "1.05em 1.7em"
  button-stage-skip:
    backgroundColor: "rgba(255,255,255,0.92)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75em 1.3em"
  stage-hint:
    backgroundColor: "rgba(255,255,255,0.92)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.6em 1.1em"
  button-hex-menu:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    size: "84px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.4em 0.95em"
  card-frame:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.card}"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0"
  marquee:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label-marquee}"
    padding: "0.55em 0"
  chapter-blue:
    backgroundColor: "{colors.fresh-fingers-blue}"
    textColor: "{colors.paper}"
    padding: "{spacing.chapter} {spacing.gutter}"
  chapter-red:
    backgroundColor: "{colors.clean-go-red}"
    textColor: "{colors.paper}"
    padding: "{spacing.chapter} {spacing.gutter}"
  chapter-navy:
    backgroundColor: "{colors.freshmate-navy}"
    textColor: "{colors.paper}"
    padding: "{spacing.chapter} {spacing.gutter}"
  chapter-lime:
    backgroundColor: "{colors.finger-fresh-lime}"
    textColor: "{colors.ink}"
    padding: "{spacing.chapter} {spacing.gutter}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "clamp(56px, 8vh, 96px) {spacing.gutter} 40px"
---

# Design System: Fresh Fingers

## Overview

**Creative North Star: "The Wiped Page"**

The site is a white sheet printed in one ink, and colour exists only as whole drenched fields. The product's own gesture (a finger wipe) is the system's signature and its only transition: on arrival the visitor stands in front of one full-viewport canvas split into the four brand panels side by side, each panel carrying that brand's name in Bricolage caps, its pack line in Newsreader italic beneath, and the real pack standing in the panel's lower band so that when the layer is gone it has landed on its twin on the hero shelf. The visitor erases the layer by hand with the mascot's finger holding the wipe as the cursor; when under 10% remains the stage clears and the white page is theirs. Further down, each brand chapter is wiped in over the previous brand's colour and the body itself re-inks to whichever chapter sits under the viewport. Nothing slides or zooms; things are erased or they change colour.

The idiom is Marvis, re-cut without ornament. Bricolage Grotesque 800 at optical size 96 carries every heading and the brandmark itself. It is uppercase in exactly three places: the giant hero claim, the four brand names on the arrival layer, and the four chapter names. Everywhere else (section headings, the brandmark in the bar and footer) it is sentence case. Inside each heading exactly one word turns to Newsreader italic 500; the same italic carries the hero caption, the chapter taglines, the footer tagline and the closing statement line. Figtree does all the rest: 400 body and one label token, 700 at 0.72rem tracked 0.14em in caps, that is the same on a pack name, a chip, a caption, a spec term, a form label, a footer heading, the hexagon label and the stage's hint and skip pills. Structure is a 1.5px `currentColor` hairline, buttons are pills with one arrow, and the only geometric silhouette is the hexagon menu button.

Density is generous and centred inside one 1240px column: a hero that fills the viewport with the claim and four real packs on a staggered shelf, an ink marquee, a statement with six mascot moments, four full-height chapters, a second ink marquee, one framed product card, two framed partner cards, one contact grid, one ink footer. The only imagery is the owner's real cut-out packshots, the mascot cameo and the labelled mascot renders; there are no logotype marks anywhere on the page.

**Key Characteristics:**
- White paper and ink black as the only resting colours; four brand fields used exclusively as full-bleed chapter backgrounds and the arrival layer's four panels
- Bricolage Grotesque 800 (opsz 96) for every heading and the brandmark; uppercase only for the giant claim, the arrival-layer names and the chapter names; one Newsreader italic 500 accent per heading; Figtree for body and one label token
- 1.5px `currentColor` hairlines for rules, frames, chips, pills, underlines, step numerals and radios; no ornament of any kind
- One 1240px content column for every section including chapters and footer, inside a fluid gutter
- Hand wipe (destination-out canvas) as the transition; body `--bg`/`--fg` morph over 0.9s on the shared `--ease`
- Flat surfaces; depth exists only as `drop-shadow` filters under photographed packs and under the wipe sprite

## Colors

A one-ink system on white paper with four saturated brand fields that are never tinted, mixed or used as accents; a field is either the whole background or absent.

### Primary
- **Ink** (`{colors.ink}`): the single text colour, the hexagon fill, the full-screen menu background, both marquees, the footer background, the `::selection` background, and every hairline via `currentColor`. Also the text colour on the lime field and on the stage's two paper plates.
- **Paper** (`{colors.paper}`): the page at rest, the text on the three dark fields, the hexagon label, the menu and marquee text, the footer text, and (at 92% opacity) the plate behind the stage hint and Pomiń.

### Secondary (the brand fields)
- **Fresh Fingers Blue** (`{colors.fresh-fingers-blue}`): first chapter and the leftmost arrival panel. Text on it is Paper.
- **Clean&Go Red** (`{colors.clean-go-red}`): second chapter, second arrival panel, and the form's error-status text (its only non-field use). Text on it is Paper.
- **FreshMate Navy** (`{colors.freshmate-navy}`): third chapter and third arrival panel. Text on it is Paper.
- **Finger Fresh Lime** (`{colors.finger-fresh-lime}`): fourth chapter and fourth arrival panel. The one light field; text on it is Ink.

### Neutral
- **Grey** (`{colors.grey}`): muted labels and notes on paper only: form field labels, spec terms, figcaptions, the render disclaimer, the deck note, the form status. Never body copy.
- **Grey on Ink** (`{colors.grey-on-ink}`): the same role on ink surfaces: footer column headings, the legal line, the menu footer line. (A CSS literal, not a custom property; the footer's legal rule is a one-off `#444`.)

### Named Rules
**The Whole-Block Rule.** A brand field is used only as a full-bleed background (chapter or arrival panel). It never appears as a button fill, chip fill, text colour, border, or tint. The one tolerated exception is red for form error text.

**The Follow-the-Chapter Rule.** Colour changes happen on `body` via `--bg`/`--fg` (0.9s, `--ease`), driven by the chapter under the 55% line of the viewport (`.is-light` is set when the foreground is paper, which turns the hexagon white). Components never carry a background of their own; they inherit `currentColor` so they re-ink with the page. The only fixed-colour surfaces are the marquees, the menu, the footer and the stage plates.

## Typography

**Display Font:** Bricolage Grotesque (with Helvetica Neue, Arial, sans-serif), self-hosted at 800, latin + latin-ext, always with `font-variation-settings: 'opsz' 96`
**Accent Font:** Newsreader italic (with Georgia, serif), self-hosted at 500 italic only
**Body Font:** Figtree (with system-ui, Helvetica Neue, sans-serif), self-hosted at 400, 500, 700; body runs at `'opsz' 14`

**Character:** A wide, high-optical-size grotesque set tight and heavy, with one soft italic serif word breathing inside each heading, on a plain humanist sans that labels in one size of small tracked caps. Polish diacritics are covered by latin-ext subsets for all three.

### Hierarchy
- **Display** (Bricolage 800, `{typography.display}`, line-height 0.9, tracking -0.035em, uppercase, centred): the hero claim "FRESH WHEN / YOU need IT." only. Mobile re-clamps to `clamp(3rem, 15vw, 5.4rem)`. The arrival layer draws the four brand names in the same face at 800, uppercase, one word per line, sized `min(13% of panel width, 10% of panel height)` (17% of panel width on mobile) and shrunk until the longest word fits 84% of the panel.
- **Display Brand** (Bricolage 800, `{typography.display-brand}`, line-height 0.9, tracking -0.035em, uppercase): the chapter heading, which is the brand name itself set in the page's own face; no logotype marks are used in chapters.
- **Display Menu** (Bricolage 800, `{typography.display-menu}`, line-height 1, tracking -0.03em, uppercase, left-aligned): the five full-screen menu items; `clamp(2.6rem, 13vw, 4rem)` under 640px.
- **Headline** (Bricolage 800, `{typography.headline}`, line-height 1, tracking -0.025em, sentence case, `text-wrap: balance`): section headings. Large variant `{typography.headline-large}` for the product and contact headings; medium variant `{typography.headline-medium}` for the two partner cards. Under 640px they drop to fixed 1.5rem / 1.8rem.
- **Brandmark** (Bricolage 800, `{typography.brandmark}`, tracking -0.02em, sentence case): the "Fresh Fingers" wordmark next to the cameo in the top bar (0.95rem under 640px); the footer sets the same wordmark at 1.6rem.
- **Accent Italic** (Newsreader italic 500, `{typography.accent-italic}`, never uppercase): the single `em` inside any heading or statement line. Inside Display it is 1.02em at -0.02em; inside a Headline it is 1.06em, so the italic word reads at the caps' optical height. On the arrival layer the pack line is drawn in the same face at 0.42 of the name size.
- **Title** (Newsreader italic 500, `{typography.title}`): chapter taglines directly under the brand name. The hero caption uses the same face at `clamp(1.15rem, 1.7vw, 1.6rem)`; the statement's closing line at `clamp(1.4rem, 2.6vw, 2.4rem)`; the footer tagline at 1.15rem.
- **Body** (Figtree 400, 17px desktop / 16px under 640px, line-height 1.5): all running copy. The statement lead uses `{typography.body-lead}` at a 58ch measure; chapter paragraphs `clamp(1rem, 1.25vw, 1.2rem)` at 52ch; partner points 1rem with `strong` at 700; footer 0.9rem; the deck note and form status 0.8rem at 0.06em in Grey.
- **Label** (Figtree 700 uppercase, `{typography.label}`, 0.72rem, 0.14em): the one label token. Pack names on the shelf, chips, moment captions, the product figcaption, spec terms, form labels and legend, footer column headings, the hexagon label, the stage hint and Pomiń. Grey where it sits on paper as a caption or field label; Grey on Ink in the footer; `currentColor` everywhere else.
- **Button label** (`{typography.label-button}`, 0.86rem, 0.06em, 0.92rem in the hero variant) and **marquee label** (`{typography.label-marquee}`, 0.82rem, 0.2em) are the two sanctioned departures from the label token; the product steps are a third at `clamp(1rem, 1.4vw, 1.3rem)`, 0.04em.

### Named Rules
**The One Italic Rule.** Every heading and statement carries at most one Newsreader italic word or phrase, marked with `em`. The italic is the accent; two accents in one heading is a defect. The heading itself is never italic and the italic is never uppercase.

**The Three-Caps Rule.** Bricolage is uppercase in exactly three places: the giant hero claim, the brand names on the arrival layer, and the chapter names. Section headings and the brandmark (bar and footer) are Bricolage 800 in sentence case. Bricolage is never used at body or label size; Figtree is never used for a heading.

**The One Label Rule.** Every small caption, term, chip, tag or heading-of-a-list is the same token: Figtree 700, 0.72rem, 0.14em tracked caps. Only the button label, the marquee and the product steps may run larger; a new small-caps size is a defect. Note: the CSS declares 600 on buttons, marquees and steps but the project ships Figtree 400/500/700 only, so 600 renders as 700; treat every tracked-caps weight as 700 in practice.

## Layout

Every section sits in one 1240px content column (`{spacing.column}`) inside a fluid gutter (`{spacing.gutter}`, 20px to 72px): the statement, product, partner and contact blocks cap `max-width` at 1240px and centre; the chapters and the footer are full-bleed but pad their content to the same column with `max(gutter, (100% - 1240px) / 2)`. Inside the column, text measures are capped per block: chapter text 44rem (paragraph 52ch), statement lead 58ch, contact intro 40ch, chapter figure 640px; the hero shelf runs at `min(1180px, 100%)`.

Section rhythm is one vertical step, `{spacing.section}` (80px to 160px), used as padding on the product, partner and contact blocks; the statement uses `{spacing.statement}` above and `clamp(64px, 9vh, 120px)` below; chapters use a fixed `{spacing.chapter}` and a `min(100svh, 900px)` minimum height so each brand owns a viewport; the footer pads `clamp(56px, 8vh, 96px)` above and 40px below. Grid gaps are `{spacing.grid}`; stacked content inside a card uses `{spacing.stack}`.

The hero is a four-row grid (`auto auto 1fr auto`) with a `min(100svh, 940px)` height and 112px top padding to clear the fixed bar: claim, caption, then the shelf pushed to the bottom row, then the pill CTA. The shelf is a four-up grid aligned to the packs' bottoms; the two middle packs are lifted `clamp(6px, 2vh, 26px)` so the shelf staggers. Pack boxes are `clamp(120px, 14vw, 210px)` wide (wide packs `clamp(180px, 20vw, 290px)`) and `clamp(170px, 27vh, 280px)` tall. The shelf's four positions mirror the arrival layer's four panels so each wiped pack lands over its twin.

Grids are two-column at desktop: chapters split `1fr / 1.1fr` (text left, figure right), the product card `1.1fr / 1fr`, partner cards `1fr / 1fr`, contact `1fr / 1.3fr`, footer `1.4fr 1fr 1fr 1.4fr`; the moments row is six-up.

Two breakpoints only. At 1000px every two-column grid collapses to one, the chapter figure moves above the text (`order: -1`) at `min(420px, 80%)` and chapter padding becomes `100px / 60px`, moments go three-up, footer two-up. At 640px body drops to 16px, the top bar pads `14px 16px`, the hexagon shrinks 84px to 64px, the cameo 44px to 36px, the hero loses its minimum height and pads 92px, the shelf becomes two-by-two (`18px 12px` gap, stagger removed, pack boxes `min(40vw, 160px)` by `min(44vw, 190px)`), moments go two-up, the framed card pads `26px 18px`, the form row and footer go single column, and the stage UI moves to the top (14px).

The top bar is fixed and transparent (brandmark left, hexagon right, 22px vertical padding) with `pointer-events: none` on the bar itself so the page under it stays interactive; the menu opens as a full-screen ink panel with a circular clip-path from the hexagon's position (`calc(100% - 64px) 64px`). The arrival stage is a fixed full-viewport layer at z-index 60 with `cursor: none`, its UI row (hint left, Pomiń right) 26px from the bottom inside the gutter.

## Elevation & Depth

Flat by default. Surfaces have no background of their own and no shadows; structure is drawn with 1.5px hairlines and the page's own colour changes. Depth exists in exactly two places: under photographed objects and under the wipe sprite, always as a soft `drop-shadow` filter (never `box-shadow`, never a painted contact ellipse), so the shadow follows the cut-out silhouette and re-reads correctly when the pack tilts or breathes.

### Shadow Vocabulary
- **Shelf pack** (`drop-shadow(0 26px 30px rgba(0,0,0,.2))`): the four packs on the hero shelf.
- **Product pack** (`drop-shadow(0 24px 34px rgba(0,0,0,.18))`): the open pack inside the product card.
- **Chapter main pack** (`drop-shadow(0 34px 44px rgba(0,0,0,.28))`): the large pack on a drenched field; the darker value is needed against saturated colour.
- **Chapter second pack** (`drop-shadow(0 20px 30px rgba(0,0,0,.25))`): the smaller rotated pack behind it.
- **Wipe sprite** (`drop-shadow(0 18px 26px rgba(0,0,0,.28))`): the finger-and-wipe cursor floating over the layer.
- **Canvas pack** (`shadowBlur 34, shadowOffsetY 20, rgba(0,0,0,.35)`): each pack drawn on the arrival layer, the canvas equivalent of the chapter main pack.

### Named Rules
**The Object-Only Shadow Rule.** Shadows belong to photographed objects (packs) and the sprite, and only as `drop-shadow` filters. Cards, buttons, chips, inputs, pills, the menu and the top bar never cast one, and no pack ever stands on a separate ellipse or plate; a hairline or a colour change does their work.

## Shapes

Square or pill, nothing between. Cards, chapters, inputs and the footer have no radius (`{rounded.none}`); every button, chip and stage plate is a full pill (`{rounded.pill}`); the cameo, step numerals and radios are circles (`{rounded.circle}`). The hexagon menu button is an SVG hexagon (`M50 2 93 27v46L50 98 7 73V27z`), the single geometric silhouette on the page.

Every stroke is 1.5px `currentColor` (frames, chips, pills, the moments' top rule, step circles, input underlines, radios, the address rule, the spec list's top rule, the partner points' dash, footer link underlines); the only 1px strokes are the spec row dividers and the footer legal rule. There is no decorative geometry: no flourish, filigree, curl, corner mark or divider glyph. The one icon is a stroked arrow (`M3 12h17M13 5l7 7-7 7`, stroke 2.2, round caps) inside the primary pill button. The second pack in each chapter sits at 8deg (12deg to 4deg while parallaxing); the wipe brush is a jittered radial gradient so every erased edge is soft and ragged.

## Components

### Buttons
- **Shape:** pill (`{rounded.pill}`), 1.5px `currentColor` border, no fill (`{components.button-pill}`).
- **Primary pill:** Figtree 600 (renders 700) uppercase 0.86rem tracked 0.06em, `0.95em 1.5em`; the hero variant (`{components.button-pill-large}`) is 0.92rem at `1.05em 1.7em` and carries the 1em arrow icon after the label with a 0.6em gap. Card and form CTAs use the base size without the arrow.
- **Hover / Focus:** fills with `var(--fg)`, text becomes `var(--bg)` (on a chapter it inverts to the chapter colour), lifts `translateY(-2px)`; the arrow slides `translateX(.25em)`; background/colour 0.25s, transform 0.4s, arrow 0.3s, all on `--ease`. Focus adds the global 2px `currentColor` outline offset 4px.
- **Stage plates:** Pomiń (`{components.button-stage-skip}`: 1.5px ink border, 92% paper plate) and the hint (`{components.stage-hint}`: same plate, no border) both use the label token in Ink and sit on the coloured layer without inheriting its colour.
- **Hexagon menu** (`{components.button-hex-menu}`): 84px ink hexagon (64px under 640px) with the label token in Paper; the shape rotates 30deg on hover (0.5s); when open the fill swaps to paper and the label to ink; on a light-text chapter (`.is-light`) the hexagon is white with an ink label.

### Chips
- **Style:** pill, 1.5px `currentColor` border, no fill, the label token, `0.4em 0.95em` (`{components.chip}`).
- **State:** informational only, no selected state; they inherit the chapter's text colour.

### Cards / Containers
- **Corner Style:** square (`{components.card-frame}`); no corner marks.
- **Background:** none; the card is a hairline on whatever the body is.
- **Shadow Strategy:** none (see Elevation).
- **Border:** 1.5px `currentColor`.
- **Internal Padding:** `{spacing.card}`; `26px 18px` under 640px. Half-width variant is a `auto 1fr auto` grid with a `{spacing.stack}` gap and left-aligned content, the CTA pinned to the bottom row. Inside: numbered steps with 1.9em hairline circles, a spec list with a 1.5px top rule and 1px row dividers (8.5rem term column, 6.5rem on mobile, terms in the Grey label token), and partner points led by a 0.9rem hairline dash.

### Inputs / Fields
- **Style:** underline only: transparent field, 1.5px `currentColor` bottom border, `0.6rem 0` padding, inherits body type; label above in the Grey label token (`{components.input-underline}`). Textarea resizes vertically from 7rem.
- **Focus:** the underline doubles (`box-shadow: 0 1.5px 0 currentColor`), no outline.
- **Radio:** custom 1.05rem circle with 1.5px border; a 0.5rem `currentColor` dot scales in over 0.2s when checked.
- **Error:** status line turns Clean&Go Red.

### Navigation
- **Top bar:** fixed, transparent; brandmark left (44px circular cameo of the mascot with a 1.5px border, 12px gap, then the wordmark in `{typography.brandmark}`), hexagon right.
- **Menu:** full-screen ink panel, items in `{typography.display-menu}` with 0.1em gaps; hover/focus slides the item right by 0.2em; opens with `clip-path: circle()` from the hexagon over 0.8s `expo.inOut`, closes in 0.6s; focus is trapped inside while open; footer line 0.85rem caps at 0.08em in Grey on Ink with a paper italic accent.
- **Footer** (`{components.footer}`): ink-black, four columns in the 1240px column, 0.9rem body; wordmark in Bricolage 800 1.6rem sentence case with the italic tagline under it; column headings in the Grey on Ink label token; links carry a transparent 1.5px bottom border that becomes `currentColor` on hover/focus (0.3s); legal line 0.78rem above a 1px `#444` rule.

### Marquee
An ink strip (`{components.marquee}`: ink background, paper text, ink borders) of Figtree 600 (renders 700) uppercase 0.82rem tracked 0.2em, scrolling left on a 22s linear loop of a duplicated track. Both marquees on the page are this one ink variant: one after the hero, one after the chapters. The animation is removed under reduced motion.

### Wipe Stage (signature)
One full-viewport canvas painted as four brand panels side by side (a 2x2 grid under 700px wide), in shelf order blue, red, navy, lime. Each panel is filled with its brand field and carries three things: the brand name in Bricolage 800 uppercase, one word per line, left-aligned at 8% of the panel and 20% down (26% on mobile), auto-shrunk to fit 84% of the panel; its pack line in Newsreader italic 500 at 0.42 of the name size directly beneath; and the real pack standing in the lower band (30% of the panel height, capped at 70% of its width, bottom edge at 86% down; 44% and 92% on mobile) with the canvas pack shadow, positioned so it sits over its twin on the hero shelf below. The cursor is hidden and replaced by the mascot's finger holding the wipe (`assets/img/wipe-sprite.png`, `clamp(280px, 34vw, 520px)`, `min(70vw, 300px)` on mobile, offset `-7% -4%`, sprite shadow); it fades out over 0.25s when the pointer leaves. The pointer erases with a `destination-out` brush of radius `max(120px, 21% of the shorter viewport side)` made of five jittered soft radial dabs per step, dense enough that a fast pointer still leaves a continuous wipe; touch requires a finger down. Coverage is sampled every 220ms on a 48x27 downsample; under 10% the stage ends. The hint pill reads "Zetrzyj warstwę, żeby wejść"; Pomiń ends the stage at once; the result is remembered for the session (`?wipe` resets it). Each chapter carries a cover canvas in the previous chapter's colour (`data-prev`) that is auto-wiped along a four-row S-path in 1.4s (`power1.inOut`, brush `max(110px, 20% of the shorter side)`) when the chapter reaches 70% of the viewport. Under `prefers-reduced-motion`, `.reduced-motion` or `?static` the stage and covers are not shown and chapters paint directly.

### Packs (signature)
Real cut-out packshots only, with the object shadows listed under Elevation. On the shelf they breathe (GSAP, y -8px, rotation plus or minus 1.5deg, 2.6s+ yoyo, `sine.inOut`) and lift `translateY(-10px) rotate(-2deg)` on hover (0.7s). In a chapter the main pack (max 78% wide, 64% tall of the square figure) parallaxes 50px to -50px through the scroll (scrub 0.8), tilts with the pointer (rotationY up to 14deg, rotationX up to 10deg, perspective 900) and eases back on leave (`expo.out`, 0.8s); the second pack (max 40% by 36%, bottom-right) parallaxes 30px to -30px while rotating 12deg to 4deg.

## Do's and Don'ts

### Do:
- **Do** keep the page white with ink type at rest and let colour arrive only as a full-bleed chapter or arrival panel that the body itself morphs to (`--bg`/`--fg`, 0.9s, `--ease`).
- **Do** set every heading and the brandmark in Bricolage Grotesque 800 at `'opsz' 96`: uppercase only for the giant hero claim, the arrival-layer names and the chapter names; sentence case everywhere else; with exactly one Newsreader italic 500 `em` inside each heading.
- **Do** name a chapter with the brand name in `{typography.display-brand}` and its tagline in Newsreader italic beneath; no logotype marks.
- **Do** use the one label token (Figtree 700, 0.72rem, 0.14em caps) for every pack name, chip, caption, spec term, form label, footer heading, hexagon label and stage pill.
- **Do** keep every section's content inside the 1240px column, including chapters and the footer.
- **Do** draw every structural line, frame, chip, pill and underline as 1.5px `currentColor` so it re-inks with the chapter.
- **Do** make every button a hairline pill; the primary CTA carries the single stroked arrow, and hover inverts to `var(--fg)` on `var(--bg)`.
- **Do** transition between colours by wiping (destination-out canvas, hand-driven on arrival with the finger-and-wipe sprite, auto S-path for chapters) and provide the static path (`?static`, reduced motion) with chapters painted directly.
- **Do** use the owner's real cut-out packshots with the object-only `drop-shadow` filters listed under Elevation, and keep both marquees ink on paper text.
- **Do** use `cubic-bezier(.16,1,.3,1)` for CSS state transitions and `expo`/`power`/`sine` GSAP eases for scripted beats; keep to the three motion beats (arrival wipe, chapter wipe and colour, statement rise).

### Don't:
- **Don't** use a brand field as a button, chip, badge or text colour, or as a tint or gradient; the only non-field use of a brand colour is red for form errors.
- **Don't** add slides, zooms or generic scroll reveals as transitions; the wipe and the body colour morph are the transition vocabulary (the statement's one-time rise is the sole fade).
- **Don't** add ornaments of any kind: no flourishes, filigree, curls, corner marks, dividers with glyphs, or decorative rules beyond the plain hairline.
- **Don't** add box-shadows, painted contact ellipses under packs, filled cards, radii on cards or inputs, or borders thinner than 1.5px (the 1px spec divider and legal rule are the exceptions).
- **Don't** introduce icon fonts or icon sets; the stroked arrow is the only icon and it appears only inside the primary pill.
- **Don't** set Bricolage in uppercase outside the three sanctioned places, at body or label size, or Figtree in a heading; the arrival canvas draws in the same three faces as the page.
- **Don't** invent a second label size or a second marquee variant; a new small-caps style or a paper marquee is a defect.
- **Don't** show mascot renders without the "rendery poglądowe" disclaimer, and never present a render as a product photo.
