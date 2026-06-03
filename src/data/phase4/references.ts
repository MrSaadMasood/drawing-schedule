import type { ResourceCard } from '../../types/guide'

export type ReferenceSection = {
  label: string
  resources: ResourceCard[]
}

export const referenceSections: ReferenceSection[] = [
  {
    label: 'YouTube — watercolor primary teachers',
    resources: [
      {
        tag: { label: 'Watercolor · Beginner', background: '#FAEEDA', color: '#633806' },
        title: 'The Mind of Watercolor (Steve Mitchell)',
        body: 'Honest beginner-friendly watercolor — washes, mixing, loose landscapes, and the psychology of not overworking. Watch flat wash and graded wash videos before Week 1. Watch "muddy colour" videos before Week 3 mixing.',
        fixes: [
          { label: 'Weeks 1–2', body: 'Search "flat wash" and "graded wash" — paint along on the same day.' },
          { label: 'Weeks 5–8', body: 'Loose landscape and limited palette videos.' },
          { label: 'Link', body: 'youtube.com/@TheMindofWatercolor' },
        ],
      },
      {
        tag: { label: 'Watercolor · Skies', background: '#E6F1FB', color: '#0C447C' },
        title: 'Crisp Watercolour (Steve Mitchell) + Nana Mason',
        body: 'Sky and cloud specialists. Watch one cumulus cloud tutorial before Week 5 Session A. Sunset and storm cloud videos before Week 6.',
        fixes: [
          { label: 'Weeks 5–6', body: 'One sky tutorial per session type — then paint from memory, not continuous copying.' },
        ],
      },
      {
        tag: { label: 'Value · Planning', background: '#EAF3DE', color: '#27500A' },
        title: 'Ctrl+Paint — Value section (preview for planning)',
        body: 'Despite the digital focus, the Value library explains light and shadow planning that applies directly to watercolor value sketches before painting. Watch during Week 7 if still life whites are getting lost.',
        fixes: [{ label: 'Link', body: 'ctrlpaint.com/library' }],
      },
    ],
  },
  {
    label: 'Books and sites — optional depth',
    resources: [
      {
        tag: { label: 'Reference', background: '#F1EFE8', color: '#5F5E5A' },
        title: 'Handprint.com — watercolour information',
        body: 'Technical reference on pigments, transparency, and mixing. Use reactively when a specific colour goes mud — look up that pigment\'s properties. Not a course — a dictionary.',
        fixes: [{ label: 'Link', body: 'handprint.com/HP/WCL/water.html' }],
      },
    ],
  },
  {
    label: 'Supplies reminder',
    resources: [
      {
        tag: { label: 'Phase 4 kit', background: '#FAEEDA', color: '#633806' },
        title: 'Watercolor set · 300gsm paper · 3 brushes',
        body: 'Winsor & Newton Cotman or White Nights student set. Fabriano or Canson cold press 300gsm minimum. Round brushes 2, 6, 12 synthetic. Buy paper before paint runs out — running out of paper causes rationing which causes timid washes.',
        fixes: [
          { label: 'Week 1', body: 'Have full kit before first wash session. Do not use drawing paper.' },
          { label: 'Cost', body: 'Rs. 4,000–9,000 total (see Roadmap → What to buy).' },
        ],
      },
    ],
  },
]

export const referenceInfoBox =
  'Rule for Phase 4: one video → one painting exercise the same day. Never binge tutorials. Weeks 1–2 should have zero tutorial subjects — only wash drills even if videos show landscapes. The first 2 weeks of washes are the foundation; skipping them produces muddy everything afterward.'
