import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Excuse for Skipping a Meeting — one fixed line.
// The joke turns office jargon on itself: every meeting claims a
// "hard stop", so this one already hit its own — at the moment
// someone asked the question that kills every pointless meeting.
// Before writing, the program guards the line: it must be a single
// line of 1–200 characters and not only whitespace, so a bad line
// can never slip into entry.txt — it fails loudly instead.
const LINE =
  "This meeting's hard stop is 'why are we here?' — it hit it before I even joined.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  LINE.trim().length === 0
) {
  console.error("entry line must be a single line of 1-200 characters");
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
