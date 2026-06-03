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
  overallScore: 9.3,
  followabilityScore: 7.5,
  verdict: 'Voice-development capstone decoupled for completion — 24 weeks, six-painting series, photo retrospective.',
  reason:
    'Expanded to 24 weeks: six-painting series (Weeks 5–10); patient paintings A–D on dedicated weeks not parallel with series/imagination; imagination month Weeks 14–17 without problem studies; final painting Weeks 22–23 on different calendar days; Week 24 photo retrospective (10 best per phase). Session B emotion mandatory always — Week 21 included.',
  ratingItems: [
    {
      score: '7.5/10',
      title: 'Followability — longest phase, best structure yet',
      body: 'Still the lowest followability score — 24 weeks requires commitment — but patient/series/imagination collisions removed. Sticky-note dry-between protocol explicit. Floor-spread retrospective replaced with photos. Expanded: +4 weeks. Series: 5 → 6 paintings.',
    },
    {
      score: '9.5/10',
      title: 'Six-painting series',
      body: 'One extra week for series — stronger first-vs-last comparison. Problem studies from Week 6 only.',
    },
    {
      score: '9.5/10',
      title: 'Patient paintings decoupled',
      body: 'A: Weeks 4–5. B: Weeks 8–9. C: Weeks 12–13. D: after imagination. Final: Weeks 22–23. No longer stacked on series Session A.',
    },
    {
      score: '9.5/10',
      title: 'Imagination month + emotion arc',
      body: 'Four weeks no reference unchanged in intent. Phase 1 expansions Weeks 18–19. Emotion thread unbroken.',
    },
    {
      score: '9.0/10',
      title: 'Week 24 retrospective',
      body: 'Written themes + 10 photos per phase — controllable in any room. Same learning questions as old floor spread.',
    },
  ],
  infoBox:
    'Pedagogical 9.3 / Followability 7.5. Phase 5 is still grit-heavy by design — series lock, imagination month, multi-session final — but the schedule no longer asks for impossible weeks. ~21 months total roadmap.',
}
