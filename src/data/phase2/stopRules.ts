import type { CopyStep, TimingCell } from '../../types/guide'

export const timingCells: TimingCell[] = [
  {
    label: 'Value scale warm-up',
    value: '3 minutes at the start of every session. No exceptions.',
  },
  {
    label: 'Shadow shape study',
    value: '15–20 min per object. Hard stop.',
  },
  {
    label: 'Sphere exercise',
    value: '20 min per sphere. Three per session max.',
  },
  {
    label: 'Still life (value)',
    value: '90 min. Even if shadows still feel wrong.',
  },
  {
    label: 'Master value copy',
    value: '60 min. Masses only — detail is optional.',
  },
  {
    label: 'Portrait value study',
    value: '90 min. No outlines allowed.',
  },
  {
    label: 'Charcoal emotion page',
    value: 'When the page feels full — not when it looks good.',
  },
  {
    label: 'Full session',
    value: '~90 min. After that, charcoal gets overworked and muddy.',
  },
]

export const drawingStopSteps: CopyStep[] = [
  {
    title: 'The squint test — primary tool for value work',
    body: 'Squint until the drawing blurs. Do light, mid, and dark masses read clearly? If everything collapses into one grey value, you need more separation — not more detail. If three zones read, the drawing may be done even if it feels unfinished.',
    variant: 'success',
  },
  {
    title: 'The "outline creep" test',
    body: 'If you notice yourself drawing dark lines around forms instead of building shadow shapes, stop. Outlines are a Phase 1 habit returning under stress. Cover the outline with shadow mass or start fresh on a new sheet. In Phase 2, an outline is a signal you have stopped seeing value.',
    variant: 'success',
  },
  {
    title: 'The mud test (charcoal specific)',
    body: 'If the entire drawing is middle grey with no true white highlights and no near-black shadows, stop blending. Lift highlights with kneaded eraser. Push darks with compressed charcoal in the shadow core only. Middle grey is where charcoal drawings go to die.',
    variant: 'success',
  },
  {
    title: 'Photograph and desaturate',
    body: 'Take a photo of your drawing and convert to black and white. Compare side by side with your reference, also desaturated. Value errors that were invisible in colour become obvious. Do this at the halfway point and at the end of every still life and portrait session.',
    variant: 'success',
  },
  {
    title: 'Walk away for 10 minutes',
    body: 'Charcoal and pencil both adapt to your eye over a long session — you stop seeing how dark you have gone. Ten minutes away resets this. Return and squint. The first thing that reads as wrong is worth fixing; everything that still reads at a glance is done.',
    variant: 'success',
  },
]

export const stopWarnBox =
  'For Phase 2 specifically: almost no value drawing will feel "finished" at 90 minutes — and that is correct. Value work requires more looking than marking. If you are still adding tone after 90 minutes, you are almost certainly making things muddier, not better. Stop, photograph, and carry what you learned to the next session.'

export const askButtons = [
  {
    label: 'Phase 3 week by week ↗',
    prompt:
      'Give me the same week-by-week detail for Phase 3 — composition and storytelling with pencil and charcoal',
  },
  {
    label: 'Best charcoal tutorials ↗',
    prompt:
      'What are the best free YouTube channels and resources for learning charcoal value drawing and portrait lighting?',
  },
  {
    label: 'Value scale not improving ↗',
    prompt:
      'My value scales look streaky and uneven. What drills fix charcoal and pencil tone control fastest?',
  },
]
