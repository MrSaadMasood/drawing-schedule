import type { WeekDetail } from '../../types/guide'

const POSE_SOURCE =
  'timed poses: line-of-action.com OR Proko free sample OR pause a YouTube figure drawing video'

export const phase1Weeks: WeekDetail[] = [
  {
    id: 'week-0',
    weekNumber: 0,
    title: 'Before you begin: grip, marks, and shapes',
    focus:
      'Foundation: pencil control · pressure gradients · basic shape vocabulary · hand warm-up habit',
    badge: {
      label: 'Pre-phase',
      background: '#F3EDF7',
      color: '#4A2770',
    },
    sessions: [
      {
        label: 'Session A — 45 min',
        title: 'Pencil grip + pressure control drills',
        steps: [
          'Switch from writing grip to drawing grip: hold the pencil 3–4 cm from the tip, lightly, resting on the side of your finger — not gripped tight like a pen. Your arm moves, not just your wrist.',
          'Fill half a page with long parallel straight lines freehand — arm movement only, no ruler. Aim for smooth, not perfect.',
          'Fill a quarter page with smooth arcs and curves — single strokes, no going back over a line to fix it',
          'Pressure gradient drill: draw a single long line from feather-light to full pressure and back to feather-light — do this 10 times per row',
          'Test all your pencils (HB, 2B, 4B if you have them) — fill a small labeled box with each grade, going from lightest to darkest pressure. Know which tool does what before Week 1.',
          'Final 5 min: fill a row with small freehand circles — loose, fast, no erasing. Wrist loose, grip light.',
        ],
      },
      {
        label: 'Session B — 45 min',
        title: 'Basic shape vocabulary + sketchbook barrier break',
        steps: [
          'Draw 30 freehand circles — all different sizes, drawn fast. Do not try to make them round. The goal is looseness and confidence, not accuracy.',
          'Draw 20 ellipses (flat ovals at different angles) — these are the circles you will use for bottles, cups, and cylinders from Week 5 onward',
          'Draw 10 freehand cubes in 3D — any angle, do not measure. These do not need to look right. You are just moving the pencil through space.',
          'Shape combinations: draw a cylinder (rectangle + 2 ellipses), a cone, and a sphere outline — one of each, then repeat 5 times across the page in different sizes',
          'Sketchbook barrier: fill an entire page with deliberate scribbles, random marks, and intentional ugly lines. Sign it "Week 0 — first page killed." The sketchbook is a tool, not a gallery.',
          'Hand warm-up habit: before every future session starting now, do 30 seconds of loose wrist circles and 10 fast scribble ovals. Add this as a permanent opening ritual.',
        ],
      },
    ],
    stopRule:
      'When to stop: both sessions are 45 min — shorter than normal. This week has no artistic goal. Stop on time regardless of how the marks look. The only failure this week is not filling the pages.',
    note: 'Week 0 is purely mechanical calibration — not art. A musician plays scales before songs. You are doing scales. The hand needs to learn the tool before the eye can direct it. Expect nothing to look good. Do not skip this week even if you have drawn before casually — the grip and pressure control drills correct habits that will otherwise slow you down for months.',
  },
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Pure contour, your hand',
    focus: 'Skill: observation rewiring · no shading at all',
    badge: {
      label: 'Month 1',
      background: '#F1EFE8',
      color: '#5F5E5A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Slow contour drawing of your hand (deliverable: 6 full-page contours)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual — wrist circles + 10 scribble ovals',
          'Place your non-dominant hand flat on desk, fingers spread',
          'Look at your hand, not the paper — aim for 90% of the time on the subject',
          'Move your pencil as slowly as your eye moves along the edge',
          'Primary deliverable: 6 full-page contour drawings in this session — 12 min each, hard stop per drawing',
          'Change hand position each time (open, fist, pointing, cupped, side view, claw)',
          'Stop each drawing when you have traced the full outline once. No redoing. No shading.',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Expressive mark anchor (25 min) + contour volume',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Expressive mark anchor (25 min) — Phase 1 sparse emotion #1 of 4: double-page spread, pressure and speed only, no subject required',
          'Date the page and write one word in the corner — this page feeds Phase 4/5 translations later',
          'Remaining time (45 min): 4 more full-page hand contours — 10 min each, hard stop, change position each time',
          'No shading. Stop each drawing when the outline is traced once',
        ],
      },
    ],
    stopRule:
      'Session A: stop after 6 drawings at 75 min — do not do a 7th because one looked bad. Session B: emotion anchor is 25 min then contours — do not extend the abstract block past 25 min.',
    note: 'Your drawings will look terrible this week. That is exactly correct. The goal is not a good drawing — it is training your eye to observe rather than assume. The brain draws symbols by default. Contour drawing breaks that habit.',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Contour + first gestures',
    focus: 'Skill: speed observation · capturing essence not detail',
    badge: {
      label: 'Month 1',
      background: '#F1EFE8',
      color: '#5F5E5A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Timed gesture marathon (deliverable: one full page of 30-second poses)',
        steps: [
          'Optional warm-up (30 min): 3 contour drawings of your hand — 10 min each, contour only',
          `Open ${POSE_SOURCE} — set timer to 30 seconds, figures only`,
          'Primary deliverable: 45 min of non-stop gesture drawing — one pose per page or half-page, do not pause between poses',
          'Target: 20–30 poses in 45 min. Capture lean, weight, and energy — not anatomy',
          'Single flowing line is better than many careful lines',
          'Last 5 min: circle the 3 gestures with the most life. Write one word each about why',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: '5 room-object contours + gesture top-up',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Pick 5 objects from your room: cup, shoe, phone, book, anything irregular',
          'Draw each object contour-only on its own page — 10 min per object, hard stop even if unfinished',
          'Do not arrange objects for beauty — draw them where they sit',
          'Remaining time (~20 min): 30-second gestures from pose source — capture lean and weight only',
          'After all 5 objects: flip back and note which contour looks most alive and why (2 sentences)',
        ],
      },
    ],
    stopRule:
      'Session A: stop gestures at 45 min even mid-pose — the timer is the discipline. Session B: each object stops at 10 min; no abstract emotion block this week.',
    milestone:
      'End of Week 2 check: can you fill a page of gestures in 30 minutes without freezing? If yes, proceed. If you still stop to think between poses, repeat Week 2 Session A before moving on.',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Negative space',
    focus: 'Skill: seeing shapes not objects · the most transformative exercise',
    badge: {
      label: 'Month 1',
      background: '#F1EFE8',
      color: '#5F5E5A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Negative space drawings (deliverable: 4 completed studies)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Place a chair in front of you — or arrange 3 objects with clear gaps between them',
          'Primary deliverable: 4 negative-space drawings — draw ONLY the spaces between and around objects, not the objects themselves',
          'Shade the negative spaces dark; leave the object areas white/blank',
          '18 min per drawing — hard stop. New arrangement each time',
          'If you accidentally draw the object, stop, flip the page, start that drawing again',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Gesture warm-up + first simple still life contour',
        steps: [
          `Optional warm-up (15 min): 30-second poses from ${POSE_SOURCE} — 15 gestures, no detail`,
          'Arrange 2 objects under a single lamp — clear silhouette',
          '50 min: one still life contour — proportion focus only, no shading',
          'Use pencil-at-arm\'s-length measuring from Week 6 preview: compare heights before committing lines',
          'Stop at 50 min regardless of state — photograph if useful',
          'Last 5 min: write one proportion error you see after photographing',
        ],
      },
    ],
    stopRule:
      'Session A: each negative-space study stops at 18 min even if it feels unfinished. Session B: still life stops at 50 min — no abstract emotion block this week.',
    note: 'This week will feel strange. Good. Negative space rewires how your brain processes a scene — instead of seeing "chair" it starts seeing "shape." This is irreversible once learned.',
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Line quality and proportion',
    focus: 'Skill: confident lines · measuring relationships · first master copy',
    badge: {
      label: 'Month 1',
      background: '#F1EFE8',
      color: '#5F5E5A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'One object, five line personalities (deliverable: 5 versions on one page spread)',
        steps: [
          'Optional warm-up (15 min): half-page parallel straight lines + half-page smooth curves — arm movement, no ruler',
          'Pick one object from your desk. Draw it 5 times on the same spread in 5 line personalities: timid/light, bold/heavy, broken/sketchy, single confident continuous line, angry/jagged',
          '12 min per version — hard stop. Primary deliverable = all 5 versions complete',
          'Last 5 min: which version has the most life? Write 3 sentences why',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Master copy line study (full session)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Find a Rembrandt or Da Vinci sketch online (pen/ink drawing, clear lines)',
          '5 min looking only: write 3 observations before copying (why thick/thin, where lines stop)',
          'Primary skill block (55 min): copy in pencil line-for-line — do not shade',
          'Ask while copying: why is this line thick here? Why does it stop there?',
          'Stop at 55 min — write 3 observations on the page even if the copy is unfinished',
        ],
      },
    ],
    stopRule:
      'Session A: stop each line-personality version at 12 min. Session B: master copy stops at 55 min — an unfinished copy teaches as much as a finished one. No abstract emotion block this week (line personalities already train expressive marks).',
    milestone:
      'End of Month 1 check: flip through your sketchbook. You should have 20+ pages filled. If you have fewer than 15, you have been skipping sessions or overworking single drawings — adjust before Week 5.',
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Basic shapes and form',
    focus: 'Skill: seeing geometry in everything · volume without shading',
    badge: {
      label: 'Month 2',
      background: '#E6F1FB',
      color: '#0C447C',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Primitive shape breakdowns (deliverable: 3 household objects with visible geometry underneath)',
        steps: [
          'Optional warm-up (15 min): draw cube, cylinder, sphere, and cone freehand in 3D — 3 of each, fast',
          'Pick 3 objects from your house. Primary deliverable: each object drawn with basic geometric components visible underneath the refined outline',
          'A mug = cylinder + handle (bent tube). A shoe = wedge + cylinder. A bottle = cylinder + tapered cone.',
          '20 min per object — hard stop. Light primitive sketch stays visible; do not erase the construction',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Gesture warm-up + figure as basic shapes',
        steps: [
          `Optional warm-up (15 min): 1-minute poses from ${POSE_SOURCE} — 10 gestures`,
          '50 min: draw standing figures as basic shapes only — oval head, rectangle torso, cylinders for limbs. No face, no detail.',
          'Reference: search "Andrew Loomis figure drawing" for proportion ratios (head = 1 unit, body ≈ 7–7.5 heads)',
          'Deliverable: 5 mannequin figures in different poses (standing, sitting, reaching, leaning, twisting) — ~10 min each, stop on time',
          'Last 5 min: circle the figure with best proportions; note one ratio error on another',
        ],
      },
    ],
    stopRule:
      'Session A: each object stops at 20 min. Session B: mannequin poses stop at 10 min each — learn ratios, not polish. No abstract emotion block this week.',
    note: 'Anatomy begins here as structure, not muscles. The arms reach mid-thigh. The head is one unit. Learn these ratios this week — they stay with you.',
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Proportion and comparative measuring',
    focus: 'Skill: how big is this compared to that · the pencil-measuring technique',
    badge: {
      label: 'Month 2',
      background: '#E6F1FB',
      color: '#0C447C',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Measured still life (deliverable: one proportionally placed still life drawing)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Arrange 3–4 objects on a table under one light source',
          'Before drawing: hold pencil at arm\'s length, close one eye, measure tallest object (thumb = top, tip = bottom)',
          'Use that unit to compare widths and smaller objects — write the ratios lightly in the margin',
          'Primary deliverable: one still life — light placement sketch first 25 min, refine outlines remaining 45 min',
          'Stop at 75 min even if proportions feel wrong — note what is off in the margin',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Hand structure studies (full session)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Your hand is always available — use it for anatomy',
          'Primary deliverable: 12 hand drawings in different positions — 5 min each, structure only',
          'Draw underlying box/cylinder structure first, then skin outline on top',
          'No fingernails, no skin texture — knuckle placement and finger length ratios only',
          'Last 5 min: compare to Week 1 contour hands — write one improvement and one remaining weakness',
        ],
      },
    ],
    stopRule:
      'Session A: stop at 75 min — never overwork to "fix" proportions in the same session. Session B: each hand stops at 5 min. No abstract emotion block this week.',
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Introduction to one-point perspective',
    focus: 'Skill: spatial reasoning · how 3D space works on flat paper',
    badge: {
      label: 'Month 2',
      background: '#E6F1FB',
      color: '#0C447C',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'One-point perspective set (deliverable: 8 boxes + one simple room)',
        steps: [
          'Draw a horizon line across the middle of the page — eye level',
          'Mark one vanishing point on the horizon',
          'Draw a square in front of the point; connect corners to the vanishing point; close the back — you have a box',
          'Primary deliverable: 8 boxes in different positions (above/below horizon, left/right, near/far) — 5 min each',
          'Remaining time: one simple corridor or room interior in one-point perspective — stop when session ends',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Gesture warm-up + memory scene with perspective',
        steps: [
          `Optional warm-up (15 min): 2-minute poses from ${POSE_SOURCE} — 7 gestures`,
          '50 min: draw a place you know from memory — use one-point perspective ideas where relevant',
          'No reference photo. Accuracy is not the goal — spatial feeling is',
          'If memory drawing stalls, redraw the room from a different eye level for the remaining minutes — do not fetch reference',
          'Last 5 min: mark the vanishing point and horizon you implied, even if rough',
        ],
      },
    ],
    stopRule:
      'Session A: stop after 8 boxes and one room attempt — perspective can become obsessive; learn the principle and move on. Session B: memory scene gets the full skill block — no separate abstract emotion page this week.',
    note: 'You revisit and expand perspective in Phase 3. This week establishes the habit of a vanishing point and horizon, not architectural perfection.',
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'First real still life',
    focus: 'Skill: thumbnails · measured setup · bringing observation weeks together',
    badge: {
      label: 'Month 2',
      background: '#E6F1FB',
      color: '#0C447C',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'First serious still life (deliverable: 3 thumbnails + one developed drawing)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Arrange 4–5 objects, single light source, clear shadow shapes visible',
          '10 min: draw exactly 3 thumbnail compositions (postage-stamp size) — where do objects sit on the page?',
          'Choose the strongest thumbnail. Primary deliverable: one still life on a full page for the remaining 60 min',
          'Use pencil measuring from Week 6. Outline everything first; light hatching only to suggest shadow shapes',
          'Stop at 75 min. Photograph the drawing — the camera reveals proportion errors you miss up close',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Second still life attempt + expressive mark anchor (25 min)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'New arrangement OR same setup from a different angle — 3 thumbnails (2 min each)',
          '40 min: second still life contour/light hatch — measuring and negative-space awareness',
          'Expressive mark anchor (25 min) — Phase 1 sparse emotion #2 of 4: double-page spread, no subject required',
          'Vary pressure, speed, and mark direction; date the page and write one feeling word',
          'This page is a translation seed for Phase 4 watercolor / Phase 5 acrylic — keep it',
        ],
      },
    ],
    stopRule:
      'Session A: stop at 75 min even if unfinished — photograph anyway. Session B: still life block first; emotion anchor is fixed 25 min — do not skip the still life for a longer abstract page.',
    milestone:
      'End of Month 2 check: you should have gesture pages, hand studies, perspective boxes, and at least one measured still life in the sketchbook. If gestures or perspective are missing entirely, address that in Week 14 buffer time.',
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Face as 3D structure — Loomis method',
    focus: 'Skill: head construction · features come later · no portrait polishing yet',
    badge: {
      label: 'Month 2',
      background: '#E6F1FB',
      color: '#0C447C',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Loomis head constructions (deliverable: 6 structure heads, no features)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Search "Loomis head construction" — study the method for 5 minutes only',
          'Draw a sphere; slice a plane off one side (face plane); divide face plane vertically in thirds (hairline / brow / nose / chin zones)',
          'Eyes sit halfway down the full head — not near the top. Mark the eye line lightly every time',
          'Primary deliverable: 6 head constructions at different angles — 10 min each, structure only, no features',
          'Stop each head at 10 min — deliverable is quantity of angles, not one perfect head',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Loomis head-angle volume + weak-angle review',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Primary deliverable: 5 more Loomis constructions at angles you avoided in Session A — 10 min each, structure only, no features',
          'Spend remaining time redrawing your weakest Loomis angle from Session A once — structure only, 15 min max',
          'Do not add facial features this week in Session B — stay on construction',
          'Write one sentence: which angle confused you most?',
        ],
      },
    ],
    stopRule:
      'Session A: stop each construction at 10 min. Session B: construction volume first — no abstract emotion block this week.',
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Texture and different mark types',
    focus: 'Skill: hatching, cross-hatching, stippling, scribble — four mark families',
    badge: {
      label: 'Month 3',
      background: '#EAF3DE',
      color: '#27500A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Mark-making sampler + texture studies (deliverable: 8-section sampler + 3 texture boxes)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Divide one page into 8 sections — fill each with a different mark type: hatching, cross-hatching, stippling, scumbling, contour hatching (follows form), loose scribbly, smooth blended, broken/gestural',
          'Each section: show light-to-dark within that mark family',
          'Pick 3 real textures (rough wall, fabric, wood, skin, metal, glass)',
          'Primary deliverable: three 5×5 cm texture boxes — 15 min each, hard stop',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Structured figure gestures (full session)',
        steps: [
          `Optional warm-up (5 min): 30-second poses from ${POSE_SOURCE} — 5 gestures`,
          `Set ${POSE_SOURCE} to 2 minutes, full figures`,
          '60 min: for each pose — gesture line (spine curve), basic shape skeleton, minimal outline. Target 25–30 poses',
          'Last 10 min: circle best 5 gestures; one sentence each on what worked',
        ],
      },
    ],
    stopRule:
      'Session A: sampler done when all 8 sections show a value range; each texture box stops at 15 min. Session B: stop figures when time ends, not when you feel satisfied. No abstract emotion block this week.',
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Composition thumbnails habit',
    focus: 'Skill: planning before drawing · rule of thirds · visual weight',
    badge: {
      label: 'Month 3',
      background: '#EAF3DE',
      color: '#27500A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Thumbnail marathon (deliverable: up to 12 thumbnails + one developed drawing)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Pick one subject you can see from your window or desk (window, table, tree, doorway)',
          '30 min: draw up to 12 tiny thumbnails (≈5×4 cm) — same subject, different compositions. Max 2.5 min per thumbnail — hard stop',
          'Circle your best 2. Choose one. Primary deliverable: 40 min developed drawing honoring that thumbnail layout',
          'The thumbnail is your contract — do not change the composition mid-drawing',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Thumbnail speed round + expressive mark anchor (25 min)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          '30 min: second thumbnail marathon — different subject from Session A, max 12 thumbnails, hard stop at 2.5 min each',
          'Circle best 2; write one sentence on why the strongest composition works',
          'Expressive mark anchor (25 min) — Phase 1 sparse emotion #3 of 4: non-representational marks only',
          'Vary pressure and speed; date and label with one word',
          'Remaining time: extend the anchor spread OR redraw weakest thumbnail at postcard size',
        ],
      },
    ],
    stopRule:
      'Session A: never exceed 12 thumbnails in the 30-minute block — speed is the skill. Developed drawing stops at 40 min. Session B: thumbnail round first; emotion anchor is 25 min — not a full-session abstract page.',
    note: 'From this week forward, every Session A in later phases expects at least 3 thumbnails before a large drawing. This week trains the habit under time pressure.',
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Narrative drawing — three panels',
    focus: 'Skill: sequential composition · telling a moment without words or faces',
    badge: {
      label: 'Month 3',
      background: '#EAF3DE',
      color: '#27500A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Three-panel narrative (deliverable: one page, three panels, one story)',
        steps: [
          'Optional warm-up (5 min): 3 tiny thumbnails of the same moment from different distances — pick the clearest',
          'Divide one page into 3 horizontal panels',
          'Primary deliverable: tell one moment from your week without words and without visible faces — 3 images only',
          'Examples: waking up, making food, a conversation seen from behind, a walk, a waiting moment',
          '22 min per panel — hard stop. Composition matters more than rendering — where does the eye go panel to panel?',
          'Last 4 min: arrow the reading order 1→2→3 and title the story with three nouns only',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Narrative panel revision + clarity pass',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          '50 min: redraw your weakest panel once at full or half size — focus on clarity, not detail',
          '20 min: write 5 sentences: what changed between panels? What would a viewer understand without text?',
          'Optional last minutes: one tiny 3-panel thumbnail of an alternate framing — composition only',
        ],
      },
    ],
    stopRule:
      'Session A: each panel stops at 22 min even if unfinished. Session B: panel revision is the full skill block — no abstract emotion page this week (narrative already trains expression).',
  },
  {
    id: 'week-13',
    weekNumber: 13,
    title: 'Faces and hands in depth',
    focus: 'Skill: anatomy applied · features placed correctly · hands with structure',
    badge: {
      label: 'Month 3',
      background: '#EAF3DE',
      color: '#27500A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Loomis faces with features (deliverable: 4 heads in 3/4 view)',
        steps: [
          'Optional warm-up (10 min): one Loomis construction from Week 9 — structure only, 10 min',
          'On each head: place features using guides — eyes at halfway, nose near two-thirds, mouth between nose and chin, ears between eye line and nose line',
          'Keep features simple — almond eyes, wedge nose, two-shape lips',
          'Primary deliverable: 4 faces in 3/4 view — 15 min each, hard stop',
          'Use one portrait photo reference for the last face only — construct with Loomis first, then compare to photo',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Hand structure depth (full session)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Primary deliverable: 12 hand drawings — 5 min each — box palm first, cylinders for fingers, knuckles on the back plane',
          'No fingernail detail — structure and foreshortening only',
          'Optional: on 2–3 hands, vary pressure/tempo intentionally (expressive hands) — still structure-first',
          'Last 5 min: compare to Week 6 hands — write three specific improvements you can see',
        ],
      },
    ],
    stopRule:
      'Session A: stop each face at 15 min — four faces total, not five. Session B: each hand stops at 5 min. No separate abstract emotion block — expressive pressure on hands counts if you use it.',
  },
  {
    id: 'week-14',
    weekNumber: 14,
    title: 'Buffer, review, and Phase 1 gate',
    focus: 'Skill: best still life · honest audit · fill thin categories before Phase 2',
    badge: {
      label: 'Month 3',
      background: '#EAF3DE',
      color: '#27500A',
    },
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Best-work still life (deliverable: 3 thumbnails + one careful drawing)',
        steps: [
          'Optional warm-up (5 min): Week 0 hand ritual',
          'Set up 4–5 objects, one light source — strongest setup you can manage',
          '10 min: exactly 3 thumbnails — pick one',
          'Primary deliverable: 60 min still life using measuring, negative-space awareness, and intentional line quality',
          'Light hatching for shadows only — suggesting form, not full rendering (Phase 2)',
          'Stop at 75 min. Photograph. Write 3 things that improved vs Week 8 still life',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Review sprint + Phase 1 close page',
        steps: [
          'Flip through both sketchbooks from page 1 — 15 min',
          'On a fresh page, list 3 skills that improved and 2 that remain weak (specific: "hands flat in foreshortening," not "hands bad")',
          'Category audit — count pages in each: gestures, contour/negative space, perspective boxes, still lifes, Loomis constructions, faces with features, hand studies, texture/mark sampler, thumbnails, narrative panels, expressive/emotion anchors (Weeks 1, 8, 11 + this close), master copies',
          'Buffer sprint (25 min): rapid pages only for categories with fewer than 5 pages — use exercises from the weeks listed in your audit',
          'Phase 1 close (20 min) — sparse emotion #4 of 4: double spread dated "Phase 1 complete" — abstract marks OR one expressive detail from your best still life; keep it for Phase 4/5 translations',
        ],
      },
    ],
    stopRule:
      'Session A: stop at 75 min — do not extend into a second session the same day. Session B: complete the category audit before buffer sprints; close page is the final 20 minutes.',
    milestone:
      'Phase 1 complete when: (1) both sketchbooks are at least 80% filled, and (2) each skill category below has 5+ pages — gestures, contour and negative space, perspective, still lifes, Loomis heads, faces with features, hand studies, texture/mark-making, thumbnails, narrative panels, master copies — plus at least 4 dated expressive/emotion anchor pages (Weeks 1, 8, 11, 14). Use Week 14 Session B buffer time for any skill category under 5 pages before starting Phase 2. Your two weak areas from the review become the focus of Phase 2 Weeks 1–2.',
  },
]
