import type { RoadmapAssessment } from '../../types/guide'

export const roadmapAssessment: RoadmapAssessment = {
  overallScore: 9.3,
  verdict: 'Complete fundamentals arc — revised for followability over calendar speed',
  reason:
    'Expanded from ~73 to 89 weeks (~21 months at 3–4 hrs/week). Overloaded weeks split across Phases 1–5. Buffer weeks explicit in every paint phase. Session A = one deliverable; Session B emotion mandatory. Uncontrollable steps softened (outdoor light study, floor retrospective, audience review). Pedagogical sequence unchanged: see → value → compose → plan in watercolor → voice in acrylic. Expected completion rate significantly higher than the original 18-month compression.',
  ratingCards: [
    {
      score: 9.5,
      phaseLabel: 'Phase 1',
      phaseColor: '#444441',
      name: 'Seeing and mark-making',
      note: '15 weeks. Followability 9.0. Split still life/Loomis and thumbnails/narrative. Week 14 buffer. Pedagogy preserved.',
    },
    {
      score: 9.5,
      phaseLabel: 'Phase 2',
      phaseColor: '#0C447C',
      name: 'Value, light and shadow',
      note: '14 weeks. Followability 8.5. Still life, hands, master copy, Loomis, portrait each own week. Value scale daily unchanged.',
    },
    {
      score: 9.3,
      phaseLabel: 'Phase 3',
      phaseColor: '#27500A',
      name: 'Composition and storytelling',
      note: '16 weeks. Followability 8.5. Thumbnail cap 12/30 min. Buffers Weeks 12 & 16. Narrative split Weeks 8–9.',
    },
    {
      score: 9.2,
      phaseLabel: 'Phase 4',
      phaseColor: '#633806',
      name: 'Watercolor',
      note: '20 weeks. Followability 8.0. Wash buffer Week 3. Dry-time in calendar. Two light studies not four. Buffers 19–20.',
    },
    {
      score: 9.3,
      phaseLabel: 'Phase 5',
      phaseColor: '#3C3489',
      name: 'Acrylic — your voice',
      note: '24 weeks. Followability 7.5. Six-painting series. Patients decoupled. Photo retrospective Week 24. Still the grit phase — by design.',
    },
  ],
}
