import type { WeeklyPhaseOverview } from '../../types/guide'

export const weeklyPhaseOverviews: WeeklyPhaseOverview[] = [
  {
    id: 'p1',
    phaseNumber: 1,
    badge: { label: 'Phase 1', background: '#444441', color: '#F1EFE8' },
    headerBg: '#F1EFE8',
    headerBorder: '#ddd9d0',
    title: 'Seeing and mark-making — pencil only',
    meta: 'Months 1–4 · Week 0 + 14 weeks · ~3 hrs/week · 2 × 75 min sessions (Week 0: 45 min)',
    intro:
      'Session A = one primary skill deliverable. Session B = skill densification most weeks, with sparse expressive/emotion anchors on Weeks 1, 8, 11, and 14. Overloaded weeks were split for followability: still life and Loomis are separate weeks; thumbnails and narrative are separate weeks. Week 14 is an explicit buffer. Timed poses: line-of-action.com OR Proko free sample OR pause a YouTube figure video.',
    weeks: [
      {
        label: 'Week 0',
        title: 'Pre-phase — grip, marks, shapes',
        body: 'Two 45-min sessions. Pencil grip, pressure drills, freehand shapes, sketchbook barrier break. Do not skip even if you have drawn before.',
      },
      {
        label: 'Week 1–2',
        title: 'Contour + first gestures',
        body: 'Week 1: slow contour of your hand — 6 drawings, no shading + first expressive mark anchor. Week 2: gestures Session A; object contours Session B (skill densification).',
      },
      {
        label: 'Week 3–4',
        title: 'Negative space + line quality + master copy',
        body: 'Week 3: negative space only — 4 drawings. Week 4: line quality drills + same object 5 ways; Session B first master copy (Rembrandt or Da Vinci, 45 min).',
      },
      {
        label: 'Week 5–6',
        title: 'Shapes, proportion, anatomy begins',
        body: 'Week 5: primitive shapes + mannequin figures Session B. Week 6: still life with pencil measuring + hand studies Session B.',
      },
      {
        label: 'Week 7',
        title: 'One-point perspective',
        body: 'Session A: boxes and room interior. Session B: memory place with perspective (full skill block).',
      },
      {
        label: 'Week 8',
        title: 'First still life only (split week)',
        body: 'Session A: 75-min still life with 3 thumbnails — no Loomis this week. Session B: second still life + expressive mark anchor (25 min).',
      },
      {
        label: 'Week 9',
        title: 'Loomis head structure only (split week)',
        body: 'Session A: 6 head constructions, no features. Session B: more Loomis angles (skill densification).',
      },
      {
        label: 'Week 10',
        title: 'Texture and mark-making',
        body: 'Mark sampler + 3 texture studies Session A. Structured figure gestures Session B (full).',
      },
      {
        label: 'Week 11',
        title: 'Thumbnail marathon only (split week)',
        body: 'Max 12 thumbnails in 30 min, develop one 40 min. Session B: thumbnail speed round + expressive mark anchor (25 min). Thumbnail habit mandatory from here forward.',
      },
      {
        label: 'Week 12',
        title: 'Narrative panels only (split week)',
        body: 'Session A: 3-panel silent story. Session B: panel revision (narrative is the expression work).',
      },
      {
        label: 'Week 13',
        title: 'Faces and hands in depth',
        body: 'Session A: Loomis faces with features. Session B: 12 hand studies (full skill block).',
      },
      {
        label: 'Week 14',
        title: 'Buffer + Phase 1 review',
        body: 'Session A: best still life 75 min. Session B: audit categories — fill any with fewer than 5 pages, write strengths/weak areas for Phase 2. Explicit buffer — not a hidden 13th week.',
      },
      {
        label: 'Every week',
        title: 'Sparse expressive anchors (Session B)',
        body: 'Weeks 1, 8, 11, 14 only (25–30 min). Date every page. These seed Phase 4 watercolor and Phase 5 acrylic translations — not weekly abstract filler.',
      },
    ],
    infoBox:
      'Phase 1 guide: 15 weeks total. One deliverable per Session A. Both documents agree on split weeks and Week 14 buffer.',
    milestone:
      'Milestone: 2 sketchbooks ~80% full, skill categories present (gestures, hands, faces, perspective, still lifes, thumbnails, narrative, master copies) plus ≥4 dated expressive anchors. Week 14 buffer fills gaps before Phase 2.',
    milestoneBorder: '#c5dcb2',
    milestoneColor: '#27500A',
  },
  {
    id: 'p2',
    phaseNumber: 2,
    badge: { label: 'Phase 2', background: '#0C447C', color: '#E6F1FB' },
    headerBg: '#E6F1FB',
    headerBorder: '#c2d8ef',
    title: 'Value, light and shadow — pencil and charcoal',
    meta: 'Months 4–7 · 12 weeks · ~3 hrs/week · 2 × 75 min sessions',
    intro:
      'Session A is one deliverable. If the Phase 1 review listed many weaknesses, ignore the pile. Week 2 is cylinder rotation and wedge hands/feet only. Value scales every session in Weeks 1–4, then once a week. Mood labs on Weeks 1, 5, and 12. Gesture is a 10-minute open on Weeks 5, 8, and 11. Composition and full scenes in perspective are written down for Phase 3, not practised here.',
    weeks: [
      {
        label: 'Week 1',
        title: 'Value scales and charcoal',
        body: 'Pencil and charcoal scales, even steps, first mood lab. No weakness sprint.',
      },
      {
        label: 'Week 2',
        title: 'Only two gaps — cylinders and wedges',
        body: 'Session A: rotating cylinders and hidden ends. Session B: palm and foot as wedges at several angles. Nothing else from the review list.',
      },
      {
        label: 'Week 3',
        title: 'Shadow shapes and edges',
        body: 'Flat shadow silhouettes, then hard cast edges versus soft turning edges. One lamp.',
      },
      {
        label: 'Week 4–5',
        title: 'Forms in pencil, then charcoal',
        body: 'Sphere, cube, cylinder, cone without outlines. Look, cover, redraw. Week 5 adds a mannequin with a shadow side and mood lab #2.',
      },
      {
        label: 'Week 6–7',
        title: 'One still life per medium',
        body: 'Pencil in Week 6, charcoal in Week 7 on the same setup if you can. Session B corrects a passage instead of starting a second full drawing.',
      },
      {
        label: 'Week 8',
        title: 'Hands and feet with value',
        body: 'Wedge plus cylinders, then light. Two foreshortened hands. Four foot angles. Gesture is the 10-minute open only.',
      },
      {
        label: 'Week 9–10',
        title: 'Master value copy',
        body: 'Week 9: three-to-five masses, no finish. Week 10: edges, then hide the source and redraw the design from memory.',
      },
      {
        label: 'Week 11',
        title: 'Heads that turn',
        body: 'Three-quarter, profile, and tilt. Features sit on the face plane. One-side light. Likeness waits.',
      },
      {
        label: 'Week 12',
        title: 'Portrait and the Phase 3 list',
        body: 'Side-lit charcoal portrait. Mood lab #3. Write what still belongs to Phase 3: composition, rooms and streets, figures in a place.',
      },
    ],
    infoBox:
      'Charcoal: work vertical or use wax paper under the hand. Fixative is optional. Phase 2 guide: 12 weeks, one deliverable per Session A.',
    milestone:
      'Milestone: forms read without outlines. One charcoal still life and one portrait with a clear light side and dark side. Composition stays a Phase 3 problem.',
    milestoneBorder: '#c2d8ef',
    milestoneColor: '#0C447C',
  },
  {
    id: 'p3',
    phaseNumber: 3,
    badge: { label: 'Phase 3', background: '#27500A', color: '#EAF3DE' },
    headerBg: '#EAF3DE',
    headerBorder: '#c5dcb2',
    title: 'Composition and storytelling — still pencil/charcoal',
    meta: 'Months 7–11 · 16 weeks · ~3.5 hrs/week · 2 × 75 min sessions',
    intro:
      'Thumbnails are mandatory before developed work — max 12 per 30 min. Weeks 3–5 move from one-point and two-point scenes to objects, ellipses, and proportional depth. Week 11 places figures at different distances. Week 12 builds one complex scene; Week 14 corrects it. Mood labs are only Weeks 1, 6, and 13. Narrative and posture carry the other expression work. Week 16 is the buffer.',
    weeks: [
      {
        label: 'Week 1–2',
        title: 'Thumbnail habit + rule of thirds',
        body: 'Week 1: thumbnail drill only. Week 2: rule of thirds + one developed drawing.',
      },
      {
        label: 'Week 3–4',
        title: 'Perspective in observed scenes',
        body: 'Week 3: one-point room at two eye levels. Week 4: two-point corner at two eye levels. Furniture, doorways, and objects share the horizon.',
      },
      {
        label: 'Week 5',
        title: 'Objects and proportional depth',
        body: 'Mug, bottle, and boxes on one table plane; ellipses follow their cylinders. Repeated objects and people scale into distance.',
      },
      {
        label: 'Week 6–7',
        title: 'Landscape + one master study',
        body: 'Week 6: 10 landscape thumbnails, one developed landscape, mood lab #2. Week 7: one Hopper/Wyeth/Sargent shape copy, then apply one device to your subject.',
      },
      {
        label: 'Week 8–9',
        title: 'Narrative (split)',
        body: 'Week 8: same moment, 4 framings + panel sequence. Week 9: single-image before/after story + critique.',
      },
      {
        label: 'Week 10–11',
        title: 'Posture + figures in space',
        body: 'Week 10: five emotions without faces. Week 11: two figures interacting inside a simple scene, with ground contact and scale at depth.',
      },
      {
        label: 'Week 12',
        title: 'One complex scene',
        body: 'Foreground, middle ground, background; object, ellipse, doorway/building plane, and figure. Session B diagnoses one spatial failure.',
      },
      {
        label: 'Week 13–14',
        title: 'Showpiece + spatial correction',
        body: 'Week 13: composition showpiece and mood lab #3. Week 14: redraw the Week 12 or 13 scene with one named correction, then transfer it to a small new scene.',
      },
      {
        label: 'Week 15–16',
        title: 'Narrative showpiece + buffer review',
        body: 'Week 15: best narrative/posture redraw. Week 16: phase review, weak-area sprint, buffer.',
      },
      {
        label: 'Expression',
        title: 'Story, posture, and three mood labs',
        body: 'Narrative and posture teach feeling through craft. Abstract compositional mood appears only in Weeks 1, 6, and 13.',
      },
    ],
    infoBox:
      'Phase 3 guide: 16 weeks. One master study only. Practical spatial work receives Weeks 3–5, 11–12, and 14. Week 16 is the buffer.',
    milestone:
      'Milestone: thumbnails automatic; focal point intentional; one-point and two-point used in scenes; objects and figures share readable depth; one complex scene corrected before paint.',
    milestoneBorder: '#c5dcb2',
    milestoneColor: '#27500A',
  },
  {
    id: 'p4',
    phaseNumber: 4,
    badge: { label: 'Phase 4', background: '#633806', color: '#FAEEDA' },
    headerBg: '#FAEEDA',
    headerBorder: '#ecd5a4',
    title: 'First contact with paint — watercolor',
    meta: 'Months 11–16 · 20 weeks · ~3.5 hrs/week · 2 × 75 min sessions',
    intro:
      'Work light to dark. Weeks 1–3 washes only (Week 3 = buffer gate). Color temperature notes from Week 4. Multi-layer work spans sessions — dry between. Wet-brush mood on designated weeks (25 min), not every Session B. Weeks 19–20 are mud/overwork buffers.',
    weeks: [
      {
        label: 'Week 1–3',
        title: 'Washes + buffer gate',
        body: 'Weeks 1–2: flat and graded washes, no subjects. Week 3: consolidation buffer — one streak-free flat wash required before mixing.',
      },
      {
        label: 'Week 4–5',
        title: 'Color mixing grid (split)',
        body: 'Half palette Week 4, complete grid Week 5. Wet-on-wet paired. Color temp note starts Week 4 Session A.',
      },
      {
        label: 'Week 6–7',
        title: 'Sky studies',
        body: 'Three sky paintings per week — six total before landscapes.',
      },
      {
        label: 'Week 8–9',
        title: '3-color landscapes',
        body: 'Week 8: warm triad. Week 9: cool triad. Thumbnails + value sketch before each.',
      },
      {
        label: 'Week 10–11',
        title: 'Still life twice',
        body: 'Same setup two weeks — attempt 1 then attempt 2 with written comparison.',
      },
      {
        label: 'Week 12–13',
        title: 'Phase 1 emotion in watercolor',
        body: 'One Phase 1 emotion page repainted per week — not two moods crammed together.',
      },
      {
        label: 'Week 14–15',
        title: 'Light study (controllable)',
        body: 'Same indoor corner twice: morning/cool light vs golden hour or lamp — two paintings, not four outdoor scenes.',
      },
      {
        label: 'Week 16–17',
        title: 'Careful vs loose',
        body: 'Week 16: most planned painting. Week 17: same subject type, loose and fast.',
      },
      {
        label: 'Week 18–20',
        title: 'Review + buffers',
        body: 'Week 18: review + Phase 5 prep notes. Weeks 19–20: explicit buffer for mud, overwork, or wash repeats.',
      },
      {
        label: 'Every week',
        title: 'Wet-brush mood (Session B)',
        body: '25 min on designated weeks. Translations Weeks 12–13 kept in full. Alternate weeks densify skies, landscapes, still life.',
      },
    ],
    warnBox:
      'If paper buckles, stop and fix supplies — repeat the wash week. Never add wet paint to fix a wet mistake — let it dry.',
    infoBox:
      'Phase 4 guide: 20 weeks. Dry-time built into calendar — do not stack wet layers in one sitting unless the week says so.',
    milestone:
      'Milestone: believable sky and atmosphere. You can name your most common mud source. Buffers 19–20 if needed.',
    milestoneBorder: '#ecd5a4',
    milestoneColor: '#633806',
  },
  {
    id: 'p5',
    phaseNumber: 5,
    badge: { label: 'Phase 5', background: '#3C3489', color: '#EEEDFE' },
    headerBg: '#EEEDFE',
    headerBorder: '#cccaf4',
    title: 'Acrylic — building, experimenting, your voice',
    meta: 'Months 16–19 · 13 weeks · ~3 hrs/week · 2 × 75–90 min sessions',
    intro:
      'One deliverable per session. Weeks 1–2 are thin versus thick, then mixing and the dry-dark shift. Week 3 is a glaze study on its own board. One patient painting spans Weeks 4–5. A four-painting series runs Weeks 5–8, with 20-minute problem studies only in Weeks 6–7 and a buffer in Week 8 if a painting is missing. Week 9 is the tool sampler. Week 10 is one Phase 1 emotion expansion. Week 11 is one living artist. The final painting starts in Week 12 and finishes in Week 13 on a different calendar day. Week 13 Session B chooses what you study next.',
    weeks: [
      {
        label: 'Week 1–2',
        title: 'Thin, thick, then mixing',
        body: 'Week 1: thin washes Session A, impasto Session B. Week 2: mixes from primaries, then one board that tests how much darker the paint dries.',
      },
      {
        label: 'Week 3–5',
        title: 'Glaze study, then one patient painting',
        body: 'Week 3: underpaint and glaze one study board across two days. Weeks 4–5: one patient painting, three sessions, sticky notes between them. Series Painting 1 is Week 5 Session B, after the patient painting is finished.',
      },
      {
        label: 'Week 6–8',
        title: 'Four-painting series',
        body: 'One series painting per Session A. Theme stays locked. Session B in Weeks 6–7 is a 20-minute study of one weakness. Week 8 Session B reflects, or paints the missing board.',
      },
      {
        label: 'Week 9',
        title: 'Knife and other tools',
        body: 'Session A: palette knife only. Session B: card, plastic, sponge, or rag — then one passage with the tool you would use again.',
      },
      {
        label: 'Week 10',
        title: 'One Phase 1 emotion expansion',
        body: 'Session A: one Phase 1 page as an acrylic painting, feeling rather than a tracing. Session B: write what acrylic added. No second expansion.',
      },
      {
        label: 'Week 11',
        title: 'Living artist — process, then your subject',
        body: 'Session A: research and three process notes. Session B: their sequence on your subject. Write what to adopt, reject, and leave.',
      },
      {
        label: 'Week 12–13',
        title: 'Final painting + retrospective',
        body: 'Week 12 Session A starts the final painting. Session B plans the next day and does not touch the board. Week 13 Session A finishes it. Session B is the photo-and-writing retrospective and the next path.',
      },
    ],
    infoBox:
      'Acrylics dry darker — test a dry patch. The patient painting and the final painting use sticky-note next steps, and each return is a different calendar day.',
    milestone:
      'Milestone: acrylic you can handle, four paintings on one theme, and a written decision about what to study next.',
    milestoneBorder: '#cccaf4',
    milestoneColor: '#3C3489',
  },
]
