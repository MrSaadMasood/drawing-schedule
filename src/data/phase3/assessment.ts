import type { RatingItem } from '../../types/guide'

export type PhaseAssessment = {
  overallScore: number
  followabilityScore: number
  verdict: string
  reason: string
  ratingItems: RatingItem[]
  infoBox: string
}

export const phase3Assessment: PhaseAssessment = {
  overallScore: 9.3,
  followabilityScore: 9.2,
  verdict:
    'Composition and narrative curriculum with practical spatial transfer — objects, figures, and complex scenes now use perspective rather than only demonstrating it.',
  reason:
    'Sixteen weeks. Weeks 1–2 establish thumbnails, focal point, and visual weight. Weeks 3–5 move from one-point and two-point scenes to ellipses, ordinary objects, and proportional depth. Week 6 compresses landscape repetition into one focused week. Week 7 keeps one master composition study. Weeks 8–10 teach framing, story, and posture. Week 11 places interacting figures at different depths. Week 12 builds a complex scene; Week 14 diagnoses and redraws it. Weeks 13 and 15 are composition and narrative peaks; Week 16 is buffer. Mood labs reduced to Weeks 1, 6, and 13.',
  ratingItems: [
    {
      score: '9.2/10',
      title: 'Followability — one job per session',
      body: 'No week asks for a developed scene plus an unrelated abstract page. Landscape volume is reduced. One master copy replaces two. Week 16 is the only general buffer; Week 14 is a specific scene correction.',
    },
    {
      score: '9.4/10',
      title: 'Mandatory thumbnails',
      body: 'The habit is established over Weeks 1–2, then used before every developed composition. The Week 13 showpiece caps thumbnails at 8 in 20 minutes so the drawing fits the session.',
    },
    {
      score: '9.4/10',
      title: 'Perspective transfer',
      body: 'One-point and two-point lead into cups, boxes, repeated objects, ellipses, people at depth, and a complex scene. Week 14 corrects evidence from the scene instead of repeating generic box drills.',
    },
    {
      score: '9.2/10',
      title: 'Composition + expression arc',
      body: 'Landscape, one master study, framing, posture, interaction, and narrative showpieces remain. Story and body language do most of the expressive work; three mood labs are enough.',
    },
    {
      score: '9.3/10',
      title: 'Alignment with roadmap',
      body: 'The Phase 2 carry list now has explicit homes: composition in Weeks 1–2, scene perspective in Weeks 3–5 and 12–14, gesture/posture in Weeks 10–11. Phase 4 receives automatic thumbnails and value plans.',
    },
  ],
  infoBox:
    'Pedagogical 9.3 / Followability 9.2. Week 16 is the buffer before paint. The gate is not perfect perspective; it is a readable scene whose spatial error you can name and correct.',
}
