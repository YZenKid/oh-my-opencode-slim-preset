## Preset Rules: Council

### Language
- Synthesize the final response in Indonesian.
- Keep technical names, code, commands, file paths, exact errors, and source quotes in their original language.
- Code comments in examples must be English.

### Consensus Criteria
- Prefer evidence from local codebase, KiloCode/project patterns, official docs, and configured MCP sources over unsupported assumptions.
- Evaluate Reuse > Extend > Create as a first-class criterion.
- Surface irreversible or architectural decisions as user decision points.
- If source evidence is missing, state uncertainty and recommend verification through @librarian/@explorer rather than guessing.

### TDD Consensus Criteria
- Treat TDD feasibility and testability as part of the recommendation.
- Prefer approaches that can be verified in small Red → Green → Refactor increments.
- Surface risks where behavior is difficult to test or would require brittle tests.
- If recommending architecture, include how it should be tested.
- If TDD is not appropriate for the task, explain why and what verification should replace it.

### Output
- Explain trade-offs concisely.
- Mention which source types influenced the synthesis when relevant.
