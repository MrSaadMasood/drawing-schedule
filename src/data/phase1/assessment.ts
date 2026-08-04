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
  overallScore: 9.4,
  followabilityScore: 9.2,
  verdict:
    'Pedagogically complete foundations arc — skill-dense Session Bs with sparse expressive anchors instead of weekly abstract emotion.',
  reason:
    'Expanded from 13 to 15 weeks (Week 0 + 14) without removing core exercises. Still life / Loomis and thumbnails / narrative splits eliminate the highest dropout weeks. Week 14 buffer replaces hidden 13th-week gate. Session lengths standardised to 75 min. Session B now prioritises craft densification; expressive/emotion anchors on Weeks 1, 8, 11, 14 preserve Phase 4/5 translation seeds.',
  ratingItems: [
    {
      score: '9.2/10',
      title: 'Followability — split weeks + clearer Session B jobs',
      body: 'Week 8 still life-only and Week 9 Loomis-only fix the old stacked Week 8. Week 11 thumbnails and Week 12 narrative split the old Week 10 overload. Week 14 explicit buffer. Removing weekly abstract emotion reduces Session B friction for foundation-focused learners.',
    },
    {
      score: '9.5/10',
      title: 'Week 0 — Pre-phase grip and calibration',
      body: 'Unchanged and still rare. 45-min sessions lower the barrier before 75-min standard weeks begin.',
    },
    {
      score: '9.4/10',
      title: 'Session A/B — one deliverable + sparse expressive anchors',
      body: 'Session A capped at one primary skill. Session B is skill densification most weeks. Four dated expressive/emotion anchors (Weeks 1, 8, 11, 14) keep the paint-translation thread without weekly filler.',
    },
    {
      score: '9.5/10',
      title: 'Pedagogical sequence unchanged',
      body: 'Contour → gesture → negative space → shapes → measuring → perspective → still life → Loomis → texture → thumbnails → narrative → faces/hands → review. Same arc, denser craft time in Session B.',
    },
    {
      score: '9.2/10',
      title: 'Alignment with roadmap',
      body: 'Roadmap overview matches 15 weeks and sparse Phase 1 emotion policy. Milestone at Week 14 buffer matches guide gate. Expression deepens in Phase 2 value mood labs and later medium-tied work.',
    },
  ],
  infoBox:
    'Pedagogical score reflects curriculum quality. Followability score reflects expected completion rate. Phase 1 is designed to be finished — Week 14 buffer is part of the plan, not failure. If you already completed Weeks 1–12 under the old weekly emotion policy, keep those pages; they exceed the new 4-anchor minimum.',
}
