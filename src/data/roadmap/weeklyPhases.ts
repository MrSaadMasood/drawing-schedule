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
      'Session A = one primary skill deliverable. Session B = mandatory emotion (30–45 min minimum) every week. Overloaded weeks were split for followability: still life and Loomis are separate weeks; thumbnails and narrative are separate weeks. Week 14 is an explicit buffer. Timed poses: line-of-action.com OR Proko free sample OR pause a YouTube figure video.',
    weeks: [
      {
        label: 'Week 0',
        title: 'Pre-phase — grip, marks, shapes',
        body: 'Two 45-min sessions. Pencil grip, pressure drills, freehand shapes, sketchbook barrier break. Do not skip even if you have drawn before.',
      },
      {
        label: 'Week 1–2',
        title: 'Contour + first gestures',
        body: 'Week 1: slow contour of your hand — 6 drawings, no shading. Week 2: 3 contours + 20–30 timed gestures from any pose source. Session B emotion every week.',
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
        body: 'Session A: boxes and room interior. Session B: memory place + emotion.',
      },
      {
        label: 'Week 8',
        title: 'First still life only (split week)',
        body: 'Session A: 75-min still life with 3 thumbnails — no Loomis this week. Session B: 45-min mandatory emotion.',
      },
      {
        label: 'Week 9',
        title: 'Loomis head structure only (split week)',
        body: 'Session A: 6 head constructions, no features. Session B: emotion.',
      },
      {
        label: 'Week 10',
        title: 'Texture and mark-making',
        body: 'Mark sampler + 3 texture studies Session A. Gestures Session B + emotion.',
      },
      {
        label: 'Week 11',
        title: 'Thumbnail marathon only (split week)',
        body: 'Max 12 thumbnails in 30 min, develop one 40 min. Session B: 45-min emotion. Thumbnail habit mandatory from here forward.',
      },
      {
        label: 'Week 12',
        title: 'Narrative panels only (split week)',
        body: 'Session A: 3-panel silent story. Session B: emotion.',
      },
      {
        label: 'Week 13',
        title: 'Faces and hands in depth',
        body: 'Session A: Loomis faces with features. Session B: 8 hand studies + emotion.',
      },
      {
        label: 'Week 14',
        title: 'Buffer + Phase 1 review',
        body: 'Session A: best still life 75 min. Session B: audit categories — fill any with fewer than 5 pages, write strengths/weak areas for Phase 2. Explicit buffer — not a hidden 13th week.',
      },
      {
        label: 'Every week',
        title: 'Emotion page (Session B)',
        body: '30–45 min minimum every week through Phase 5. Date every page. Phase 1 pages become watercolor (Phase 4) and acrylic (Phase 5) expansions.',
      },
    ],
    infoBox:
      'Phase 1 guide: 15 weeks total. One deliverable per Session A. Both documents agree on split weeks and Week 14 buffer.',
    milestone:
      'Milestone: 2 sketchbooks ~80% full, every category present (gestures, hands, faces, perspective, still lifes, thumbnails, emotion, master copies). Week 14 buffer fills gaps before Phase 2.',
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
    meta: 'Months 4–7 · 14 weeks · ~3.5 hrs/week · 2 × 75 min sessions',
    intro:
      'Every session opens with a 3-minute value scale warm-up. Session A = one value deliverable. Session B ends with 25–30 min charcoal emotion. Still life, hands, master copy, Loomis, and portrait each have dedicated weeks — not stacked.',
    weeks: [
      {
        label: 'Week 1–2',
        title: 'Value scale + Phase 1 gap sprint',
        body: 'Daily calibration in pencil and charcoal. Week 2 addresses two Phase 1 weak areas from Week 14 review.',
      },
      {
        label: 'Week 3–4',
        title: 'Shadow shapes',
        body: 'Week 3: silhouette shadows only. Week 4: graduated shadows. Single light source throughout.',
      },
      {
        label: 'Week 5–6',
        title: 'The sphere',
        body: 'Week 5: pencil spheres, no outline. Week 6: charcoal spheres + figure mannequin with value.',
      },
      {
        label: 'Week 7',
        title: 'Pencil still life only',
        body: '75-min tonal still life, thumbnails first, proportions secondary.',
      },
      {
        label: 'Week 8',
        title: 'Charcoal still life only',
        body: 'Full value range, kneaded eraser highlights. No hand studies this week.',
      },
      {
        label: 'Week 9',
        title: 'Hand value studies',
        body: '8 hand positions with value. Session B emotion close.',
      },
      {
        label: 'Week 10–11',
        title: 'Master value copy (two weeks)',
        body: 'Week 10: analysis + block-in. Week 11: completion + written observations. No Loomis same week.',
      },
      {
        label: 'Week 12',
        title: 'Loomis + face value intro',
        body: 'Head construction with one-side lighting in charcoal.',
      },
      {
        label: 'Week 13',
        title: 'Portrait value study',
        body: 'Side-lit portrait from photo — no outlines, pure value.',
      },
      {
        label: 'Week 14',
        title: 'Review + buffer',
        body: 'Best Phase 2 work + weak-area sprint. Optional buffer if sphere or portrait still weak.',
      },
      {
        label: 'Every week',
        title: 'Emotion in charcoal (Session B)',
        body: '25–30 min minimum at end of Session B — mood through value masses alone.',
      },
    ],
    infoBox:
      'Charcoal: work vertical or use wax paper under hand — fixative optional. Phase 2 guide: 14 weeks, one deliverable per Session A.',
    milestone:
      'Milestone: sphere reads 3D without outlines. One charcoal still life and one portrait with clear light/shadow.',
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
      'Thumbnails mandatory before developed work — max 12 per 30 min. Session B emotion every week. Weeks 12 and 16 are explicit buffers. Fresh-eyes review replaces showing work to someone else.',
    weeks: [
      {
        label: 'Week 1–2',
        title: 'Thumbnail habit + rule of thirds',
        body: 'Week 1: thumbnail drill only. Week 2: rule of thirds + one developed drawing.',
      },
      {
        label: 'Week 3–4',
        title: 'Perspective',
        body: 'Week 3: one-point review on full scenes. Week 4: two-point new. Ruler put away after Week 4.',
      },
      {
        label: 'Week 5–7',
        title: 'Landscape + master composition',
        body: 'Week 5: 10+10 landscape thumbnails. Week 6: develop landscape + 20-min Hopper trace. Week 7: full Hopper/Wyeth composition copy.',
      },
      {
        label: 'Week 8–9',
        title: 'Narrative (split)',
        body: 'Week 8: same moment, 4 framings + panel sequence. Week 9: single-image before/after story + critique.',
      },
      {
        label: 'Week 10–11',
        title: 'Posture + interaction',
        body: 'Week 10: five emotions without faces. Week 11: two figures interacting.',
      },
      {
        label: 'Week 12',
        title: 'Perspective buffer',
        body: 'Light one-point scene refresh if needed. Session B emotion.',
      },
      {
        label: 'Week 13–14',
        title: 'Showpiece + master copy (split)',
        body: 'Week 13: 75–90 min best composition Session A, emotion only Session B. Week 14: master composition copy Session A.',
      },
      {
        label: 'Week 15–16',
        title: 'Narrative showpiece + buffer review',
        body: 'Week 15: best narrative/posture redraw. Week 16: phase review, weak-area sprint, buffer.',
      },
      {
        label: 'Every week',
        title: 'Emotion with compositional intent',
        body: 'Notice where the eye enters and rests — even on pure feeling pages.',
      },
    ],
    infoBox:
      'Phase 3 guide: 16 weeks. Hopper trace Week 6, full copy Week 7. Narrative split across Weeks 8–9.',
    milestone:
      'Milestone: thumbnails automatic. One-point and two-point attempted. Week 16 buffer before Phase 4 paint.',
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
      'Work light to dark. Weeks 1–3 washes only (Week 3 = buffer gate). Color temperature notes from Week 4. Multi-layer work spans sessions — dry between. Session B emotion mandatory from Week 3. Weeks 19–20 are mud/overwork buffers.',
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
        title: 'Free watercolor emotion (Session B)',
        body: '45 min mandatory from Week 3. Unstructured — wet brush and feeling.',
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
    meta: 'Months 16–22 · 24 weeks · ~3 hrs/week · 2 × 75–90 min sessions',
    intro:
      'Session B emotion mandatory every week (30–45 min minimum). Six-painting series Weeks 5–10. Patient paintings on dedicated weeks — never parallel with series climax or imagination month. Final painting Weeks 22–23 on different calendar days. Week 24: photo retrospective of 10 best per phase — not a full floor spread.',
    weeks: [
      {
        label: 'Week 1–2',
        title: 'Thin washes vs thick impasto',
        body: 'Both extremes before the middle. Learn dry-dark shift early.',
      },
      {
        label: 'Week 3–5',
        title: 'Colour wheel, glaze, Patient A, series begins',
        body: 'Week 3: colour wheel. Week 4–5: underpaint/glaze + Patient A (3 sessions). Series theme locked Week 5, Painting 1.',
      },
      {
        label: 'Week 6–10',
        title: 'Six-painting series',
        body: 'One series painting per week Session A. Problem studies Session B from Week 6. Patient B Weeks 8–9 on dedicated sessions.',
      },
      {
        label: 'Week 11–13',
        title: 'Texture trio + Patient C',
        body: 'Week 11: palette knife. Week 12: glazing + Patient C start. Week 13: unconventional tools + Patient C finish.',
      },
      {
        label: 'Week 14–17',
        title: 'Imagination month',
        body: 'Four weeks no reference. Session B emotion only — no 20-min studies. Patient D after imagination (Weeks 17–18).',
      },
      {
        label: 'Week 18–19',
        title: 'Phase 1 emotion acrylic expansions',
        body: 'One Phase 1 emotion page expanded per week — pencil to full acrylic.',
      },
      {
        label: 'Week 20–21',
        title: 'Living artist study',
        body: 'Week 20: research Session A. Week 21: method-influenced study + mandatory emotion Session B.',
      },
      {
        label: 'Week 22–24',
        title: 'Final painting + retrospective',
        body: 'Weeks 22–23: final painting sessions on different calendar days. Week 24: photograph 10 best per phase + written themes.',
      },
      {
        label: 'Every week',
        title: 'Free acrylic emotion (Session B)',
        body: 'Never optional. Technical work without this becomes performance.',
      },
    ],
    infoBox:
      'Acrylics dry darker — test dry patches. Patient paintings use sticky-note next steps between calendar weeks.',
    milestone:
      'Milestone: body of work with recurring themes. Week 24 retrospective defines what you paint next.',
    milestoneBorder: '#cccaf4',
    milestoneColor: '#3C3489',
  },
]
