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
  overallScore: 9.3,
  followabilityScore: 9.0,
  verdict:
    'Watercolor planning phase with dry-time in the calendar, Phase 1 translations preserved, and wet-brush mood on designated weeks.',
  reason:
    'Expanded to 20 weeks: Week 3 wash buffer gate; mixing grid split Weeks 4–5; 3 skies per week (Weeks 6–7); emotion translation one page per week (Weeks 12–13); light study reduced to two controllable indoor setups (Weeks 14–15); careful/loose split Weeks 16–17; buffers Weeks 19–20. Color temp notes from Week 4. Session B wet-brush mood is 25 min on designated weeks — alternate weeks densify skies, landscapes, still life, and light study.',
  ratingItems: [
    {
      score: '9.0/10',
      title: 'Followability — paint physics + clearer Session B',
      body: 'Multi-layer work documented to span sessions with dry gaps. Removing weekly 45-min abstract emotion reduces burnout during wash and landscape weeks. Two indoor light setups preserved.',
    },
    {
      score: '9.5/10',
      title: 'Weeks 1–3 washes + gate',
      body: 'Week 3 explicit buffer before mixing — prevents muddy landscape rush. First wet-brush mood begins Week 3 at 25 min.',
    },
    {
      score: '9.2/10',
      title: 'Still life twice + emotion translation arc',
      body: 'Weeks 10–11 still life intent preserved. Weeks 12–13 Phase 1 → watercolor translations kept in full — the high-ROI emotion thread.',
    },
    {
      score: '9.0/10',
      title: 'Light study (controllable)',
      body: 'Two paintings (morning + golden hour). Warm/cool contrast still taught. Session B comparison densification on Week 15.',
    },
    {
      score: '9.2/10',
      title: 'Alignment with roadmap',
      body: '20-week overview matches guide. Buffers 19–20 named. Phase 5 inherits planning habit and translation corpus.',
    },
  ],
  infoBox:
    'Pedagogical 9.3 / Followability 9.0. Watercolor remains supply-sensitive — use Weeks 19–20 if mud persists. Translations Weeks 12–13 are non-negotiable for the cross-medium arc.',
}
