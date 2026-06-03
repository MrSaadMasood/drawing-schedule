import type { WeekDetail } from '../../types/guide'

const month14 = { label: 'Month 14', background: '#EEEDFE', color: '#3C3489' }
const month15 = { label: 'Month 15', background: '#E4E0FC', color: '#322A75' }
const month16 = { label: 'Month 16', background: '#DAD4FA', color: '#292062' }
const month17 = { label: 'Month 17', background: '#D0C8F8', color: '#211850' }
const month18 = { label: 'Month 18', background: '#C6BCF6', color: '#18103D' }

export const phase5Weeks: WeekDetail[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Acrylic fundamentals — thin washes',
    focus: 'Skill: acrylic thinned with water · canvas board setup · dry time discovery',
    badge: month14,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Thin washes — acrylic like watercolor',
        steps: [
          'Set up: canvas boards (20×25cm), acrylic set, 3 brushes, palette, water jar, paper towel, palette knife for mixing',
          'Squeeze small amounts — acrylic dries in the palette. Mist palette lightly or use stay-wet pad if you have one',
          'Thin paint with plenty of water — milk to tea consistency. Pull horizontal washes across canvas board',
          'Deliverable: one board with flat colour washes, one board graded light to dark, one board with 3-colour loose gradient — hard stop at 90 min',
          'Note your brand\'s dry time on the board edge — write minutes until matte. Typically 10–30 min',
          'Observe: wet colour vs dry colour — acrylic dries darker. Mix lighter than you think',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Thick impasto — the opposite extreme',
        steps: [
          'No water added — straight from tube with palette knife or stiff brush',
          'Load knife, push paint across canvas board — ridges and texture visible',
          'Deliverable: one board fully covered in impasto, varying stroke direction — 45 min hard block',
          'Compare thin board (Session A) and thick board side by side when dry',
          'Mandatory emotion block (30–45 min minimum): free emotion page on a third board — impasto only, no subject',
          'Date all boards. Label thin vs thick',
        ],
      },
    ],
    stopRule:
      'Week 1 is about extremes — do not try to find the middle yet. Stop when each board is covered, not when it looks like art. Session B emotion block runs full 30–45 min even if impasto board finished early.',
    note: 'Buy canvas boards before Week 1 — gesso-primed, 20×25cm to start. Phase 5 supplies: 6–8 acrylic colours (primaries + white + black minimum), palette knife, plastic palette.',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Thin vs thick — both extremes mastered',
    focus: 'Skill: combine wash and impasto on one board · dry darker rule · emotion with texture',
    badge: month14,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'One board, both extremes',
        steps: [
          '3 thumbnails on paper first — flat shapes only, 5 min hard stop',
          'Divide canvas board mentally: sky as thin wash, ground as impasto texture — or any subject split you choose',
          'Paint sky area thinned, ground area thick — practice switching water ratios mid-session',
          'Hair dryer test: dry one patch, compare wet adjacent area — note how much darker dry reads',
          'Write on back: "Mix ___ % lighter than wet appearance" based on your brand',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free acrylic emotion painting',
        steps: [
          'Mandatory emotion block (30–45 min minimum): unstructured — no subject, no technique requirement, no standard to meet',
          'Use whichever thickness matches the feeling — thin for grief, thick for anger, both for complexity',
          'Date the board',
          'This Session B format runs every week of Phase 5 — never skip because Session A was hard',
        ],
      },
    ],
    stopRule:
      'End of Week 2 check: you know your paint\'s dry time and dry-dark shift. If not, repeat one thin and one thick board before colour wheel week.',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Colour wheel from primaries',
    focus: 'Skill: mix every hue from primaries + white + black · clean mixing discipline',
    badge: month14,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Full colour wheel on canvas board or paper',
        steps: [
          'Colours: cadmium yellow (or hansa), cadmium red (or naphthol), ultramarine blue, titanium white, ivory black',
          'Paint a colour wheel — 12 segments, mixed from primaries only. No tube greens or purples except mixed',
          'Outer ring: tints (add white). Inner ring: shades (add black) — sparingly, black is strong in acrylic',
          'Mark which mixes went mud (grey, dead) vs vibrant on the palette paper',
          'End of session deliverable: list your 5 most useful mixes for your actual subjects — written on paper, not in your head',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic only',
        steps: [
          'No patient painting this week — colour wheel week stays clean',
          'Mandatory emotion block (30–45 min minimum): unstructured acrylic on canvas board',
          'Optional remaining time: continue the emotion board or start a second if the first filled early',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'Colour wheel must use mixed greens, oranges, purples — sneaking tube secondary colours defeats the exercise. Session B is emotion only — do not start Patient Painting A yet.',
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Underpaint then glaze — Patient Painting A begins',
    focus: 'Skill: monochromatic underpainting · transparent colour glazes · patient painting session 1 of 3',
    badge: month14,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Limited palette + glaze structure (new board)',
        steps: [
          '3 thumbnails, simple subject (mug, window, plant) — 10 min hard stop',
          'Step 1: underpainting ultramarine + white only — full value structure, thin wash',
          'Step 2: when dry (hair dryer if needed), glaze colour in transparent layers — ultramarine, cadmium red, yellow ochre, white only',
          'Each glaze modifies the layer beneath — do not cover completely unless intentional',
          'Write on back: light source direction and shadow colour temperature',
          'This board is a technique study — separate from Patient Painting A starting Session B',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Patient Painting A — session 1 of 3',
        steps: [
          'Choose Patient A subject BEFORE touching paint — simple, something you care about, not impressive-for-social-media',
          '3 thumbnails on paper — 10 min. Pick one composition',
          'Session 1 (45 min hard block): thin wash underpainting on canvas board — ultramarine + white only, establishing lights and darks',
          'Stop mid-way with next step written on sticky note on back of board — e.g. "add second value pass" or "first glaze when dry"',
          'Let board dry completely before Week 5 Session A — minimum overnight if possible',
          'Remaining time (30–45 min minimum): mandatory free emotion acrylic on a separate board — not on Patient A board',
        ],
      },
    ],
    stopRule:
      'Glaze layers must be dry before the next — force dry with hair dryer if impatient. Wet glaze on wet glaze makes mud. Patient A board: do not start a different subject next week — same board continues Week 5.',
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Finish Patient A + Series painting 1 of 6',
    focus: 'Skill: complete 3-session patient piece · choose series theme · first series painting',
    badge: month14,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Patient Painting A sessions 2–3 + Series painting 1',
        steps: [
          'First 45 min: Patient Painting A sessions 2 and 3 on SAME board from Week 4 — session 2 adds value or glaze pass, session 3 finishes accents. Stop when it reads at arm\'s length',
          'Photograph Patient Painting A — Month 14 patient painting complete',
          'Choose series theme BEFORE touching paint for Series 1 — windows, hands, one street, one type of light, chairs, doorways. Must be something you are drawn to',
          'Write one sentence: "This series is about ___" — vague is fine ("about waiting", "about morning light")',
          '3 thumbnails exploring the theme — 10 min. Remaining time on Series Painting 1 — fresh canvas board',
          'Stop at 90 min. Photograph Series 1. Write one weakness on the back',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic only',
        steps: [
          'Mandatory emotion block (30–45 min minimum): unstructured acrylic',
          'Optional: use one colour that appeared in your series painting as the dominant emotion colour',
          'Do NOT do the 20-min problem study yet — that starts Week 6 after you have a previous series painting to diagnose',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'Series theme cannot change after Week 5 — six weeks on one subject. If you hate the theme by Week 7, that is data about what you actually want to paint.',
    milestone:
      'End of Month 14 check: thin wash, impasto, colour wheel, underpaint+glaze, Patient Painting A complete (3 sessions), and Series 1 started. You know acrylic dries darker.',
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Series week 2 — build on week 1',
    focus: 'Skill: second painting same theme · Session B 20-min problem study begins',
    badge: month15,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Series painting 2 of 6',
        steps: [
          '3 thumbnails — try a composition you did NOT use in Painting 1 — 10 min hard stop',
          '75–90 min fresh canvas — same theme, new approach. Do not fix Painting 1 — make a new one',
          'Apply one thing you noticed from Painting 1\'s weakness without overthinking',
          'Photograph both paintings side by side when dry. Write one new weakness on back of Painting 2',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: '20-min study on Series 1 weakness + emotion painting',
        steps: [
          'Read what you wrote on the back of Series Painting 1',
          '20 min hard block: small board or paper — study ONLY that one problem (e.g. "sky too flat", "hands too small")',
          'Mandatory emotion block (30–45 min minimum): free unstructured acrylic — remaining time',
          'Date both boards',
        ],
      },
    ],
    stopRule:
      'The 20-min study is diagnostic — not a finished piece. One problem only. Session B emotion still mandatory even if study was frustrating.',
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Series week 3 — midpoint',
    focus: 'Skill: third painting · shift from technique to intention',
    badge: month15,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Series painting 3 of 6',
        steps: [
          'Before starting: look at Paintings 1 and 2 together — what is changing? What repeats unplanned? Write 2 sentences',
          '3 thumbnails — 10 min. 75–90 min on Painting 3',
          'Mid-session check (minute 45): ask "What do I want to say about this subject?" not just "how do I render it?"',
          'Photograph all three when dry. Write weakness on back of Painting 3',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: '20-min study from Painting 2 + emotion',
        steps: [
          '20 min hard block: problem study from Painting 2\'s noted weakness only',
          'Mandatory emotion block (30–45 min minimum): free unstructured acrylic',
          'Date both boards',
        ],
      },
    ],
    stopRule:
      'Midpoint check: is Painting 3 different in intention from Painting 1, not just in composition? If they feel identical in purpose, write a new one-sentence intention before Week 8. Series pauses Session A weeks 8–9 for Patient Painting B — Series 4 moves to Week 8 Session B.',
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Patient Painting B — sessions 1 and 2',
    focus: 'Skill: dedicated patient painting · no series work in Session A · dry between sessions',
    badge: month15,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Patient Painting B — sessions 1 and 2 of 3 (Patient B only)',
        steps: [
          'Choose Patient B subject — different from Patient A and from your series theme detail shots unless intentional',
          '3 thumbnails — 10 min. Pick one composition',
          'Session 1 (35 min hard block): thin underpainting — value structure only. Write next step on sticky note. Let dry 15–20 min (hair dryer OK)',
          'Session 2 (35 min hard block): second pass on SAME board — glazes, second value layer, or colour block-in as your sticky note directs',
          'Stop with next step written for Week 9 Session A session 3',
          'Do NOT start Series Painting 4 in this session — Session A is Patient B only this week',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Series painting 4 of 6 + 20-min study + emotion',
        steps: [
          'First 60–75 min: Series Painting 4 — 3 thumbnails (10 min), then paint. Same theme as Paintings 1–3',
          '20 min hard block: problem study from Painting 3 weakness on paper or small board',
          'Mandatory emotion block (30–45 min minimum): if series and study consumed full 90 min, run emotion as a separate 30-min minimum block same week — do not skip',
          'Photograph Series 4 when dry',
        ],
      },
    ],
    stopRule:
      'Patient B must span 3 sessions — Week 9 Session A completes session 3. Force dry between sessions 1 and 2 if same day. Wet-on-wet patient layers make mud.',
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Finish Patient B + Series painting 5',
    focus: 'Skill: complete Patient Painting B · fifth series painting · series continues in Session B',
    badge: month15,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Patient Painting B — session 3 of 3 (finish only)',
        steps: [
          'Full Session A dedicated to Patient B session 3 — same board from Week 8',
          'Follow sticky note from Week 8. Final accents, glazes, or corrections until it reads at arm\'s length',
          'Photograph Patient Painting B — complete',
          'Do NOT start Series Painting 5 in Session A — that is Session B this week',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Series painting 5 of 6 + 20-min study + emotion',
        steps: [
          'First 60–75 min: Series Painting 5 — 3 thumbnails (10 min), then paint. Strongest attempt yet at the theme',
          '20 min hard block: problem study from Painting 4 weakness',
          'Mandatory emotion block (30–45 min minimum): free unstructured acrylic — schedule separately if Session B ran long',
          'Line up Paintings 1–5 when dry if possible — photograph',
        ],
      },
    ],
    stopRule:
      'Patient B Session A is finish-only — do not restart or change subject. If Patient B needs a fourth session, finish it before Series 5, but do not extend into a new week on a different board.',
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Series week 6 — finish the series',
    focus: 'Skill: sixth and final series painting · series reflection',
    badge: month15,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Series painting 6 of 6',
        steps: [
          '3 thumbnails — 10 min. 75–90 min on Painting 6 — your strongest attempt at the theme',
          'Line up all 6 series paintings when dry — photograph the full set',
          'Write on paper: 3 things that improved from Painting 1 to 6. 1 thing the series taught you about what you want to paint',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: '20-min study from Painting 5 + series reflection + emotion',
        steps: [
          '20 min hard block: problem study from Painting 5 weakness',
          '15 min written reflection: would you continue this series for 6 more? What would change?',
          'Mandatory emotion block (30–45 min minimum): celebrate or mourn the series ending, whichever is honest',
        ],
      },
    ],
    stopRule:
      'End of Month 15 check: 6 series paintings exist. Patient Paintings A and B photographed. Session B studies happened weeks 6–10 (except Week 5).',
    milestone:
      'Series complete when: 6 paintings on one theme exist side by side. Last 2 visibly stronger than first 2 OR you can explain precisely why they are not.',
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Palette knife only — texture week 1',
    focus: 'Skill: no brushes allowed · apply and scrape · thick paint physics',
    badge: month16,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Palette knife painting — brushes forbidden',
        steps: [
          '3 thumbnails with marker or pencil — 10 min hard stop',
          'Entire Session A using palette knife only — mixing and applying. If a brush touches canvas, reset the exercise',
          'Apply thick paint, scrape back with knife edge to reveal layers or board texture',
          'Subject: abstract landscape or your series theme revisited with knife texture',
          'Notice: knife forces simplification — detail is impossible, composition matters more',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Emotion painting with palette knife',
        steps: [
          'Mandatory emotion block (30–45 min minimum): free emotion work using ONLY palette knife',
          'Push texture to match feeling — heavy impasto for intensity, scrape smooth for quiet',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'If a brush touches the canvas in Session A, the exercise resets. The constraint is the lesson. No patient painting this week.',
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Glazing — transparent layers + Patient C starts',
    focus: 'Skill: dry layer + thin transparent glaze · Patient Painting C session 1 (standalone session)',
    badge: month16,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Glazing over dry underpainting (technique only)',
        steps: [
          'Use a dry board from earlier weeks OR start fresh with monochrome underpainting (must be fully dry)',
          'Mix glaze: acrylic with water + small amount of medium if you have it — should be transparent on paper test',
          'Apply one glaze layer — warm over cool underpainting or vice versa. Let dry completely',
          'Apply second glaze layer if time and dryness allow — each modifies the last',
          'This Session A is glaze technique only — Patient C starts in Session B, not mixed into this session',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Patient Painting C — session 1 of 3 (standalone)',
        steps: [
          'Patient C is its own painting — not on the glaze technique board from Session A',
          'Choose subject. 3 thumbnails — 10 min',
          'Session 1 (45 min hard block): underpainting only — thin wash establishing full value structure',
          'Write next step on sticky note. Let dry before Week 13',
          'Mandatory emotion block (30–45 min minimum): separate board, unstructured acrylic',
        ],
      },
    ],
    stopRule:
      'Never glaze on wet paint. One glaze at a time. Patient C session 1 is standalone — do not combine with knife or tools exercises.',
  },
  {
    id: 'week-13',
    weekNumber: 13,
    title: 'Unconventional tools + finish Patient C',
    focus: 'Skill: credit card, plastic wrap, fabric texture · complete Patient Painting C in standalone session',
    badge: month16,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Unconventional tools experiment (technique only)',
        steps: [
          'Tools: old credit card, crumpled plastic wrap, textured fabric, sponge — anything not a brush',
          'One canvas board: divide into sections testing each tool — 15 min per tool, hard stops',
          'Second board: use your favourite tool from tests on a real subject — 3 thumbnails first (10 min)',
          'This Session A is tools technique only — Patient C continues in Session B, not here',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Patient Painting C — sessions 2–3 + emotion (standalone)',
        steps: [
          'First 45 min: Patient Painting C session 2 on SAME board from Week 12 — follow sticky note, let dry if adding wet layers',
          'Next 30 min: Patient Painting C session 3 — finish until it reads at arm\'s length. Photograph Patient C',
          'Mandatory emotion block (30–45 min minimum): free acrylic using whichever tool from Session A felt most expressive — separate board',
        ],
      },
    ],
    stopRule:
      'End of Month 16 check: knife (Week 11), glaze (Week 12), and unconventional tool (Week 13) boards exist. Patient Paintings A, B, and C photographed.',
    milestone:
      'Texture trio complete: knife week, glaze week, unconventional tools week. Patient C finished in its own session — not crammed into the tools teaching session.',
  },
  {
    id: 'week-14',
    weekNumber: 14,
    title: 'Imagination month — week 1',
    focus: 'Skill: no reference allowed · paint from internalised knowledge · diagnostic not test',
    badge: month17,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Imagination painting 1 — references away',
        steps: [
          'Put phone in another room. Close laptop. No photos, no Pinterest, no looking at previous work for copying',
          '3 thumbnails from memory or feeling only — 10 min. Subject you know well: your room, a street you walk, a face you remember',
          '75–90 min acrylic from imagination. Proportions will be wrong — that is data',
          'When stuck, do not grab reference — note what you could not remember (that reveals reference dependency)',
          'Write on back: 3 things you had to guess vs knew confidently',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic — no reference, no studies',
        steps: [
          'No reference still. No 20-min problem study this month — imagination month Session B is emotion only',
          'Mandatory emotion block (30–45 min minimum): emotion painting from internal state only',
          'Easier than Session A for most people — emotion does not require accurate drawing',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'Imagination month is diagnostic, not a test. What falls apart reveals what you still lean on reference for. Do not be discouraged.',
    note: 'Four consecutive weeks no reference (Weeks 14–17). Session B = emotion only, no 20-min studies during imagination month.',
  },
  {
    id: 'week-15',
    weekNumber: 15,
    title: 'Imagination month — week 2',
    focus: 'Skill: second imagination painting · notice what improved from week 1',
    badge: month17,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Imagination painting 2',
        steps: [
          'Still no reference. Different subject from Week 14 — push a harder memory (crowd, landscape, full figure)',
          '3 thumbnails from head — 10 min. 75–90 min painting',
          'Compare to Week 14: what is easier this week? What still collapses? Write 3 sentences on paper',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic — no studies',
        steps: [
          'No reference. No 20-min problem study',
          'Mandatory emotion block (30–45 min minimum): unstructured acrylic',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'Do not cheat reference in Week 15 because Week 14 was hard. The difficulty is the curriculum.',
  },
  {
    id: 'week-16',
    weekNumber: 16,
    title: 'Imagination month — week 3',
    focus: 'Skill: third imagination painting · combine remembered elements',
    badge: month17,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Imagination painting 3',
        steps: [
          'Still no reference. Try combining two remembered places or people into one invented scene',
          '3 thumbnails from head — 10 min. 75–90 min painting',
          'Note: imagination paintings often get more interesting in Weeks 3–4 as pressure drops',
          'Write on back: one thing that surprised you about painting without reference',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic — no studies',
        steps: [
          'No reference. No 20-min problem study',
          'Mandatory emotion block (30–45 min minimum): unstructured acrylic',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'Session B stays emotion-only all imagination month — resist adding diagnostic studies until Week 18.',
  },
  {
    id: 'week-17',
    weekNumber: 17,
    title: 'Imagination month — week 4 + Patient D begins',
    focus: 'Skill: final imagination piece · Patient Painting D session 1 after imagination ends',
    badge: month17,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Imagination painting 4 — final no-reference piece',
        steps: [
          'Still no reference for Session A. Your strongest imagination attempt this month',
          '3 thumbnails from head — 10 min. 75–90 min painting',
          'Line up all 4 imagination paintings when dry — photograph the set',
          'Write: 3 things you can paint from head now that you could not in Week 14',
          'Imagination month ends after this session — reference allowed again starting Session B',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Patient Painting D — session 1 of 3 (reference allowed again)',
        steps: [
          'Reference allowed again — Patient D may use photos or still life',
          'Choose subject. 3 thumbnails — 10 min',
          'Session 1 (45 min hard block): underpainting — value structure on canvas board',
          'Write next step on sticky note. Let dry before Week 18 Session B session 2',
          'Mandatory emotion block (30–45 min minimum): free unstructured acrylic on separate board',
        ],
      },
    ],
    stopRule:
      'Week 17 Session A must stay reference-free — do not blend imagination and Patient D in the same session. Patient D spans Weeks 17–18 in Session B slots.',
  },
  {
    id: 'week-18',
    weekNumber: 18,
    title: 'Phase 1 emotion expansion 1 + finish Patient D',
    focus: 'Skill: translate pencil emotion into acrylic · complete Patient Painting D',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Phase 1 emotion page → full acrylic painting',
        steps: [
          'Find Phase 1 sketchbook. Choose one emotion page where the feeling still reads clearly',
          'Look 5 minutes. Write the mood one word. 3 thumbnails: how does this mood look in acrylic? — 10 min',
          '75–90 min expansion on canvas board — colour, texture, layers, opacity — NOT copying pencil marks',
          'If you did Phase 4 Week 11 watercolor of the same page, lay all three versions out when dry',
          'Photograph with original pencil page in frame',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Patient Painting D — sessions 2–3 + emotion',
        steps: [
          'First 45 min: Patient Painting D sessions 2 and 3 on SAME board from Week 17 — finish until it reads at arm\'s length',
          'Photograph Patient Painting D — all four patient paintings (A–D) now complete',
          'Mandatory emotion block (30–45 min minimum): current mood only — not revisiting old Phase 1 pages',
        ],
      },
    ],
    stopRule:
      'Expansion not reproduction — if the acrylic looks like traced pencil lines, you copied surface. Translate feeling. Patient D must finish before Week 19 expansion.',
  },
  {
    id: 'week-19',
    weekNumber: 19,
    title: 'Phase 1 emotion page — acrylic expansion 2',
    focus: 'Skill: second emotion translation · different mood · complete the arc',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Second Phase 1 emotion page in acrylic',
        steps: [
          'Choose a DIFFERENT Phase 1 page from Week 18 — different mood required',
          'Same process: 5 min look, one word mood, 3 thumbnails (10 min), 75–90 min expansion',
          'Photograph both Week 18 and Week 19 acrylics with their pencil sources',
          'Write one paragraph: what did acrylic add that pencil and watercolor could not?',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion + optional Phase 4 comparison',
        steps: [
          'If Phase 4 watercolor emotion translations exist, lay full arc: pencil → watercolor → acrylic — 15 min looking only',
          'Mandatory emotion block (30–45 min minimum): free acrylic on current feeling',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'Two distinct Phase 1 pages required — same page twice defeats the comparison.',
    note: 'This is the most revealing exercise in the full roadmap — the distance between Phase 1 pencil and Month 18 acrylic is how far you have come.',
  },
  {
    id: 'week-20',
    weekNumber: 20,
    title: 'Deep study of one living artist — research',
    focus: 'Skill: research process · notes before painting · no surface copying',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Research — process, not pictures',
        steps: [
          'Choose one living artist you genuinely admire',
          'Watch long-form interview or studio tour — notes on: how they start, build layers, stop, palette, failure habits',
          'Write three process choices (see "How to study an artist\'s process" tab) before any painting',
          'Deliverable: one page of written process notes with three habits to test next week',
          'No painting this session if research fills 90 min — that is correct use of time',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic',
        steps: [
          'Mandatory emotion block (30–45 min minimum): unstructured acrylic — research week still needs feeling work',
          'Optional: thumbnail one subject idea for Week 21 method study — 10 min max, no painting',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'Session A is research-only. If you start copying their paintings instead of noting process, restart with interview notes only.',
  },
  {
    id: 'week-21',
    weekNumber: 21,
    title: 'Method study painting — their process, your subject',
    focus: 'Skill: apply researched process · conscious influence choices',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Study painting using their method — your subject',
        steps: [
          'Re-read Week 20 process notes before touching paint',
          'Your subject (series theme, patient painting idea, or emotion), their procedure — 3 thumbnails (10 min)',
          '75–90 min on canvas board following their sequence as closely as your materials allow',
          'Write on back: one habit to adopt, one to reject, one that does not fit you',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic (mandatory)',
        steps: [
          'Mandatory emotion block (30–45 min minimum): unstructured acrylic — not optional even if Session A was exhausting',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'If the study looks like a bad copy of their painting, you copied surface. Restart with process notes only.',
  },
  {
    id: 'week-22',
    weekNumber: 22,
    title: 'Final painting — session 1 (calendar day 1)',
    focus: 'Skill: most considered acrylic · start-stop-write protocol · must dry before session 2',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min (Day 1 — write this date on the board)',
        title: 'Final painting — session 1 of 2',
        steps: [
          'Your most considered acrylic of the entire roadmap — choose subject from series themes, emotion arc, or imagination discoveries',
          '5 thumbnails — 10 min. Value plan on paper. Full intention sentence written before paint',
          'Session 1 deliverable: underpainting and major masses only — stop while next step is clear',
          'Write next step on sticky note on board back. Photograph progress',
          'CRITICAL: Session 2 happens on a DIFFERENT calendar day — minimum overnight dry, ideally 24–48 hours later. Write "Session 2 date: ___" on the sticky note',
          'Do not continue to glazes, texture, or finish in this session — stopping mid-painting is the protocol',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic',
        steps: [
          'Mandatory emotion block (30–45 min minimum): unstructured acrylic on a separate board',
          'Do not touch the final painting board in Session B — let it dry undisturbed',
          'Date both boards',
        ],
      },
    ],
    stopRule:
      'Final painting session 1 and session 2 MUST be on different calendar days. Same-day continuation defeats the dry-between-layers lesson.',
  },
  {
    id: 'week-23',
    weekNumber: 23,
    title: 'Final painting — session 2 (calendar day 2)',
    focus: 'Skill: complete final painting · finish when it reads, not when time runs out',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min (Day 2 — must be a different calendar day from Week 22 Session A)',
        title: 'Final painting — session 2 of 2 (finish)',
        steps: [
          'Confirm board is fully dry from Week 22 — touch test on an edge',
          'Read sticky note from session 1. Follow that next step first',
          'Session 2 deliverable: glazes, texture, accents, and finish until painting reads at arm\'s length',
          'Stop when done — not when perfect. Write on back: "Finished because ___"',
          'Photograph final painting. This is your Phase 5 capstone piece',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Free emotion acrylic',
        steps: [
          'Mandatory emotion block (30–45 min minimum): unstructured acrylic',
          'Optional 10 min: compare final painting to Series Painting 1 — write one sentence on growth',
          'Date the board',
        ],
      },
    ],
    stopRule:
      'If Week 22 and Week 23 Session A land on the same calendar day, move session 2 to the next day. The gap is non-negotiable.',
  },
  {
    id: 'week-24',
    weekNumber: 24,
    title: 'Roadmap retrospective — photos and written review',
    focus: 'Skill: curate 10 best per phase · name recurring themes · close the roadmap',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Retrospective — 10 best per phase + written questions',
        steps: [
          'Do NOT lay out every piece on the floor — that is too much setup. Work from photos and sketchbook stacks at your desk',
          'Photograph or select your 10 best from each phase: Phase 1 sketchbook pages, Phase 2 charcoal, Phase 3 composition drawings, Phase 4 watercolors, Phase 5 acrylics — 50 images total max',
          'Write answers (full sentences, not bullet fragments): What 3 themes recur unplanned? What subjects do you return to? What marks or colours are yours alone? What do you still avoid painting? What weak skill still needs honest work?',
          'Write: "After this roadmap I will ___" — one sentence assignment you give yourself',
          'Save the 50-image set as your archive — label folders by phase',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Optional closing emotion (20 min minimum if you paint)',
        steps: [
          'Retrospective writing from Session A is the main deliverable — emotion is optional this week',
          'If you paint: 20 min minimum unstructured acrylic to close the roadmap with feeling, not just analysis',
          'If you skip painting: re-read your Week 24 written answers instead — that counts as closing',
          'Date any board you make "Phase 5 — last emotion page"',
        ],
      },
    ],
    stopRule:
      'The retrospective writing is not optional — the final painting is how you paint; the retrospective is why you will continue. No full floor spread required.',
    milestone:
      'Phase 5 and the full roadmap complete when: you have a body of acrylic work including a 6-painting series, imagination month paintings, 4 patient paintings (A–D), 2 Phase 1 emotion expansions, a method-study piece, a two-session final painting, and written retrospective themes. You know when a painting is done. Emotion pours into paint and reads.',
  },
]
