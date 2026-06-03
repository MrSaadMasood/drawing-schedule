import type { RatingItem } from '../../types/guide'

export type PhaseAssessment = {
  overallScore: number
  followabilityScore: number
  verdict: string
  reason: string
  ratingItems: RatingItem[]
  infoBox: string
}

export const phase1Assessment: PhaseAssessment = {
  overallScore: 9.5,
  followabilityScore: 9.0,
  verdict: 'Pedagogically complete and now structured for completion — split weeks and explicit buffer.',
  reason:
    'Expanded from 13 to 15 weeks (Week 0 + 14) without removing core exercises. Still life / Loomis and thumbnails / narrative splits eliminate the highest dropout weeks. Week 14 buffer replaces hidden 13th-week gate. Session lengths standardised to 75 min. Learning outcomes unchanged: contour through review with emotion every week.',
  ratingItems: [
    {
      score: '9.0/10',
      title: 'Followability — split weeks + buffer',
      body: 'Week 8 still life-only and Week 9 Loomis-only fix the old stacked Week 8. Week 11 thumbnails and Week 12 narrative split the old Week 10 overload. Week 14 explicit buffer. Multiple pose sources reduce single-site dependency. Expanded: +2 weeks. Removed: nothing core.',
    },
    {
      score: '9.5/10',
      title: 'Week 0 — Pre-phase grip and calibration',
      body: 'Unchanged and still rare. 45-min sessions lower the barrier before 75-min standard weeks begin.',
    },
    {
      score: '9.5/10',
      title: 'Session A/B — one deliverable + emotion',
      body: 'Every Session B mandates 30–45 min emotion. Session A capped at one primary skill. Dual-track structure preserved from Week 1 through Week 14.',
    },
    {
      score: '9.5/10',
      title: 'Pedagogical sequence unchanged',
      body: 'Contour → gesture → negative space → shapes → measuring → perspective → still life → Loomis → texture → thumbnails → narrative → faces/hands → review. Same arc, more calendar time.',
    },
    {
      score: '9.0/10',
      title: 'Alignment with roadmap',
      body: 'Roadmap overview updated to 15 weeks. Milestone at Week 14 buffer matches guide gate. Emotion thread runs to Phase 5 expansions.',
    },
  ],
  infoBox:
    'Pedagogical score reflects curriculum quality. Followability score reflects expected completion rate. Phase 1 is designed to be finished — Week 14 buffer is part of the plan, not failure.',
}
