---
name: Fresh Fingers
description: A building cut in architectural section on limewash paper; four rooms, four brands, one wipe.
colors:
  limewash: "#f7f7e8"
  ink: "#0b0b0b"
  poche: "#20201f"
  marker-gold: "#dba70c"
  daylight-gold: "#f2b21b"
  fresh-fingers-blue: "#083b93"
  clean-go-red: "#e3262b"
  finger-fresh-lime: "#c1d051"
  freshmate-navy-text: "#0f2f7a"
  finger-fresh-olive-text: "#6f7d12"
  mascot-pink: "#f2a7c0"
typography:
  display:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  display-small:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.4vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  display-italic:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.06em"
    fontWeight: 400
    lineHeight: 0.9
  mark:
    fontFamily: "Phudu, Barlow Condensed, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 2.6vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 0.95
  title-small:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  closing:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.6rem, 3vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
  lead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
  body-table:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(0.95rem, 1.1vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.14em"
  label-small:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.16em"
rounded:
  none: "0"
  focus: "2px"
  circle: "50%"
  pill: "999px"
spacing:
  gutter: "clamp(24px, 4vw, 84px)"
  sheet-top: "clamp(72px, 7vw, 150px)"
  sheet-bottom: "clamp(40px, 4vw, 80px)"
  head-gap: "clamp(40px, 4vw, 72px)"
  rule-gap: "clamp(48px, 5vw, 96px)"
  grid-gap: "clamp(12px, 1.6vw, 28px)"
  column-gap: "clamp(32px, 5vw, 96px)"
  column-gap-wide: "clamp(40px, 6vw, 120px)"
  form-gap: "1.4rem"
  row-gap: "0.7rem"
  meta-gap: "0.45rem"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.limewash}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.9rem"
    height: "3.4rem"
  button-solid-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.limewash}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "38px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.limewash}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.4rem 0"
  input-rule:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0"
  label-mono:
    textColor: "{colors.poche}"
    typography: "{typography.label-small}"
  step-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.limewash}"
    rounded: "{rounded.circle}"
    size: "2em"
  marker:
    backgroundColor: "{colors.marker-gold}"
    rounded: "{rounded.circle}"
    size: "12px"
---

# Design System: Fresh Fingers

## Overview

**Creative North Star: "The Architect's Section Sheet"**

The whole site is one drawing set. The hero is a building cut in section and drawn on limewash paper: four rooms side by side on a charcoal slab, each room an interior in one brand's character, the master claim brush-painted as a single white mural across all four walls. Everything below the hero is a numbered sheet (arkusz) of the same set: a bold condensed heading with one italic serif word, a lead paragraph, a drawn figure or table, and a 3px charcoal closing rule carrying the sheet label in monospace at its right end. The footer is the drawing's title block. Density is editorial and generous at desktop; content lives on one continuous paper with no cards, panels, or tinted bands.

Material is flat paper and ink. Colour arrives almost entirely through the room plates and the mascot rasters; the UI itself is charcoal ink on limewash with one gold marker. The four brand colours appear in the plates and as the brand names in the Marki sheet, never as UI chrome. The hero is a width-locked stage measured in comp pixels (1/2304 of the viewport) so that the drawing keeps its proportions at every desktop width; sheets below use fluid clamp() rhythm. Motion follows the grammar of drafting: rooms rise from the slab, the lettering is brushed left to right, the rail line is drawn, the marker is set; on scroll the daylight band and the gold marker walk room to room.

Where the direction contract and the build diverge, the build wins: the OWN-WORLD limewash #F7F4EC landed as #f7f7e8, the charcoal split into ink #0b0b0b (lines, type) and poche #20201f (labels, hatch texture), the gold split into a marker gold #dba70c and a daylight gold #f2b21b used only in the soft-light band, and the lime cooled from #C8F542 to #c1d051. The contract's refusals held: no headline-left / pack-right hero, no dark grounds, no day/time axis, no metaphor replacing the product.

**Key Characteristics:**
- Limewash paper ground, charcoal ink, one gold marker; brand colour lives in the plates
- Heavy condensed uppercase display with exactly one italic serif word per heading
- Tabular monospace labels, uppercase and letterspaced, set in poche grey
- Rules, not boxes: 3px charcoal rules open and close every group; 1px rules separate rows
- Pill buttons in ink; underline-only text links; bottom-rule inputs
- Rasters composite onto the paper with `mix-blend-mode: darken` so no white plate edges show
- Width-locked hero stage in comp units; fluid sheets below; strip becomes a swipe carousel under 640px

## Colors

Paper and ink with a single gold marker; the four brand hues are reserved for the rooms and the brand names.

### Primary
- **Ink** (#0b0b0b): every line, rule, heading, body word, pill button fill, and step badge. The drawing is made of this.
- **Marker Gold** (#dba70c): the one accent. The rail marker dot under the active brand, the niche marker on each moment, the selected radio dot, the input caret and focus underline, text selection, and the focus-visible outline. It marks position and state and nothing else.

### Secondary
- **Daylight Gold** (#f2b21b): used only as the translucent soft-light band (`rgba(242,178,27,.22)`, `mix-blend-mode: soft-light`) that walks across the rooms on scroll. Never used as a fill or text colour.

### Tertiary (brand hues)
- **Fresh Fingers Blue** (#083b93): the Fresh Fingers brand name in the Marki sheet.
- **Clean&Go Red** (#e3262b): the Clean&Go brand name; also the form's error status text.
- **FreshMate Navy (text)** (#0f2f7a): the FreshMate brand name; a darkened navy set for legibility on limewash.
- **Finger Fresh Lime** (#c1d051): the Finger Fresh room hue as defined in the tokens.
- **Finger Fresh Olive (text)** (#6f7d12): the Finger Fresh brand name; the lime brought down to an ink-safe olive because #c1d051 on limewash does not read as text.
- **Mascot Pink** (#f2a7c0): the mascot's skin tone, held as a token for reference. The current build applies it to no UI element; the mascot's colour lives in the rasters.

### Neutral
- **Limewash** (#f7f7e8): the page ground, the hero stage, plate backgrounds, and the text colour on ink fills.
- **Poche** (#20201f): the hatch texture of the slabs and the colour of every monospace label, caption note, rail dot, and inactive rail name. The colour of annotation, one step softer than the line.

### Named Rules
**The One Marker Rule.** Gold appears only as a marker of position or state (rail dot, niche dot, radio dot, caret, focus, selection). It never fills a surface, never colours a heading, never becomes a button.

**The Plates Carry the Colour Rule.** Brand colour enters through the room plates and the mascot rasters; in the UI a brand colour touches only that brand's name. Site chrome stays ink and poche on limewash.

**The Ink-Safe Brand Name Rule.** When a brand hue is set as text on limewash it is darkened until it reads as ink would: FreshMate navy becomes #0f2f7a and Finger Fresh lime becomes #6f7d12. Blue and red are dark enough to be used as they are.

## Typography

**Display Font:** Barlow Condensed 700 (with system-ui, sans-serif)
**Display Italic:** Instrument Serif italic 400 (with Georgia, serif)
**Mark Font:** Phudu 700 (with Barlow Condensed) for the wordmark only
**Body Font:** Schibsted Grotesk 400/500/700 (with system-ui, sans-serif)
**Label/Mono Font:** Chivo Mono 400/500 (with ui-monospace, monospace)

All five families are self-hosted woff2 in latin and latin-ext subsets (Polish diacritics are mandatory) with `font-display: swap`.

**Character:** A poster-weight condensed sans shouting in uppercase, interrupted once per heading by a soft italic serif word; beneath it a plain, wide grotesk for reading and a tabular monospace for every annotation, dimension, and label. The pairing reads as a drawing sheet: bold title, plain notes, typed legend.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 6.4vw, 6rem)`, 0.92, -0.005em, uppercase, `text-wrap: balance`): sheet headings (h2). One word per heading is wrapped in an italic serif at 1.06em, lowercase, line-height 0.9. On phones the size becomes `clamp(2.2rem, 11vw, 3.4rem)`.
- **Display Small** (700, `clamp(2.2rem, 4.4vw, 4.2rem)`, 0.92): headings of the two-column partner / investor sheet.
- **Hero Headline**: at 640px and above the h1 is a raster brush lettering used as a luminance mask over #f8f7e8 (the live text stays in the DOM, visually hidden). Under 640px it becomes live Barlow Condensed at `clamp(3.6rem, 15vw, 5.4rem)`, line-height 0.9, with the same italic serif word.
- **Mark** (Phudu 700, uppercase, -0.01em, line-height 0.9): the wordmark only. 63 comp units in the hero header (26px on phones), 1.5rem in the title block. Not used for any other word.
- **Title** (700, `clamp(1.7rem, 2.6vw, 2.8rem)`, 0.95, uppercase): brand names in the Marki sheet, coloured per brand.
- **Title Small** (700, `clamp(1.1rem, 1.5vw, 1.6rem)`, 1, 0.01em, uppercase): moment claims under each niche; usage steps use the same voice at `clamp(1.4rem, 2.2vw, 2.3rem)`.
- **Closing** (Instrument Serif italic, `clamp(1.6rem, 3vw, 3rem)`): the single italic sign-off line at the end of a sheet, and the italic "note" row in the spec table at 1.1em.
- **Lead** (400, `clamp(1.05rem, 1.4vw, 1.45rem)`, 1.45, max-width 46rem; 34rem in two-column sheets): the paragraph under every sheet heading.
- **Body** (400, 16px, 1.4): default text. Table and meta rows use `clamp(.95rem, 1.1vw, 1.15rem)` at 1.35; points lists `clamp(.98rem, 1.15vw, 1.2rem)` at 1.45. Weight 500 for button labels and nav; 700 for `<strong>` lead-ins in point lists and the company name.
- **Label** (Chivo Mono 400, 0.68–0.82rem, 0.14–0.16em, uppercase, poche): sheet labels, table keys (dt), figure captions, form labels and legends, moment notes, footer keys, the wordmark tagline (0.2–0.24em). In the hero the rail names and claims are the same voice at 26 and 24 comp units. Chivo Mono 500 is used only for the active rail name.
- **Inline English** (`.en`): an English brand phrase inside Polish copy is set in the label voice at 0.82em, uppercase, 0.08em.

### Named Rules
**The One Italic Word Rule.** Every display heading carries exactly one word in Instrument Serif italic, lowercase, inline. Never two, never a whole line, never zero.

**The Typed Annotation Rule.** Anything that names, numbers, or keys something (sheet labels, dt keys, captions, form labels, footer keys) is set in Chivo Mono uppercase, letterspaced, in poche. Labels follow content or sit at a rule; they never sit above a heading as an eyebrow.

## Layout

Two spatial models share one page.

**The hero stage** is a 2304×1296 comp frame locked to viewport width (`aspect-ratio: 2304/1296`, children absolutely positioned). Every hero measure is expressed in `--u = 100vw / 2304`, so the drawing scales as one object from 1280 to 1600+ without reflow. Percent positions place the strip (top 10.03%, height 67.13%), the four rooms (left 0.26% / 29.95% / 50% / 73.44%; widths 29.69% / 20.05% / 23.44% / 26.56%), the brand rail (top 73.69%), claims (82.56%), subline (91.6%), CTA (left 72.27%, top 83.33%), and caption (right 1.9%). Type in the stage uses `max(calc(N * var(--u)), floor-px)` so labels never fall below 8–13px. The slab and slab-top are poche texture strips at 2% inset; the daylight band and the two slabs are pointer-transparent.

**The sheets** below the hero are fluid: max-width 2304px, side gutter `clamp(24px, 4vw, 84px)`, top padding `clamp(72px, 7vw, 150px)`, bottom `clamp(40px, 4vw, 80px)`. Each sheet head (heading + lead) is capped at 62rem with `clamp(40px, 4vw, 72px)` below it; the closing rule sits `clamp(48px, 5vw, 96px)` after the content with a 2.2rem tail for its label. Grids: moments 6 columns; brands 4 columns; product 1.25fr / 1fr; partner and investor 1fr / 1fr with `clamp(40px, 6vw, 120px)` between; contact 1fr / 1.3fr; title block five weighted columns (1.4 / 1.6 / 1.4 / 1.2 / 1.6) separated by 1px vertical rules.

**Breakpoints** (observed): 1100px and 640px in CSS, 901px in JS.
- ≤1100px: moments 3 columns; brands 2; product, b2b, contact single column; title block 2 columns with bottom rules; claims flow inline.
- ≤640px: `--u` re-bases to 100vw / 640 and the stage becomes a vertical flow. The section strip becomes a horizontal scroll-snap carousel (rooms at 86vw / 58vw / 68vw / 77vw, 7vw side margins, `scroll-snap-stop: always`, scrollbar hidden); the hero headline switches from mask to live text; the rail spreads its names edge to edge and the marker follows the carousel; text nav links hide, the pill stays; sheets pad 56px / 20px; brands single column with 4/3 rooms; moments 2 columns.
- JS: the pinned scroll scrub (hero pinned, `+=140%`, scrub 0.6) runs only at ≥901px; below that the strip's own scroll sets the active brand.

**Rhythm:** row gaps 0.6–0.7rem inside tables and step lists, 0.45rem inside meta lists, 1.4rem between form fields, 1rem between points. Sections never use background bands; a 3px rule is the only section boundary.

## Elevation & Depth

Flat by default: the world is ink on paper and depth is drawn, not lit. Rasters sit on the paper through `mix-blend-mode: darken` (moments, product detail, claim icons) so their plate backgrounds vanish into the limewash. The section strip's depth comes from the poche-hatched slabs above and below the rooms and from the rooms' own rendered interiors. The daylight band adds tone (soft-light at 22% gold), not shadow.

### Shadow Vocabulary
- **Pill lift** (`box-shadow: 0 12px 26px rgba(11,11,11,.22)` with `translateY(-2px)`; in the hero `0 14u 30u` with `-3u`): the only shadow, and only on hover/focus of solid pill buttons.
- **Focus underline** (`box-shadow: 0 2px 0 var(--gold)` on the input's bottom rule): a thickened gold rule, not a glow.

### Named Rules
**The Drawn Depth Rule.** No resting element carries a shadow. Depth is conveyed by rules, hatch texture, and blend-composited rasters; the single soft shadow is a hover response on pill buttons and disappears at rest.

## Shapes

Square by default. Rules are the form language: 3px ink rules open a group (moments shelf, spec table, points list, brand body, address, title block) and close a sheet; 1px ink rules divide rows and title-block cells; 2px rules underline inputs, text links, and hovered nav links, and draw the short leader dash before each point (1.2rem × 2px). Figures and plates are unrounded and clipped by `overflow: hidden`. Two shapes only break the square: the pill (999px) for every button and the circle (50%) for markers, radio controls, and the step number badge. Focus rings take a 2px radius so the 3px gold outline reads cleanly. Leader geometry recurs: a 2px vertical stem from a shelf line ending in a 12px gold dot marks each moment niche, and the brand rail is a 3px line with a 30-unit gold dot under the active name.

## Components

### Buttons
Confident and plain: black pills on paper, no gradients, no borders except the outline variant.
- **Shape:** full pill (999px); text buttons are square with a 2px bottom rule.
- **Solid** (`.btn--solid`, `.cta__deck`): ink fill, limewash text, weight 500, height 3.4rem, padding 0 1.9rem, 1.05rem (hero: 92u tall, 320u wide, 37u type).
- **Hover / Focus:** rises 2px (3u in the hero) and gains the pill lift shadow; transition `transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s`.
- **Outline** (`.nav__pill`): transparent, 3u (2px on phones) ink border, ink text, height 78u / 38px; hover and focus invert to ink fill with limewash text (`background .25s, color .25s`).
- **Text** (`.btn--text`, `.cta__kontakt`): ink label with a 2px ink bottom rule and an inline 0.95em stroke arrow (stroke 2.4, round caps); on hover the arrow slides 0.25em right.
- **Reduced motion:** all transitions collapse to 0.01ms.

### Inputs / Fields
- **Style:** a mono label (0.72rem, 0.16em, uppercase, poche) above a transparent field with no border but a 2px ink bottom rule, 0.6rem vertical padding, inherited body type at 1.05rem, gold caret. Textareas resize vertically, min 7rem.
- **Focus:** no outline; the bottom rule turns gold and thickens by a 2px gold box-shadow.
- **Radios:** 1.1rem circle with a 2px ink border; the checked state scales in a 0.5rem gold dot (`transform .2s`).
- **Status / Error:** mono 0.8rem status line in poche; `.is-error` switches it to Clean&Go red.

### Navigation
- **Hero header:** Phudu wordmark with its mono tagline at top-left; at right two text links and one outline pill. Text links draw a 2px ink underline from the left on hover (`scaleX 0 → 1`, `.35s cubic-bezier(.2,.8,.2,1)`). On phones the text links hide and the pill remains.
- **Brand rail:** an ordered list of the four brand names in mono uppercase (26u, 0.14em) separated by poche middle dots over a 3px ink line, with a 30u gold marker under the active name. Inactive names are poche; the active name is ink at weight 500. Hovering a name scales its room to 1.015.
- **Title-block nav:** plain body links with a transparent 2px bottom border that turns ink on hover.
- **Skip link:** ink block with limewash text, revealed at 8px / 8px on focus.

### Sheet Rule (signature)
Every section closes with a 3px ink rule and a mono label at its right end (0.78rem, 0.16em, uppercase, poche, e.g. "Arkusz 03 · Produkt"). Rules draw in from the left on entry (`scaleX 0 → 1`, 1s, power3.inOut, once).

### Moment Niche (signature)
Six figures on one 3px shelf line; each niche hangs from a 2px stem ending in a 12px gold dot, then a square figure (`aspect-ratio: 1`, darken-blended raster), a condensed uppercase claim, and a mono note beneath. 3 columns at ≤1100px, 2 at ≤640px.

### Brand Room Card
No card surface: a 3/4 room plate (4/3 on phones), then a 3px ink rule, the brand name in its own colour, a one-line body, and a key/value meta list (mono keys in a 7.5rem column, 6.5rem on phones). Hover scales the plate to 1.03 over 0.8s; disabled on touch.

### Spec Table / Meta List
Definition lists drawn as tables: a 3px ink rule on top, 1px ink rules between rows, mono uppercase keys in a fixed 9rem (spec) or 7.5rem (meta) column, body values in the rest. A note row switches its value to Instrument Serif italic.

### Step Badge
A 2em ink circle with a mono 0.9rem limewash number, baseline-shifted -0.15em, preceding a condensed uppercase step.

### Title Block
The footer as a drawing title block: a 3px rule on top, five cells with 1px vertical dividers, each cell a mono key (0.68rem, 0.16em) over body text; the first cell carries the Phudu wordmark and its tagline.

## Do's and Don'ts

### Do:
- **Do** measure anything inside the hero stage in `--u` with a px floor via `max()`, and re-base `--u` to 640 below the phone breakpoint.
- **Do** open and close every content group with a 3px ink rule and divide its rows with 1px rules; the rule is the only section boundary.
- **Do** give every display heading exactly one lowercase Instrument Serif italic word.
- **Do** set every key, caption, sheet label, and form label in Chivo Mono uppercase, 0.14–0.16em, in poche.
- **Do** composite rasters onto the paper with `mix-blend-mode: darken` so no plate edges show.
- **Do** keep gold to markers of position and state (rail dot, niche dot, radio dot, caret, focus, selection).
- **Do** self-host every face in latin and latin-ext subsets; Polish diacritics must render in the display face.
- **Do** honour `prefers-reduced-motion` by collapsing all transitions and skipping the GSAP timeline.

### Don't:
- **Don't** introduce cards, panels, tinted bands, or dark grounds; content sits on continuous limewash paper.
- **Don't** use a brand colour as UI chrome; it belongs to that brand's room and name only, darkened to an ink-safe tone when set as text.
- **Don't** put a shadow on a resting element; the only shadow is the pill lift on hover.
- **Don't** add a day/time axis, a timeline, or a headline-left / pack-right hero.
- **Don't** set Phudu on anything but the wordmark.
- **Don't** place a mono label above a heading as an eyebrow; labels annotate, they do not introduce.
- **Don't** round corners beyond the pill (buttons) and circle (markers, radios, badges).
