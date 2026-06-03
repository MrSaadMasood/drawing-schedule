import type { RatingItem } from '../../types/guide'

export type PhaseAssessment = {
  overallScore: number
  followabilityScore: number
  verdict: string
  reason: string
  ratingItems: RatingItem[]
  infoBox: string
}

export const phase2Assessment: PhaseAssessment = {
  overallScore: 9.5,
  followabilityScore: 8.5,
  verdict: 'Atelier-grade value sequence with dedicated weeks for still life, copy, and portrait.',
  reason:
    'Expanded to 14 weeks: pencil still life, charcoal still life, and hands each standalone; master copy spans Weeks 10–11; Loomis and portrait separated. Value scale warm-up and emotion close every Session B preserved. Charcoal setup simplified (vertical/wax paper, fixative optional).',
  ratingItems: [
    {
      score: '8.5/10',
      title: 'Followability — decoupled heavy weeks',
      body: 'Old Weeks 7–11 stacked still life, hands, master copy, Loomis, and portrait. New map: one major deliverable per week. Session B always ends 25–30 min emotion. Week 14 review/buffer explicit. Expanded: +2 weeks.',
    },
    {
      score: '10/10',
      title: 'Value scale warm-up — every session',
      body: 'Unchanged non-negotiable 3-minute calibration. Grit stays on the person; schedule no longer fights it with stacked Session A work.',
    },
    {
      score: '9.5/10',
      title: 'Sphere and shadow sequence',
      body: 'Weeks 3–6 unchanged in intent. Foundation for all painting work preserved.',
    },
    {
      score: '9.5/10',
      title: 'Master copy two-week split',
      body: 'Analysis Week 10, completion Week 11 — prevents the old Week 9–10 copy + Loomis collision. Better extraction time for written observations.',
    },
    {
      score: '9.0/10',
      title: 'Alignment with roadmap',
      body: '14-week overview matches guide. Emotion every Session B. Phase 1 weak-area sprint Week 2 still opens the phase.',
    },
  ],
  infoBox:
    'Pedagogical 9.5 / Followability 8.5. Complete all 14 weeks before Phase 3 — or use Week 14 buffer on spheres/portrait if needed.',
}
