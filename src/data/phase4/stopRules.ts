import type { CopyStep, TimingCell } from '../../types/guide'

export const timingCells: TimingCell[] = [
  {
    label: 'Flat wash drill',
    value: 'One full sheet per attempt. Move on when streak-free or at 25 min.',
  },
  {
    label: 'Graded wash',
    value: 'One sheet per gradient direction. Stop when smooth or at 30 min.',
  },
  {
    label: 'Color mixing grid',
    value: 'Complete the grid — do not rush the last rows.',
  },
  {
    label: 'Sky study',
    value: 'One sky per session half. 40 min max per sky.',
  },
  {
    label: '3-color landscape',
    value: '90 min. Loose beats detailed.',
  },
  {
    label: 'Still life',
    value: '90 min. Leave whites untouched — do not over-glaze.',
  },
  {
    label: 'Wet-on-wet bloom',
    value: 'When the bloom stops spreading — put the brush down.',
  },
  {
    label: 'Wet-brush mood (Session B)',
    value: '25 min on designated weeks — stop when full, not when good.',
  },
]

export const drawingStopSteps: CopyStep[] = [
  {
    title: 'The bloom rule — never fix wet with wet',
    body: 'Adding more paint to a wet area to "fix" it creates cauliflower blooms — ragged edges that spread unpredictably. The moment you see a bloom forming, stop. Put the brush down. Let the paper dry completely — minimum 15 minutes, often longer. Reassess on dry paper. The habit of stopping and waiting is a skill equal to brush control.',
    variant: 'success',
  },
  {
    title: 'The dry test',
    body: 'Watercolor looks lighter when wet and dries 10–20% lighter still. If value decisions are made on wet paint, they will dry too pale. Touch a corner to test dryness, or use a hair dryer on low for 30 seconds on a test scrap. Make value judgments on dry paint whenever possible.',
    variant: 'success',
  },
  {
    title: 'The white paper test',
    body: 'Squint at the painting. Are your highlights still the white of the paper — or did you accidentally wash over them? Once white is lost, it cannot be recovered without gouache (not used in this phase). Protect whites with masking fluid optionally, or simply paint around them with care. Lost whites are the most common irreversible mistake.',
    variant: 'success',
  },
  {
    title: 'The mud test',
    body: 'If colours have merged into a single grey-brown on the paper, stop adding paint. Mud comes from over-mixing on the palette, too many glazes, or complementary colours in equal amounts. Let it dry, evaluate if one glaze of a clean colour could rescue it — if not, start fresh. Mud is data, not failure.',
    variant: 'success',
  },
  {
    title: 'The "one more glaze" trap',
    body: 'If you hear yourself say "just one more glaze to deepen it" — stop before doing it. Watercolor darkens with each layer. The painting was probably correct one glaze ago. Over-glazing is how fresh colour becomes mud.',
    variant: 'success',
  },
]

export const stopWarnBox =
  'The most common watercolor mistake is adding more paint to a wet area to fix it. Wet on wet creates blooms. Stop. Let it dry. Then reassess. For Phase 4 specifically: a loose finished painting beats a overworked ruined one every time. Some of your best work this phase will be wet-brush mood pages or Phase 1 translations you did not over-plan.'

export const askButtons = [
  {
    label: 'Phase 5 week by week ↗',
    prompt:
      'Give me the same week-by-week detail for Phase 5 — acrylic, including series work, texture techniques, and emotion painting',
  },
  {
    label: 'Fix muddy watercolors ↗',
    prompt:
      'Why are my watercolors muddy and how do I fix my color mixing and glazing habits?',
  },
  {
    label: 'Best free watercolor YouTube ↗',
    prompt:
      'What are the best free YouTube channels for learning watercolor for beginners — washes, skies, and landscapes?',
  },
]
