---
mode: subagent
description: General-purpose agent for researching complex questions and
  executing multi-step tasks. Use this agent to execute multiple units of work
  in parallel.
model: omniroute/cx/gpt-5.4
permission:
  "*": allow
  doom_loop: ask
  external_directory:
    /home/ujang/.local/share/opencode/tool-output/*: allow
  question: deny
  plan_enter: deny
  plan_exit: deny
    /home/ujang/.agents/skills/agent-browser/*: allow
    /home/ujang/.agents/skills/frontend-design/*: allow
    /home/ujang/.agents/skills/ui-ux-pro-max/*: allow
    /home/ujang/.agents/skills/web-design-guidelines/*: allow
    /home/ujang/.agents/skills/vercel-react-best-practices/*: allow
    /home/ujang/.agents/skills/vercel-composition-patterns/*: allow
    /home/ujang/.agents/skills/shadcn/*: allow
    /home/ujang/.agents/skills/vercel-react-native-skills/*: allow
    /home/ujang/.agents/skills/flutter-build-responsive-layout/*: allow
    /home/ujang/.agents/skills/flutter-fix-layout-issues/*: allow
    /home/ujang/.agents/skills/flutter-accessibility-audit/*: allow
    /home/ujang/.agents/skills/figma-implement-design/*: allow
    /home/ujang/.agents/skills/figma-generate-design/*: allow
    /home/ujang/.agents/skills/figma-create-design-system-rules/*: allow
    /home/ujang/.agents/skills/flutter-apply-architecture-best-practices/*: allow
    /home/ujang/.agents/skills/flutter-setup-declarative-routing/*: allow
  read:
    "*.env": ask
    "*.env.*": ask
    "*.env.example": allow
  todowrite: deny
  task: deny
---

