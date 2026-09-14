import fs from 'node:fs';
import { decodePng } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/lib/png.mjs';
import { structureScore } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/lib/image-metrics.mjs';
import { bestShift } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/comp-diff.mjs';
const a=decodePng(fs.readFileSync(process.argv[2])), b=decodePng(fs.readFileSync(process.argv[3]));
console.log('structure', structureScore(a,b).toFixed(3));
if (process.argv[4]) console.log('bestShift', JSON.stringify(bestShift(a,b)));
