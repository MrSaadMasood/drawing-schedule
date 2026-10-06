import type { RatingItem } from '../../types/guide'

export type PhaseAssessment = {
  overallScore: number
  followabilityScore: number
  verdict: string
  reason: string
  ratingItems: RatingItem[]
  infoBox: string
}

export const phase5Assessment: PhaseAssessment = {
  overallScore: 9.2,
  followabilityScore: 9.2,
  verdict:
    'Acrylic core for a full-time schedule — one patient painting, four series paintings, then a written choice of what to study next.',
  reason:
    'Thirteen weeks. Session A is one deliverable. Session B finishes that job or runs a single 20-minute problem study. Patient painting is Weeks 4–5 only, before the series. Series is four paintings, Weeks 5–8, with Week 8 Session B as the missing-painting buffer. Tools share one week. One Phase 1 expansion. Living-artist research and the method study are the two sessions of Week 11. Final painting is Week 12 then Week 13, different calendar days. Week 13 Session B is the retrospective and the next path. Imagination month, extra patient paintings, and weekly abstract mood boards are outside this phase.',
  ratingItems: [
    {
      score: '9.2/10',
      title: 'Followability — one job per session',
      body: 'No session asks for a patient painting, a series painting, and a mood board together. Sticky notes carry the patient painting and the final painting across days. Week 8 buffer replaces a missing series painting instead of adding a new theme.',
    },
    {
      score: '9.0/10',
      title: 'Four-painting series',
      body: 'Theme locks in Week 5 Session B. Paintings 2–4 each have their own Session A. Problem studies are Weeks 6–7 only, 20 minutes, one weakness.',
    },
    {
      score: '9.0/10',
      title: 'One patient painting',
      body: 'Three sessions across Weeks 4–5 on one board. The Week 3 glaze study is a different board, so the method is learned before the painting you care about.',
    },
    {
      score: '9.0/10',
      title: 'Voice, then a next path',
      body: 'Feeling is carried by the series intention and the single Phase 1 expansion. The retrospective assigns the next month — figures, places, stories, expressive series, or longer observation — instead of extending Phase 5.',
    },
    {
      score: '9.2/10',
      title: 'Alignment with the roadmap',
      body: 'Foundations stay in Phases 1–4. Phase 5 teaches acrylic and a small body of work, at about 3 hours a week, then stops so the next study can match what the work actually showed.',
    },
  ],
  infoBox:
    'Pedagogical 9.2 / Followability 9.2. Phase 5 is the acrylic foundation and a launch point. The roadmap total is 77 weeks, about 18 months at 3–4 hours a week.',
}
