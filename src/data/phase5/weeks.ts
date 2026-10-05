import type { WeekDetail } from '../../types/guide'

const month16 = { label: 'Month 16', background: '#EEEDFE', color: '#3C3489' }
const month17 = { label: 'Month 17', background: '#E4E0FC', color: '#322A75' }
const month18 = { label: 'Month 18', background: '#DAD4FA', color: '#292062' }
const month19 = { label: 'Month 19', background: '#D0C8F8', color: '#211850' }

export const phase5Weeks: WeekDetail[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Acrylic fundamentals — thin washes and thick paint',
    focus: 'Skill: acrylic thinned with water · impasto with no water · dry time and dry-dark shift',
    badge: month16,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Thin washes — acrylic like watercolor',
        steps: [
          'Set up: canvas boards (20×25cm), acrylic set, 3 brushes, palette, water jar, paper towel, palette knife for mixing',
          'Squeeze small amounts — acrylic dries on the palette. Mist the palette lightly or use a stay-wet pad if you have one',
          'Thin paint with plenty of water — milk to tea consistency. Divide one canvas board into three bands',
          'Band 1: a flat colour wash. Band 2: a graded light-to-dark wash. Band 3: a loose 3-colour gradient. Hard stop at 90 min',
          'Write your brand’s dry time on the board edge — minutes until the surface looks matte. Typically 10–30 min',
          'Dry one patch with a hair dryer. Compare it with a still-wet area. Acrylic dries darker. Mix lighter than the wet colour looks',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Thick impasto — the opposite extreme',
        steps: [
          'No water added — straight from the tube with a palette knife or a stiff brush',
          'Load the knife and push paint across a fresh canvas board until ridges and texture are visible',
          'Deliverable: one board fully covered in impasto, with the stroke direction changing across the surface — 50 min hard block',
          'Compare the thin board from Session A and the thick board when both are dry',
          'Last 20 min: on the same impasto board, scrape one passage back with the knife edge so a lighter layer or the board shows through. Stop there',
          'Date both boards. Label them thin and thick',
        ],
      },
    ],
    stopRule:
      'Week 1 is the two extremes. Do not hunt for a comfortable middle. Stop when each board is covered, not when it looks like a picture.',
    note: 'Buy gesso-primed canvas boards, 20×25cm, before Week 1. This phase uses about 14 boards: washes, one glaze study, one patient painting, four series paintings, two tool boards, one emotion expansion, one method study, and one final painting. A pack of 10 runs out when the series starts — buy a second pack before Week 5. Mixing swatches in Week 2 can go on paper. Phase 5 paints: 6–8 colours (primaries + white + black minimum), a palette knife, and a plastic palette.',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Mixing from primaries and the dry-dark shift',
    focus: 'Skill: mix hues from primaries · name mud · measure how much darker your brand dries',
    badge: month16,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Compact colour wheel from primaries only',
        steps: [
          'Colours: cadmium yellow or hansa, cadmium red or naphthol, ultramarine blue, titanium white, ivory black',
          'On paper or a board, paint 12 hue swatches mixed from those primaries. No tube greens, oranges, or purples',
          'Beside the wheel: one row of tints (add white) and one row of shades (add black sparingly — black is strong in acrylic)',
          'Mark mixes that went mud (grey, dead, opaque) and mixes that stayed clear',
          'Deliverable: a written list of your 5 most useful mixes for subjects you actually paint. Put it on paper, not in your head',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'One board — thin, thick, and a dry-dark test',
        steps: [
          '3 thumbnails on paper — flat shapes only, 5 min hard stop. A simple split is enough: sky as thin wash, ground as thicker paint',
          'Paint one board using only mixes from Session A. Thin one area, thick another. Switch water ratio on purpose',
          'Hair-dryer test: dry one patch and compare it with the wet paint beside it. Write on the back: “Mix ___ lighter than the wet colour” for your brand',
          'Do not start a second painting. The deliverable is one board plus that sentence',
        ],
      },
    ],
    stopRule:
      'End of Week 2: you can mix a green, an orange, and a purple from primaries, you can point at a mud mix, and you have a written dry-dark note. If the dry shift is still a guess, repeat the hair-dryer test before Week 3. Do not sneak tube secondary colours into the wheel.',
    milestone:
      'You know your paint’s dry time and how much darker it dries. The watercolour mixing grid from Phase 4 still applies — this week confirms it in acrylic.',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Underpainting, then glaze',
    focus: 'Skill: value first in one colour · transparent colour after the underpainting is dry',
    badge: month16,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Monochrome underpainting only',
        steps: [
          '3 thumbnails of a simple subject (mug, window, plant) — 10 min hard stop',
          'On a fresh board, underpaint in ultramarine + white only. Thin wash. Full value structure: lights, mid-darks, and the shadow mass',
          'Write the light direction and the shadow colour temperature on the back',
          'Stop while the next step is obvious. Sticky note: “glaze when fully dry — do not cover the lights completely”',
          'This board is the technique study. It is not the patient painting',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Glaze the Week 3 board — one layer at a time',
        steps: [
          'Touch an edge. If the underpainting is tacky, wait or force-dry with a hair dryer before any glaze',
          'Mix a glaze: acrylic plus water, transparent on a paper test. Limited colours: ultramarine, cadmium red, yellow ochre, white',
          'Apply one glaze. It should modify the layer under it, not hide the value structure',
          'If that layer is dry and time remains, apply a second glaze in one area only. Wet glaze on wet glaze makes mud',
          'Photograph the board. Write one sentence: where the glaze helped, and where it killed the light',
        ],
      },
    ],
    stopRule:
      'Session A and Session B of this week must be different calendar days so the underpainting can dry. One glaze at a time. Do not start the patient painting on this board.',
    note: 'Week 3 is the method. Week 4 repeats it on a painting you care about, across more than one day. Do not combine them.',
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Patient painting — sessions 1 and 2',
    focus: 'Skill: one painting, two sessions, sticky-note next step · same board both days',
    badge: month16,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Patient painting — session 1 of 3',
        steps: [
          'Choose the subject before touching paint. Simple, and something you care about. Not a piece designed to impress anyone',
          '3 thumbnails on paper — 10 min. Pick one',
          'Session 1 (the rest of the session): thin underpainting on a new canvas board — ultramarine + white only, lights and darks',
          'Stop midway with the next step on a sticky note on the back. Example: “second value pass” or “first glaze when dry”',
          'Let the board dry completely before Session B — overnight if you can. This is not the Week 3 study board',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Patient painting — session 2 of 3',
        steps: [
          'Same board. Read the sticky note and do that step first',
          'Second pass only: a value correction, or the first dry glaze. Do not restart the subject',
          'Stop again with a new sticky note for Week 5 Session A. The note should name the finish step, not a new idea',
          'Photograph the unfinished board. Do not begin the series this week',
        ],
      },
    ],
    stopRule:
      'Same board both sessions. If Session B is the same calendar day as Session A, move it. Wet-on-wet layers on this painting make mud. The series does not start until this painting has its third session.',
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Finish the patient painting and start the series',
    focus: 'Skill: close one painting · lock a four-painting theme · first series board',
    badge: month17,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Patient painting — session 3 of 3 (finish only)',
        steps: [
          'Same board from Week 4. Follow the sticky note. Accents, one glaze, or a correction until it reads at arm’s length',
          'Stop when it reads — not when it is impressive. Write on the back: “Finished because ___”',
          'Photograph it. This is the only patient painting in Phase 5',
          'Do not start a series painting in this session',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Series painting 1 of 4',
        steps: [
          'Choose the theme before paint: windows, hands, one street, one kind of light, chairs, doorways. It has to be something you are drawn to',
          'Write one sentence: “This series is about ___.” Vague is allowed (“about waiting”, “about morning light”)',
          '3 thumbnails — 10 min. Then Series Painting 1 on a fresh board for the remaining time',
          'Stop at 90 min. Photograph it. Write one weakness on the back',
        ],
      },
    ],
    stopRule:
      'The theme cannot change after this session. Four weeks on one subject. If you hate the theme by Week 7, that is information about what you actually want to paint — finish the four anyway.',
    milestone:
      'End of the opening block: thin wash, impasto, a primary-mix wheel, one glazed study, one finished patient painting, and Series Painting 1. You can say how much darker your acrylic dries.',
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Series painting 2',
    focus: 'Skill: same theme, new composition · one problem from Painting 1, studied small',
    badge: month17,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Series painting 2 of 4',
        steps: [
          '3 thumbnails — a composition you did not use in Painting 1. 10 min hard stop',
          'Fresh canvas. Same theme, new approach. Do not go back and fix Painting 1',
          'Use one observation from the weakness written on Painting 1, without redesigning the theme',
          'Photograph Paintings 1 and 2 side by side when dry. Write one new weakness on the back of Painting 2',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'One 20-minute problem study, then stop',
        steps: [
          'Read the weakness on the back of Series Painting 1',
          '20 min hard block on paper or a small board: study only that problem (for example “sky too flat” or “the dark shape has no edge”)',
          'The study is diagnostic. It is not a fifth painting',
          'Remaining time: three sentences on what you will carry into Painting 3. Then stop. No mood board',
        ],
      },
    ],
    stopRule:
      'One problem only in Session B. Do not repaint Series 1. If 20 minutes becomes an hour, you have started a new piece — stop and write the note instead.',
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Series painting 3 — intention check',
    focus: 'Skill: same theme · ask what the painting is saying, not only how to render it',
    badge: month17,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Series painting 3 of 4',
        steps: [
          'Look at Paintings 1 and 2 together. Write two sentences: what is changing, and what repeats without your planning it',
          '3 thumbnails — 10 min. Then Painting 3',
          'At the halfway mark, ask “What do I want this subject to feel like?” rather than “How do I finish the objects?”',
          'Photograph all three when dry. Write the weakness on the back of Painting 3',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Problem study from Painting 2',
        steps: [
          '20 min hard block: only the weakness noted on Painting 2',
          'Then write whether Painting 3 differs from Painting 1 in intention, or only in layout',
          'If the purpose feels identical, write a new one-sentence intention before Week 8. Do not start Painting 4 today',
        ],
      },
    ],
    stopRule:
      'Session B is a study and a sentence, not another series painting. Painting 4 has its own week.',
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Series painting 4 and series close',
    focus: 'Skill: last painting on the locked theme · say what the four taught you',
    badge: month17,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Series painting 4 of 4',
        steps: [
          '3 thumbnails — 10 min. Then Painting 4, your clearest attempt at the theme',
          'Line the four up when dry and photograph the set',
          'Write: two things that improved from Painting 1 to 4, and one thing the series taught you about what you want to paint next',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Series reflection — or the missing painting, if one is absent',
        steps: [
          'If any of the four paintings was skipped, this session makes that painting. Label the page “Week 8 buffer” and which number it replaces',
          'If all four exist: 15 min looking at the row. Write whether you would continue this theme, and what you would change',
          'Write one subject you are now sure you do not want as your next long project',
          'No new technique and no second theme this week',
        ],
      },
    ],
    stopRule:
      'The series is complete when four paintings on one theme sit side by side, and the last is visibly stronger than the first or you can say exactly why it is not. Week 8 Session B is the buffer if a painting is missing. Do not add a fifth.',
    milestone:
      'Four series paintings exist. The patient painting is already finished and photographed. Problem studies happened in Weeks 6 and 7 only.',
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Tools sampler — knife, then anything but a brush',
    focus: 'Skill: one session with the knife only · one session testing other tools · no extra painting project',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Palette knife only',
        steps: [
          '3 thumbnails in pencil — 10 min hard stop',
          'The whole session uses the palette knife to mix and to apply paint. If a brush touches the canvas, reset the exercise',
          'Put paint on thick, then scrape with the knife edge to reveal an earlier layer or the board',
          'Subject: a simple landscape, or your series theme restated with the knife. Detail will be impossible — that is the lesson',
          'One board. Stop when the session ends',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Unconventional tools on a second board',
        steps: [
          'Tools: an old card, crumpled plastic wrap, a sponge, a rag — not a brush for the tests',
          'Divide one fresh board into four areas. 12 min each tool, hard stop. Note which mark you would actually use again',
          'Last 25 min: one small passage using only your favourite tool from the tests. 3 tiny thumbnails first if you need a subject — 5 min maximum',
          'Photograph both boards. Write the one tool you will keep and the one you will drop',
        ],
      },
    ],
    stopRule:
      'Two boards, two constraints. Do not start another patient painting. If a brush touches the canvas in Session A, reset that exercise.',
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'One Phase 1 emotion page, expanded in acrylic',
    focus: 'Skill: the same feeling in a new medium · colour and thickness, not a tracing of the pencil',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Phase 1 page → one acrylic painting',
        steps: [
          'Open the Phase 1 sketchbook. Choose one emotion page where the feeling still reads. If it does not, choose another page or name the feeling fresh and paint that',
          'Look for 5 minutes. Write the mood in one word. 3 thumbnails: how this mood looks in acrylic — 10 min',
          'Paint an expansion on a canvas board: colour, thickness, opacity. Do not copy the pencil marks',
          'If a Phase 4 watercolour of a related mood exists, set it nearby when the acrylic is dry. Photograph the pair with the pencil page',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'What acrylic added — writing, not a second painting',
        steps: [
          'Lay out the pencil page, the watercolour if you have one, and the acrylic',
          'Write one paragraph: what acrylic could do that pencil and watercolour could not — name thickness, covering power, or colour, with an example from this board',
          'Write one thing you overworked. That note matters more than another painting',
          'Do not expand a second Phase 1 page. One translation is the assignment',
        ],
      },
    ],
    stopRule:
      'If the acrylic looks like traced pencil lines, you copied the surface. Translate the feeling. One page only — a second expansion can be what you choose after the roadmap, not an extra week here.',
    note: 'A page from the start of Phase 1 may no longer hold the feeling. Trust the page that still reads. The point is the translation, not loyalty to the oldest sheet.',
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'One living artist — their process, your subject',
    focus: 'Skill: research before paint · three process choices · a study that does not copy their picture',
    badge: month18,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Research — process, not pictures',
        steps: [
          'Choose one living artist whose work is relevant to what you want to make',
          'Watch a long interview or a studio tour. Notes on: how they start, how they build layers, how they stop, what is on the palette, what they do when something fails',
          'Write three process choices before any painting. Use the “How to study an artist’s process” tab: how they begin, how they build, how they stop',
          'Deliverable: one page of notes and one sentence naming the subject you will paint in Session B',
          'No painting this session if the research fills the time. That is the correct use of Session A',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Method study — your subject, their sequence',
        steps: [
          'Re-read the three process notes before touching paint',
          'Your subject (the series theme, the patient-painting idea, or the emotion expansion). Their procedure. 3 thumbnails — 10 min',
          'Paint one board following their sequence as closely as your materials allow',
          'On the back: one habit to adopt, one to reject, one that does not fit you. Try the adopted habit once on this same board — do not open a second emotion board',
        ],
      },
    ],
    stopRule:
      'If the study looks like a bad copy of their painting, you copied the surface. The deliverable is their sequence on your subject, plus the three written choices. Restart from the notes rather than polishing the resemblance.',
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Final painting — session 1',
    focus: 'Skill: the most considered acrylic so far · stop while the next step is clear · leave it dry',
    badge: month19,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Final painting — session 1 of 2',
        steps: [
          'Choose the subject from the series, the emotion expansion, or the patient painting — whichever still feels unfinished as an idea, not as a repair job',
          '5 thumbnails — 10 min. A value plan on paper. One intention sentence written before paint',
          'Session 1 deliverable: underpainting and the major masses only. Stop while the next step is clear',
          'Sticky note on the back with that next step. Photograph the progress. Write today’s date on the board',
          'Write “Session 2 date: ___” and leave it blank until Week 13. Do not glaze, texture, or finish in this session',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Session 2 plan — do not touch the painting',
        steps: [
          'The final board stays untouched so it can dry',
          'From the photo and the sticky note, write the Week 13 plan in full sentences: what gets a glaze, what stays, where the feeling should land, what you will not fix',
          '40 min for that plan is enough. Stop when it is specific',
          'If you want to paint, use scrap paper for a colour test of one glaze. Do not continue the final board',
        ],
      },
    ],
    stopRule:
      'Session 2 is Week 13 Session A, on a different calendar day from today. Same-day continuation throws away the dry-between-layers lesson. Stopping in the middle is the protocol.',
  },
  {
    id: 'week-13',
    weekNumber: 13,
    title: 'Final painting session 2, then the retrospective',
    focus: 'Skill: finish on a later day · name what to study next · close the roadmap',
    badge: month19,
    sessions: [
      {
        label: 'Session A — 75–90 min',
        title: 'Final painting — session 2 of 2',
        steps: [
          'Confirm this is a different calendar day from Week 12 Session A. If it is the same day, stop and move this session',
          'Touch-test an edge. The board should be fully dry. Read the sticky note and the Week 12 plan, and do that next step first',
          'Glazes, texture, or accents until the painting reads at arm’s length',
          'Stop when it reads, not when it is perfect. Write on the back: “Finished because ___”',
          'Photograph it. This is the Phase 5 capstone. If Week 12 never happened, use this session to block in only, and do the finish on a later day before you rely on the retrospective',
        ],
      },
      {
        label: 'Session B — 75–90 min',
        title: 'Retrospective — photos, themes, and the next path',
        steps: [
          'Do not lay every piece on the floor. Work from photos and the sketchbook stacks at a desk',
          'Select up to 10 pieces from each phase that still teach you something. You do not need 50 images if fewer are honest',
          'Write full sentences: What 3 themes recurred without your planning them? What subjects do you return to? What do you still avoid? Which skill is actually weak — proportion, value, edges, perspective, or gesture?',
          'Choose one next path, and write the first month of it in three sentences. Paths: figures and portraits; places and perspective; stories and illustration; expressive series and colour; longer observational paintings. Imagination-from-memory belongs inside whichever path you pick, as a test, not as a separate course you owe yourself now',
          'Write: “After this roadmap I will ___.” One assignment. Date it',
        ],
      },
    ],
    stopRule:
      'The writing is the close of the roadmap. The final painting can stay unresolved only if you say so in the retrospective and name the missing session. Do not add a Week 14 of new techniques inside this phase.',
    milestone:
      'Phase 5 is complete when you have: thin and thick studies, a written dry-dark note, one glazed study, one patient painting across three sessions, four paintings on one theme, two tool boards, one Phase 1 emotion expansion, one method study, a final painting on two different days, and a written choice of what you will study next. You can stop a painting because it reads, and you can name the weakness you will work on after this.',
  },
]
