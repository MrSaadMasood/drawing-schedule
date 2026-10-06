import type { CopyStep, TimingCell } from '../../types/guide'

export const timingCells: TimingCell[] = [
  {
    label: 'Thumbnail warm-up',
    value: '3 thumbnails minimum, 5 min total. Before every Session A drawing.',
  },
  {
    label: 'Thumbnail marathon',
    value: '30 min or 12 boxes, whichever comes first. Then pick one.',
  },
  {
    label: 'Perspective study',
    value: '75 min max. Diagnose one spatial error; do not restart the whole scene.',
  },
  {
    label: 'Narrative panel',
    value: '20 min per panel. Hard stop.',
  },
  {
    label: 'Full composition drawing',
    value: '75 min normally. Week 13 may run 90 min including thumbnails.',
  },
  {
    label: 'Master composition copy',
    value: '60 min shapes only. Detail optional after time.',
  },
  {
    label: 'Compositional mood lab (Session B)',
    value: '25 min on Weeks 1, 6, and 13 only — notice where the eye rests.',
  },
  {
    label: 'Full session',
    value: '75 min normally. Stop before correction becomes rendering.',
  },
]

export const drawingStopSteps: CopyStep[] = [
  {
    title: 'The thumbnail contract',
    body: 'You chose a thumbnail before starting. Do not quietly redesign the composition halfway through. If it fails large, finish it as a diagnostic or stop and make 3 correction thumbnails for the next session. Write what the thumbnail failed to predict. That preserves the planning lesson without forcing a same-day restart.',
    variant: 'success',
  },
  {
    title: 'The squint test — now for composition',
    body: 'Squint at the drawing. Do the major masses lead the eye somewhere intentional? If everything has equal weight and the eye wanders, the composition needs a stronger focal point — not more detail. Darken or simplify the non-focal areas before adding anything to the focal area.',
    variant: 'success',
  },
  {
    title: 'The corner test',
    body: 'Look at all four corners of the page. Are any empty in a way that pulls the eye off the image? Are any crowded with detail that competes with the focal point? Strong compositions control corners — they are either quiet or deliberately active, never accidentally messy.',
    variant: 'success',
  },
  {
    title: 'The narrative test (Session B)',
    body: 'For panel work: show the drawing to someone without explanation if a willing viewer is available. Otherwise put it away overnight and describe only what the image proves the next day. For posture work, cover the face — does the body still communicate? If not, push lean, weight, or gesture.',
    variant: 'success',
  },
  {
    title: 'Use the ruler only to diagnose after Week 5',
    body: 'Weeks 3–5 may use a ruler for the perspective lesson. After that, draw the scene lightly by eye first. If space fails, extend two or three important edges to check the horizon and vanishing direction. Correct those lines; do not cover every narrative or landscape page in a grid.',
    variant: 'success',
  },
]

export const stopWarnBox =
  'A composition that is 70% planned and 30% rendered beats one that is 10% planned and 90% rendered. A perspective scene also does not need every line constructed. Plan the large shapes, establish the horizon and depth directions, then diagnose one spatial error from the finished attempt. Phase 4 will punish both weak planning and overworked correction.'

export const askButtons = [
  {
    label: 'Phase 4 week by week ↗',
    prompt:
      'Give me the same week-by-week detail for Phase 4 — watercolor, including washes, mixing, and emotion painting sessions',
  },
  {
    label: 'Rule of thirds explained ↗',
    prompt:
      'Explain rule of thirds, visual weight, and focal point for beginners — with simple thumbnail examples',
  },
  {
    label: 'Two-point perspective quick guide ↗',
    prompt:
      'How do I draw two-point perspective for a street corner and building exterior — step by step for a beginner',
  },
]
