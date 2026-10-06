import type { WeekDetail } from '../../types/guide'

const month4 = { label: 'Month 4', background: '#E6F1FB', color: '#0C447C' }
const month5 = { label: 'Month 5', background: '#D4E8F8', color: '#0A3A6B' }
const month6 = { label: 'Month 6', background: '#C2DFF5', color: '#082E55' }

const POSE_SOURCE =
  'timed poses: line-of-action.com OR Proko free sample OR pause a YouTube figure drawing video'

export const phase2Weeks: WeekDetail[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Charcoal setup + value scale',
    focus: 'New medium · even steps from paper-white to near-black · first value mood lab',
    badge: month4,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Value scales in pencil and charcoal setup',
        steps: [
          'Set up a permanent single-lamp workspace — one directional light for the whole phase. Lamp left or right, not overhead',
          '3-minute warm-up: a 5-step value scale in HB, then a 10-step scale if the five steps are already even. Paper-white is the lightest step',
          'Draw 2 complete 10-step scales in pencil on one page. Check for jumps from mid-grey to black',
          'One long gradient strip: feather-light to black and back',
          'Introduce materials: vine charcoal (light), compressed charcoal (darks), blending stump, kneaded eraser, charcoal paper',
          'Light touch on vine. Tilt the paper or put wax paper under the drawing hand to limit smudging',
          'Final 15 min: one 10-step scale in vine charcoal only — no blending yet. Even steps are the only goal',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Charcoal scales + value mood lab #1',
        steps: [
          '3-minute charcoal value scale warm-up',
          '2 full 10-step scales on charcoal paper. On the second, blend steps 4–8 only',
          'Lift a highlight: press the kneaded eraser into the lightest box until paper shows through',
          'Photograph the scales. If two neighbouring steps look the same, that pair is the next drill — do not start a third scale for polish',
          'Final 25 min: value mood lab #1 of 3 — one page of mood using only value patches, no subject, no outlines. At least 5 distinct values',
          'Date the page and write one feeling word. Stop when the page is full, not when it looks like a picture',
        ],
      },
    ],
    stopRule:
      'Scales end when the assigned scales exist or 30 minutes pass. Mood lab: when the page is full. Do not polish the mood page. Do not start a Phase 1 weakness sprint this week.',
    note: 'Buy charcoal paper before this week. Regular sketchbook paper will not hold charcoal. Vertical board or wax paper under the hand keeps the page clean. Fixative is optional. If your Phase 1 review listed many weak skills, leave that list alone until Week 2 — Week 2 names the only two you practise now.',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Only two Phase 1 gaps — cylinders and wedges',
    focus: 'Cylinder rotation and hidden planes · hand and foot as wedges at different angles · nothing else from the review list',
    badge: month4,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Rotating cylinders — what stays visible, what hides',
        steps: [
          '3-minute pencil value scale warm-up',
          'Read this once: if your Phase 1 review listed foreshortened fingers, turning faces, gesture, composition, and complex scenes, those are not this session. This session is cylinders only',
          'No ruler, no vanishing-point diagram. Freehand. The goal is the form turning, not a perspective plate',
          '15 min: 12 cylinders. Change the axis every time — toward you, away, across, tilted up, tilted down. 1 min each. Do not erase',
          'On each cylinder, the end ellipses must change with the axis. If both ends look like the same oval, the cylinder is not rotating',
          '20 min: 8 larger cylinders. Draw a light center line along the axis. Mark which end ellipse is closer. Cross out the far ellipse if that end would be hidden by the body of the cylinder. Hidden = not drawn, or drawn as a light ghost line you then stop using',
          '20 min: 6 connected pairs — two cylinders sharing a joint (finger segments, forearm + upper arm, a bent tube). The second cylinder must inherit the first’s direction instead of sitting beside it as a new tube',
          'Final 10 min: circle 3 cylinders that turn in space and 3 that stay flat. Write one sentence on what hid correctly and one on what you still drew that should have disappeared',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Hand and foot as wedges — rotation, not finish',
        steps: [
          '3-minute charcoal or pencil value scale warm-up',
          'Think of a nose: a wedge with a top plane, two side planes, and a bottom plane. A palm is that wedge. A foot is that wedge. The wedge points. That is the whole lesson',
          '12 min: 6 palm wedges only — no fingers. Angles: top view, side, three-quarter, palm toward you, palm away, tilted as if resting on a table. 2 min each',
          '15 min: add cylinder fingers to 4 of those palms. Keep the fingers as tubes on the wedge. No nails, no skin',
          '18 min: 6 foot wedges — no toes first, then add simple toe-block masses on 3 of them. Angles: from above, from the inside, from the outside, heel toward you, toes toward you, standing side view',
          '15 min: 2 simplified hands and 2 simplified feet that combine wedge + cylinders. 4 min each. Stop even if wrong',
          'Final 8 min: write which angle hid a plane correctly and which angle still looks like a symbol. Do not redraw them',
        ],
      },
    ],
    stopRule:
      'Do not add a third weakness this week. Do not practise a full scene in perspective. Do not start a face. Quantity of rotations matters more than a pretty hand. If a construction looks wrong, leave it and do the next angle.',
    note: 'Foreshortened fingers at several depths are Week 8, with value. Feature placement on a turning head is Week 11. Gesture is a 10-minute warm-up on Weeks 5, 8, and 11. Composition and building a whole scene in perspective wait for Phase 3. Week 2 is not a repair of all of Phase 1.',
    milestone:
      'Week 2 is done when you have attempted many cylinder angles, marked at least a few hidden ends, and built hands and feet as wedges plus tubes at several rotations. Accuracy is not the gate. Freezing or going back to a flat symbol is the only reason to repeat Session A or B once.',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Shadow shapes and edges',
    focus: 'Shadows as flat shapes · hard cast edge vs soft turning edge · single lamp',
    badge: month4,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Shadow silhouettes, then one overlapping pair',
        steps: [
          '3-minute pencil value scale warm-up',
          '5 everyday objects under the lamp — mug, shoe, fruit, bottle, anything with a clear cast shadow',
          'Draw only the cast shadow and the form shadow as flat dark shapes — not the object outline',
          '4 objects, 12 min each. If you draw the object edge, flip the page and start that object again',
          'Last object (12 min): two objects whose shadows overlap. Draw the combined shadow as one mass',
          'Deliverable: one page of 5 shadow-only silhouettes. Photograph before Session B',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Hard edge vs soft edge on the same objects',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Same lamp. 3 objects, 18 min each',
          'Fill the shadow, but now use a gradient: soft where the form turns away from the light, hard where the cast shadow hits the table',
          'Label on each study: highlight, light, midtone, core shadow, cast shadow. Write which edge is hard and which is soft, and why',
          'Final 8 min: squint. Do the dark masses still read as shapes? If everything is one grey, the edges were blended into mud — lift a highlight and stop',
        ],
      },
    ],
    stopRule:
      '12 min per silhouette in Session A. 18 min per object in Session B. If blending turns to mud, stop blending and lift with the kneaded eraser. Do not add a figure or a hand this week.',
    note: 'Edges are a Phase 2 basic. A sharp cast shadow and a soft turning shadow are different facts. You will need both on the still life, the hands, and the portrait.',
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Basic forms in pencil — no outline',
    focus: 'Sphere, cube, cylinder, cone under one light · look, cover, redraw',
    badge: month4,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Pencil forms — value only',
        steps: [
          '3-minute pencil value scale warm-up',
          'Light from upper left, same lamp as Week 1. No outline stroke around the form — the value change is the edge',
          'One sphere, one cube, one cylinder, one cone. 15 min each. Place highlight, light, midtone, core shadow, reflected light if you see it, and cast shadow',
          'After each form: photograph and flip the photo. Does it still read as volume?',
          'Last 8 min: write which form stayed flattest and which value step you skipped',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Look, cover, redraw the weakest form',
        steps: [
          '3-minute pencil value scale warm-up',
          'Set the weakest form from Session A under the lamp again. Draw it once while looking — 15 min',
          'Cover the object and your drawing. Redraw the same form from memory — 15 min. Same light direction',
          'Uncover. Write the largest lighting error: missing core shadow, outline creeping back, or the ellipse/face that should have hidden',
          'One more observed pass of that form only — 15 min. Fix that one error. Do not start a still life',
          'If the cylinder hid the far ellipse better than Week 2, write that. If not, that is the note for Week 5 charcoal',
        ],
      },
    ],
    stopRule:
      'Four forms in Session A, then one form studied three ways in Session B. Do not require three polished spheres. Two diagnosed attempts teach more than a page of similar spheres.',
    milestone:
      'End of Week 4: you can shade a sphere, a cube, and a cylinder without a dark outline, and you have redrawn one of them from memory. Value scales from here on are once per week unless the steps start jumping again.',
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Basic forms in charcoal + mannequin with light',
    focus: 'Full charcoal range · kneaded-eraser highlights · one simple figure with a shadow side',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Charcoal sphere, cylinder, cube',
        steps: [
          '3-minute charcoal value scale warm-up — this is the weekly scale if Session B skips it',
          'Same upper-left light. No outlines. Compressed charcoal in the core shadow only. Highlights lifted last, or left as paper',
          'Sphere, cylinder, cube — 18 min each',
          'Compare with the Week 4 pencil photos. Which medium separates light and dark more clearly?',
          'Final 12 min: memory redraw of the sphere only. Note what you forgot',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Gesture with a shadow side + one mannequin + mood lab #2',
        steps: [
          `10 min gesture: 2-minute poses from ${POSE_SOURCE} — 5 figures. Capture lean and weight. After the line of action, put a simple shadow on one side of the torso. This is the gesture work for Phase 2 — not a 30-second marathon`,
          '35 min: 3 mannequin figures (oval head, box torso, cylinder limbs) under the lamp or from a pose. One light from the left. Shadow on the right of every mass. No face, no hands. ~10 min each',
          'Final 25 min: value mood lab #2 of 3 — light mass and dark mass, almost no midtone. Date and one word',
        ],
      },
    ],
    stopRule:
      'Gesture stops at 10 minutes. Mannequins stop at 10 minutes each. Mood lab is 25 minutes. Do not turn Session B into a finished figure drawing.',
    note: 'A flat sphere now means a flat portrait in Week 12. Gesture in this phase is lean plus a shadow side. Perfect gesture pages are not the assignment.',
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Pencil still life — one serious drawing',
    focus: 'Three-value thumbnail · one tonal still life · midpoint photograph',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'One pencil still life',
        steps: [
          '3-minute value scale if it has been more than a week, otherwise 1 minute of pressure gradients',
          '3–4 objects, one lamp, at least one rounded form (a sphere problem)',
          '3 thumbnails, 2 min each — flat light and dark masses only, not outlines of objects',
          'Choose one. The remaining time is one still life. Value first. Proportions second. No outline dependence',
          'At 35 min: photograph, flip, and desaturate. Name the largest error: value, proportion, or edge. Correct only that. Stop at 75 min',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Correct the weakest passage — not a second still life',
        steps: [
          'Read the error you named in Session A',
          '20 min: redraw only that passage (one object, or only the shadow masses) at a larger size',
          'Look, cover, redraw that passage from memory — 15 min — then compare',
          'Write three lines: what the midpoint photo showed, what you changed, what is still wrong',
          'Do not start a new full still life. Charcoal gets the same setup next week',
        ],
      },
    ],
    stopRule:
      'One still life this week. Session B is a correction of a passage. If you want a second arrangement, that is Week 7 in charcoal, not a third 75-minute pencil drawing today.',
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Charcoal still life — same setup if you can',
    focus: 'Full value range · lifted highlights · same objects isolate the medium',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'One charcoal still life',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Same objects and lamp as Week 6 if the setup still exists. If not, a new 3–4 object group. 3 thumbnails first — flat masses',
          '75 min on charcoal paper. Highlights lifted. Darkest darks in compressed charcoal. Stop on the timer',
          'Photograph at 35 min and at 75 min. Write one sentence: what the camera showed that your eye missed',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Shadow-mass study + written comparison',
        steps: [
          '10 min: redraw only the shadow masses of the setup — no object detail',
          'Compare that study with the still life. Do the darks sit in the same places?',
          'Place the Week 6 pencil still life beside the charcoal. Write 3 differences (range, edges, mud, highlights)',
          'If you can, post one of the two still lifes for critique (r/learnart or a drawing Discord) with one question: “Where do the values collapse?”',
          'Remaining time: lift two highlights and push one core shadow on the charcoal still life — then stop. Do not start a second full still life',
        ],
      },
    ],
    stopRule:
      'Session A is 75 minutes on the nose. Session B is diagnosis and a small correction. Mood labs are not this week.',
    milestone:
      'End of the still-life pair: one pencil still life, one charcoal still life, and a written comparison. If both drawings are one middle grey, repeat Week 7 Session A before hands.',
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Hands and feet with value — including foreshortening',
    focus: 'Week 2 wedges now get light · two or three depths of foreshortening · not twelve polished hands',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Four hands, two of them foreshortened',
        steps: [
          '10 min gesture: 2-minute poses — 5 figures, shadow on one side. Then stop',
          'Your hand under the lamp. Wedge palm first, cylinder fingers second, then value on the shadow side only',
          'Hand 1: side view, 12 min. Hand 2: three-quarter, 12 min',
          'Hand 3: fingers pointing toward you (foreshortened). The near knuckles are large. The far palm hides behind them. 12 min',
          'Hand 4: a deeper foreshortening — fist coming at you, or two fingers toward you and the rest bent. Hide the planes the cylinder lesson hid. 12 min',
          'No nails. Write which foreshortened hand still looks like a symbol',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Feet as wedges + one foreshortened hand repeated',
        steps: [
          'Your foot or a shoe under the lamp. Wedge first, then a simple shadow side. 4 angles, 8 min each — side, top, heel toward you, toes toward you',
          '25 min: the worst foreshortened hand from Session A, drawn 3 times. Each time ask: which cylinder end is hidden? Which wedge plane faces the light?',
          'Last 5 min: compare with Week 2 line wedges. Write two things value made clearer and one rotation that is still a guess',
        ],
      },
    ],
    stopRule:
      'Four hands and four feet is enough. Do not add a fifth hand because one looked bad. Gesture is the 10-minute open, then it stops. This week does not include a face.',
    note: 'Several depths of foreshortening in one week is enough to see the problem. Mastery of every finger angle is not a Phase 2 gate. If the near finger still has no hiding, that is the note for Week 12, not a reason to add a hand week.',
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Master value copy — analysis and block-in',
    focus: 'Three to five value masses · Caravaggio or Rembrandt · no finishing',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Look, map, block in',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Choose a Caravaggio or Rembrandt with a strong single light (WikiArt, Met Open Access). Desaturate it',
          '15 min looking only: squint. Mark the lightest area, the darkest area, and 3 major value zones',
          'Sketch those zones as a small flat thumbnail on the margin',
          '45 min: charcoal block-in — masses only, no faces, no fabric detail. Stop when the timer ends',
          'Write 3 observations about the light. An unfinished mass copy is a full lesson',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Deepen the masses — still no finish',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Continue the same block-in. Match value relationships, not likeness. Soft and hard edges only where the master has them',
          '10 min: cover the reference and sketch the 3–5 value zones from memory. What stuck?',
          'Do not start Loomis or a portrait this week',
        ],
      },
    ],
    stopRule:
      'No detail after time runs out. Write observations instead. Completion is Week 10.',
    note: 'Use the “How to copy masters in value” tab. Resist finishing. The scaffold has to read when squinted beside the original.',
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Master copy completion + memory map',
    focus: 'Edges and transitions · written analysis · hide the source and redraw the design',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Finish the copy — edges, not new areas',
        steps: [
          '3-minute charcoal value scale warm-up',
          '52 min: finish the Week 9 copy. Refine edges and transitions only. Do not invent new detail',
          'Ask at every soft edge: why is it soft? At every hard shadow: what blocks the light?',
          'Write a paragraph on the facing page: one technique that was new, one surprising decision, one thing to use on the Week 11 heads',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Memory value map — required',
        steps: [
          'Put the master image and your copy out of sight',
          '15 min: redraw only the 3–5 value zones from memory, thumbnail size',
          'Uncover. Write what you forgot — that is what you traced without understanding',
          'Remaining time: one more pass on a single edge family (only the hard casts, or only the soft turns) on the copy, then stop',
          'No Loomis this week',
        ],
      },
    ],
    stopRule:
      'The memory map is not optional. If you catch yourself inventing new areas on the copy, return to mass relationships.',
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Heads that turn — features stay on the face plane',
    focus: 'Loomis construction · rotation · one-side light · stiff features are a perspective problem on the head',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Three angles, then features on the turning plane',
        steps: [
          '10 min gesture: 2- or 5-minute poses — 4 figures, shadow side on the torso. Then stop',
          'Loomis review (8 min): sphere, face plane, thirds. Eyes at halfway on the full head',
          'Head 1: three-quarter, structure only, 10 min. Head 2: profile, 10 min. Head 3: tilted up or down, 10 min. No features yet',
          'On the three-quarter and the tilt only: add simple features that sit on the face plane — if the head turns, the eye line, nose, and mouth turn with it. They do not stay in a front-view pattern glued onto a turned skull',
          'One-side light on all three: shadow covers the far side. No outline around the head. Value does the contour',
          'Write which angle made the features slide back to a front-view symbol',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'The stiff angle, then a memory head',
        steps: [
          'Redraw the weakest rotation from Session A three times — 12 min each. Features after structure. Same one-side light',
          '12 min: one head from memory, three-quarter, shadow on one side. Write what proportion or plane you lost',
          'Choose a side-lit portrait photo for Week 12 (clear shadow, not flat front light). Desaturate it. Do not start the portrait today',
        ],
      },
    ],
    stopRule:
      'Structure before features every time. If the profile is an outline and the three-quarter has front-view eyes, stop adding detail and rebuild the face plane. This week is not a likeness week.',
    note: 'Stiff features on a turned head are the same class of error as a cylinder whose far ellipse never hides. You are placing marks on a rotating plane, not decorating a symbol. Full portrait likeness is Week 12, and it will still be inconsistent. That is expected.',
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Portrait value study + Phase 2 close',
    focus: 'Side-lit head · no outlines · name what still belongs to Phase 3',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Charcoal portrait from a side-lit photo',
        steps: [
          '3-minute charcoal value scale warm-up',
          '3 value-map thumbnails — flat masses, 2 min each',
          'Remaining time: one charcoal portrait. No outline strokes. Build from dark masses. Lift highlights last',
          'At 35 min: photograph and flip. Separate the error: construction, proportion, value, or edge. Correct only that family',
          'Stop at 75 min. An unfinished portrait with correct masses beats a finished one built on outlines',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Review, mood lab #3, and the Phase 3 list',
        steps: [
          'If the sphere, the still life, or the portrait is still a flat grey, use 30 min on that one gap and write “buffer” on the page',
          'Otherwise: 15 min looking through Phase 2. Write 3 value skills that improved and 1 that is still weakest — be specific',
          'Final 25 min: value mood lab #3 of 3. Date and one word',
          'Write a Phase 3 carry list. Put these here if they are still weak — do not invent extra Phase 2 weeks for them: composition (thumbnails that choose a focal point), one-point and two-point used inside a real scene, a room or street that feels like space, figures that belong in that space. Gesture can keep improving as a Phase 3 warm-up. Foreshortened hands and turning heads stay as notes, not as a new Phase 2 block',
          'Write 2 habits for Phase 3: three-value thumbnails before a developed drawing, and the midpoint photograph',
        ],
      },
    ],
    stopRule:
      'Session A is 75 minutes whether it is a portrait or a named buffer. Session B writing happens. Do not start Phase 3 with a sphere that has no light side and no dark side. Do not add a Week 13 of complex perspective inside this phase.',
    milestone:
      'Phase 2 is complete when: a sphere, cube, and cylinder read as volume without outlines; you can name a hard edge and a soft edge; one pencil still life and one charcoal still life exist; Week 2 cylinders and wedges were attempted; Week 8 applied value to foreshortened hands and to feet; a master copy has a memory map; three turning heads were attempted with features on the face plane; one side-lit portrait exists; three value mood labs exist (Weeks 1, 5, 12). Composition and full scenes in perspective are Phase 3 work. They are not unfinished Phase 2 homework.',
  },
]
