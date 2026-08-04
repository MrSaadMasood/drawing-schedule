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
  followabilityScore: 8.5,
  verdict:
    'Voice and body-of-work phase — series, patients, imagination, and Phase 1 expansions preserved; Session B mood dose-controlled.',
  reason:
    'Expanded to 24 weeks: six-painting series (Weeks 5–10); patient paintings A–D on dedicated weeks not parallel with series/imagination; imagination month Weeks 14–17 without problem studies; final painting Weeks 22–23 on different calendar days; Week 24 photo retrospective (10 best per phase). Acrylic mood typically 20–30 min; imagination and Phase 1 expansions keep fuller voice practice. Stacked “third emotion block if overtime” guilt removed.',
  ratingItems: [
    {
      score: '8.5/10',
      title: 'Followability — still grit-heavy, less padded',
      body: '24 weeks still requires commitment, but Session B no longer demands 30–45 min abstract emotion on top of every series/patient stack. Sticky-note dry-between protocol explicit. Floor-spread retrospective replaced with photos.',
    },
    {
      score: '9.5/10',
      title: 'Six-painting series',
      body: 'Weeks 5–10 unchanged in intent. Problem studies from Week 6. Series can count as expressive work when Session B runs long.',
    },
    {
      score: '9.5/10',
      title: 'Patient paintings A–D',
      body: 'A: Weeks 4–5. B: Weeks 8–9. C: Weeks 12–13. D: after imagination. Final: Weeks 22–23. No longer stacked on series Session A.',
    },
    {
      score: '9.5/10',
      title: 'Imagination month + emotion arc',
      body: 'Four weeks no reference unchanged. Phase 1 expansions Weeks 18–19 kept. Voice practice concentrated where it earns its keep.',
    },
    {
      score: '9.0/10',
      title: 'Alignment with roadmap',
      body: '24-week overview matches. Dose-controlled mood aligns with sparse Phase 1 anchors and Phase 2 value mood labs.',
    },
  ],
  infoBox:
    'Pedagogical 9.3 / Followability 8.5. Phase 5 remains the grit phase by design — series lock, imagination month, multi-session final — but Session B is no longer empty weekly filler. ~21 months total roadmap.',
}
