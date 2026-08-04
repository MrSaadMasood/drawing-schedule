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
  overallScore: 9.4,
  followabilityScore: 9.0,
  verdict:
    'Composition and narrative curriculum with breathing room — expression via story/posture plus scheduled compositional mood labs.',
  reason:
    'Expanded to 16 weeks: thumbnail drill Week 1 alone; landscape thumbnails 10+10; Hopper trace Week 6, full copy Week 7; narrative split Weeks 8–9; showpiece and master copy on separate weeks; buffers Weeks 12 and 16. Max 12 thumbnails per 30 min. Session B abstract emotion reduced; narrative/posture weeks carry expression through craft; mood labs on Weeks 1–2, 5–7, 13.',
  ratingItems: [
    {
      score: '9.0/10',
      title: 'Followability — split peaks + clearer Session B jobs',
      body: 'Perspective and narrative weeks no longer stack a second abstract emotion page on top of already expressive craft. Perspective buffer Week 12 is spatial practice. Softened: audience review step.',
    },
    {
      score: '9.5/10',
      title: 'Mandatory thumbnails',
      body: 'Habit unchanged — introduced over two weeks instead of one overloaded Week 1.',
    },
    {
      score: '9.5/10',
      title: 'Perspective sequencing',
      body: 'Weeks 3–4 unchanged in intent; Session B is a second spatial pass. Week 12 buffer optional refresh.',
    },
    {
      score: '9.2/10',
      title: 'Landscape + Hopper + expression arc',
      body: 'Thumbnails → develop + trace → full copy preserved. Posture and narrative weeks are the high-ROI emotion training.',
    },
    {
      score: '9.2/10',
      title: 'Alignment with roadmap',
      body: '16-week overview and guide agree. Mood labs scheduled, not weekly filler. Phase 4 planning habit prepared in Week 15–16 review.',
    },
  ],
  infoBox:
    'Pedagogical 9.4 / Followability 9.0. Week 16 buffer before Phase 4 paint. Thumbnails must feel automatic, not precious.',
}
