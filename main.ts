import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Excuse for Skipping a Meeting — one fixed line.
// The joke turns office jargon on itself: every meeting claims a
// "hard stop", so this one already hit its own — the moment someone
// asked the question that kills every pointless meeting. And the
// speaker says so up front: they are skipping it, not joining late.
const LINE =
  "I'm skipping this one — the meeting hit its own hard stop the moment someone asked 'why are we here?'";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
