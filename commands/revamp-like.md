---
description: Revamp the current UI to visually match a reference URL or screenshot
agent: orchestrator
model: cliproxyapi/gpt-5.5
---

Revamp the current UI to closely match this reference while preserving the project's real content, framework, routing, accessibility, and local conventions:

```text
$ARGUMENTS
```

Use this workflow strictly:

1. Load the `reference-ui-replication` skill.
2. If the task is user-facing UI, delegate visual implementation/review to `@designer`.
3. Use `agent-browser` or Playwright before editing code:
   - capture reference full-page and hero screenshots at desktop `1440x1200`, tablet `768x1024`, and mobile `390x844`,
   - capture the current implementation at matching viewports,
   - note section order, section heights, vertical rhythm, visual tokens, background treatments, icon style, animation, and responsive behavior.
4. Inspect existing project components, styles, assets, icons, animation libraries, and commands. Reuse before creating.
5. Extract an asset inventory before implementation:
   - list `<img>` URLs, CSS `background-image` URLs, SVG/icon-font usage, loaded fonts, and important dimensions,
   - classify assets as project-owned/provided, licensed reference assets, or third-party assets requiring replacement,
   - use colorful legal/style-equivalent replacements when direct reference assets are not licensed.
6. Implement section-by-section for visual parity:
   - layout shell/background,
   - navbar and hero,
   - content sections in reference rhythm,
   - cards, icons, decorative layers,
   - responsive behavior,
   - motion and hover states.
7. After implementation, run the app/checks and capture result screenshots at the same viewports.
8. Compare against the reference section-by-section and fix the largest mismatches first, especially composition, density/spacing, typography, color, asset/icon style, and responsive behavior.
9. Summarize:
   - reference captures used,
   - visual changes made,
   - remaining intentional differences or asset limitations,
   - verification performed.

Rules:

- Do not implement from memory.
- Do not claim close visual parity without post-implementation screenshots.
- Preserve real content unless the user explicitly asks to clone reference text.
- Do not copy copyrighted assets directly unless they are already available, licensed, or explicitly provided.
- Do not replace colorful reference imagery/icons with generic monochrome placeholders unless the reference does that.
- Ask only before decisions that materially affect branding, legality, architecture, content, or UX direction.
