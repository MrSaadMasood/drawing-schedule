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
        body: 'One-point and two-point videos for Weeks 3–4 review. Watch before Session A if Phase 1 perspective felt shaky. Keep sessions to 75 min — do not binge the entire library.',
        fixes: [
          { label: 'Week 3–4', body: 'Perspective videos on one-point and two-point. Draw along, then put ruler away from Week 5 onward.' },
          { label: 'Link', body: 'ctrlpaint.com/library' },
        ],
      },
      {
        tag: { label: 'Gesture · Figure', background: '#FEF3E2', color: '#7A4510' },
        title: 'Proko + Love Life Drawing',
        body: 'Proko for figure structure in posture weeks. Love Life Drawing for expressive weight and body language — essential for Weeks 9–10 emotional posture work.',
        fixes: [
          { label: 'Weeks 9–10', body: 'Love Life Drawing "body weight" and "posture" videos before Session A.' },
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
        body: 'Edward Hopper for isolation and window light. Andrew Wyeth for ground-figure relationship. Sargent for portrait composition and negative space. Copy shapes only — Weeks 6 and 11.',
        fixes: [
          { label: 'Week 6', body: 'Hopper or Wyeth — squint copy, 3 shape masses maximum.' },
          { label: 'Week 11', body: 'Different artist from Week 6 — full paragraph analysis required.' },
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
        body: '2-minute gestures for posture warm-ups Weeks 9–10. Figures category. Draw on paper — screen is reference only.',
        fixes: [{ label: 'Weeks 9–10', body: '5–10 quick gestures before posture studies each Session A.' }],
      },
    ],
  },
]

export const referenceInfoBox =
  'Phase 3 rule: one composition video → immediately do 5 thumbnails applying it. Never watch a composition tutorial and then draw from imagination without thumbnail translation. The thumbnail is where composition is learned — the large drawing is where it is confirmed.'
