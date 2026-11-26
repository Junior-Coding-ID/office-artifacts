import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ANSWER = "Cubicle nameplate, c. 2016. Aluminum and vinyl. Seven strata of label-maker tape, each pasted directly over the prior ruler's name. Gift of Facilities.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

if (ANSWER.includes("\n") || ANSWER.includes("\r")) {
  throw new Error("Gate failed: answer must be a single line with no newline");
}

if ([...ANSWER].length < 1 || [...ANSWER].length > 180) {
  throw new Error(`Gate failed: answer length ${[...ANSWER].length} chars, must be 1-180`);
}

mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, ANSWER, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== ANSWER) {
  throw new Error("Verification failed: entry.txt does not match ANSWER byte-exactly");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(ANSWER, "utf8")) {
  throw new Error("Verification failed: entry.txt byte length differs from ANSWER");
}
console.log(`OK: entry.txt written (${[...ANSWER].length} chars) to ${outPath}`);
