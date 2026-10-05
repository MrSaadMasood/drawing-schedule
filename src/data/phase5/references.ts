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
        body: 'Clear acrylic fundamentals — colour mixing, glazing, and palette knife. Watch a mixing video before Week 2, a glazing video before Week 3, and a knife video before Week 9. One video, then one board the same day.',
        fixes: [
          { label: 'Weeks 1–3', body: 'Acrylic basics, colour mixing, then glazing.' },
          { label: 'Week 9', body: 'One palette-knife video before Session A. Then put the video away.' },
          { label: 'Link', body: 'youtube.com/@willkempartschool' },
        ],
      },
      {
        tag: { label: 'Acrylic · Process', background: '#FAEEDA', color: '#633806' },
        title: 'James Gurney — studio process',
        body: 'Useful for the Week 11 process study — how a working painter starts, builds, and stops. Watch interview or studio footage for decisions, not pictures to copy.',
        fixes: [
          { label: 'Week 11', body: 'One long-form interview in Session A. Notes before any paint.' },
          { label: 'Link', body: 'youtube.com/@JamesGurney' },
        ],
      },
      {
        tag: { label: 'Value · Planning', background: '#EAF3DE', color: '#27500A' },
        title: 'Ctrl+Paint — Colour and edges',
        body: 'Free library sections on colour and edges apply to the glaze study and the series. Use one short video in Week 6 if a series colour goes to mud, then paint the 20-minute study.',
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
        body: '6–8 colours minimum: cad yellow, yellow ochre, cad red, alizarin or naphthol red, ultramarine, phthalo green optional, titanium white, ivory black. Liquitex Basics or Daler Rowney student grade. Canvas boards 20×25cm — two packs of 10. Plastic palette + one palette knife. Week 2 swatches can be on paper.',
        fixes: [
          { label: 'Week 1', body: 'Full kit before the first session. Buy the second pack of boards before Week 5, when the series starts.' },
          { label: 'Cost', body: 'Rs. 5,000–12,000 (see Roadmap → What to buy).' },
        ],
      },
    ],
  },
  {
    label: 'Artist research — Week 11',
    resources: [
      {
        tag: { label: 'Process · Interviews', background: '#F1EFE8', color: '#5F5E5A' },
        title: 'Talk Art, Savvy Painter, and studio tours',
        body: 'Search "[artist name] studio tour" or a long interview. Week 11 Session A is how they work, not a folder of finished pictures.',
        fixes: [
          { label: 'Week 11 Session A', body: 'Three written process choices before Session B. No painting until those exist.' },
        ],
      },
    ],
  },
]

export const referenceInfoBox =
  'Watch a technique video, then use it on that week’s board the same day. Once the series starts, stop collecting tutorials. Weeks 5–8 are about one theme, not a new method every session.'
