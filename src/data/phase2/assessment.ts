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
  overallScore: 9.6,
  followabilityScore: 9.0,
  verdict:
    'Atelier-grade value sequence with dedicated weeks and six medium-tied value mood labs instead of weekly abstract emotion.',
  reason:
    'Expanded to 14 weeks: pencil still life, charcoal still life, and hands each standalone; master copy spans Weeks 10–11; Loomis and portrait separated. Value scale warm-up every session preserved. Session B emotion replaced by skill densification on non-lab weeks; value mood labs on Weeks 1, 4, 6, 8, 11, 14 keep charcoal-as-feeling practice.',
  ratingItems: [
    {
      score: '9.0/10',
      title: 'Followability — decoupled heavy weeks + clearer Session B',
      body: 'One major deliverable per week. Mood labs are scheduled and medium-tied (value masses), not weekly filler. Week 14 review/buffer explicit. Non-lab Session Bs add gesture, form, still life, and anatomy volume.',
    },
    {
      score: '10/10',
      title: 'Value scale warm-up — every session',
      body: 'Unchanged non-negotiable 3-minute calibration. Grit stays on the person; schedule no longer fights it with stacked Session A work.',
    },
    {
      score: '9.5/10',
      title: 'Sphere and shadow sequence',
      body: 'Weeks 3–6 unchanged in intent. Foundation for all painting work preserved; Week 5 Session B now has more form-value reps.',
    },
    {
      score: '9.5/10',
      title: 'Master copy two-week split',
      body: 'Analysis Week 10, completion Week 11 — prevents the old Week 9–10 copy + Loomis collision. Mood lab lands on Week 11 completion week.',
    },
    {
      score: '9.2/10',
      title: 'Alignment with roadmap',
      body: '14-week overview matches guide. Six mood labs required at gate (not fourteen emotion pages). Phase 1 weak-area sprint Week 2 still opens the phase.',
    },
  ],
  infoBox:
    'Pedagogical 9.6 / Followability 9.0. Complete all 14 weeks before Phase 3 — or use Week 14 buffer on spheres/portrait if needed. Gate requires all 6 value mood labs.',
}
