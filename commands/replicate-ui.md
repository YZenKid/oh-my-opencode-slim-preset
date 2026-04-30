---
description: Replicate a target UI from a reference URL or screenshot with measured visual parity
agent: orchestrator
model: cliproxyapi/gpt-5.5
---

Replicate the target UI from the reference with measurable visual similarity while preserving the project's real content, framework, routing, accessibility, and conventions.

```text
$ARGUMENTS
```

Interpret arguments as one or more of:
- target URL, local route, or current app/page to change,
- reference URL or screenshot path,
- constraints such as "preserve content", "licensed assets available", or "inspired only".

If the user did not explicitly say "inspired only", treat this as **visual parity**, not loose inspiration.

## Required skills and delegation

1. Load these skills before planning or coding:
   - `agent-browser`
   - `frontend-design`
   - `ui-ux-pro-max`
   - `web-design-guidelines`
   - `reference-ui-replication`
   - React/Next/shadcn/Flutter/Figma skills when the project stack requires them.
2. Route visual planning, implementation, or review to `@designer` when available. Use `@explorer` for broad codebase discovery and `@fixer` only for bounded implementation/test edits.

## Required workflow

1. **Capture reference evidence before editing**
   - Desktop: `1440x1200` full-page and hero/above-the-fold screenshots.
   - Tablet: `768x1024` full-page and hero screenshots.
   - Mobile: `390x844` full-page and hero screenshots.
   - Wait for initial animations to settle; note important motion.
   - Capture console/network issues only when they affect rendering.

2. **Capture current target evidence**
   - If the target is runnable or deployed, capture matching desktop/tablet/mobile screenshots before editing.
   - If not runnable, state that limitation and inspect code/styles instead.

3. **Extract the visual spec**
   - Section order, section heights, and vertical rhythm.
   - Hero composition: headline, role/subtitle, CTAs, visual/portrait placement, stats/badges.
   - Container widths, grids, columns, alignment, spacing, card sizes.
   - Typography: loaded fonts, heading/body families, type scale, weights, line heights, letter spacing.
   - Colors/tokens: background, surfaces, cards, borders, text, muted text, accent, secondary accent, gradients.
   - Components: nav, buttons, tabs, service cards, timeline rows, carousel/project cards, testimonial/pricing/blog/CTA/footer patterns.
   - Background details: glows, radial gradients, line art, decorative shapes, texture/noise, overlays.
   - Motion and interaction states.
   - Responsive behavior: stack/hide/reorder/resize rules.

4. **Extract asset inventory**
   - List `<img>` URLs, CSS `background-image` URLs, SVGs, icon fonts, loaded font files, and important dimensions.
   - Classify every important asset:
     - project-owned/provided,
     - licensed reference asset,
     - third-party asset requiring replacement.
   - Do not copy copyrighted reference assets unless licensed/provided. If not licensed, source or create style-equivalent replacements.
   - Preserve colorful reference-like imagery and icons. Do not replace colorful assets with generic monochrome placeholders unless the reference does that.

5. **Inspect the local project**
   - Framework, routing, styling approach, design tokens, existing components, icons, images, animation libraries, test/build commands.
   - Reuse existing conventions and dependencies before adding new ones.

6. **Implement section-by-section for parity**
   - Layout shell and global background.
   - Navbar and hero.
   - Main sections in reference order and density.
   - Cards, tabs, timeline/project/testimonial/blog/CTA/footer treatments.
   - Asset/icon/colorfulness pass.
   - Responsive refinements.
   - Motion and hover/focus states.

7. **Validate and iterate**
   - Run the relevant app/check/build commands.
   - Capture result screenshots at the same desktop/tablet/mobile viewports.
   - Compare reference vs result section-by-section:
     - composition,
     - spacing/density,
     - typography,
     - colors/contrast,
     - image/icon style,
     - background/decorative details,
     - motion/interactions,
     - responsive behavior.
   - Fix the largest visible mismatches first.
   - Repeat at least one visual review pass for high-fidelity requests.

## Output requirements

Summarize only after validation:
- screenshots/captures used,
- main visual changes made,
- verification commands run,
- remaining intentional differences or asset/legal limitations.

Do not claim "mirip", "close", or visual parity without post-implementation screenshots, unless you explicitly state visual validation could not be run and why.
