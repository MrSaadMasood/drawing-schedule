import type { GapCard } from '../../types/guide'

export const phase1Gaps: GapCard[] = [
  {
    tag: {
      label: 'Gap 1 — Anatomy',
      background: '#FCEBEB',
      color: '#791F1F',
    },
    title: 'Figures, faces, and hands',
    body: 'Previously missing entirely from Phase 1. Now integrated starting Week 5 and running every single week from there. The approach is: body as geometry first (primitive shapes, proportion ratios), then faces using the Loomis construction method, then hands as box-plus-cylinders. Detailed muscles and features come later — structure always precedes detail.',
    fixes: [
      {
        label: 'Phase 1',
        body: 'Weeks 5–12: 30–40 min anatomy per Session B every week — mannequin figures, hand studies, Loomis face construction. No features or detail yet — pure structure and proportion.',
      },
      {
        label: 'Phase 2',
        body: '1–2 dedicated figure sessions per week alongside charcoal value work. Gesture drawing (2–5 min poses) every session warm-up. Faces now get light and shadow applied using the same value skills learned on objects.',
      },
      {
        label: 'Phase 3',
        body: 'Full figure compositions with narrative intent. Characters in scenes. Emotional body posture as a storytelling tool — drawing someone angry vs sad using only posture, no face.',
      },
      {
        label: 'Resource',
        body: 'Andrew Loomis — "Figure Drawing for All It\'s Worth" (free PDF online). Proko on YouTube for gesture and anatomy — clearest anatomy teaching available, completely free.',
      },
    ],
  },
  {
    tag: {
      label: 'Gap 2 — Perspective',
      background: '#FCEBEB',
      color: '#791F1F',
    },
    title: 'One-point was not enough — two-point added',
    body: 'One-point perspective is introduced in Week 7 of Phase 1. Two-point perspective and box drills are added to Phase 3. The reason for this sequencing: perspective without a sense of proportion and composition is just mechanical drawing. You need proportion sense first (Phase 1), then you can use perspective as a compositional tool (Phase 3) rather than a rule to follow.',
    fixes: [
      {
        label: 'Phase 1',
        body: 'Week 7: one-point perspective — horizon line, vanishing point, boxes, simple room interior. 75 min total. Revisit briefly if it felt unclear in Week 12 review.',
      },
      {
        label: 'Phase 3',
        body: 'Weeks 3–4 of Phase 3: one-point perspective is briefly reviewed and applied to more complex compositional scenes (the Phase 1 Week 7 foundation is in place — this is deepening, not relearning). Two-point perspective is then introduced in the same two-week block: two vanishing points on the horizon, boxes from a corner edge, building exteriors and street scenes. By covering both in a single block, perspective transitions from a studied exercise into a compositional tool used intuitively from week 5 onward.',
      },
      {
        label: 'Resource',
        body: 'Ctrl+Paint.com — free perspective lessons. Scott Robertson\'s "How to Draw" covers perspective as thoroughly as any book available.',
      },
    ],
  },
  {
    tag: {
      label: 'Gap 3 — Feedback',
      background: '#FCEBEB',
      color: '#791F1F',
    },
    title: 'Working alone means repeating invisible mistakes',
    body: 'This is the most dangerous gap. You can do everything right technically and still plateau because the mistakes you make are literally invisible to you — your brain autocorrects what it sees. Feedback breaks this.',
    fixes: [
      {
        label: 'Immediate',
        body: 'The photograph trick: photograph your drawing, flip it horizontally (mirror it) in your phone gallery. Proportion errors that were invisible become immediately obvious. Do this every session from Week 1.',
      },
      {
        label: 'Monthly',
        body: 'Post one drawing per month to r/learnart or r/ArtFundamentals on Reddit. Write what you were trying to achieve and what feels wrong. The community gives specific, useful critique. Do not post just for compliments — ask specific questions.',
      },
      {
        label: 'Ongoing',
        body: 'Compare your drawing to the reference more critically: after every session, place your drawing next to the reference and find the 3 biggest differences. Write them down. This is self-critique — the most important skill an artist develops.',
      },
      {
        label: 'Discord',
        body: 'Ctrl+Paint Discord and DrawABox Discord both have critique channels where beginners post work and receive structured feedback. More active and faster than Reddit.',
      },
    ],
  },
  {
    tag: {
      label: 'Gap 4 — Master copying done correctly',
      background: '#FCEBEB',
      color: '#791F1F',
    },
    title: 'Mindless copying vs intentional analysis',
    body: 'The "copy master drawings" instruction was vague and could easily become mechanical tracing without understanding. The correct method is covered in detail in the next tab — but the core principle is: you are not copying the image, you are reverse-engineering a decision.',
    fixes: [
      {
        label: 'Schedule',
        body: 'Master copies are a recurring practice — first copy Week 4 Session B. Emotion pages run every Session B across all 14 working weeks. Phase 1 expanded to 15 weeks (Week 0 + 14) with split still life/Loomis and thumbnails/narrative weeks for followability.',
      },
      {
        label: 'Wrong way',
        body: 'Stare at the image, reproduce each line as accurately as possible, feel good that it "looks similar," move on. Zero learning extracted.',
      },
      {
        label: 'Right way',
        body: 'Before starting: spend 5 min just looking and writing down 3 observations. While copying: ask "why" for every decision. After: write a paragraph of what you discovered. See the next tab for the full method.',
      },
    ],
  },
]
