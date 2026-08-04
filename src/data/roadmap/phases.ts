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
    duration: 'Months 4–7 · 14 weeks · ~3.5 hrs/week',
    sessionCards: [
      { label: 'New medium', value: 'Charcoal sticks + blending stumps' },
      { label: 'Core skill', value: 'Value scale · shadow shapes · tone' },
      { label: 'Key concept', value: 'There are no lines in nature — only value changes' },
    ],
    exercises: [
      'Draw a 10-step value scale from white to black — every session opens with 3 min of this',
      'Single-light-source shadow shapes, then spheres, then still life — one week each',
      'Pencil still life and charcoal still life on separate weeks',
      'Master copy split across two weeks — analysis then completion',
      'Portrait value study after Loomis face-value week — not the same week as master copy finish',
      'Six charcoal value mood labs — mood through light and dark alone (not every week)',
    ],
    milestone:
      'Milestone: sphere reads 3D, one charcoal still life and one portrait with clear light/shadow. Week 14 review before Phase 3.',
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
      { label: 'Unlock', value: 'One-point review · two-point new · buffer weeks 12 & 16' },
    ],
    exercises: [
      'Thumbnail habit: Week 1 drill only, then rule of thirds — thumbnails before every developed drawing',
      'Landscape thumbnails split across two sessions (10 + 10), then develop + Hopper trace, then full master copy week',
      'Narrative: framing week, then single-image story week — not both in one week',
      'Character posture week, then two-figure interaction week',
      'Showpiece and master composition copy on separate weeks',
      'Fresh-eyes review instead of showing work to someone else',
    ],
    milestone:
      'Milestone: thumbnails automatic. Week 16 buffer before Phase 4 paint. Strong composition feels right before you can explain why.',
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
    duration: 'Months 16–22 · 24 weeks · ~3 hrs/week',
    sessionCards: [
      { label: 'Why acrylic now', value: 'Forgiving, fast-drying, works thin or thick — maximum freedom' },
      { label: 'Focus', value: '6-painting series · patient weeks · imagination month' },
      { label: 'Finish', value: 'Final painting spans Weeks 22–23 · Week 24 photo retrospective' },
    ],
    exercises: [
      'Six-painting series on one theme — problem studies from Week 6, not Week 5',
      'Patient paintings A–D on dedicated weeks — never parallel with series climax or imagination month',
      'Palette knife, glazing, unconventional tools — one week each',
      'Four weeks painting from imagination — no references',
      'Phase 1 emotion pages as full acrylic expansions — Weeks 18–19',
      'Week 24: photograph 10 best pieces per phase + written themes — not a full floor spread',
    ],
    milestone:
      'Milestone: body of work with recurring themes. Retrospective writing defines what you paint next.',
  },
]
