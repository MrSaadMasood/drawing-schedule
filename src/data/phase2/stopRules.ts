import type { CopyStep, TimingCell } from '../../types/guide'

export const timingCells: TimingCell[] = [
  {
    label: 'Value scale warm-up',
    value: '3 minutes every session in Weeks 1–4, then once a week unless the steps start jumping.',
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
    value: '75 min for the drawing. Session B corrects a passage — it is not a second still life.',
  },
  {
    label: 'Master value copy',
    value: 'Week 9 masses only. Week 10 finish plus a required memory map.',
  },
  {
    label: 'Portrait value study',
    value: 'Week 12 Session A. No outlines. Stop at 75 min.',
  },
  {
    label: 'Value mood lab',
    value: '25 min on Weeks 1, 5, and 12 only — when the page is full, stop.',
  },
  {
    label: 'Gesture warm-up',
    value: '10 min on Weeks 5, 8, and 11. Lean, weight, and a shadow side. Then the week’s job starts.',
  },
  {
    label: 'Full session',
    value: '75 min. After that, charcoal gets overworked and muddy.',
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
    title: 'Photograph, flip, and name the error',
    body: 'Photograph the drawing, flip it, and desaturate it if the subject is in colour. At the midpoint of every still life and the portrait, write the largest miss: construction, proportion, value, or edge. Correct only that family. A list of five problems in one session is how the drawing turns to mud.',
    variant: 'success',
  },
  {
    title: 'Walk away for 10 minutes',
    body: 'Charcoal and pencil both adapt to your eye over a long session — you stop seeing how dark you have gone. Ten minutes away resets this. Return and squint. The first thing that reads as wrong is worth fixing; everything that still reads at a glance is done.',
    variant: 'success',
  },
]

export const stopWarnBox =
  'Almost no value drawing will feel finished at 75 minutes. That is correct. If you are still adding tone after the timer, you are usually making mud. Stop, photograph, and take one note to the next session. A long Phase 1 weakness list is not a reason to ignore the timer or to invent extra weeks.'

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
