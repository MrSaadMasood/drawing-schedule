import type { ResourceCard } from '../../types/guide'

export type ReferenceSection = {
  label: string
  resources: ResourceCard[]
}

export const referenceSections: ReferenceSection[] = [
  {
    label: 'YouTube — composition and perspective',
    resources: [
      {
        tag: { label: 'Composition · Thumbnails', background: '#EAF3DE', color: '#27500A' },
        title: 'Ctrl+Paint — Composition library',
        body: 'Free composition videos at ctrlpaint.com/library. Watch the Composition section during Weeks 1–2. Covers focal point, rule of thirds, leading lines, and framing — all directly used in this schedule.',
        fixes: [
          {
            label: 'Week 1–2',
            body: 'Composition library videos 1–5. Pause after each and do 3 thumbnails applying the concept.',
          },
          { label: 'Link', body: 'ctrlpaint.com/library' },
        ],
      },
      {
        tag: { label: 'Perspective', background: '#E6F1FB', color: '#0C447C' },
        title: 'Ctrl+Paint — Perspective library',
        body: 'One-point and two-point videos for Weeks 3–4. Use the ellipse and scale-at-depth lessons for Week 5. Keep sessions to 75 min — do not binge the library.',
        fixes: [
          { label: 'Weeks 3–4', body: 'One-point, then two-point. Draw along, then build the assigned observed scene.' },
          { label: 'Week 5', body: 'Ellipses, repeated objects at depth, and scaling people or posts. Use a ruler only for the lesson.' },
          { label: 'Link', body: 'ctrlpaint.com/library' },
        ],
      },
      {
        tag: { label: 'Gesture · Figure', background: '#FEF3E2', color: '#7A4510' },
        title: 'Proko + Love Life Drawing',
        body: 'Proko for figure structure. Love Life Drawing for expressive weight and body language — useful for Weeks 10–11.',
        fixes: [
          { label: 'Weeks 10–11', body: 'Love Life Drawing “body weight” and “posture” before Session A. Week 11 also scales figures into one environment.' },
          { label: 'Links', body: 'youtube.com/@ProkoTV · youtube.com/@LoveLifeDrawing' },
        ],
      },
    ],
  },
  {
    label: 'Master compositions to study',
    resources: [
      {
        tag: { label: 'Composition masters', background: '#F1EFE8', color: '#5F5E5A' },
        title: 'Hopper · Wyeth · Sargent — WikiArt + Met',
        body: 'Edward Hopper for isolation and window light. Andrew Wyeth for ground-figure relationship. Sargent for portrait composition and negative space. Phase 3 needs one full shape copy, in Week 7.',
        fixes: [
          { label: 'Week 7', body: 'Hopper, Wyeth, or Sargent — squint to 3–5 masses, trace the eye path, then apply one device to your own subject.' },
          { label: 'Links', body: 'wikiart.org · metmuseum.org/art/collection' },
        ],
      },
    ],
  },
  {
    label: 'Practice tools',
    resources: [
      {
        tag: { label: 'Gesture · Poses', background: '#EAF3DE', color: '#27500A' },
        title: 'Line-of-Action — line-of-action.com',
        body: '2-minute gestures for posture warm-ups Weeks 10–11. Figures category. Draw on paper — screen is reference only.',
        fixes: [{ label: 'Weeks 10–11', body: '5 quick gestures before posture or interaction work. Stop after 10 minutes.' }],
      },
    ],
  },
]

export const referenceInfoBox =
  'Phase 3 rule: one composition video → immediately do 5 thumbnails applying it. Never watch a composition tutorial and then draw from imagination without thumbnail translation. The thumbnail is where composition is learned — the large drawing is where it is confirmed.'
