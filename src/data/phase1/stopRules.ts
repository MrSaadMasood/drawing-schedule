import type { CopyStep, TimingCell } from '../../types/guide'

export const timingCells: TimingCell[] = [
  {
    label: 'Gesture drawing',
    value: 'When the timer ends. Not one stroke after.',
  },
  {
    label: 'Timed exercises',
    value: 'At the set time. Every time. No exceptions.',
  },
  {
    label: 'Still life',
    value: 'At 60–90 min. Even if unfinished.',
  },
  {
    label: 'Master copy',
    value: 'At 45 min. Unfinished copy = full lesson.',
  },
  {
    label: 'Emotion page',
    value: 'When pages feel full — not when they look good.',
  },
  {
    label: 'Full session',
    value: '60–90 min. After that, quality drops.',
  },
]

export const drawingStopSteps: CopyStep[] = [
  {
    title: 'The "adding for anxiety" test',
    body: 'Pause and ask: am I adding this next mark because the drawing needs it, or because I feel uncomfortable stopping? If it\'s anxiety — stop. Every mark added from anxiety makes things worse, never better. This test alone prevents 80% of overworked drawings.',
    variant: 'success',
  },
  {
    title: 'The squint test',
    body: 'Squint your eyes until the drawing blurs. Do the major shapes read clearly — light areas vs dark areas? If yes, the drawing is working. If everything blurs into a grey muddle with no clear focal point, it needs more value contrast — not more line detail.',
    variant: 'success',
  },
  {
    title: 'The upside-down test',
    body: 'Turn the drawing upside down. Proportion errors and crooked lines that your brain was correcting become immediately visible. If it still reads as a coherent set of shapes upside down — it\'s done. If something looks severely wrong, identify what it is and decide whether fixing it is worth the risk of overworking everything around it.',
    variant: 'success',
  },
  {
    title: 'Walk away for 10 minutes, then look',
    body: 'Your eye adapts to what it\'s been staring at — it starts seeing what it intended rather than what\'s actually there. 10 minutes away resets this. When you return, the first thing that strikes you as wrong is probably worth fixing. The things that look fine on fresh eyes are done.',
    variant: 'success',
  },
  {
    title: 'The "one more thing" trap',
    body: 'If you hear yourself say "just one more thing and it\'ll be done" — stop immediately before doing that thing. "One more thing" is how a good drawing becomes an overworked one. The drawing was already done one step ago.',
    variant: 'success',
  },
]

export const stopWarnBox =
  'For Phase 1 specifically: in the first 3 months, almost no drawing will feel "finished" — and that is correct. A finished-feeling drawing at this stage usually means you spent too long on it at the expense of doing the next exercise. In Phase 1, volume of work beats refinement of individual pieces every single time.'

export const askButtons = [
  {
    label: 'Phase 2 week by week ↗',
    prompt:
      'Give me the same week-by-week detail for Phase 2 — value, light and shadow with charcoal, including the anatomy sessions',
  },
  {
    label: 'Best free YouTube channels ↗',
    prompt:
      'What are the best free YouTube channels for each of these skills — gesture, anatomy, perspective, and master study?',
  },
  {
    label: 'How to self-critique ↗',
    prompt:
      'How do I critique my own work effectively? What should I be looking for at each phase?',
  },
]
