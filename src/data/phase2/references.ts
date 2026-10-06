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
        body: 'Watch the shading and Loomis head videos before Week 11. Figure Drawing Fundamentals is enough for the 10-minute gesture opens on Weeks 5, 8, and 11.',
        fixes: [
          {
            label: 'Before Week 11',
            body: 'Portrait Drawing: "How to Shade a Drawing" and the Loomis head videos — features on a turning plane, then one-side light.',
          },
          {
            label: 'Weeks 5, 8, 11',
            body: 'One short gesture video if the 10-minute warm-up still freezes you. Then draw. Do not watch through the whole warm-up.',
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
            label: 'Week 1',
            body: 'Watch the Value section videos 1–6. Draw along with each — pause and shade what you just saw. Week 2 is construction, not more videos.',
          },
          { label: 'Link', body: 'ctrlpaint.com/library' },
        ],
      },
      {
        tag: { label: 'Charcoal · Process', background: '#F1EFE8', color: '#5F5E5A' },
        title: 'GnomoniC Art Tutorials — charcoal process',
        body: 'Search "GnomoniC charcoal portrait" or "charcoal still life" — full real-time process from blank paper to finished tonal drawing. Watch one complete video before the Week 6 still life.',
        fixes: [
          {
            label: 'Before Week 6',
            body: 'One full charcoal still life process video — note when they lift highlights versus add darks.',
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
            body: '2-minute poses for the 10-minute opens on Weeks 5 and 8. 2- or 5-minute poses on Week 11. Then stop and start the week’s drawing.',
          },
        ],
      },
      {
        tag: { label: 'Portrait reference', background: '#EAF3DE', color: '#27500A' },
        title: 'Unsplash + Pixabay — unsplash.com · pixabay.com',
        body: 'Free portrait photos with dramatic lighting for Week 11. Search "portrait side light" or "Rembrandt lighting portrait". Desaturate before drawing.',
        fixes: [
          {
            label: 'Week 12',
            body: 'Choose the photo in Week 11 Session B. Clear shadow on one side of the face — avoid flat front lighting.',
          },
        ],
      },
    ],
  },
]

export const referenceInfoBox =
  'Rule for Phase 2: watch one value video, then immediately draw the concept in charcoal or pencil. Do not watch three videos and then draw. The value scale warm-up replaces "watching a tutorial" as session opener — tutorials supplement the warm-up, they do not replace drawing time.'
