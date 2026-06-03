import type { CopyStep, TimingCell } from '../../types/guide'

export const timingCells: TimingCell[] = [
  {
    label: 'Thumbnail warm-up',
    value: '3 thumbnails minimum, 5 min total. Before every Session A drawing.',
  },
  {
    label: 'Thumbnail marathon',
    value: '30 min for 16–20 boxes. Then pick one — no revisiting.',
  },
  {
    label: 'Perspective study',
    value: '75 min max. Learn the principle, then stop.',
  },
  {
    label: 'Narrative panel',
    value: '20 min per panel. Hard stop.',
  },
  {
    label: 'Full composition drawing',
    value: '90 min. Even if rendering feels unfinished.',
  },
  {
    label: 'Master composition copy',
    value: '60 min shapes only. Detail optional after time.',
  },
  {
    label: 'Emotion page (Session B)',
    value: 'When the page feels full — notice where the eye rests.',
  },
  {
    label: 'Full session',
    value: '~90 min. Composition decisions fade after that.',
  },
]

export const drawingStopSteps: CopyStep[] = [
  {
    title: 'The thumbnail contract',
    body: 'You chose a thumbnail before starting. You are not allowed to change the composition mid-drawing because the large version "is not working." If it is not working, the thumbnail was wrong — stop, do 3 new thumbnails, start fresh. Changing composition mid-drawing wastes 60 minutes learning nothing about planning.',
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
    body: 'For panel work: show the drawing to someone without explanation. Can they sense a before and after? For posture work: cover the face — does the body still communicate the emotion? If not, the posture is generic. Push the lean, weight, or gesture further.',
    variant: 'success',
  },
  {
    title: 'Put the ruler away after Week 4',
    body: 'If you are still constructing perspective lines on every landscape after Week 4, stop. Sketch the space intuitively using what you learned. Over-constructed perspective makes compositions stiff. Phase 3 perspective is a tool for when you need convincing architecture — not a requirement for every drawing.',
    variant: 'success',
  },
]

export const stopWarnBox =
  'For Phase 3 specifically: a composition that is 70% planned and 30% rendered beats one that is 10% planned and 90% rendered. If you catch yourself rendering details before the big shapes read clearly, stop detailing and step back to thumbnails. Phase 4 watercolor will punish this habit severely — fix it now in pencil.'

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
