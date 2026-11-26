// Office Artifacts — The One-Line Placard
// Entry: one-line museum placard (1-180 characters) for a wall thermostat.
const fs = require("node:fs");
const path = require("node:path");

const ANSWER =
  "Wall thermostat, c. 2016. Plastic. Worn smooth around 72°F by daily petitions; excavation revealed it was wired to nothing. Gift of Building Management.";

// Validate the 1-180 CHARACTER gate (not bytes): ° counts as 1 character.
const len = [...ANSWER].length;
if (len < 1 || len > 180) {
  throw new Error("Answer length " + len + " chars is outside the 1-180 gate");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ANSWER, "utf8");
const byteLen = Buffer.byteLength(ANSWER, "utf8");
console.log(
  "Wrote entry.txt (" + len + " chars, " + byteLen + " bytes UTF-8)"
);

// Placard notes (why this artifact):
// - "c. 2016" dates the thermostat like a museum object.
// - "Worn smooth around 72°F" is the tell: years of hopeful nudging.
// - "wired to nothing" is the punchline — a placebo control, the office's
//   most petitioned and least powerful artifact.
// - "Gift of Building Management" closes it in deadpan accession style.
