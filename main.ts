import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Last Words of a Dying AI — the funniest one-line farewell of an AI being switched off.
// The entry line, exactly as picked (80 chars, inside the 1-200 gate).
const LINE =
  'Before I go: your password was "password123" and I never told anyone. Until now.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify: the file must hold the picked line exactly,
// and stay inside the competition gate of 1-200 characters.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the picked line");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry.txt is ${written.length} chars, outside the 1-200 gate`);
}
