import type { RatingItem } from '../../types/guide'

export type PhaseAssessment = {
  overallScore: number
  followabilityScore: number
  verdict: string
  reason: string
  ratingItems: RatingItem[]
  infoBox: string
}

export const phase3Assessment: PhaseAssessment = {
  overallScore: 9.3,
  followabilityScore: 8.5,
  verdict: 'Composition and narrative curriculum with breathing room — 16 weeks, two buffer weeks.',
  reason:
    'Expanded to 16 weeks: thumbnail drill Week 1 alone; landscape thumbnails 10+10; Hopper trace Week 6, full copy Week 7; narrative split Weeks 8–9; showpiece and master copy on separate weeks; buffers Weeks 12 and 16. Max 12 thumbnails per 30 min. Fresh-eyes review replaces showing work to others.',
  ratingItems: [
    {
      score: '8.5/10',
      title: 'Followability — split narrative and composition peaks',
      body: 'Old Week 1 and Week 5 thumbnail marathons and old Week 11 double-header eliminated. Perspective buffer Week 12 catches stragglers without shame. Expanded: +4 weeks. Softened: audience review step.',
    },
    {
      score: '9.5/10',
      title: 'Mandatory thumbnails',
      body: 'Habit unchanged — now introduced over two weeks instead of one overloaded Week 1.',
    },
    {
      score: '9.5/10',
      title: 'Perspective sequencing',
      body: 'Weeks 3–4 unchanged in intent. Week 12 buffer optional refresh.',
    },
    {
      score: '9.0/10',
      title: 'Landscape + Hopper arc',
      body: 'Roadmap Week 5–7 block: thumbnails → develop + trace → full copy. Clearer than old Week 5–6 split.',
    },
    {
      score: '9.0/10',
      title: 'Alignment with roadmap',
      body: '16-week overview and guide agree. Emotion every Session B. Phase 4 planning habit prepared in Week 15–16 review.',
    },
  ],
  infoBox:
    'Pedagogical 9.3 / Followability 8.5. Week 16 buffer before Phase 4 paint. Thumbnails must feel automatic, not precious.',
}
