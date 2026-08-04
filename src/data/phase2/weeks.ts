import type { WeekDetail } from '../../types/guide'

const month4 = { label: 'Month 4', background: '#E6F1FB', color: '#0C447C' }
const month5 = { label: 'Month 5', background: '#D4E8F8', color: '#0A3A6B' }
const month6 = { label: 'Month 6', background: '#C2DFF5', color: '#082E55' }

export const phase2Weeks: WeekDetail[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Charcoal introduction + value scale mastery',
    focus: 'New medium setup · 10-step value scale in pencil and charcoal · first value mood lab',
    badge: month4,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Value scale drills in pencil + charcoal setup',
        steps: [
          'Set up a permanent single-lamp workspace — one directional light source for the entire phase. Lamp to the left or right, not overhead.',
          '3-minute warm-up: 10-box value scale in HB pencil — lightest = paper white, darkest = full pressure 6B if needed',
          'Draw 3 complete value scales on one page — compare: are the steps even? No jumps from mid-grey to black?',
          'Draw one long gradient strip: feather-light to black and back to feather-light in a single row',
          'Introduce charcoal materials: vine charcoal (light marks), compressed charcoal (dark darks), blending stump, kneaded eraser, charcoal paper pad',
          'Practice charcoal handling: light touch on vine, tilt paper slightly away from drawing hand to reduce smudging',
          'Final 15 min: one 10-step scale in vine charcoal only — do not blend yet, focus on even steps',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Value scale in charcoal + value mood lab #1',
        steps: [
          '3-minute value scale warm-up in charcoal',
          'Draw 2 full 10-step scales on charcoal paper — second scale: use blending stump on steps 4–8 only',
          'Practice lifting a highlight: press kneaded eraser into the lightest box until paper shows through',
          'Check your setup: vertical board or easel if you have one; otherwise lay wax paper or scrap paper under your drawing hand to limit smudging. Fixative is optional — not required this week',
          'Final 25–30 min: value mood lab #1 of 6 — fill one page with mood using only value patches, no subject, no outlines',
          'Use at least 5 distinct values from your scale. Heavy compressed charcoal for darkest mood, lifted eraser for lightest',
          'Date the page and write one word in the corner describing the feeling. Stop when the page feels full — not when it looks like art',
        ],
      },
    ],
    stopRule:
      'When to stop: value scale drills end when all assigned scales are filled or 30 minutes pass — whichever comes first. Mood lab: when the page feels full. Do not polish the mood page into something presentable.',
    note: 'Buy charcoal paper before this week if you have not already. Regular sketchbook paper will not hold charcoal properly. Charcoal setup: vertical board or easel keeps paper clean; wax paper under your hand works on a flat desk. Fixative is optional — use only if smudging ruins finished work. The 3-minute value scale warm-up at the start of every session this phase calibrates your eye — skipping it is the most common reason value judgements drift mid-session.',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Value scale refinement + Phase 1 weak area sprint',
    focus: 'Pencil vs charcoal calibration · blending control · addressing Phase 1 review gaps',
    badge: month4,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Side-by-side scales + Phase 1 weak area #1',
        steps: [
          '3-minute pencil value scale warm-up',
          'Draw one 10-step scale split down the middle: pencil left, charcoal right — same steps, compare evenness',
          'Gradient exercise: 3 long strips using blending stump on charcoal — smooth transitions, no streaks or banding',
          'Identify weak area #1 from Phase 1 Week 12 review (e.g. hands flat, proportions off, gestures stiff)',
          '30 min sprint on weak area #1 only — use whichever medium suits the exercise',
          'Final 10 min: re-draw one Phase 1 contour drawing as shadow shapes only — no outlines, just where the darks would be',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Charcoal blending + weak area #2 + primitive value volume',
        steps: [
          '3-minute charcoal value scale warm-up',
          '30 min sprint on weak area #2 from Phase 1 review',
          '35 min: shade a simple cube, cylinder, and sphere under your lamp — value only, no outlines, same light direction as always — ~10–12 min each',
          'No mood lab this week — skill densification only (labs on Weeks 1, 4, 6, 8, 11, 14)',
        ],
      },
    ],
    stopRule:
      'When to stop weak area sprints: at 30 minutes regardless of improvement. The sprint is diagnostic, not a fix-it session. End of Week 2 check: can you produce a smooth 10-step scale in both pencil and charcoal without streaks? If not, repeat Week 2 before shadow shapes.',
    milestone:
      'End of Week 2 check: your 10-step scales are even in both media. You have addressed both Phase 1 weak areas at least once. If scales still jump from light to dark with no middle steps, spend another week here.',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Shadow shapes — silhouette only',
    focus: 'Seeing shadows as flat shapes · no object outlines · single light source',
    badge: month4,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Shadow shape silhouettes — objects from your desk',
        steps: [
          '3-minute value scale warm-up (pencil)',
          'Place 5 everyday objects under your lamp — mug, shoe, fruit, bottle, anything with a clear cast shadow',
          'Draw ONLY the cast shadow and form shadow as flat dark silhouettes — not the object itself',
          'Fill shadow shapes solid dark — treat each shadow as a puzzle piece shape',
          '4 objects, 12 min each — hard stop per object',
          'If you accidentally draw the object outline, stop, flip page, start that object again',
          'Final object (12 min): arrange 2 objects so their shadows overlap — draw the combined shadow shape as one mass',
          'Deliverable: one finished page with 5 shadow-only silhouettes (4 singles + 1 overlapping pair). Photograph before Session B',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Gesture warm-up + shadow shapes on primitives (volume)',
        steps: [
          '3-minute charcoal value scale warm-up',
          '15 min: line-of-action.com — 2-minute poses, 7 gestures (structure only, light lines)',
          'Draw shadow shapes only on 4 primitive forms under the lamp: sphere, box, cylinder, cone',
          'Shade the shadow side solid black — leave the light side paper white with no outline between them',
          '12 min per form — hard timer',
          'No mood lab this week — extra shadow-shape reps instead',
        ],
      },
    ],
    stopRule:
      'When to stop: 12 min per object in Session A, hard timer. Shadow shape drawings feel incomplete because the object is missing — that is correct. Session A is done when the deliverable page exists.',
    note: 'This week rewires the same brain circuit that negative space opened in Phase 1 — but now for light and dark. Instead of seeing "mug" you start seeing "bright shape plus dark shape." Once learned, this is permanent.',
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Shadow shapes with gradients',
    focus: 'Soft vs hard shadow edges · core shadow vs cast shadow · form turning',
    badge: month4,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Graduated shadow shapes in pencil',
        steps: [
          '3-minute value scale warm-up',
          'One object under lamp — draw shadow shapes but fill with smooth gradient (soft edge where form turns, hard edge at cast shadow)',
          'Label on the page: highlight, light, midtone, core shadow, cast shadow — identify each on the object before drawing',
          '3 different objects, 18 min each — hard stop',
          'Compare: which shadow edge is soft? Which is hard? Write one sentence per object explaining why',
          'Final 8 min: squint at all three drawings — do the dark masses read clearly?',
          'Deliverable: one page with 3 labeled graduated shadow studies plus your three comparison sentences',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Charcoal gradient shadows + gesture + value mood lab #2',
        steps: [
          '3-minute charcoal value scale warm-up',
          '10 min: 2-minute gestures from line-of-action.com — 5 poses',
          'Same 3 objects as Session A (or 3 new ones) — charcoal with blending stump for soft shadow transitions',
          '12 min per object — push darkest darks with compressed charcoal in the core shadow only',
          'Final 25–30 min: value mood lab #2 of 6 — two value zones only (light mass and dark mass), minimal midtone',
          'Date the page and write one feeling word',
        ],
      },
    ],
    stopRule:
      'When to stop: 18 min per object in Session A. If gradients turn to mud, stop blending and lift back with kneaded eraser — do not push through mud.',
    milestone:
      'End of Month 4 check: you can draw shadow shapes as silhouettes and as gradients. Session A deliverables from Weeks 3–4 exist. Gesture warm-up takes under 2 minutes to start. Flip through Weeks 1–4 — at least 12 pages of value work should exist.',
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'The sphere — pencil, no outlines',
    focus: 'Five value zones on a sphere · light from upper left · the foundation of all form',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Pencil spheres — no outline stroke allowed',
        steps: [
          '3-minute value scale warm-up',
          'Draw a circle freehand. Using only pencil shading — absolutely no outline — make it read as a 3D sphere',
          'Light from upper left: place highlight, light, midtone, core shadow, reflected light, cast shadow',
          '3 spheres per session, 18 min each — different sizes',
          'After each sphere: photograph and flip horizontal — does it still look round or lopsided?',
          'Final 12 min: draw a sphere from memory (no reference) — note what you forgot on the margin',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Cylinder and cone in value + gesture volume',
        steps: [
          '3-minute charcoal value scale warm-up',
          '15 min: 2-minute gestures — 7 poses from line-of-action.com',
          'Shade a cylinder in charcoal — no outline, value only, same upper-left light as spheres',
          'Shade a cone the same way — notice how the shadow shape differs from the sphere',
          '3 cylinders and 2 cones, 10–12 min each',
          'Compare all five: which form was hardest to make read as 3D? Write one sentence on the page',
          'No mood lab this week — form-value volume instead',
        ],
      },
    ],
    stopRule:
      'When to stop: 18 min per sphere. If the sphere looks flat at 16 minutes, note why (usually: not enough value separation or outline sneaking back in) and move on.',
    note: 'The sphere is the hardest and most important exercise in this phase. Every rounded form in every future painting — apple, cheek, cloud — is a sphere problem. A flat sphere now means flat portraits in Week 13.',
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'The sphere in charcoal + figure with value',
    focus: 'Kneaded eraser highlights · compressed charcoal darks · mannequin figures with shadow side',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Charcoal spheres — push the full value range',
        steps: [
          '3-minute charcoal value scale warm-up',
          '3 charcoal spheres — 18 min each — compressed charcoal for core shadow, kneaded eraser lifted for highlight',
          'Leave paper white for the brightest highlight — do not draw white, leave it untouched',
          'Compare to Week 5 pencil spheres photographed side by side — which reads more 3D?',
          'Final 15 min: one sphere on toned (grey) charcoal paper if you have it — highlights lift brighter against grey. If no toned paper, repeat your best sphere setup on white',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Figure mannequin with value + value mood lab #3',
        steps: [
          '3-minute charcoal value scale warm-up',
          '12 min: 3-minute gesture poses — 4 figures from line-of-action.com',
          'Draw standing figure as Phase 1 mannequin (oval head, box torso, cylinder limbs) WITH simple value',
          'One light source from the left — shadow on the right side of every form, no facial features, no detail',
          '3 figures in different poses, 10 min each — sitting, standing, leaning',
          'After figures: which limb reads most flat? Repeat that limb alone for 5 min with exaggerated shadow',
          'Final 25–30 min: value mood lab #3 of 6 — mood through light and dark masses alone, no subject',
          'Date and one feeling word',
        ],
      },
    ],
    stopRule:
      'When to stop figures: 10 min each before the mood lab. The point is volume through shadow on simple forms, not a beautiful figure drawing.',
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Still life with full value range — pencil only',
    focus: '75-minute tonal still life · thumbnails first · shadows over proportions',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Long pencil still life — value is the priority',
        steps: [
          '3-minute value scale warm-up',
          'Arrange 3–4 objects under single lamp — include at least one rounded form (sphere problem)',
          '3 thumbnails (5×4 cm each) — composition only, flat value masses, 2 min each',
          'Choose strongest thumbnail. Begin 75-minute pencil still life — stop at 75 min exactly',
          'Use full 10-step value range. Proportions secondary — if the shadow shapes read, the drawing works',
          'Photograph and desaturate on phone to check value accuracy',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Second pencil still life (full skill block)',
        steps: [
          '3-minute pencil value scale warm-up',
          'New arrangement OR same setup from a different angle — 3 thumbnails mandatory (2 min each)',
          '65 min: second pencil still life — same rules: value first, no outline dependency',
          'Photograph and desaturate — note one value error vs Session A',
          'No mood lab this week — still life volume instead',
        ],
      },
    ],
    stopRule:
      'When to stop still life: 75 minutes even if proportions feel wrong. Note what looks off — value problem or proportion problem — carry to Week 8 charcoal pass.',
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Still life in charcoal — full value range only',
    focus: 'Highlights lifted from charcoal · thumbnails habit · single-lamp masses',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Charcoal still life — full value range',
        steps: [
          '3-minute charcoal value scale warm-up',
          'New or same still life as Week 7 — 3 thumbnails first (mandatory habit from Phase 1)',
          '75 min charcoal still life on charcoal paper — stop on the timer',
          'Brightest highlights = lifted kneaded eraser, darkest shadows = compressed charcoal',
          'Photograph at 35 min (halfway) and at 75 min — compare value decisions',
          'Write one sentence: what value mistake did the camera reveal that your eye missed?',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Charcoal still life #2 + shadow mass study + value mood lab #4',
        steps: [
          '3-minute charcoal value scale warm-up',
          '3 thumbnails — different composition than Session A',
          '30 min: second charcoal still life OR finish Session A if clearly unfinished — pick one, write which on the page',
          '10 min: redraw only the shadow masses from your setup in charcoal — no object detail, masses only',
          'Compare shadow study to still life — do the darks sit in the same places?',
          'Final 25–30 min: value mood lab #4 of 6 — mood through light and dark masses only, no subject',
          'Date and one feeling word',
        ],
      },
    ],
    stopRule:
      'When to stop still life: 75 min on the nose in Session A. Session B still life: 30 min hard cap unless finishing Session A. Mood lab #4: 25–30 min — scheduled this week, do not skip because still life ran long.',
    milestone:
      'End of Month 5 check: you have pencil still life (Week 7) and charcoal still life (Week 8), spheres that read 3D, and figure mannequins with shadow. Mood labs so far: Weeks 1, 4, 6, 8. If still life value is muddy, repeat Week 8 before hands.',
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Hand value studies',
    focus: 'Box palm + cylinder fingers · shadow side only · compare to Phase 1 line hands',
    badge: month5,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Hand studies with value — 8 positions',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Your hand under the lamp in 8 positions — 7 min each, hard timer',
          'Draw box palm structure first (Phase 1 method), then cylinder fingers, then add value on shadow side only',
          'No fingernail detail — structure and tone only',
          'After all 8: compare to Phase 1 Week 6 and Week 11 line-only hands — write 3 sentences on what value adds',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Hand value sprint (full skill block)',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Pick your weakest hand position from Session A — redraw it 5 times, 8 min each, exaggerating shadow mass',
          '20 min: both hands clasped or overlapping — one combined shadow shape, value only',
          'No mood lab this week — hand value volume instead',
        ],
      },
    ],
    stopRule:
      'When to stop hands: 7 min each in Session A, 8 min each in Session B repeats. No mood lab this week.',
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Master value copy — analysis and block-in only',
    focus: 'Caravaggio or Rembrandt · three value zones · charcoal mass drawing only — no finishing this week',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Master analysis + charcoal value block-in',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Choose a Caravaggio or Rembrandt image (WikiArt, Met Open Access) — strong single light source',
          '15 min looking only: squint, identify lightest area, darkest area, and 3 major value zones',
          'Sketch 3-zone value map as flat thumbnail shapes on the page margin — 5 cm wide',
          '52 min: block-in copy in charcoal — masses only, no detail, no features. Stop when timer ends',
          'Write 3 observations about the artist\'s light decisions on the margin — unfinished mass copies are full lessons',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Second master block-in OR deepen first (full skill block)',
        steps: [
          '3-minute charcoal value scale warm-up',
          '10 min: 2-minute gesture warm-up — 5 poses from line-of-action.com',
          'Continue Session A block-in OR start a second master with the same 15-min analysis + mass rule — use remaining session time on masses only',
          'Focus on matching value relationships, not subject likeness. Do not add detail — mass only',
          '10 min: cover the reference and sketch the 3 value zones from memory — what stuck?',
          'No mood lab this week — master mass volume instead',
        ],
      },
    ],
    stopRule:
      'When to stop master copy: 52 min for the copy itself. Do not add detail after time runs out — write observations instead. Completion belongs in Week 11 only.',
    note: 'Week 10 is analysis and block-in only. Resist finishing. An unfinished mass copy with written observations beats a detailed copy that skipped seeing the light structure.',
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Master copy completion only',
    focus: 'Finish value copy · refine edges and transitions · written analysis · memory value map',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Complete master copy + written analysis',
        steps: [
          '3-minute charcoal value scale warm-up',
          '52 min: finish Week 10 master copy OR a new master you blocked in earlier — refine edges and transitions only, no new detail areas',
          'Ask for every soft edge: why is it soft here? For every hard shadow: where is the light blocked?',
          'Write a full paragraph on the facing page: one technique new to you, one surprising artist decision, one thing to apply in Week 12–13',
          '10 min memory test: value zone thumbnail from memory without reference',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Second master completion OR deepen first + value mood lab #5',
        steps: [
          '3-minute charcoal value scale warm-up',
          '10 min: 2-minute gestures — 5 poses',
          '40 min: complete a second master copy from Week 10 block-in OR push the first copy one level further in edge control only',
          'No new subjects with faces yet — stay on your chosen master image',
          'Final 25–30 min: value mood lab #5 of 6 — mood through value masses alone, no subject',
          'Date and one feeling word. No Loomis or portrait work this week',
        ],
      },
    ],
    stopRule:
      'When to stop: 40 min for copy work before the mood lab. If you catch yourself inventing new areas, return to mass relationships only. Mood lab #5: 25–30 min.',
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Loomis head + face value intro',
    focus: 'Construction scaffold from Phase 1 · one-side lighting · value does the work',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Loomis head construction + portrait lighting',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Loomis head construction review (10 min): sphere, face plane, proportion guides — same as Phase 1',
          'Add value: light from one side only — shadow covers far side of face, no outline around the head',
          '3 heads in 3/4 view, 15 min each — features simple, value does the work',
          'Eyes at halfway, nose at two-thirds — structure first, then shadow mass on the dark side',
          'If you catch yourself outlining the profile, smudge the line into shadow mass and rebuild',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Loomis heads from memory (full skill block)',
        steps: [
          '3-minute charcoal value scale warm-up',
          '10 min: 2-minute gestures — 5 poses',
          '5 Loomis heads from memory (no photo) — 12 min each, 3/4 view, value on shadow side only',
          'Note on each what proportion you forgot',
          'No mood lab this week — head-value volume instead',
        ],
      },
    ],
    stopRule:
      'When to stop faces: 15 min each in Session A, 12 min each in Session B. No mood lab this week.',
    note: 'Week 12 connects object value (sphere, still life) to face value (portrait in Week 13). The Loomis construction from Phase 1 is the scaffold — value is the skin. Do not skip construction and jump to shading.',
  },
  {
    id: 'week-13',
    weekNumber: 13,
    title: 'Portrait value study — dramatic lighting',
    focus: 'Side-lit portrait · no outlines · pure charcoal value · figure poses with tone',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Charcoal portrait from photo — no outlines allowed',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Find a portrait photo with dramatic single-source light — side lit or Rembrandt triangle',
          '3 value-map thumbnails (flat masses only) — 2 min each before touching the full drawing',
          '75 min charcoal portrait on charcoal paper — NO outline strokes allowed',
          'Squint constantly. Build from dark masses inward, lift highlights last with kneaded eraser',
          'Photograph and mirror-flip at end — proportion errors appear instantly',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Figure drawing with value (full skill block)',
        steps: [
          '3-minute charcoal value scale warm-up',
          'line-of-action.com — set to 5 minutes, full figures, 6 poses',
          'For each: gesture line first, mannequin structure second, shadow mass on one side third — no faces',
          'Pick your best pose. Redraw it carefully in 25 min with full value range',
          'No mood lab this week — figure value volume instead (lab returns Week 14 close)',
        ],
      },
    ],
    stopRule:
      'When to stop portrait: 75 min exactly. An unfinished portrait with correct value masses beats a finished one built on outlines. Session B: figure value fills the block — no mood lab this week.',
  },
  {
    id: 'week-14',
    weekNumber: 14,
    title: 'Phase 2 review + weak area sprint + close',
    focus: 'Best work drawing · explicit buffer week if behind · value mood lab close for the phase',
    badge: month6,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Best Phase 2 work — charcoal still life or portrait',
        steps: [
          '3-minute charcoal value scale warm-up',
          'If you are behind on spheres, still life, or portrait: use this session for that gap instead of a new hero piece — write "buffer" on the page and which week you are filling',
          'Otherwise: choose your strongest subject from this phase — still life, sphere group, or portrait',
          '5 thumbnails — pick the best composition',
          '75 min — your most careful charcoal value work of Phase 2',
          'Full value range, no outlines, kneaded eraser highlights, compressed charcoal darks',
          'Photograph when done. Desaturate and compare to reference if working from photo',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Phase 2 review + weak area sprint + value mood lab #6',
        steps: [
          '3-minute charcoal value scale warm-up',
          'Spread all Phase 2 charcoal and pencil value work from Week 1',
          'Write 3 things that improved clearly (e.g. "spheres read round", "shadow shapes faster", "charcoal less muddy")',
          'Write 1 value skill still weakest — be specific (e.g. "portrait shadows too flat", "still life highlights too grey")',
          '30 min rapid exercises on that one weakness only — if still weak after 30 min, schedule an extra buffer day before Phase 3',
          'Write 2 habits carrying into Phase 3: thumbnails, value scale warm-up, gesture before figures. These notes sit at the front of your Phase 3 sketchbook',
          'Final 25–30 min: value mood lab #6 of 6 — close Phase 2 through tone only. Date and one feeling word',
        ],
      },
    ],
    stopRule:
      'When to stop: Session A is 75 min whether buffer or best piece. Review writing happens before mood lab #6, not instead of it. If you need a 15th week, repeat Week 14 Session A on your weakest category only — do not start Phase 3 with a flat sphere.',
    milestone:
      'Phase 2 complete when: your sphere reads 3D without outlines, you have pencil still life (Week 7), charcoal still life (Week 8), valued hand studies (Week 9), master value copies with written observations (Weeks 10–11), Loomis heads with value (Week 12), one charcoal portrait (Week 13), and all 6 value mood labs (Weeks 1, 4, 6, 8, 11, 14). Week 14 is an explicit buffer if you are behind. If the sphere still looks flat, add a 15th week on spheres and shadow shapes before Phase 3.',
  },
]
