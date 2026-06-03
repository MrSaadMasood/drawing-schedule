import type { ResourceCard } from '../../types/guide'

export type ReferenceSection = {
  label: string
  resources: ResourceCard[]
}

export const referenceSections: ReferenceSection[] = [
  {
    label: 'YouTube — value and charcoal primary teachers',
    resources: [
      {
        tag: { label: 'Value · Form', background: '#E6F1FB', color: '#0C447C' },
        title: 'Proko — Figure and portrait value',
        body: 'Watch the Portrait Drawing playlist before Weeks 10–11. The shading and lighting videos cover exactly the one-side light approach this schedule uses. Figure Drawing Fundamentals for gesture warm-ups in Session B.',
        fixes: [
          {
            label: 'Before Week 10',
            body: 'Portrait Drawing: "How to Shade a Drawing" and Loomis head videos — pairs with face value intro.',
          },
          {
            label: 'Every week',
            body: 'Figure Drawing Fundamentals gesture videos for Session B warm-ups.',
          },
          { label: 'Link', body: 'youtube.com/@ProkoTV' },
        ],
      },
      {
        tag: { label: 'Value · Fundamentals', background: '#FEF3E2', color: '#7A4510' },
        title: 'Ctrl+Paint — Value library',
        body: 'Free value section at ctrlpaint.com/library. Short videos on value scale, form shading, and edges. Watch the entire Value section during Weeks 1–2 — each video is 5–10 min. The best bridge between Phase 1 line work and Phase 2 tonal work.',
        fixes: [
          {
            label: 'Week 1–2',
            body: 'Watch "Value" section videos 1–6. Draw along with each — pause and shade what you just saw.',
          },
          { label: 'Link', body: 'ctrlpaint.com/library' },
        ],
      },
      {
        tag: { label: 'Charcoal · Process', background: '#F1EFE8', color: '#5F5E5A' },
        title: 'GnomoniC Art Tutorials — charcoal process',
        body: 'Search "GnomoniC charcoal portrait" or "charcoal still life" — full real-time process from blank paper to finished tonal drawing. Watch one complete video before Week 7 still life session.',
        fixes: [
          {
            label: 'Before Week 7',
            body: 'One full charcoal still life or portrait process video — note when they lift highlights vs add darks.',
          },
          { label: 'Link', body: 'youtube.com/@GnomoniCDrawingTutorials' },
        ],
      },
    ],
  },
  {
    label: 'Master references for value copies',
    resources: [
      {
        tag: { label: 'Master Works', background: '#F1EFE8', color: '#5F5E5A' },
        title: 'WikiArt + Met Open Access',
        body: 'WikiArt.org for browsing Rembrandt, Caravaggio, Kollwitz. Met Open Access for high-resolution downloads. Desaturate colour paintings on your phone before copying — you are studying value, not colour.',
        fixes: [
          {
            label: 'Week 9–10',
            body: 'Search Rembrandt portraits, Caravaggio chiaroscuro paintings, Kollwitz charcoal. Filter Met collection to Drawings and Prints.',
          },
          { label: 'Links', body: 'wikiart.org · metmuseum.org/art/collection' },
        ],
      },
    ],
  },
  {
    label: 'Practice tools — use during sessions',
    resources: [
      {
        tag: { label: 'Gesture · Timed poses', background: '#EAF3DE', color: '#27500A' },
        title: 'Line-of-Action — line-of-action.com',
        body: 'Set to 2–5 minutes for Session B gesture warm-ups throughout Phase 2. Figures category. Draw on paper, screen as reference only.',
        fixes: [
          {
            label: 'Setup',
            body: '2-minute poses Weeks 3–6, 3-minute Week 6 figures, 5-minute Week 11 figures.',
          },
        ],
      },
      {
        tag: { label: 'Portrait reference', background: '#EAF3DE', color: '#27500A' },
        title: 'Unsplash + Pixabay — unsplash.com · pixabay.com',
        body: 'Free portrait photos with dramatic lighting for Week 11. Search "portrait side light" or "Rembrandt lighting portrait". Desaturate before drawing.',
        fixes: [
          {
            label: 'Week 11',
            body: 'Choose photos with clear shadow on one side of the face — avoid flat front lighting.',
          },
        ],
      },
    ],
  },
]

export const referenceInfoBox =
  'Rule for Phase 2: watch one value video, then immediately draw the concept in charcoal or pencil. Do not watch three videos and then draw. The value scale warm-up replaces "watching a tutorial" as session opener — tutorials supplement the warm-up, they do not replace drawing time.'
