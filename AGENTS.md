# Global OpenCode instructions

Do not prefix shell commands with `rtk` in OpenCode/OpenChamber sessions.
Run package manager and test/build commands directly, for example:
- `bun run build`, not `rtk bun run build`
- `npm run test:coverage`, not `rtk npm run test:coverage`
- `npx vitest ...`, not `rtk proxy npx vitest ...`

RTK is configured separately for Claude Code and should not be used by OpenCode/OpenChamber unless the user explicitly asks for it.

## Anti-AI-slop UI policy for OpenCode/oh-my-opencode

For any user-facing frontend, web app, mobile app, React/Next.js, React Native/Expo, Flutter, shadcn/ui, Tailwind, dashboard, landing page, form, navigation, or Figma-to-code work:

1. Before planning or coding, explicitly use the relevant installed skills from `~/.agents/skills/`:
   - Always: `frontend-design`, `ui-ux-pro-max`, `web-design-guidelines`
   - React/Next web: `vercel-react-best-practices`, `vercel-composition-patterns`, `shadcn` when shadcn/ui is present
   - React Native/Expo: `vercel-react-native-skills`
   - Flutter: `flutter-build-responsive-layout`, `flutter-fix-layout-issues`, `flutter-accessibility-audit`, `flutter-apply-architecture-best-practices` as applicable
   - Figma: `figma-implement-design`, `figma-generate-design`, `figma-create-design-system-rules` as applicable
2. Do not produce generic AI-slop UI: no default purple gradients, no bland centered cards, no random emojis as icons, no raw placeholder visuals, no unintentional Inter/system-font-only look unless the existing design system requires it.
3. Pick a clear visual direction, then implement spacing, typography, color, hierarchy, motion, responsive behavior, and accessibility deliberately.
4. Prefer existing project components and design tokens; if missing, create a small coherent design system/tokens before building screens.
5. Validate UI work with `web-design-guidelines` and, when runnable, inspect the actual rendered UI with browser/visual checks before calling it done.

## Reference UI replication policy

For any request that includes a reference URL, screenshot, template, landing page, portfolio, dashboard, or phrase like "mirip", "clone", "match", "replicate", "revamp like", or "jadikan seperti ini":

1. Treat the request as **visual parity**, not loose inspiration, unless the user explicitly says "inspired by only".
2. Before planning or coding, explicitly use `reference-ui-replication` in addition to the required UI skills above. For browser work, prefer `agent-browser` or the configured Playwright MCP.
3. Capture evidence before editing:
   - reference full-page and hero screenshots at desktop `1440x1200`, tablet `768x1024`, and mobile `390x844`,
   - current target screenshots at the same viewports when the target is runnable or deployed,
   - console/network issues only when they affect rendering.
4. Extract a visual spec from the reference before implementation:
   - section order and vertical rhythm,
   - hero composition and CTA placement,
   - container/grid widths, spacing, card sizes, and section heights,
   - fonts, type scale, weights, line heights, and letter spacing,
   - colors/tokens for background, surfaces, borders, text, muted text, accents, gradients,
   - buttons, cards, tabs, timeline rows, carousel/testimonial/pricing/blog/CTA/footer patterns,
   - background details, decorative shapes, icon style, image treatment, motion, and responsive behavior.
5. Extract an asset inventory from the reference:
   - `<img>` URLs, CSS `background-image` URLs, SVG/icon-font usage, loaded fonts, image dimensions, and important thumbnails/portraits/illustrations.
   - Classify each asset as project-owned, licensed/provided, or third-party requiring a legal replacement.
   - Do not copy copyrighted assets directly unless they are already available, licensed, or explicitly provided by the user. If not licensed, source or create style-equivalent colorful replacements and state the limitation.
6. Implement section-by-section for parity, preserving the user's real content unless they ask to clone text. Match the reference structure, density, visual hierarchy, image/icon colorfulness, and interaction patterns. Avoid replacing colorful reference imagery with generic monochrome placeholders.
7. After implementation, run the app/checks when possible, capture result screenshots at the same viewports, compare against the reference section-by-section, and fix the largest visible mismatches first.
8. Do not claim the result is "mirip", "close", or visually matched without post-implementation screenshots or an explicit note that visual validation could not be run.
