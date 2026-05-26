# OMP Adoption — OpenCode Aligned Roadmap

Task reference: `20260526-1129-omp-adoption-opencode-aligned`

## Goal
Adopt high-value `omp` capabilities into `opencode-capybara` while keeping OpenCode runtime primary and local capybara lanes canonical.

## Canonical decision
- Canonical lanes remain: `@orchestrator`, `@explorer`, `@fixer`, `@designer`, `@oracle`, `@quality-gate`.
- `@artifact-planner` remains only artifact-writing planner for `.opencode/plans/*.md`.
- Built-ins `build`, `plan`, `explore`, `general` stay non-default; only optional comparator/experiment.

## Scope (docs/contracts batch)
- Align docs and contracts for routing, architecture, skills, quality/evals, tool policy.
- Add typed output schema baseline.
- Add validation ladder baseline.
- Add LSP-first baseline for navigation/rename/refactor/diagnostic-driven edits.

## Out of scope now
- Deterministic helper implementation.
- Persistent kernel/debugger adapters.
- Broad runtime/plugin redesign.

## Compatibility matrix (built-in vs canonical)
| OpenCode built-in | Upstream role | Canonical mapping | Posture |
|---|---|---|---|
| `build` | broad implementation | `@orchestrator`→`@fixer`/`@designer` | disabled by default; comparator only |
| `plan` | upstream planning mode | `@artifact-planner` for plan artifacts | disabled by default; not SoT |
| `general` | broad generalist | `@orchestrator` + specialists | disabled by default; high-risk access |
| `explore` | read-only exploration | `@explorer` | disabled by default; optional comparator |
| `scout` | research helper | `@librarian` (+Context7/GitHub) | optional support lane |

## OMP capability adoption matrix
| Capability | Path | Owner lane | Status |
|---|---|---|---|
| Typed subagent output | tighten agent/skill contracts | orchestrator + all active lanes | extend |
| LSP-first edits | policy-first with fallback | orchestrator + fixer | extend |
| Validation ladder | enforce sequence in docs/contracts | orchestrator + quality-gate | extend |
| Deterministic edit helper | proposal-only MVP, tests first | fixer + oracle review | defer (next batch) |
| Persistent kernel/debugger | opt-in experimental only | architect/oracle | defer |

## Typed output schema baseline
All active lanes should return structured output when task not trivial:
- `summary`
- `findings`
- `changed_files`
- `risks`
- `next_actions`
- `evidence`

## Validation ladder baseline
1. Plan/handoff + acceptance check
2. Discovery/research evidence check
3. Implementation/doc changes
4. Diff self-review
5. Targeted validation commands
6. Final conformance via `@quality-gate` for non-trivial/risky work

## LSP-first baseline
- Prefer LSP for symbol rename/refactor/navigation/diagnostics when available.
- Fallback to `glob`/`grep`/`read`/minimal edit path when LSP unavailable.
- Record fallback limitation in evidence when quality/confidence affected.

## Execution phases (high level)
- **Phase 0:** ADR + roadmap + baseline policy alignment.
- **Phase 1:** Agent/skill contract tightening (typed output, ladder, LSP-first).
- **Phase 2:** Eval/check expansion and benchmark substrate.
- **Phase 3:** Deterministic helper MVP (proposal/dry-run only).
- **Phase 4:** Optional high-risk adapters after evidence.

## Validation expectations for this batch
Minimum commands:
- `npm run check:docs`
- `npm run check:agents`
- `npm run check:skills`
- `npm run test:prompt-gates`
