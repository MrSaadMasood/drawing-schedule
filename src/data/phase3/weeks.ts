import type { WeekDetail } from '../../types/guide'

const month7 = { label: 'Month 7', background: '#EAF3DE', color: '#27500A' }
const month8 = { label: 'Month 8', background: '#D4E8C8', color: '#1F4208' }
const month9 = { label: 'Month 9', background: '#B8D9A8', color: '#183506' }

export const phase3Weeks: WeekDetail[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Thumbnail drill — mandatory from day one',
    focus: 'Skill: max 12 thumbnails in 30 min · one developed drawing · compositional mood lab',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Thumbnail drill only + one developed drawing',
        steps: [
          '3-minute value scale warm-up (charcoal or pencil — Phase 2 habit)',
          'Choose one subject: a window, a doorway, a tree, a table — something you can repeat',
          'Fill one page with tiny boxes (~5×4 cm) — same subject, different compositions',
          'Vary: horizon high, low, centered, off-center, close-up, far away, subject left, subject right',
          'Hard cap: 12 thumbnails in 30 minutes maximum — ~2.5 min per box, timer on',
          'Circle your best 2. Choose one. Spend remaining ~40 min developing it into a full pencil or charcoal drawing with Phase 2 value',
          'The thumbnail is your contract — do not change the composition mid-drawing',
          'Deliverable: one page of thumbnails + one developed drawing. Photograph before Session B',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Compositional mood lab (30 min) + eye-path practice',
        steps: [
          'Before drawing: write one sentence — where should the eye enter and where should it rest?',
          'Compositional mood lab (30 min): charcoal — mood through marks and value only, no subject required',
          'Use at least 5 distinct values. Notice marks that feel contained vs marks that lead the eye off the page',
          'Date the page and write one word describing the feeling',
          'Final 40 min: 6 tiny eye-path thumbnails (abstract or simple shapes) — arrow entry and rest on each; pick strongest path',
          'No developed drawing this session — feeling and eye path only',
        ],
      },
    ],
    stopRule:
      'When to stop thumbnails: at 30 minutes or 12 boxes, whichever comes first. When to stop developed drawing: 75 min Session A ends on the timer. You are NOT allowed to start any developed drawing in Phase 3 without thumbnails first — this rule starts now and never ends.',
    note: 'Phase 1 Week 10 introduced thumbnails optionally. Phase 3 makes them mandatory. Every failed large drawing in your past probably needed five minutes of thumbnails instead of forty-five minutes of fixing.',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Rule of thirds + focal point',
    focus: 'Skill: deliberate focal placement · visual weight · one developed drawing',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Rule of thirds thumbnail drill + developed drawing',
        steps: [
          '3-minute value scale warm-up',
          '3 thumbnail warm-up (5 min) — any subject, loose boxes',
          'Draw a faint rule-of-thirds grid (2 horizontal, 2 vertical lines) on a fresh page',
          'Fill up to 12 thumbnails placing the focal subject on intersection points — different positions each box',
          '30 min maximum for all thumbnails — then pick the one with the strongest visual weight',
          'Develop chosen thumbnail large (~35 min) — full value range in charcoal or pencil',
          'Mark the focal point on the finished drawing — did you preserve it from the thumbnail?',
          'Deliverable: grid page + developed drawing. Photograph before Session B',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Compositional mood lab (30 min) + eye-path check',
        steps: [
          '3-minute value scale warm-up',
          'Write one sentence: where should the eye enter on today\'s page?',
          '30 min: charcoal mood lab — compositional intent, mood through value and mark',
          'Final 40 min: redraw Session A developed drawing\'s value masses as a postage-stamp eye-path map + 3 alternate focal placements as tiny thumbnails',
          'Write one sentence — did intention match result on the mood lab?',
        ],
      },
    ],
    stopRule:
      'End of Week 2 check: can you produce 12 thumbnails in 30 minutes without freezing? If you are still laboring over each box, repeat Week 2 before perspective work.',
    milestone:
      'End of Week 2 check: thumbnails feel automatic, not precious. You can explain where the eye enters in your developed drawing.',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'One-point perspective — compositional review',
    focus: 'Skill: one-point applied to full scenes · interior or corridor · deliverable Session A',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'One-point perspective — corridor, room, or street',
        steps: [
          '3-minute value scale warm-up',
          'Brief review: horizon line = eye level, one vanishing point, all depth lines go to VP',
          'Choose one: (a) corridor looking down length, (b) room interior with furniture, (c) street with buildings receding',
          'Up to 12 thumbnails of the same scene type — different VP placement (centered vs off-center) — 30 min max',
          'Develop the strongest thumbnail (~35 min) — include objects, not empty space only',
          'Apply Phase 2 value to surfaces — perspective lines stay light, value carries the form',
          'Deliverable: thumbnail page + one finished one-point scene. Photograph before Session B',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Second one-point scene OR memory place (skill densification)',
        steps: [
          '3-minute value scale warm-up',
          'One sentence on the page: where should the eye enter and rest in this scene?',
          'Up to 8 thumbnails (20 min max) — different VP placement than Session A',
          '50 min: develop a second one-point scene OR draw a familiar place from memory with one-point ideas',
          'Apply Phase 2 value — no separate abstract mood lab this week',
          'Arrow actual eye path when done. Date the page',
        ],
      },
    ],
    stopRule:
      'When to stop perspective: once the scene reads as space, stop — even if furniture is unfinished. Thumbnails: 30 min or 12 boxes. Session A deliverable must exist before Session B.',
    note: 'You already know one-point from Phase 1. This week is not relearning — it is using perspective as a compositional tool.',
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Two-point perspective — street corners and buildings',
    focus: 'Skill: two vanishing points · corner edge · urban scene deliverable',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Two-point fundamentals + building exterior',
        steps: [
          '3-minute value scale warm-up',
          'Draw horizon line. Place two vanishing points far apart on it',
          'Draw 10 boxes from a corner edge — vertical edge closest to you, sides recede to each VP (~20 min)',
          'Above horizon, below horizon, different sizes — feel one-point vs two-point difference',
          'Up to 12 thumbnails of a building exterior or street corner — 30 min max total for thumbnails',
          'Develop strongest thumbnail (~20 min) — value masses, people optional as silhouettes',
          'Deliverable: box drill page + one two-point building or corner scene. Photograph before Session B',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Second two-point pass — perspective as tool, not obsession',
        steps: [
          '3-minute value scale warm-up',
          'Write one sentence: one compositional device you stole from today\'s two-point study (e.g. corner tension, empty floor)',
          'Up to 8 thumbnails (20 min) of a different corner or street',
          '45 min: develop second two-point scene OR redraw Session A with stronger eye path',
          'Final 10 min: arrow eye path. After this week, put the ruler away for routine drawings unless a scene needs it',
          'No abstract mood lab this week — perspective volume instead',
        ],
      },
    ],
    stopRule:
      'When to stop box drills: after 10 boxes. Thumbnails: 12 max in 30 min. Do not spend a third week on perspective unless Weeks 3–4 felt completely unclear.',
    milestone:
      'End of Month 7 check: mandatory thumbnails on every Session A. One-point and two-point both attempted with deliverables. Perspective box drills do not continue into Week 5.',
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Landscape composition — horizon placement (split thumbnails)',
    focus: 'Skill: 20 landscape thumbnails across the week · horizon high/low · not 20 in one session',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Landscape thumbnails — first 10',
        steps: [
          '3-minute value scale warm-up',
          '3 thumbnail warm-up (5 min)',
          'Fill one page with exactly 10 tiny landscape thumbnails — real or imagined',
          'Vary horizon placement every box: high (sky dominates), low (ground dominates), one-third, two-thirds, off-centre',
          '~30 min for all 10 — same landscape elements, different compositions',
          'Circle your best 2. Write one sentence each: why does this horizon placement work?',
          'Remaining time: develop neither to finish — only 5-minute sketch of your #1 choice if time remains',
          'Deliverable: one page with 10 landscape thumbnails + two sentences. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Landscape thumbnails — second 10',
        steps: [
          '3-minute value scale warm-up',
          'New page: 10 more landscape thumbnails — different locations or weather than Session A',
          'Same rules: horizon varies every box, ~30 min for 10 boxes',
          'Circle best 2 across both sessions (20 total this week). Pick the single strongest composition overall',
          'Write one sentence: which horizon rule will you use in Week 6 develop?',
          'Final 25–30 min: compositional mood lab — landscape mood through mark and value, no landscape detail required',
          'Date and one feeling word',
        ],
      },
    ],
    stopRule:
      'When to stop: 10 thumbnails per session, not 20 in 30 minutes. Twenty thumbnails exist across the week, not in one sitting. Mood lab: 25 min minimum this week.',
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Develop landscape + Hopper trace warm-up',
    focus: 'Skill: full landscape value · master shape study at session open',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Hopper trace + developed landscape',
        steps: [
          '3-minute value scale warm-up',
          'First 20 min: Hopper or Wyeth composition trace — squint to 3–5 flat shapes only, no detail (roadmap master shape study)',
          'Pick your strongest landscape thumbnail from Week 5 (or 3 new thumbnails in 10 min if none feel strong)',
          '55 min: full charcoal or pencil landscape — sky, ground, and one focal element',
          'Use Phase 2 value range. Composition is the lesson — rendering is secondary',
          'Squint test: do the masses lead the eye to the focal element?',
          'Deliverable: trace page or margin notes + one developed landscape. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Compositional mood lab — landscape mood without scenery',
        steps: [
          '3-minute value scale warm-up',
          'One sentence: what feeling did Week 5–6 landscapes aim for?',
          '30 min: charcoal mood lab — that mood through mark and value, no literal landscape',
          'Final 40 min: 3 postage-stamp landscape value maps from Week 5 winners — masses and eye path only',
          'Arrow eye path on the mood lab. Did the eye stay contained or wander off-page?',
        ],
      },
    ],
    stopRule:
      'When to stop Hopper trace: 20 min exactly — shapes only. When to stop landscape: 75 min Session A. If trace becomes window panes and faces, you are in detail too early.',
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Master composition copy — Hopper or Wyeth (full session)',
    focus: 'Skill: copy major shapes only · eye path analysis · Session A only for copy',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Full composition copy — shapes and eye path only',
        steps: [
          '3-minute value scale warm-up',
          'Choose a Hopper or Wyeth painting (WikiArt, Met Open Access)',
          '15 min looking: squint until only 3–5 major shapes remain. Mark where the eye enters and rests',
          'Draw those shapes as flat value masses — half page size — 45 min maximum',
          'Ignore all detail, faces, texture, and colour',
          'Write 3 observations on the margin: eye entry, attention device, one thing to steal for your work',
          'Final 10 min: up to 3 thumbnails applying one stolen device to your own subject',
          'Deliverable: shape copy + margin notes. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Compositional mood lab (30 min) + stolen-device thumbnails',
        steps: [
          '3-minute value scale warm-up',
          'Before starting: decide where the eye should enter and rest — one sentence on the page',
          '30 min: charcoal mood lab — mood through marks and value',
          'Final 40 min: up to 12 tiny thumbnails applying one stolen master device to your own subject',
          'Arrow the actual eye path on the mood lab. Date the page',
        ],
      },
    ],
    stopRule:
      'When to stop composition copy: 60 min for the shape copy. If you are drawing window panes and facial features, you have gone too far into detail.',
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Narrative panels — same event, different framing',
    focus: 'Skill: cinematic framing · close-up vs wide · 3-panel sequence',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Same moment, 4 different framings',
        steps: [
          '3-minute value scale warm-up',
          'Pick one moment: making coffee, opening a door, sitting down, looking out a window',
          'Draw it 4 ways on one page — 4 panels or 4 separate sketches, ~15 min each',
          'Frame 1: wide shot (figure small in space). Frame 2: close-up (hands or object only)',
          'Frame 3: low angle looking up. Frame 4: high angle looking down',
          'No words. No faces required. Rendering secondary to framing choice',
          'Write which framing best communicates the feeling of the moment and why',
          'Deliverable: one page, four framings + one sentence. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: '3-panel sequence + clarity rewrite',
        steps: [
          '3-minute value scale warm-up',
          'Tell the same moment as a sequence: beginning, middle, end across 3 panels',
          '3 layout thumbnails first (10 min) — choose horizontal, vertical, or grid — max 12 thumbnails in 30 min if you explore more',
          '15 min per panel — hard stop each panel',
          'The sequence should read left-to-right without text',
          'Remaining time: rewrite weakest panel once for clarity — narrative already carries expression; no separate abstract mood lab',
          '24-hour later fresh-eyes review + write one sentence: does the story read without explanation?',
        ],
      },
    ],
    stopRule:
      'When to stop each framing study: 15 min. When to stop panels: 15 min each. Use leftover time for panel rewrite — no mandatory abstract emotion tack-on.',
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Single-image storytelling',
    focus: 'Skill: one image implies before and after · narrative critique Session B',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'One image, two implied moments',
        steps: [
          '3-minute value scale warm-up',
          'Up to 12 thumbnails in 30 min — figure in a place, different compositions',
          'Draw a single image: a figure in a place at a specific time of day',
          'The composition must suggest: what happened just before? What happens next?',
          '~40 min on one drawing after thumbnails — pencil or charcoal with value',
          'Use light direction to imply time of day. Use posture to imply action paused',
          'Cover the drawing and describe before/after aloud — if you cannot, push posture or setting further',
          'Deliverable: thumbnail page + one single-image story. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Narrative critique + redraw (full skill block)',
        steps: [
          '3-minute value scale warm-up',
          'Spread narrative work from Weeks 8–9 (and any earlier panels). Rank pages strongest to weakest',
          'Write one specific thing the weakest page needs (focal point, eye path, fewer competing elements)',
          '45 min: redraw the weakest panel or framing, applying the fix',
          '24-hour later fresh-eyes review on the redraw + write one sentence: did the fix work?',
          'No separate abstract mood lab — storytelling is the expression work this week',
        ],
      },
    ],
    stopRule:
      'When to stop single-image drawing: when Session A timer ends. An implied story beats a rendered scene with no narrative tension.',
    milestone:
      'End of Month 8 check: 20 landscape thumbnails, one developed landscape, master composition copy, four framings, 3-panel sequence, and single-image story in your sketchbook. If panels still need words, repeat Week 8 framing before posture.',
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Character posture — five emotional states',
    focus: 'Skill: body communicates emotion · no visible face · posture thumbnails Session B',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Same figure, five emotions — posture only',
        steps: [
          '3-minute value scale warm-up',
          '10 min: 2-minute gesture warm-up from line-of-action.com — 5 poses',
          'Draw the same figure type (standing person, no detail) in 5 emotional states',
          'Exhausted, elated, afraid, defiant, tender — cover or omit the face entirely',
          '12 min per figure — push lean, weight distribution, shoulder height, and arm position',
          'The whole body communicates — slumped spine vs lifted chest, crossed arms vs open hands',
          '24-hour later fresh-eyes review + write one sentence: can you name each emotion without your labels?',
          'Deliverable: one page, five postures. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Posture in environment (full skill block)',
        steps: [
          '3-minute value scale warm-up',
          'Up to 12 thumbnails in 30 min: figure posture placed in simple environment (doorway, chair, window, street)',
          'Remaining time: develop the strongest thumbnail — figure small, environment carries mood',
          'Posture and place together tell the story — not the face',
          'No separate abstract mood lab — posture is the emotion skill this week',
        ],
      },
    ],
    stopRule:
      'When to stop each posture study: 12 min. If all five figures look the same except arm position, push spine curve and weight further.',
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Two figures interacting — body language alone',
    focus: 'Skill: relationship without context · proximity · gesture between figures',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Two figures — relationship through posture only',
        steps: [
          '3-minute value scale warm-up',
          'Gesture warm-up: 5 two-figure quick sketches from imagination — 2 min each',
          'Choose one relationship: friends, strangers, conflict, care, distance, or reunion',
          'Draw 2 figures interacting — no setting detail required, no faces',
          '3 versions of the same relationship with different body language — 15 min each',
          'Vary: distance, height difference, who leans toward whom, open vs closed posture',
          'Which version reads clearest? Develop that one for remaining time with simple value',
          'Deliverable: interaction studies + one developed pair. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Interaction versions volume (skill densification)',
        steps: [
          '3-minute value scale warm-up',
          'One sentence: which relationship from Session A had the clearest read?',
          'Draw 4 more two-figure versions of a weaker relationship — 12 min each — push distance, lean, and open/closed posture',
          'Remaining time: develop the clearest pair with simple value and arrow the eye path',
          'If the relationship required a caption in Session A, note what posture to push next time',
          'No separate abstract mood lab — interaction body language is the expression work',
        ],
      },
    ],
    stopRule:
      'When to stop interaction studies: 15 min each for Session A versions; 12 min each for Session B volume. No mandatory abstract emotion block.',
    note: 'This skill connects directly to pouring emotion into images. Phase 5 acrylic work will need figures that communicate without explanation.',
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Perspective buffer week — light one-point refresh',
    focus: 'Buffer: one-point scene refresh if perspective felt weak · otherwise confidence check · second spatial pass',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'PERSPECTIVE BUFFER — light one-point scene refresh',
        steps: [
          '3-minute value scale warm-up',
          'Label the page header: "Week 12 — Perspective Buffer"',
          'If Weeks 3–4 felt unclear: up to 12 thumbnails (30 min max) of a room, corridor, or street in one-point — then develop the strongest (~35 min)',
          'If Weeks 3–4 felt solid: one 15-min one-point memory sketch of a familiar room + 45 min strongest composition from Weeks 8–11 redrawn with intentional perspective lines light',
          'Do not restart box drills. This week refreshes space, not Phase 1 homework',
          'Deliverable: one spatially readable scene. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Second spatial pass — buffer week, no new skills',
        steps: [
          '3-minute value scale warm-up',
          'Write one sentence: did you need the full buffer path or the confidence-check path today?',
          'Develop a second memory room OR redraw Session A from a different eye level — 60 min',
          'Final 10 min: arrow eye path. Date the page',
          'No abstract mood lab — spatial confidence is the job',
        ],
      },
    ],
    stopRule:
      'When to stop buffer: once one scene reads as believable space. Do not turn Week 12 into a second Week 3–4. If perspective is still unclear after this buffer, repeat Weeks 3–4 before Week 13 showpiece.',
    note: 'Week 12 is explicitly labeled buffer time — not a repeat of Week 1 thumbnail marathon. Use it only if perspective or spatial confidence needs a light refresh.',
  },
  {
    id: 'week-13',
    weekNumber: 13,
    title: 'Phase 3 showpiece — strongest composition',
    focus: 'Skill: best compositional drawing of the phase · Session A only · Session B short mood echo',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min (90 min allowed if timer helps)',
        title: 'Strongest composition of Phase 3 — full value',
        steps: [
          '3-minute value scale warm-up',
          'Choose: still life in environment, figure in a room, or landscape with focal figure',
          'Up to 12 thumbnails in 30 min — explore seriously before committing',
          '75–90 min on the chosen composition — pencil or charcoal, full Phase 2 value range',
          'Apply everything: focal point, eye path, value masses, perspective only if needed',
          'Photograph when done. Squint test and corner test before signing the page',
          'Deliverable: thumbnail page + showpiece drawing. This is your Phase 3 compositional peak',
        ],
      },
      {
        label: 'Session B — 45 min',
        title: 'Showpiece mood echo (25 min) + critique note',
        steps: [
          'One sentence: what feeling should this page echo from the showpiece (or contrast it)?',
          '25 min: charcoal mood lab — compositional intent, mood through value and mark',
          'Final 20 min: write 5 sentences of showpiece critique (focal point, eye path, value masses, what to steal next) — date both pages',
        ],
      },
    ],
    stopRule:
      'When to stop Session A: 75 min default, 90 min maximum. Thumbnails still cap at 12 in 30 min. Session B: 25 min mood echo then critique — do not extend into a second showpiece.',
  },
  {
    id: 'week-14',
    weekNumber: 14,
    title: 'Master composition copy — full Session A',
    focus: 'Skill: Hopper, Sargent, or Wyeth shape copy · written analysis · apply stolen device Session B',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Master composition copy — different artist from Week 7 if possible',
        steps: [
          '3-minute value scale warm-up',
          'Choose a master whose spatial arrangements you admire',
          '15 min analysis: squint, 3–5 shapes, eye path arrows on reference or in notes',
          '50 min shape copy — flat masses, no detail',
          'Write a short paragraph: one entry point, one attention device, one thing to apply in Phase 4 watercolor planning',
          'Final 10 min: one thumbnail for a future watercolor using the stolen device',
          'Deliverable: copy + written paragraph. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Stolen-device composition (skill) + optional short mood lab',
        steps: [
          '3-minute value scale warm-up',
          '50 min: develop one small composition applying one stolen eye-path device from Session A to your own subject',
          'Final 20 min optional: compositional mood lab if energy remains — feeling first, device optional',
          'Write one sentence: which device did you use or deliberately reject?',
        ],
      },
    ],
    stopRule:
      'When to stop master copy: 60 min for masses. If you are rendering faces and texture, stop and flatten shapes.',
  },
  {
    id: 'week-15',
    weekNumber: 15,
    title: 'Best narrative or posture — bring it together',
    focus: 'Skill: strongest narrative or interaction redrawn · Phase 3 review sprint Session B',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Strongest narrative panel or two-figure interaction — redraw',
        steps: [
          '3-minute value scale warm-up',
          'Choose your strongest narrative page (Weeks 8–9) OR two-figure interaction from Week 11',
          'Up to 12 thumbnails reinterpreting that subject with stronger composition — 30 min max',
          '45 min: redraw at your highest level — value, posture, eye path intentional',
          'This is your Phase 3 narrative/posture showpiece — photograph it',
          'Deliverable: thumbnails + redraw. Photograph before Session B',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Phase 3 review sprint (no new compositions)',
        steps: [
          'Spread all Phase 3 work from Week 1 — thumbnails, perspective, landscapes, narratives, posture',
          'Write 3 compositional skills that improved (e.g. "horizon placement varies", "panels read without words")',
          'Write 1 weak area to carry into Phase 4 — be specific (e.g. "every focal point still centered")',
          '45 min sprint on that weakness only',
          'Write 2 habits for Phase 4: 3 thumbnails before every watercolor, value sketch before every wash painting',
          'No separate mood lab — review and weakness sprint fill Session B',
        ],
      },
    ],
    stopRule:
      'When to stop redraw: 75 min Session A. Review sprint: 45 min on weakness, hard stop. Do not start a new showpiece in Week 15.',
  },
  {
    id: 'week-16',
    weekNumber: 16,
    title: 'Buffer + Phase 3 complete review',
    focus: 'Explicit buffer · weak area sprint · phase gate · short close page',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'BUFFER — thumbnail drill OR weak-area repeat',
        steps: [
          '3-minute value scale warm-up',
          'Label page header: "Week 16 — Phase 3 Buffer"',
          'Pick ONE path for the full session:',
          'Path A — Thumbnail speed: same subject, up to 12 thumbnails in 30 min + one 40-min developed drawing (Week 1 drill)',
          'Path B — Weak area: 15 min thumbnails on that weakness + 50 min targeted redraw (perspective, panels, or posture)',
          'Write which path you chose and why in one sentence on the page',
          'Deliverable: one completed buffer session page set. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Phase 3 complete review + close page',
        steps: [
          '3-minute value scale warm-up',
          'Spread entire Phase 3 sketchbook. Check gate: thumbnails automatic before developed drawings; one-point and two-point attempted; at least 3 narrative pages; one master copy with written analysis; compositional mood labs on Weeks 1–2, 5–7, 13 (plus optional Week 14)',
          'Write what is still weakest in one sentence',
          '40 min sprint on that single weakness only',
          'Write: ready for Phase 4 watercolor? If thumbnails still feel optional, repeat Week 1–2 buffer before buying paint',
          'Final 20 min: charcoal close page — compositional intent. Close Phase 3 with marks, not only lists. Date it',
        ],
      },
    ],
    stopRule:
      'Week 16 is buffer and review — not new curriculum. Stop sprints at time even if imperfect. Phase 3 ends when the gate checklist is honest, not when every drawing is good.',
    milestone:
      'Phase 3 complete when: thumbnails before every developed drawing feel automatic; space reads in one-point and two-point (even if imperfect); strong composition often feels right before you can explain why; at least one showpiece and one master copy with notes exist; narrative/posture pages communicate without captions. If not, use buffer paths in Weeks 12 and 16 before Phase 4.',
  },
]
