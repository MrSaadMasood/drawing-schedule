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
    value: '90 min. One fresh board. Weeks 5–8 only.',
  },
  {
    label: 'Series study (Session B)',
    value: '20 min, one problem, Weeks 6–7 only. Then write and stop.',
  },
  {
    label: 'Palette knife session',
    value: 'Week 9 Session A. No brushes. Reset if a brush touches the board.',
  },
  {
    label: 'Glazing layer',
    value: 'One layer at a time. The underpainting must be dry.',
  },
  {
    label: 'Patient painting',
    value: 'One board, three sessions, Weeks 4–5. Stop with a sticky note.',
  },
  {
    label: 'Final painting',
    value: 'Week 12 starts it. Week 13 finishes it. Different calendar days.',
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
    body: 'During Weeks 5–8, stop each series painting at 90 minutes even if it is unfinished. The series compares one week with the next. Write the one fix for the 20-minute study in Weeks 6–7. Do not repair it on the same canvas unless that study is specifically about a passage you can test small.',
    variant: 'success',
  },
  {
    title: 'The overnight test — multi-session paintings',
    body: 'For the patient painting and the final painting: stop while you still know the next step. Write it on a sticky note on the back. Come back on another calendar day. Fresh eyes on dry paint see what wet paint hides. Week 12 Session B plans Week 13 and does not touch the final board.',
    variant: 'success',
  },
  {
    title: 'The body of work test — when a painting is done',
    body: 'A painting is done when it reads at arm\'s length and you can say what it is trying to do. It is done when the next mark would be for anxiety or for showing off a tool. A series painting may stay unfinished. Say so on the back. The retrospective can name that as a choice, not a hidden failure.',
    variant: 'success',
  },
]

export const stopWarnBox =
  'The four-painting series is supposed to be uneven. The last does not have to match the first in polish. What it has to do is show a change you can name. Week 10 is the one emotion expansion. Week 13 is the writing that decides what you practice next.'

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
