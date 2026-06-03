import type { ResourceCard } from '../../types/guide'

export type ReferenceSection = {
  label: string
  resources: ResourceCard[]
}

export const referenceSections: ReferenceSection[] = [
  {
    label: 'YouTube — acrylic primary teachers',
    resources: [
      {
        tag: { label: 'Acrylic · Beginner', background: '#EEEDFE', color: '#3C3489' },
        title: 'Will Kemp Art School',
        body: 'Clear acrylic fundamentals — colour mixing, glazing, palette knife, and beginner landscapes. Watch colour mixing before Week 3 and glazing before Week 11. Paint along same day, one video one board.',
        fixes: [
          { label: 'Weeks 1–4', body: 'Acrylic basics and colour mixing playlists.' },
          { label: 'Weeks 10–12', body: 'Palette knife and glazing tutorials.' },
          { label: 'Link', body: 'youtube.com/@willkempartschool' },
        ],
      },
      {
        tag: { label: 'Acrylic · Process', background: '#FAEEDA', color: '#633806' },
        title: 'James Gurney — studio process',
        body: 'Best for Week 19 artist-study mindset — how a working painter thinks about light, imagination, and series. Watch "Gouache in the Wild" or interview content for process, not copying his pictures.',
        fixes: [
          { label: 'Week 19', body: 'Long-form interviews on starting, stopping, and outdoor/imagination work.' },
          { label: 'Link', body: 'youtube.com/@JamesGurney' },
        ],
      },
      {
        tag: { label: 'Value · Planning', background: '#EAF3DE', color: '#27500A' },
        title: 'Ctrl+Paint — Colour and edges',
        body: 'Free library sections on colour and edges apply to acrylic glazing and series work. Useful refresh during Week 5 if series colours go mud.',
        fixes: [{ label: 'Link', body: 'ctrlpaint.com/library' }],
      },
    ],
  },
  {
    label: 'Supplies — Phase 5 kit',
    resources: [
      {
        tag: { label: 'Phase 5', background: '#EEEDFE', color: '#3C3489' },
        title: 'Acrylic set · canvas boards · palette knife',
        body: '6–8 colours minimum: cad yellow, yellow ochre, cad red, alizarin or naphthol red, ultramarine, phthalo green optional, titanium white, ivory black. Liquitex Basics or Daler Rowney student grade. Canvas boards 20×25cm pack of 10. Plastic palette + one palette knife.',
        fixes: [
          { label: 'Week 1', body: 'Full kit before first session. Gesso boards dry fast — paper plates work as disposable palette.' },
          { label: 'Cost', body: 'Rs. 5,000–12,000 (see Roadmap → What to buy).' },
        ],
      },
    ],
  },
  {
    label: 'Artist research — Week 19',
    resources: [
      {
        tag: { label: 'Process · Interviews', background: '#F1EFE8', color: '#5F5E5A' },
        title: 'Talk Art, Savvy Painter, and studio tours',
        body: 'Search "[artist name] studio tour" or podcast interviews for process talk. Avoid only watching speed-painting reels. Week 19 requires how they work, not what their finished pieces look like.',
        fixes: [
          { label: 'Week 19 Session A', body: 'Take written notes before Session B study painting. Minimum 3 process observations.' },
        ],
      },
    ],
  },
]

export const referenceInfoBox =
  'Phase 5 rule: technique videos support Session A, never replace Session B emotion painting. If you watch a glazing tutorial, glaze one board the same day. The 5-painting series (Weeks 5–9) should receive almost no new tutorial input — you already have enough technique; the series is about voice.'
