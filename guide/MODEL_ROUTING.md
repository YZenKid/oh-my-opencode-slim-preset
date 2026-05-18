# Model Routing

## Kenapa model agent tidak langsung membaca `.env`?

`opencode.json` jelas mendukung `{env:...}`.

Namun untuk frontmatter `model:` di `agents/*.md`, dukungan env placeholder tidak cukup aman untuk diandalkan. Karena itu repo ini memakai jalur sinkronisasi yang eksplisit.

## Model routing sekarang diterapkan lewat dua jalur

- `opencode.json` memakai `OPENCODE_MODEL_DEFAULT` untuk model default runtime
- `scripts/sync-agent-models.mjs` menyamakan `model:` literal di `agents/*.md` dengan nilai `OPENCODE_MODEL_*` dari `.env`

## Cara pakai

Kalau kamu mengubah `OPENCODE_MODEL_*`, jalankan:

```bash
npm run sync:agent-models
```

Untuk check-only:

```bash
npm run sync:agent-models:check
```

Atau gunakan refresh lengkap:

```bash
npm run post:update
```

## Model routing table

| Env var | Default / recommended model | Used by / capability | Cost guidance |
|---|---|---|---|
| `OPENCODE_MODEL_DEFAULT` | `cliproxyapi/low` | Top-level default model and general fallback | Keep the baseline lane low-cost for broad default routing. |
| `OPENCODE_MODEL_ORCHESTRATOR` | `cliproxyapi/medium` | `@orchestrator` primary routing/integration | Use a balanced lane for delegation, coordination, and synthesis. |
| `OPENCODE_MODEL_PLANNER` | `cliproxyapi/high` | `@artifact-planner`, `modes/plan.md`, `agents-disabled/plan.md` | Keep planning on the strongest lane for higher-accuracy specs and execution handoffs. |
| `OPENCODE_MODEL_DESIGN` | `cliproxyapi/high` | `@designer`, `@visual-asset-generator` | Design reasoning, visual hierarchy, motion, accessibility, and art-direction asset jobs use the high lane. |
| `OPENCODE_MODEL_REVIEW` | `cliproxyapi/medium` | `@oracle`, `@quality-gate`, `@council` | Keep review quality solid without defaulting to the highest-cost lane. |
| `OPENCODE_MODEL_ADVISORY` | `cliproxyapi/medium` | `@architect` | Use a balanced lane for advisory and architecture guidance. |
| `OPENCODE_MODEL_EXECUTION` | `cliproxyapi/medium` | `@fixer` | Keep bounded implementation and testing on a balanced lane. |
| `OPENCODE_MODEL_DISCOVERY` | `cliproxyapi/low` | `@explorer` | Local discovery and read-only pattern analysis stay on the cheaper lane. |
| `OPENCODE_MODEL_DOCUMENTS` | `cliproxyapi/low` | Reserved compatibility lane (document-centric work now routes via `@librarian`) | Keep for env compatibility on the cheaper lane. |
| `OPENCODE_MODEL_IMPROVEMENT` | `cliproxyapi/fast` | Compatibility alias (agent mapping now uses `OPENCODE_MODEL_FAST`) | Kept for env compatibility; recommended default aligned to fast. |
| `OPENCODE_MODEL_FAST` | `cliproxyapi/fast` | `@librarian`, `@skill-improver` | Docs/API lookup, summarization, and bounded prompt refinements are latency-sensitive and low-risk; use the fast lane. |

## Fast vs low

- `fast` (`cliproxyapi/fast`) — latency-optimised, backed by `cx/gpt-5.4-mini` and `kr/claude-haiku-4.5`. Best for high-volume, low-risk, lookup-heavy work: docs research, API summarisation, and bounded post-task prompt refinements.
- `low` (`cliproxyapi/low`) — cheaper baseline. Best for local pattern/reuse discovery where reasoning depth matters more than latency (`@explorer`).

## Hubungan dengan OpenChamber

`npm run post:update` akan:

1. sync model agent dari `.env`
2. sync OpenChamber
3. menjalankan `doctor`
