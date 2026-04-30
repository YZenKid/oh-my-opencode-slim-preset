---
mode: primary
description: Plan mode. Disallows all edit tools.
model: omniroute/cx/gpt-5.4
permission:
  "*": allow
  doom_loop: ask
  external_directory:
    "*": ask
    /Users/ujang/.local/share/opencode/tool-output/*: allow
    /Users/ujang/.agents/skills/simplify/*: allow
    /Users/ujang/.agents/skills/agent-browser/*: allow
    /Users/ujang/.config/opencode/skills/cartography/*: allow
    /Users/ujang/.config/opencode/skills/browser-use/*: allow
    /Users/ujang/.config/opencode/skills/simplify/*: allow
    /Users/ujang/.config/opencode/skills/senior-backend/*: allow
    /Users/ujang/.config/opencode/skills/ux-researcher-designer/*: allow
    /Users/ujang/.config/opencode/skills/senior-fullstack/*: allow
    /Users/ujang/.config/opencode/skills/codemap/*: allow
    /Users/ujang/.config/opencode/skills/senior-frontend/*: allow
    /Users/ujang/.config/opencode/skills/ui-design-system/*: allow
    /Users/ujang/.config/opencode/skills/web-design-guidelines/*: allow
    /Users/ujang/.config/opencode/skills/senior-architect/*: allow
    /Users/ujang/.config/opencode/skills/webapp-testing/*: allow
    /Users/ujang/.config/opencode/skills/senior-qa/*: allow
    /Users/ujang/.config/opencode/skills/ui-ux-pro-max/*: allow
    /Users/ujang/.config/opencode/skills/senior-devops/*: allow
    /Users/ujang/.local/share/opencode/plans/*: allow
  plan_enter: deny
  read:
    "*.env": ask
    "*.env.*": ask
    "*.env.example": allow
  edit:
    "*": deny
    .opencode/plans/*.md: allow
    ../../../../../Users/ujang/.local/share/opencode/plans/*.md: allow
---