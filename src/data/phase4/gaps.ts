import type { GapCard } from '../../types/guide'

export const phase4Gaps: GapCard[] = [
  {
    tag: { label: 'Why watercolor first', background: '#FAEEDA', color: '#633806' },
    title: 'Planning before paint — no covering mistakes',
    body: 'Acrylic lets you paint over errors. Watercolor does not — you cannot paint light over dark. That constraint forces the planning habits from Phase 3 (thumbnails, value thinking) to become real. Watercolor before acrylic is pedagogically correct: if you can plan in watercolor, you will not waste acrylic paint covering sloppy planning.',
    fixes: [
      {
        label: 'Weeks 1–2',
        body: 'Washes only — no subjects. Week 3 wash buffer gate before mixing. Session B emotion mandatory from Week 3.',
      },
      {
        label: 'Week 7 onward',
        body: '3 thumbnails + pencil value sketch before every Session A painting — same as Phase 3, now with brush.',
      },
      {
        label: 'Phase 5',
        body: 'Acrylic inherits the planning habit but adds freedom to revise. You earn that freedom by surviving watercolor first.',
      },
    ],
  },
  {
    tag: { label: 'From Phase 3', background: '#EAF3DE', color: '#27500A' },
    title: 'Composition and value transfer to paint',
    body: 'Phase 3 thumbnails become watercolor planning thumbnails. Phase 2 value thinking becomes "leave the paper white for highlights, build darks in layers." The pencil value sketch before painting is not optional from Week 7 — it is how you see the painting before committing brush to paper.',
    fixes: [
      {
        label: 'Every Session A (Week 7+)',
        body: '3 thumbnails → pencil value sketch on watercolor paper (light pressure) → paint light to dark in layers.',
      },
      {
        label: 'Color temperature check',
        body: 'Before every Session A from Week 3: write "Light: warm/cool. Shadow: opposite." Shadows under warm light are cool (blue-violet). Shadows under cool light are warm (brown-violet).',
      },
      {
        label: 'Emotion thread',
        body: 'Session B free watercolor emotion pages continue from Phase 1–3. Week 10 Session B is emotion mandatory (landscape optional extension only). Date every page — Month 17 Phase 5 will revisit Phase 1 pages in acrylic.',
      },
    ],
  },
  {
    tag: { label: 'Core rule', background: '#FCEBEB', color: '#791F1F' },
    title: 'Light to dark — always',
    body: 'Watercolor builds from the white of the paper upward. Highlights are preserved by leaving paper untouched — not by painting white (unless you have gouache, which this phase avoids). Every layer darkens. Plan your lights first. The most common ruin is painting a midtone sky and then trying to add clouds on top.',
    fixes: [
      {
        label: 'Still life (Weeks 9–10)',
        body: 'Block in lightest areas first — literal untouched paper. Then midtones. Darkest darks last, in thin layers.',
      },
      {
        label: 'Skies (Weeks 5–6)',
        body: 'Paint sky wash first while paper is wet for soft clouds. Add darker cloud undersides after first layer dries.',
      },
      {
        label: 'When stuck',
        body: 'Stop. Let it dry completely. Reassess on dry paper. Never add wet paint to fix a wet mistake — that creates blooms.',
      },
    ],
  },
  {
    tag: { label: 'Phase 5 preview', background: '#EEEDFE', color: '#3C3489' },
    title: 'What Phase 4 unlocks for acrylic',
    body: 'Phase 4 teaches restraint, color mixing intuition, and when to stop. Phase 5 acrylic adds impasto, glazing, scraping, and the freedom to revise. The same-scene-four-times exercise in Weeks 13–14 builds color temperature intuition that acrylic benefits from enormously — you will mix warmer and more confidently because watercolor taught you transparency.',
    fixes: [
      {
        label: 'Week 16 review',
        body: 'Note mud sources and overwork habits. Weeks 19–20 are explicit buffers before Phase 5.',
      },
      {
        label: 'Phase 5 Week 17–18',
        body: 'Phase 1 emotion pages revisited as full acrylic paintings — your Phase 4 watercolor emotion pages are a parallel archive worth keeping.',
      },
    ],
  },
]
