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
  overallScore: 9.3,
  followabilityScore: 9.2,
  verdict:
    'Value sequence with a scoped Week 2 — long Phase 1 weakness lists no longer become a second course',
  reason:
    'Twelve weeks. Session A is one deliverable. Week 2 is cylinder rotation and wedge hands/feet only. Shadow shapes and edges share Week 3. Forms, then one pencil still life and one charcoal still life. Week 8 applies value to foreshortened hands and feet. Master copy is analysis then finish plus a required memory map. Week 11 turns the head. Week 12 is the portrait and the Phase 3 carry list. Three value mood labs. Gesture is a ten-minute warm-up on three weeks. Composition and full scenes stay out.',
  ratingItems: [
    {
      score: '9.2/10',
      title: 'Followability — one job, a short list',
      body: 'A review that names six or seven weaknesses no longer dumps them into Weeks 1–2. Each leftover has a week or a later phase. Still life is one drawing per medium, with a correction session instead of a second full piece.',
    },
    {
      score: '9.4/10',
      title: 'Value, edges, and the sphere',
      body: 'Scales, silhouettes, hard versus soft edges, then pencil and charcoal forms with a look-cover-redraw pass. That is the painting foundation.',
    },
    {
      score: '9.2/10',
      title: 'Construction that value actually needs',
      body: 'Cylinders that hide a face, wedges for hands and feet, foreshortening with tone, and features that turn with the head. Not a full anatomy curriculum.',
    },
    {
      score: '9.0/10',
      title: 'Master copy and portrait',
      body: 'Two weeks for masses, then a memory map. Portrait is its own week. Likeness is allowed to stay inconsistent.',
    },
    {
      score: '9.3/10',
      title: 'Alignment with the roadmap',
      body: 'Phase 2 teaches light. Phase 3 teaches arranging a scene. The Week 12 carry list is the handoff, not a hidden extra month of Phase 2.',
    },
  ],
  infoBox:
    'Pedagogical 9.3 / Followability 9.2. Finish the 12 weeks, or use Week 12 Session B on a flat sphere or a muddy still life. Do not add complex perspective inside this phase. The roadmap total is 77 weeks, about 18 months at 3–4 hours a week.',
}
