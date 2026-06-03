import type { WeekDetail } from '../../types/guide'

const month10 = { label: 'Month 10', background: '#FAEEDA', color: '#633806' }
const month11 = { label: 'Month 11', background: '#F5E4C8', color: '#5A2F05' }
const month12 = { label: 'Month 12', background: '#F0D9B5', color: '#502A04' }
const month13 = { label: 'Month 13', background: '#EBCEA2', color: '#462501' }

export const phase4Weeks: WeekDetail[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Flat wash — foundation of everything',
    focus: 'Skill: even horizontal washes · brush loading · paper tilt · no subjects yet',
    badge: month10,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Flat wash drills — horizontal',
        steps: [
          'Set up: 300gsm cold-press watercolor paper taped flat, 2 jars clean water, paper towel, round brush size 12',
          'Mix one colour (any blue or earth tone) to milk consistency — not too thick, not watery',
          'Tilt paper 10–15°. Load brush fully. Pull one continuous horizontal stroke without lifting',
          'Goal: even tone, no streaks, no dry brush lines. If streaks appear, mix more paint and work faster',
          'Deliverable: 3 full sheets with flat horizontal washes — different colours OK, evenness is the only goal',
          'No subjects. No objects. No trees. Just wash. This week is physics, not art.',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Graded wash introduction — light to dark',
        steps: [
          'One colour only. Start with concentrated mix at top of paper',
          'Add water to the mix progressively as you move down — single continuous stroke if possible',
          'Second sheet: dark to light (reverse direction)',
          'Third sheet: light-dark-light in one vertical pass — hardest version, expect failure',
          'Date every sheet. Label "Week 1 — graded wash attempt 1, 2, 3"',
          'Remaining time: optional one-colour emotion marks only if energy remains — not required until Week 3',
        ],
      },
    ],
    stopRule:
      'When to stop each wash sheet: when the sheet is full or 20 minutes pass — move to next sheet even if streaky. Streaks are data. Do not attempt subjects this week. If you paint layered work later in the phase, let each layer dry fully between sessions (15+ min, or overnight) before the next glaze.',
    note: 'Buy 300gsm cold-press paper before Week 1. If paper buckles, curls, or pools in the middle, the problem is supplies — not your hand. Fix tape, heavier paper, or less water; then repeat this wash week before mixing colour. Three brushes (round 2, 6, 12) are enough for the entire phase.',
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Flat and graded washes — mastery week',
    focus: 'Skill: vertical and diagonal washes · smooth gradients both directions · still no subjects',
    badge: month10,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Flat wash — vertical and diagonal',
        steps: [
          'Repeat flat wash drills — vertical strokes (paper upright)',
          'Diagonal washes corner to corner — 2 sheets',
          'Compare Week 1 horizontal sheets to today — are streaks reducing?',
          'Mix enough paint BEFORE starting each sheet — running out mid-wash is the main cause of streaks',
          'No subjects. Still washes only.',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Graded wash — four directions',
        steps: [
          'Sheet 1: light to dark, horizontal. Sheet 2: dark to light, horizontal',
          'Sheet 3: light to dark, vertical. Sheet 4: dark to light, vertical',
          'Goal: smooth transitions — no visible band lines between values',
          'If band lines appear: paper dried between strokes. Work faster or pre-wet lightly',
          'End of Week 2 gate: can you produce one streak-free flat wash? If not, Week 3 is your repeat week — do not skip to mixing.',
        ],
      },
    ],
    stopRule:
      'End of Week 2 gate: do not proceed to colour mixing until one flat wash and one graded wash are acceptably smooth. Two weeks of washes feels slow — it is faster than two months of muddy landscapes.',
    milestone:
      'End of Week 2 check: at least 7 wash sheets completed (flat + graded). One flat wash is streak-free. You understand brush loading and paper tilt. No subjects attempted yet — correct.',
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Wash consolidation — buffer before mixing',
    focus: 'Skill: streak-free gate · repeat weak wash types · Session B emotion begins (mandatory 45 min)',
    badge: month10,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Wash buffer — repeat until the gate passes',
        steps: [
          'Lay out Week 1–2 wash sheets. Circle your worst streak or band-line problem',
          'Repeat ONLY that wash type until one sheet is acceptably streak-free OR 75 min ends',
          'If flat horizontal is weak: 2 flat sheets. If graded vertical is weak: 2 graded sheets. Do not drift into subjects',
          'Gate question: one flat wash streak-free AND one graded wash smooth? Yes → proceed to Week 4. No → repeat Week 3 next week',
          'No colour mixing grid this week. No skies. Washes only.',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion painting (45 min) after wash work',
        steps: [
          'First 45 min (mandatory, timed): free watercolor emotion page — one or two colours, wet brush, no subject, no planning',
          'Date the page. Write one feeling word in the corner',
          'Remaining 30 min: one more wash sheet of your weakest type OR extend the emotion page if the wash gate already passed',
          'Session B emotion is mandatory every week from Week 3 through Week 20 — never skip because skill work ran long',
        ],
      },
    ],
    stopRule:
      'Do not open the mixing grid until the Week 3 gate passes. If the gate fails, repeat Week 3 before Week 4 — mixing on top of bad washes produces mud you will blame on pigment. Multi-session paintings later in the phase: let layers dry between Session A and Session B if both happen the same day.',
    note: 'Week 3 exists because supplies and speed problems show up here, not in Week 8 landscapes. Repeating washes is success, not falling behind.',
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Color mixing chart — part one',
    focus: 'Skill: first half of palette grid · mud vs harmony marks · color temperature ritual begins here',
    badge: month10,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Mixing grid — first half of your palette',
        steps: [
          'Before starting (first week this applies): write at top of paper — "Light: warm. Shadow: cool."',
          'Draw a grid — rows and columns labelled with your paint names (12–18 colours)',
          'Mix each row colour with each column colour in the corresponding cell — pea-sized swatch',
          'Mark mud cells (grey-brown, opaque, dead) with a small X',
          'Mark beautiful cells (vibrant, transparent, harmonious) with a circle',
          'Complete at least half the grid this session — do not rush the last rows',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min) + wet-on-wet blooms',
        steps: [
          'First 45 min (mandatory): free emotion page — blooms as mood if you like; no subject',
          'Remaining time: wet paper evenly, drop concentrated colour, do not touch once dropped — 1–2 bloom sheets',
          'When the bloom stops spreading on its own, put the brush down — touching mid-spread creates mud',
        ],
      },
    ],
    stopRule:
      'Grid cells: stop when the half-grid is filled or 75 min ends — incomplete rows carry to Week 5. Blooms: stop when spread stops. Let bloom sheets dry before stacking. Session B emotion timer is non-negotiable.',
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Color mixing chart complete',
    focus: 'Skill: finish grid · complementary mud rule · five best pairs as larger swatches',
    badge: month10,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Complete the mixing grid + notes',
        steps: [
          'Color temperature note at top of paper before starting',
          'Finish all remaining grid cells',
          'Write 3 rules you discovered (e.g. "ultramarine + burnt sienna = useful grey", "equal red + green = mud")',
          'Paint 5 limited pairs as larger swatches — your 5 best discoveries from the grid',
          'Keep this grid — refer to it whenever colours go dead in future sessions',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min) + wet-on-wet sky practice',
        steps: [
          'First 45 min (mandatory): unstructured emotion painting — 3 colours maximum, no planning',
          'Remaining time: one wet-on-wet sky gradient sheet — blue bleeding lighter at horizon; note timing for Week 6',
        ],
      },
    ],
    stopRule:
      'End of Month 10 check: wash sheets from Weeks 1–3, complete mixing grid, at least 1 wet-on-wet sheet. If the grid is incomplete, finish it before skies — mud in landscapes comes from skipping this week.',
    milestone:
      'End of Month 10 check: mixing grid complete with mud/beauty marks. You can explain why equal complements make mud. Session B emotion pages exist for Weeks 3–5.',
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Sky studies — clear and cumulus',
    focus: 'Skill: wet-on-wet soft clouds · wet-on-dry shadow edges · 3 skies this week only',
    badge: month11,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Three sky paintings — clear blue and cumulus',
        steps: [
          'Color temperature note: for clear day, cool light and warm cloud shadows',
          'Sky 1 (25 min): wet sky area, blue wash lighter at horizon, lift or reserve cloud whites while damp',
          'Sky 2 (25 min): add grey-violet cloud undersides after first layer dries — wet-on-dry for sharper edges',
          'Sky 3 (25 min): repeat weakest part from Sky 1 or 2 — sky only, no ground',
          'Hard stop at 3 skies — do not start a fourth',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): free watercolor emotion — weather as mood OK, no horizon required',
          "Remaining 30 min: rest, label today's skies, or one loose sky experiment if energy remains",
          'Date the emotion page',
        ],
      },
    ],
    stopRule:
      'Deliverable: exactly 3 sky paintings in Session A. Stop each sky at 25 min. Skies teach timing — if clouds look wrong, the wash timing was wrong. Let each sky dry before stacking sheets.',
    note: 'Paint only skies in Weeks 6–7. Skies teach colour temperature, wet techniques, and restraint — three skills every landscape depends on.',
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Sky studies — fog, overcast, and storm',
    focus: 'Skill: muted palettes · atmospheric perspective · 3 more skies (6 total with Week 6)',
    badge: month11,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Three atmospheric skies',
        steps: [
          'Color temperature note: overcast = cool light, warm greys in shadow',
          'Sky 1 (25 min): fog — wet paper, pale blue-grey, lift distant shapes with tissue, low contrast',
          'Sky 2 (25 min): overcast — flat grey-violet, minimal value range, practice restraint',
          'Sky 3 (25 min): storm or clearing — dark mass at top, lighter horizon, wet-on-dry dark edges',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): emotion page — dark washes and lifts express feeling, no subject',
          'Remaining 30 min: count sky paintings across Weeks 6–7 — minimum 6 total. If fewer than 6, paint one more sky before Week 8 landscapes',
        ],
      },
    ],
    stopRule:
      'Minimum 6 sky paintings across Weeks 6–7 before Week 8. Session A stops at 3 skies today. Dry skies fully between sessions before comparing or stacking.',
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: '3-color landscape — warm palette',
    focus: 'Skill: limited palette · thumbnails + value sketch · one loose landscape this week',
    badge: month11,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Warm palette landscape — 3 colours only',
        steps: [
          'Color temperature note at top. Colours allowed: yellow ochre, burnt sienna, ultramarine blue — plus water only',
          '3 thumbnails (5×4 cm) — same landscape idea, flat colour blocks — 10 min',
          'Pencil value sketch on full sheet — major zones only, 5 min',
          'Paint one loose landscape: sky, hills or distant trees, ground. Shapes and values only — no detail',
          'Work light to dark. Leave paper white for brightest highlights. No fourth colour',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): unstructured emotion painting — wet brush, no standard to meet',
          'Remaining 30 min: optional rest or label Week 8 landscape when dry',
          'Notice: watercolor rewards surrender — some emotion sessions crack open, some feel mechanical. Both valid',
        ],
      },
    ],
    stopRule:
      'One landscape in Session A — stop at 75 min. Loose and readable beats detailed and muddy. If you glaze, let the first wash dry before midtones (dry between layers if continuing same day).',
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: '3-color landscape — cool palette',
    focus: 'Skill: cool harmony · cerulean viridian umber · one landscape · compare to Week 8',
    badge: month11,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Cool palette landscape — 3 colours only',
        steps: [
          'Color temperature note: cool overcast light typical for this palette',
          'Colours allowed: cerulean blue, viridian green, raw umber — plus water. No other pigments',
          '3 thumbnails + pencil value sketch — mandatory before painting',
          'Paint one loose landscape — sky dominates or water feature OK — light to dark',
          'When dry, place beside Week 8 warm landscape — feel the temperature difference',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): free emotion watercolor',
          'Remaining 30 min: write one sentence — which palette matched your actual environment this week?',
        ],
      },
    ],
    stopRule:
      'End of Month 11 check: 6+ skies, 2 limited-palette landscapes, mixing grid, wash foundation. If landscapes are muddy, return to mixing grid before still life — do not push detail.',
    milestone:
      'End of Month 11 check: warm and cool 3-colour landscapes exist. Thumbnails before painting felt automatic. Skies number at least 6.',
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Simple still life — first attempt',
    focus: 'Skill: leave whites · build darks in layers · 3 thumbnails · single light source',
    badge: month12,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Still life attempt 1 — plan then paint',
        steps: [
          'Set up 2–3 objects on a table, single lamp from one side — same setup you will use Week 11',
          'Color temperature note + 3 thumbnails + pencil value sketch on watercolor paper',
          'Identify 3 lightest areas — leave paper white or mask',
          'First wash: background and lightest object tones. Stop Session A when dry is needed — continue glazes in a later session if 75 min hits mid-layer',
          'Second glaze: midtones if first layer is dry. Third: darkest accents last',
          'Photograph. Note one thing that went wrong — carry to Week 11 attempt 2',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): no subject required — unstructured brush and feeling',
          'Optional: one colour from your still life palette as dominant emotion colour',
          'Do not start still life attempt 2 in Session B — that is Week 11 Session A',
          'Date the page',
        ],
      },
    ],
    stopRule:
      'Still life attempt 1 stops at 75 min. Let layers dry between glazes — minimum 15 minutes, often longer. Do not over-glaze wet-on-wet. Attempt 1 teaches what you forgot to plan, not a masterpiece.',
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Same still life — second attempt',
    focus: 'Skill: faster, looser · apply Week 10 lesson · mandatory comparison',
    badge: month12,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Still life attempt 2 — same setup, new paper',
        steps: [
          'Same objects, same lamp position as Week 10 — do not rearrange',
          '3 thumbnails — try a different composition than Week 10',
          'Pencil value sketch. Color temperature note',
          'Paint faster and looser than Week 10 — you know where lights and darks are',
          'Stop at 75 min. When dry, place attempt 1 beside attempt 2 — write 3 differences',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): unstructured emotion — still life weeks are draining; never skip',
          'Remaining 30 min: finish writing 3 differences between attempts if not done in Session A',
        ],
      },
    ],
    stopRule:
      'The comparison between attempt 1 and 2 is mandatory. Session B emotion timer is mandatory. If whites were lost both times, simplify to one object and repeat Week 10 planning before emotion translation weeks.',
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Phase 1 emotion page — watercolor translation 1',
    focus: 'Skill: same feeling, new medium · one Phase 1 page · not a copy',
    badge: month12,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'One Phase 1 emotion page repainted in watercolor',
        steps: [
          'Open Phase 1 sketchbook. Choose one emotion page that still feels alive',
          'Look 5 minutes. Write the mood in one word. Write color temperature note for that mood',
          '3 thumbnails: how would this mood look in watercolor only — not copying pencil marks',
          'Paint the mood in watercolor — expansion, not reproduction. You have colour and water now',
          'Lay the original pencil page next to the watercolor when dry',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min) — new page, brush only',
        steps: [
          'First 45 min (mandatory): completely new emotion page — no pencil underdrawing, direct brush',
          'Current mood only — not revisiting the Week 12 Session A page',
          'Remaining 30 min: note which felt more honest — planned translation vs brush-only',
          'Date both pages',
        ],
      },
    ],
    stopRule:
      'One Phase 1 translation only this week. If the watercolor looks like the pencil page, you copied surface marks — translate the feeling, not the lines.',
    note: 'These emotion pages pair with Phase 5 when Phase 1 pages become full acrylic paintings. Keep pencil, watercolor, and later acrylic versions if you complete the roadmap.',
  },
  {
    id: 'week-13',
    weekNumber: 13,
    title: 'Phase 1 emotion page — watercolor translation 2',
    focus: 'Skill: different mood from Week 12 · second translation · consolidate feeling in paint',
    badge: month12,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Second Phase 1 emotion page — must be a different mood',
        steps: [
          'Choose a different Phase 1 emotion page than Week 12 — mood must read differently',
          'One word for mood + color temperature note + 3 thumbnails',
          'Paint watercolor translation — 75 min hard stop',
          'Line up Week 12 and Week 13 translations when dry — two moods, two media',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): free watercolor emotion — no technique goal',
          'Remaining 30 min: label both translation pages with mood words and dates',
        ],
      },
    ],
    stopRule:
      'End of Month 12 check: still life attempts (×2), two emotion translations, landscapes, skies in your stack. Dry all pages before stacking.',
  },
  {
    id: 'week-14',
    weekNumber: 14,
    title: 'Same corner — morning light',
    focus: 'Skill: indoor same viewpoint · cool morning light · painting 1 of 2 (reduced time-of-day study)',
    badge: month13,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Morning light — indoor same corner',
        steps: [
          'Choose one indoor corner you can paint again in Week 15 — table, shelf, or window wall',
          'Morning session: color temperature note — "Cool blue-white light, warm shadows"',
          '3 thumbnails + value sketch. Paint morning version — cool highlights, soft shadows if visible',
          'One painting only — stop at 75 min. Photograph the corner for reference if helpful',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): emotion page — no subject',
          'Remaining 30 min: do not paint golden hour yet — that is Week 15 Session A. Label morning painting when dry',
        ],
      },
    ],
    stopRule:
      'Same viewpoint all of Weeks 14–15 — the exercise is light changing, not composition changing. Two paintings total for the study (not four). Let morning painting dry before Week 15.',
  },
  {
    id: 'week-15',
    weekNumber: 15,
    title: 'Same corner — golden hour',
    focus: 'Skill: warm light vs morning · lamp or window · painting 2 of 2 + compare',
    badge: month13,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Golden hour — same corner, second painting',
        steps: [
          'Same exact corner as Week 14. Golden hour = late window light OR warm lamp on one side simulating sunset',
          'Color temperature note: "Warm orange-yellow light, cool blue-violet shadows"',
          '3 thumbnails + sketch. Paint second version — push warm light further than feels comfortable',
          'When dry, place beside Week 14 morning version — write 2 sentences on how shadow colour changed',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): unstructured emotion painting',
          'Remaining 30 min: finish comparison sentences if needed',
        ],
      },
    ],
    stopRule:
      'Time-of-day study complete with 2 paintings (morning + golden hour), not 4. Both required before Week 16 careful painting.',
    milestone:
      'Two-painting light study builds shadow-colour intuition faster than theory alone — it carries into Phase 5 acrylic mixing.',
  },
  {
    id: 'week-16',
    weekNumber: 16,
    title: 'Careful planned painting',
    focus: 'Skill: full planning ritual · slowest considered watercolor of Phase 4 so far',
    badge: month13,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Most careful watercolor of the phase — planned',
        steps: [
          'Choose strongest subject type so far: sky, landscape, still life, or corner study',
          '5 thumbnails (not 3) — 15 min — treat this as your Phase 4 showpiece candidate',
          'Full pencil value sketch. Color temperature note. Full planning ritual',
          '75 min — slowest, most considered painting to date. Work light to dark; protect whites',
          'Photograph when dry. If layers need drying, stop and continue next session — do not mud wet glazes',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): free emotion watercolor — no subject, no technique requirement',
          'Remaining 30 min: rest or label Session A piece',
        ],
      },
    ],
    stopRule:
      'Session A is planning-heavy — stop at 75 min even if unfinished; dry between sessions beats overworking wet paint.',
  },
  {
    id: 'week-17',
    weekNumber: 17,
    title: 'Loose same subject',
    focus: 'Skill: same subject type as Week 16 · no thumbnails · instinct painting',
    badge: month13,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Same subject type — loose and fast',
        steps: [
          'Same subject type as Week 16 — not necessarily identical composition',
          'NO thumbnails. NO value sketch. 5 min looking, then paint directly',
          '75 min maximum — stop when energy drops, not when perfect',
          'When dry, place careful (Week 16) and loose (Week 17) side by side — which has more life? Notice your tendency',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min)',
        steps: [
          'First 45 min (mandatory): emotion page',
          'Remaining 30 min: write one sentence comparing Week 16 vs Week 17 process',
        ],
      },
    ],
    stopRule:
      'Session A rules: no planning allowed. If you start thumbnails, stop within 5 minutes and put brush to paper. Contrast between careful and loose is the lesson.',
  },
  {
    id: 'week-18',
    weekNumber: 18,
    title: 'Phase 4 review + Phase 5 prep',
    focus: 'Skill: capstone choice · audit stack · habits for acrylic',
    badge: month13,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Best watercolor of the phase — your choice',
        steps: [
          'Choose: landscape, still life, sky, corner study, or emotion page at your highest skill level',
          'Full planning if representational (thumbnails + sketch + temperature note)',
          '75 min — Phase 4 capstone piece. Photograph when dry',
          'Write 3 techniques from this phase you used consciously',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Phase 4 review + notes for Phase 5',
        steps: [
          'First 30 min: lay out ALL watercolor from Week 1 — washes, grid, skies, landscapes, still lifes, two-light study, emotion pages',
          'Write 3 improvements (e.g. "blooms less scary", "shadows cooler under warm light", "stop before mud")',
          'Write 2 remaining weaknesses (e.g. "still lose whites", "overwork landscapes")',
          'Write 3 habits for Phase 5: mix warmer than you think (acrylic dries darker), plan like watercolor but allow revision, keep emotion Session B forever',
          'Final 45 min (mandatory): emotion painting — close the phase with unstructured brush work',
        ],
      },
    ],
    stopRule:
      'Phase 4 skill gate before Phase 5: believable sky, ground, and atmosphere in at least one landscape; colours not consistently muddy; you know when to stop and let dry. If whites are always lost, use Weeks 19–20 buffer on single-object still life.',
    milestone:
      'Phase 4 core complete at Week 18. Weeks 19–20 are explicit buffer — use them if mud, overwork, or washes still fail the gate.',
  },
  {
    id: 'week-19',
    weekNumber: 19,
    title: 'Buffer week — mud, overwork, or washes',
    focus: 'Explicit catch-up: repeat only what failed the gate · no new curriculum',
    badge: month13,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Targeted repeat — pick one weakness',
        steps: [
          'Read Week 18 weaknesses. Choose ONE: (A) mud/mixing, (B) overwork/glazing, (C) streaky washes',
          '(A) Revisit mixing grid — 5 mud pairs to avoid + 5 clean pairs to practice on swatches',
          '(B) Re-paint one landscape or still life with hard stop at 2 glazes — photograph when you would have added a third',
          '(C) Repeat Week 3 wash gate — flat + graded streak-free sheets only',
          'Write "Week 19 buffer — [A/B/C]" on every sheet',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min) + optional second buffer sprint',
        steps: [
          'First 45 min (mandatory): emotion painting',
          'Remaining 30 min: second buffer sprint on same weakness OR rest if Session A was enough',
        ],
      },
    ],
    stopRule:
      'Buffer weeks are not failure — they prevent carrying mud into Phase 5 acrylic. Do not start new subjects. Let all repeats dry between layers and between sessions.',
  },
  {
    id: 'week-20',
    weekNumber: 20,
    title: 'Buffer week — final gate before Phase 5',
    focus: 'Last repeat or rest · confirm dry-between-sessions habit · Phase 5 ready',
    badge: month13,
    sessions: [
      {
        label: 'Session A — 75 min',
        title: 'Final buffer or victory lap',
        steps: [
          'If Week 19 weakness still fails: repeat same buffer type one more session',
          'If gate passed: one 3-colour landscape with full ritual — loose, 75 min, stop before mud',
          'Checklist: 6+ skies, 2 landscapes, 2 still life attempts, 2 emotion translations, 2-light corner study, mixing grid, streak-free wash proof',
          'Photograph stack. Mark anything still missing — do not start Phase 5 with a blank category',
        ],
      },
      {
        label: 'Session B — 75 min',
        title: 'Mandatory emotion (45 min) + Phase 5 entry note',
        steps: [
          'First 45 min (mandatory): final Phase 4 emotion page — date it',
          'Remaining 30 min: one sentence — "I start Phase 5 when ___" (fill in your gate). If not ready, schedule another wash week before opening acrylic',
        ],
      },
    ],
    stopRule:
      'Phase 4 fully complete when Week 18 gate passes AND buffer needs are met (or Weeks 19–20 honestly used). Multi-session rule for all future paint: dry between sessions before glazing. Phase 5 begins only after this gate — not because the calendar says so.',
    milestone:
      'Twenty weeks done: washes trustworthy, grid complete, skies and landscapes not consistently muddy, still life whites attempted twice, emotion thread unbroken from Week 3. Buffer weeks 19–20 exist so you do not lie to yourself about readiness.',
  },
]
