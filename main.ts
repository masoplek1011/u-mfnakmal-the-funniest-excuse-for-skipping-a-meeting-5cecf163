import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Excuse for Skipping a Meeting — one fixed line.
// The joke turns office jargon on itself: every meeting claims a
// "hard stop", so this one already hit its own — at the moment
// someone asked the question that kills every pointless meeting.
const LINE =
  "This meeting's hard stop is 'why are we here?' — it hit it before I even joined.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
