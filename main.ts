import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Excuse for Skipping a Meeting — one fixed line.
// The joke turns office jargon on itself: every meeting claims a
// "hard stop", so this one already hit its own — the moment someone
// asked the question that kills every pointless meeting. The skip is
// explicit mid-line, and the twist lands last: the meeting skipped
// itself first, so the speaker is only following its lead.
const LINE =
  "The meeting hit its own hard stop the moment someone asked 'why are we here?' — so I'm skipping it, same as it skipped itself.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
