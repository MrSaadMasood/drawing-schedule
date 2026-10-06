import type { PhaseOverview } from '../../types/guide'

export const phaseOverviews: PhaseOverview[] = [
  {
    id: 'phase-1',
    phaseNumber: 1,
    badge: { label: 'Phase 1', background: '#F1EFE8', color: '#444441' },
    title: 'Seeing and mark-making — pencil only',
    subtitle: 'Learning to draw what you actually see, not what you think things look like',
    duration: 'Months 1–4 · Week 0 + 14 weeks · ~3 hrs/week',
    sessionCards: [
      { label: 'Session type', value: '2 sessions/week, 75 min each (Week 0: 45 min)' },
      { label: 'Core skill', value: 'Observation · line quality · proportion' },
      { label: 'Tools', value: 'HB, 2B, 4B pencils · sketchbook · eraser' },
    ],
    exercises: [
      'Contour drawing — draw an object without looking at your paper. Forces you to truly observe',
      'Timed gesture sketches — line-of-action, Proko sample, or paused YouTube poses',
      'Copy one master drawing per week (Rembrandt, Da Vinci sketches) — focus on line, not likeness',
      'Still life and Loomis on separate weeks — not stacked in one session',
      'Negative space drawings — draw the space around the object, not the object itself',
      'Four sparse expressive/emotion anchors (Weeks 1, 8, 11, 14) — dated pages for later paint translations',
    ],
    milestone: 'Milestone: Week 14 buffer — 2 sketchbooks ~80% full, every category present, then Phase 2.',
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    badge: { label: 'Phase 2', background: '#E6F1FB', color: '#0C447C' },
    title: 'Value, light and shadow — pencil and charcoal',
    subtitle: 'Understanding how light creates form — the foundation of all painting',
    duration: 'Months 4–7 · 12 weeks · ~3 hrs/week',
    sessionCards: [
      { label: 'New medium', value: 'Charcoal sticks + blending stumps' },
      { label: 'Core skill', value: 'Value · edges · form under one light' },
      { label: 'Key concept', value: 'There are no lines in nature — only value changes' },
    ],
    exercises: [
      'Value scales Weeks 1–4, then once a week. Three value mood labs, not six',
      'Week 2: only cylinder rotation and wedge hands/feet — a long Phase 1 weakness list stays a list',
      'Shadow shapes and hard versus soft edges, then pencil and charcoal forms',
      'One pencil still life and one charcoal still life, correction instead of a second full drawing',
      'Week 8 foreshortened hands and feet with value. Week 11 heads that turn. Week 12 side-lit portrait',
      'Master copy over two weeks, then a required memory map. Composition and full scenes wait for Phase 3',
    ],
    milestone:
      'Milestone: forms read as volume without outlines. One charcoal still life and one portrait with a clear light side and dark side. Week 12 names what Phase 3 will take.',
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    badge: { label: 'Phase 3', background: '#EAF3DE', color: '#27500A' },
    title: 'Composition and storytelling — still pencil/charcoal',
    subtitle: 'Arranging elements to guide the eye and carry meaning',
    duration: 'Months 7–11 · 16 weeks · ~3.5 hrs/week',
    sessionCards: [
      { label: 'Core skill', value: 'Composition · rule of thirds · focal point' },
      { label: 'New exercise', value: 'Thumbnail sketching before any drawing (max 12 per 30 min)' },
      { label: 'Spatial transfer', value: 'Rooms · streets · ellipses · people at depth · complex scene correction' },
    ],
    exercises: [
      'Thumbnail habit, focal point, and visual weight in Weeks 1–2 — thumbnails before every developed drawing',
      'Weeks 3–5: one-point room, two-point corner, then ordinary objects, ellipses, and proportional scale at depth',
      'One focused landscape week and one master composition study — repetition removed',
      'Narrative: framing week, then single-image story week — not both in one week',
      'Character posture, then two figures interacting inside a shared environment at different depths',
      'Week 12 complex scene, Week 14 evidence-based correction; showpieces Weeks 13 and 15; Week 16 buffer',
    ],
    milestone:
      'Milestone: thumbnails automatic; focal point intentional; objects and figures share readable space; one complex scene diagnosed and corrected. Week 16 buffer before paint.',
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    badge: { label: 'Phase 4', background: '#FAEEDA', color: '#633806' },
    title: 'First contact with paint — watercolor',
    subtitle: 'Watercolor before acrylic — it forces you to plan, not cover mistakes',
    duration: 'Months 11–16 · 20 weeks · ~3.5 hrs/week',
    sessionCards: [
      { label: 'Why watercolor first', value: 'Teaches planning and restraint — you can\'t paint over errors' },
      { label: 'Core skills', value: 'Wet-on-wet · wet-on-dry · color mixing · washes' },
      { label: 'Buffers', value: 'Week 3 wash gate · Weeks 19–20 mud/overwork repeat' },
    ],
    exercises: [
      'Weeks 1–3 washes only — Week 3 is consolidation buffer before mixing',
      'Color mixing grid split across two weeks — color temperature notes from Week 4',
      'Three sky paintings per week for two weeks — not six in one fortnight',
      'Warm and cool 3-color landscapes on separate weeks',
      'Still life twice on same setup — two weeks',
      'Two indoor light studies (morning vs golden hour / lamp) — not four outdoor scenes',
    ],
    milestone:
      'Milestone: believable sky and atmosphere, name your mud source. Weeks 19–20 buffer if needed before Phase 5.',
  },
  {
    id: 'phase-5',
    phaseNumber: 5,
    badge: { label: 'Phase 5', background: '#EEEDFE', color: '#3C3489' },
    title: 'Acrylic — building, experimenting, your voice',
    subtitle: 'Now you can paint over mistakes. Now you can be bold.',
    duration: 'Months 16–19 · 13 weeks · ~3 hrs/week',
    sessionCards: [
      { label: 'Why acrylic now', value: 'Fast-drying, thin or thick — revision after watercolor planning' },
      { label: 'Focus', value: 'One patient painting · 4-painting series · one emotion expansion' },
      { label: 'Finish', value: 'Final painting Weeks 12–13 · Week 13 retrospective chooses the next path' },
    ],
    exercises: [
      'Weeks 1–2: thin versus thick, then mixes from primaries and a written dry-dark note',
      'Week 3 glaze study, then one patient painting across Weeks 4–5 — one board, three sessions',
      'Four-painting series, Weeks 5–8 — problem studies Weeks 6–7 only; Week 8 fills a missing painting',
      'Week 9: palette knife, then other tools — one week, two boards',
      'Week 10: one Phase 1 emotion page as a full acrylic painting',
      'Week 11: one living artist’s process. Weeks 12–13: final painting on different days, then the next-path retrospective',
    ],
    milestone:
      'Milestone: acrylic handling, one sustained painting, a four-painting series, and a written choice of what to study next.',
  },
]
