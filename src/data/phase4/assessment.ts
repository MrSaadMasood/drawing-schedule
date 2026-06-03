import type { RatingItem } from '../../types/guide'

export type PhaseAssessment = {
  overallScore: number
  followabilityScore: number
  verdict: string
  reason: string
  ratingItems: RatingItem[]
  infoBox: string
}

export const phase4Assessment: PhaseAssessment = {
  overallScore: 9.2,
  followabilityScore: 8.0,
  verdict: 'Watercolor planning phase with dry-time in the calendar and explicit buffer weeks.',
  reason:
    'Expanded to 20 weeks: Week 3 wash buffer gate; mixing grid split Weeks 4–5; 3 skies per week (Weeks 6–7); emotion translation one page per week (Weeks 12–13); light study reduced to two controllable indoor setups (Weeks 14–15); careful/loose split Weeks 16–17; buffers Weeks 19–20. Color temp notes from Week 4. Session B emotion mandatory from Week 3.',
  ratingItems: [
    {
      score: '8.0/10',
      title: 'Followability — paint physics respected',
      body: 'Multi-layer work documented to span sessions with dry gaps. Buckling paper → repeat wash week. Four-scene outdoor study replaced with two indoor/lamp setups — slight temperature nuance trade for completion rate. Expanded: +4 weeks.',
    },
    {
      score: '9.5/10',
      title: 'Weeks 1–3 washes + gate',
      body: 'Week 3 explicit buffer before mixing — prevents muddy landscape rush. Emotion starts Week 3 Session B.',
    },
    {
      score: '9.0/10',
      title: 'Still life twice + emotion arc',
      body: 'Weeks 10–11 unchanged in pedagogical intent. Weeks 12–13 one Phase 1 page each — less cram, same cross-medium thread.',
    },
    {
      score: '8.5/10',
      title: 'Light study (reduced)',
      body: 'Two paintings instead of four — pedagogical score trade. Followability gain for people without stable outdoor access. Warm/cool contrast still taught.',
    },
    {
      score: '9.0/10',
      title: 'Alignment with roadmap',
      body: '20-week overview matches guide. Buffers 19–20 named in schedule. Phase 5 inherits planning habit.',
    },
  ],
  infoBox:
    'Pedagogical 9.2 / Followability 8.0. Watercolor remains the hardest phase to follow — supplies and dry time — but 20 weeks reduces rush. Use Weeks 19–20 if mud persists.',
}
