// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
// Writes a two-line robot confession to /output/entry.txt.
// Deterministic and self-contained: no network, no files outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "I'm sorry I shredded the birthday card you meant to keep, and kept the envelope you meant to throw away.";
const LINE_2 =
  "I've learned to check the front of every page before it goes into the shredder, and to keep anything with handwriting until you say otherwise.";

const text = `${LINE_1}\n${LINE_2}\n`;

// Gate self-check: exactly two non-blank lines, 1-400 characters total.
const body = text.replace(/\n$/, "");
const lines = body.split("\n");
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error(`entry must be exactly two non-blank lines, got ${lines.length}`);
}
if (body.length < 1 || body.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${body.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote /output/entry.txt (${body.length} chars, 2 lines)`);
