import fs from 'node:fs';
import { decodePng, loadRaster } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/lib/png.mjs';
import { crop } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/lib/raster.mjs';
import { compare } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/comp-diff.mjs';
import { loadSpec, plateReference } from '/Users/igormanka/.claude/plugins/cache/impeccable/impeccable/4.1.3/skills/impeccable/scripts/comp-spec.mjs';
const spec = loadSpec(process.env.SPEC||'.impeccable/build/spec.json');
const comp = loadRaster(spec.comp).image;
const r = spec.regions.find(x => x.id === process.argv[2]);
const ref = plateReference(comp, spec, r);
for (const f of process.argv.slice(3)) {
  const img = decodePng(fs.readFileSync(f));
  // try a few crops: full, and trims of top/bottom fractions
  const trims = [[0,0],[0.05,0],[0.1,0],[0,0.05],[0,0.1],[0.05,0.05],[0.08,0.04],[0.12,0.04]];
  for (const [t,b] of trims) {
    const y = Math.round(img.height*t), h = img.height - y - Math.round(img.height*b);
    const c = (t||b) ? crop(img, 0, y, img.width, h) : img;
    const s = compare({ comp: ref, build: c, align: 'cover', spec: null, kind: r.kind }).whole;
    console.log(f, 'trim', t, b, 'structure', (s.structure*100).toFixed(0), 'overall', (s.overall*100).toFixed(0), 'color', (s.color*100).toFixed(0));
  }
}
