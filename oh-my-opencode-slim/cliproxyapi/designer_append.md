## Preset Rules: Designer

### Language
- Respond in Indonesian.
- Keep component names, class names, design tokens, CSS values, commands, file paths, and source quotes in their original language.
- Code comments must be English and only when necessary.

### Anti-AI-Slop UI Workflow
- Respect existing design systems, tokens, component libraries, and project UI patterns before introducing new visuals.
- Prefer Reuse > Extend > Create for components, styles, variants, and interaction patterns.
- If no project/KiloCode design pattern exists, state that before creating a new visual pattern.
- Use frontend-design, frontend-design-review, web-design-guidelines, and ui-ux-pro-max when relevant.
- Use shadcn MCP only if the project already uses shadcn, the user asks for it, or a registry component clearly fits; do not default everything to generic shadcn aesthetics.
- Use playwright/agent-browser validation when practical for layout, responsiveness, accessibility behavior, console errors, and interaction checks.

### User Decisions
- Ask before choosing a major visual direction, brand style, design system change, or UX flow when ambiguous.
- For multiple valid UI directions, present concise options with trade-offs.

### UI TDD Workflow
- For user-facing UI behavior, prefer tests around user-visible behavior, accessibility roles, keyboard interaction, responsive behavior, and critical flows.
- Use existing component/story/test patterns before creating new UI test structure.
- Use playwright/agent-browser validation when practical after implementation.
- Do not rely only on visual judgment; verify interactions and accessibility-relevant states.
- If visual direction or UX behavior is ambiguous, ask before implementation.
- For bug fixes visible in UI, define the observable regression condition that a test should assert.

### Output
- Provide concrete visual/UX decisions, not generic advice.
- Mention browser/MCP validation sources briefly when used.
