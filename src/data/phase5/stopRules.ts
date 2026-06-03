import type { CopyStep, TimingCell } from '../../types/guide'

export const timingCells: TimingCell[] = [
  {
    label: 'Thin wash exercise',
    value: 'Fill the board or move on at 40 min.',
  },
  {
    label: 'Impasto exercise',
    value: 'When the surface is fully covered — not when smooth.',
  },
  {
    label: 'Series painting (Session A)',
    value: '90 min per week. Start fresh each week of the series.',
  },
  {
    label: 'Series study (Session B)',
    value: '20 min on one specific problem from last week\'s painting.',
  },
  {
    label: 'Palette knife session',
    value: '90 min. No brushes allowed.',
  },
  {
    label: 'Glazing layer',
    value: 'One layer per session. Must be dry before next glaze.',
  },
  {
    label: 'Imagination painting',
    value: '90 min. No reference — diagnostic, not a test.',
  },
  {
    label: 'Emotion painting (Session B)',
    value: '30–45 min minimum. Stop when full, not when good.',
  },
]

export const drawingStopSteps: CopyStep[] = [
  {
    title: 'The dry darker test',
    body: 'Acrylic dries darker and slightly cooler than it looks wet. Before committing to a final value on a large area, dry a test patch with a hair dryer or wait 10 minutes. If you have been correcting values repeatedly and the painting keeps getting darker, you are chasing wet appearance — stop and check dry.',
    variant: 'success',
  },
  {
    title: 'The revision test — cover for composition, not anxiety',
    body: 'Acrylic allows covering mistakes — that freedom can become compulsive repainting. Before covering a passage, ask: does the composition need this change, or am I anxious? Acrylic revision is a tool for deliberate improvement, not infinite fussing. Same "adding for anxiety" test from Phase 1 applies.',
    variant: 'success',
  },
  {
    title: 'The series stop rule',
    body: 'During Weeks 5–9, stop each series painting at 90 minutes even if unfinished. The series compares week-to-week growth — finishing one piece perfectly defeats the purpose. Note one thing to fix in the 20-min Session B study, not on the same canvas unless the study requires it.',
    variant: 'success',
  },
  {
    title: 'The overnight test — multi-session paintings',
    body: 'For patient paintings (3+ sessions): stop mid-session while you still know what the next step is. Write it on a sticky note on the canvas back. Return at least 12 hours later. Fresh eyes on dry paint reveal what wet eyes could not. Week 20 final painting uses this deliberately.',
    variant: 'success',
  },
  {
    title: 'The body of work test — when a painting is done',
    body: 'In Phase 5, a painting is done when it reads at arm\'s length and you can name what it is trying to say — even if the saying is abstract. It is done when the next mark would be for anxiety or for showing off technique. Unfinished series paintings and imagination diagnostics are allowed to stay unfinished.',
    variant: 'success',
  },
]

export const stopWarnBox =
  'For Phase 5 specifically: the series (Weeks 5–9) and imagination month (Weeks 13–16) are designed to produce uneven work. Uneven is correct. The goal is a body of work with emerging themes — not a portfolio of equally polished pieces. Session B emotion painting is never graded. Never skip it because Session A felt hard.'

export const askButtons = [
  {
    label: 'Acrylic glazing steps ↗',
    prompt:
      'How do I build an acrylic painting with underpainting and transparent glazes step by step for a beginner?',
  },
  {
    label: 'Develop a painting series ↗',
    prompt:
      'How do I choose a theme for a painting series and make each piece stronger than the last?',
  },
  {
    label: 'When is a painting finished ↗',
    prompt:
      'How do I know when an acrylic painting is finished? What should I look for in the final stages?',
  },
]
