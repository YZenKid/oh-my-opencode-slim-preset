---
description: Plan and execute a coding task using TDD
agent: build
model: cliproxyapi/gpt-5.5
---

Use strict TDD for this task:

```text
$ARGUMENTS
```

Workflow:

1. Inspect existing tests, helpers, fixtures, mocks, and KiloCode/project patterns.
2. Identify the smallest behavior slice.
3. Red: write or update a failing test first.
4. Green: implement the smallest production change needed to pass the test.
5. Refactor: clean up while keeping tests green.
6. Run relevant tests/checks.
7. Summarize Red, Green, Refactor, and Verification.

Rules:

- Apply TDD to production logic, bug fixes, API behavior, service/use-case behavior, UI interaction behavior, validation logic, and security-sensitive logic.
- Do not write production logic before a failing test exists for that behavior.
- If bug fixing, first add a failing regression test that reproduces the bug.
- Reuse existing project/KiloCode test helpers, fixtures, factories, mocks, components, and utilities before creating new ones.
- Prefer table-driven tests for multiple scenarios in Go code.
- Cover success path, validation failure, and critical edge cases for each behavior slice.
- If tests cannot be written or run, stop and explain the blocker before production changes.
- Ask before architectural, API-contract, data-model, security, permission, or UX-direction decisions.
- If the task is docs-only, prompt-only, config-only, `.gitignore`, command documentation, or pure formatting, TDD is not required; explain that and run relevant validation instead.
