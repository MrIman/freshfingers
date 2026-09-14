import fs from 'node:fs';
import { decodePng } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/lib/png.mjs';
import { crop, resize } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/lib/raster.mjs';
import { dominantColors, toHex } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/lib/image-metrics.mjs';
const comp=decodePng(fs.readFileSync('.impeccable/mocks/comp-6-date-rooms.png'));
const build=decodePng(fs.readFileSync(process.argv[2]));
const b = build.width===comp.width ? build : resize(build, comp.width, Math.round(build.height*comp.width/build.width));
const [x,y,w,h]=[215,185,475,185];
for (const [n,img] of [['comp',crop(comp,x,y,w,h)],['build',crop(b,x,y,w,h)]]) console.log(n, JSON.stringify(dominantColors(img,6)));
