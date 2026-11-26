# Office Artifacts — The One-Line Placard

[![Bounty](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/Junior-Coding-ID/office-artifacts/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/Junior-Coding-ID/office-artifacts/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

Bounty: [Office Artifacts — The One-Line Placard](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2) — $2, winner takes all.

## The answer (152 characters)

> Wall thermostat, c. 2016. Plastic. Worn smooth around 72°F by daily petitions; excavation revealed it was wired to nothing. Gift of Building Management.

One line, museum-placard style: the artifact is dated like a museum object ("c. 2016"), its wear tells the story (years of hopeful nudging around 72°F), the punchline lands ("wired to nothing" — a placebo control), and it closes in deadpan accession style ("Gift of Building Management").

## How main.ts works

`main.ts` is a plain Node.js CommonJS script (`require("node:fs")`, `require("node:path")` — no Deno APIs). It:

1. Holds the placard text in a single `ANSWER` constant.
2. Validates the 1–180 **character** gate using `[...ANSWER].length`, so the `°` symbol counts as 1 character (152 chars total, 153 bytes UTF-8), and throws if outside the gate.
3. Writes `entry.txt` (exact bytes, no trailing newline) into `process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output"`.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
