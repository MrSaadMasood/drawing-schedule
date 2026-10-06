import type { WeekDetail } from '../../types/guide'

const month7 = { label: 'Month 7', background: '#EAF3DE', color: '#27500A' }
const month8 = { label: 'Month 8', background: '#D4E8C8', color: '#1F4208' }
const month9 = { label: 'Month 9', background: '#B8D9A8', color: '#183506' }

export const phase3Weeks: WeekDetail[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Thumbnail habit + eye path',
    focus: 'Max 12 thumbnails in 30 min · one developed drawing · mood lab #1',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Twelve choices before one drawing',
        steps: [
          'Choose one repeatable subject: a window, doorway, tree, table, or chair',
          'Up to 12 boxes (~5×4 cm), 30 min maximum. Change crop, distance, subject position, and empty space',
          'Use 3 flat values, not detail. Circle the best 2 and choose one',
          'Remaining time: develop it in pencil or charcoal. The thumbnail is the contract — do not redesign halfway through',
          'Photograph. Arrow where the eye enters and rests',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mood lab #1 + six eye paths',
        steps: [
          'Write where the eye should enter and rest',
          '25 min charcoal mood lab — value and mark only. Keep the eye on the page. Date and label with one feeling word',
          'Six small abstract eye-path maps. Arrow entry, travel, and rest on each',
          'Choose one and develop it for 20 min as simple shapes. No subject required',
        ],
      },
    ],
    stopRule:
      'Stop at 12 thumbnails or 30 minutes. Do not rescue a weak large drawing by changing its composition halfway through. The lesson is the decision.',
    note: 'From now on, every developed composition starts with at least 3 thumbnails. Week 1 uses more only to make the habit automatic.',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Focal point and visual weight',
    focus: 'Rule of thirds as an experiment · contrast, isolation, detail, and empty space',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Same subject, different focal placements',
        steps: [
          '3 thumbnail warm-up — 5 min',
          'Up to 12 thumbnails in 30 min. Put the focal subject at different third intersections, then break the rule in 2 boxes',
          'Vary how attention is made: darkest contrast, isolated shape, sharp edge, or more detail',
          'Choose one. Develop for the remaining time with a full Phase 2 value range',
          'Mark the intended focal point. Squint: is it still the first thing you see?',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Diagnose the focal point',
        steps: [
          'Reduce Session A to one postage-stamp value map',
          'Make 4 alternate maps: move the focal point, quiet a corner, enlarge empty space, or change the strongest contrast',
          'Develop the best alternate for 35 min',
          'Write which device actually controlled attention. No mood lab this week',
        ],
      },
    ],
    stopRule:
      'Rule of thirds is a test, not a law. The week is complete when you can say why one focal point wins. Do not add detail to every area.',
    milestone:
      'You can make thumbnails without freezing and identify where the eye enters and rests.',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'One-point perspective in an observed room',
    focus: 'Horizon = eye level · furniture and doorway share one space · one ellipse in the scene',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Observed room or corridor',
        steps: [
          'Choose a room, corridor, or view down a street that is close to one-point perspective',
          'Brief review: horizon is your eye level; receding parallel edges aim at one vanishing point',
          '6 thumbnails in 15 min — move the horizon and vanishing point, then choose one',
          'Develop for 50 min. Include a doorway, one piece of furniture, one box-like object, and one cylinder such as a mug or bin',
          'Perspective lines stay light. Use value to separate planes. Photograph before Session B',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Same place, different eye level',
        steps: [
          'Draw the same place seated if Session A was standing, or standing if Session A was seated',
          '3 thumbnails — 10 min. Mark the new horizon before objects',
          'Develop for 50 min. Notice which surfaces become more or less visible when eye level changes',
          'Extend two receding edges after the drawing. Write the one line family that missed the vanishing direction',
        ],
      },
    ],
    stopRule:
      'Once the room reads, stop. Do not finish every piece of furniture. Diagnose one line family after the attempt; do not redraw the entire room.',
    note: 'This is not another box page. The mug, furniture, and doorway have to belong to the same eye level.',
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Two-point perspective in a street corner',
    focus: 'Two vanishing directions · building corner · high and low eye levels',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Two-point scene, not a box drill',
        steps: [
          'Draw 6 boxes around one horizon — 12 min, enough to review the system',
          'Choose a building corner, shelf corner, or street corner. 6 thumbnails in 15 min',
          'Develop one two-point scene. Include at least one door or window and one object near the corner',
          'Keep vanishing points far apart. If the building looks crushed, they are probably too close',
          'Add simple value masses. Photograph',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Same corner from a lower or higher view',
        steps: [
          '3 thumbnails — 10 min. Move the horizon clearly above or below the Session A horizon',
          'Develop a second version for 50 min. Keep verticals vertical; both side families recede to their own direction',
          'Final 10 min: extend only 4 important receding edges. Circle the family that diverges instead of converging',
          'Write what changed compositionally when the eye level moved',
        ],
      },
    ],
    stopRule:
      'Six boxes are enough. The deliverable is a corner scene. Correct one receding family; do not cover the page with construction lines.',
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Objects, ellipses, and proportional depth',
    focus: 'Ordinary objects share a table plane · ellipse orientation · repeated scale into distance',
    badge: month7,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Tabletop objects in one space',
        steps: [
          'Arrange a mug, two books or boxes, and a bottle at different distances on a table',
          '3 thumbnails — 8 min. Mark eye level even if it is above the page',
          '15 min ellipse check: draw the mug and bottle openings. The minor axis follows the cylinder direction; the ellipse changes as the surface tilts relative to your eye',
          'Develop the group for 45 min. Near objects overlap far objects. Receding book edges share a direction. Do not make each object as a separate icon',
          'Photograph and mark one overlap or ellipse that breaks the shared space',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Scale repeated objects and people into depth',
        steps: [
          'Draw a floor or street plane with a horizon',
          'Place 5 equal-height posts, chairs, or boxes receding into space. Use diagonals or a measuring line to keep the intervals believable',
          'Place 4 same-height people at different depths. Their size changes, but the horizon crosses comparable body height when the ground is level',
          'Turn the drill into a simple station, hallway, or sidewalk composition for the remaining 30 min',
          'Circle the object or person that looks pasted on. Write whether scale, ground contact, or horizon caused it',
        ],
      },
    ],
    stopRule:
      'Do not polish the objects. This week succeeds when they occupy one plane. Use the ruler for the lesson, then put it away after the diagnostic lines.',
    milestone:
      'One-point and two-point have been used in scenes. A cup, boxes, repeated objects, and people have been placed at different depths.',
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Landscape composition in one week',
    focus: 'Horizon placement · foreground, middle ground, background · mood lab #2',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Ten thumbnails, then one landscape',
        steps: [
          '10 landscape thumbnails in 25 min. Vary high horizon, low horizon, diagonals, and focal placement',
          'Use only 3 value masses. Circle the best 2 and choose one',
          'Develop it for 45 min: foreground, middle ground, background, and one focal element',
          'Atmospheric depth: far shapes lighter, quieter, and less detailed. Composition is the lesson, not leaves',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mood lab #2 + landscape alternatives',
        steps: [
          '25 min charcoal mood lab based on the landscape feeling — no literal scenery required',
          'Make 3 postage-stamp alternatives of Session A: different horizon, different focal contrast, different empty space',
          'Develop the strongest alternative for 30 min',
          'Write which version carries the mood more clearly and why',
        ],
      },
    ],
    stopRule:
      'Ten thumbnails, not twenty. One developed landscape per session maximum. Stop rendering when the three depth bands read.',
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'One master composition study',
    focus: 'Hopper, Wyeth, or Sargent · 3–5 masses · apply one device to your subject',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Shape copy and eye path',
        steps: [
          'Choose a work whose arrangement still reads when squinted',
          '15 min analysis: 3–5 shapes, eye entry, travel, rest',
          '45 min half-page copy in flat value masses. No faces, texture, windows, or leaves unless they are a major mass',
          'Write 3 observations: entry point, attention device, one thing to use yourself',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Their device, your subject',
        steps: [
          '5 thumbnails in 15 min using one device from Session A on your own subject',
          'Examples: frame within frame, isolated figure, diagonal path, large quiet shape, bright window',
          'Develop the strongest for 45 min',
          'Write whether the device helped or felt forced. No second master copy later in the phase',
        ],
      },
    ],
    stopRule:
      'If the copy contains facial features or small architecture, flatten it back to masses. The study is incomplete until the device changes an original drawing.',
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Narrative framing — the same event four ways',
    focus: 'Wide, close, high, low · three-panel sequence · no captions',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Four framings of one moment',
        steps: [
          'Pick a simple moment: making coffee, opening a door, waiting, leaving, or finding something',
          'Draw it as wide shot, close-up, low angle, and high angle — 15 min each',
          'No words and no detailed face. Value and framing carry the moment',
          'Write which view communicates the feeling and which only records the event',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Three-panel sequence',
        steps: [
          '3 layout thumbnails — 10 min. Pick horizontal, vertical, or grid',
          'Beginning, middle, end — 15 min per panel',
          'The sequence should read without text. Use the Week 3–5 perspective only where the setting needs it',
          'Remaining time: redraw the weakest panel once for clarity',
        ],
      },
    ],
    stopRule:
      '15 min per framing or panel. Narrative is the expression work; no mood page is added.',
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Single-image storytelling',
    focus: 'One image implies before and after · time of day · critique and redraw',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'One image, two implied moments',
        steps: [
          'Up to 12 thumbnails in 25 min: a figure in a place, with different distances and focal points',
          'Choose one. Draw for 45 min with value',
          'Light implies time of day. Posture implies action paused. Setting supplies evidence',
          'Cover it and say what happened before and what happens next. If you cannot, write what evidence is missing',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Narrative critique and redraw',
        steps: [
          'Rank the work from Weeks 8–9 strongest to weakest',
          'Name one problem only: unclear focal point, generic posture, empty setting, or too many competing elements',
          '3 correction thumbnails — 10 min. Redraw for 50 min',
          'Fresh-eyes note the next day: did the specific fix work?',
        ],
      },
    ],
    stopRule:
      'An implied story beats a rendered scene with no event. Correct one problem; do not redesign every part.',
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Character posture — emotion without a face',
    focus: 'Lean, weight, shoulders, hands · posture placed in a simple environment',
    badge: month8,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Five emotional states',
        steps: [
          '10 min: five 2-minute gestures from Line of Action',
          'Same simple figure in 5 states: exhausted, elated, afraid, defiant, tender',
          '12 min each. Omit the face. Push spine curve, balance, shoulder height, and openness',
          'The next day, cover the labels. Can you name each state?',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Posture in an environment',
        steps: [
          'Up to 8 thumbnails in 20 min: one posture in a doorway, chair, window, room, or street',
          'Vary figure size and distance; the place should support the feeling',
          'Develop one for 50 min. Keep the face blank or turned away',
          'Arrow the eye path. No abstract mood lab',
        ],
      },
    ],
    stopRule:
      'If the five figures differ only by arm position, push the spine and weight. Stop gesture warm-up after 10 minutes.',
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Two figures interacting inside a scene',
    focus: 'Body language · proximity · correct scale at different depths · shared ground plane',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Relationship through distance and posture',
        steps: [
          '10 min: five two-figure gesture pairs',
          'Choose one relationship: care, conflict, distance, reunion, strangers, or friends',
          '6 thumbnails in 15 min. Change who is near, who is far, who leans, and who closes off',
          'Develop one pair for 45 min in a simple room, doorway, platform, or street',
          'Mark the horizon lightly. Both feet contact the same ground plane. If one figure is farther, scale it through the scene rather than guessing',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Same relationship, changed depth',
        steps: [
          'Take the Session A relationship and reverse the depth: move the near figure far and the far figure near',
          '3 thumbnails — 10 min. Develop for 50 min',
          'No caption and no detailed faces. Does the relationship change when depth changes?',
          'Final 10 min: check foot contact, horizon, and relative scale. Name one spatial error and one emotional change',
        ],
      },
    ],
    stopRule:
      'The setting is simple, but it is required. Do not float the pair on white paper. Correct ground contact and scale before clothing detail.',
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Construct one complex scene',
    focus: 'Foreground, middle ground, background · objects, ellipse, and figure share space',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Plan the scene, then construct the large shapes',
        steps: [
          'Choose an observed or referenced room, café, station, shop, or street. Do not invent every object from memory',
          '8 thumbnails in 20 min. Each needs foreground, middle ground, background, and a focal point',
          'Choose one. Mark horizon and the main one-point or two-point directions',
          'Develop for 50 min. Required: one foreground object, one cylinder or ellipse, one doorway or building plane, and one figure at a different depth',
          'Stop at large value masses. Photograph and flip',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Diagnose the scene instead of starting another',
        steps: [
          'On the photo or tracing paper, extend 4 important receding edges. Check the horizon and vanishing directions',
          'Check 4 questions: does the figure contact the ground, do overlaps show depth, does the ellipse match its cylinder, does scale shrink consistently?',
          'Choose the largest failure. 3 correction thumbnails — 15 min',
          'Redraw only the failed zone at larger scale for 35 min',
          'Write the exact correction to use in Week 14. Do not repaint the entire scene today',
        ],
      },
    ],
    stopRule:
      'One scene only. Session B is diagnosis. A complex scene is successful when you can name its largest spatial failure, not when every chair is rendered.',
    note: 'This is the practical perspective test that the earlier schedule lacked. Use reference. Imagination is not the lesson.',
  },
  {
    id: 'week-13',
    weekNumber: 13,
    title: 'Composition showpiece',
    focus: 'Best composition of the phase · full value · mood lab #3 and critique',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'One planned showpiece',
        steps: [
          'Choose: figure in a room, still life in an environment, landscape with a focal figure, or the Week 12 scene reinterpreted',
          'Up to 8 thumbnails in 20 min — 3–5 value masses, not detail',
          'Develop for 55–70 min. Focal point, eye path, depth, and value masses before rendering',
          'Photograph. Squint test, corner test, and one perspective diagnostic if the subject has architecture',
        ],
      },
      {
        label: 'Session B — 45–60 min',
        title: 'Mood lab #3 + five-sentence critique',
        steps: [
          '25 min charcoal mood echo — carry or contrast the showpiece feeling',
          'Write 5 sentences: focal point, eye path, depth, value masses, and the one thing Week 14 must correct',
          'Do not start a second showpiece',
        ],
      },
    ],
    stopRule:
      'The 90-minute maximum includes thumbnails. Stop even if rendering is unfinished. Week 14 is correction, not extra finish time.',
  },
  {
    id: 'week-14',
    weekNumber: 14,
    title: 'Spatial correction — same scene, better evidence',
    focus: 'Correct Week 12 or 13 · different eye level or one failed zone · no second master copy',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Redraw the scene with one named correction',
        steps: [
          'Read the Week 12 diagnostic and Week 13 critique. Choose the scene with the clearest spatial failure',
          'Pick one correction: eye level, relative scale, ellipse, ground contact, overlap, or converging directions',
          '3 thumbnails — 10 min. If changing eye level, make the change obvious',
          'Redraw for 55 min. Apply the one correction first; value and detail come after',
          'Place old and new side by side. Write whether the space improved',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Transfer the correction to a small new scene',
        steps: [
          'Use a different simple subject but the same correction — for example, ellipse correction moves from café cups to a station bin',
          '3 thumbnails — 10 min. Develop for 45 min',
          'Final 15 min: extend diagnostic lines or check ground contact and scale',
          'Write whether the correction transferred without copying the old scene',
        ],
      },
    ],
    stopRule:
      'One correction per drawing. Do not turn Week 14 into a third full perspective course or a polish week.',
  },
  {
    id: 'week-15',
    weekNumber: 15,
    title: 'Narrative or posture showpiece',
    focus: 'Strongest story redrawn · composition, body language, and setting together',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Best narrative or interaction, reinterpreted',
        steps: [
          'Choose from Weeks 8–11: panel, single-image story, posture, or two-figure interaction',
          'Up to 8 thumbnails in 20 min. Change the framing, not just the rendering',
          'Develop for 50 min with intentional value, posture, eye path, and enough setting to locate the figures',
          'Photograph. This is the narrative peak of the phase',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Review before the buffer',
        steps: [
          'Spread thumbnails, perspective scenes, landscape, master study, narratives, posture, and showpieces',
          'Write 3 improvements and one remaining weakness. Name the category: composition, spatial construction, narrative clarity, or posture',
          '30 min: a small targeted study of that weakness — not a new showpiece',
          'Write 2 Phase 4 habits: 3 thumbnails and one value plan before a watercolor',
        ],
      },
    ],
    stopRule:
      'Eight thumbnails in 20 min, then one drawing. Session B is a small study and writing. Save a full repeat for Week 16 if needed.',
  },
  {
    id: 'week-16',
    weekNumber: 16,
    title: 'Buffer + Phase 3 gate',
    focus: 'Repeat one weak category · confirm thumbnails and spatial diagnosis · prepare for paint',
    badge: month9,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'BUFFER — choose one path',
        steps: [
          'Path A — composition: up to 12 thumbnails in 30 min, then one 40-min developed drawing',
          'Path B — space: 15 min thumbnails, then repeat a room, street, or object-at-depth exercise with the Week 14 correction',
          'Path C — story/posture: 15 min thumbnails, then redraw one unclear panel or interaction',
          'Write the path and why before starting. One path only',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Phase 3 review and close',
        steps: [
          'Check the gate: thumbnails precede developed work; focal point can be named; one-point and two-point scenes exist; objects and people have been placed at depth; one complex scene was diagnosed and corrected; narrative reads without a caption; one master study has notes',
          'Write the weakest item in one sentence',
          '30 min final sprint on that item',
          '20 min charcoal close page with intentional eye path. Date it',
          'Write: “In watercolor I will protect planning by ___.”',
        ],
      },
    ],
    stopRule:
      'Week 16 is buffer, not new curriculum. Stop the sprint. Phase 3 ends when the gate is honest, not when perspective is perfect.',
    milestone:
      'Phase 3 is complete when thumbnails are automatic; you can establish eye level and depth in a room or street; objects, ellipses, and people can share a ground plane even if imperfect; one complex scene has been corrected; and narrative/posture work communicates without captions. Phase 4 needs planning and readable space, not architectural mastery.',
  },
]
