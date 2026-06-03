import type { ResourceCard } from '../../types/guide'

export type ReferenceSection = {
  label: string
  resources: ResourceCard[]
}

export const referenceSections: ReferenceSection[] = [
  {
    label: 'YouTube channels — Phase 1 primary teachers',
    resources: [
      {
        tag: {
          label: 'Gesture & Figure · Anatomy',
          background: '#FEF3E2',
          color: '#7A4510',
        },
        title: 'Proko',
        body: 'The clearest anatomy and figure drawing channel available. Structured, progressive, and free. Lessons build on each other — watch in order. The single most useful channel for Weeks 5–12 of this schedule. Teaches the bean, robo-bean, and figure landmarks exactly as this schedule uses them.',
        fixes: [
          {
            label: 'Start here',
            body: 'Playlist: "Figure Drawing Fundamentals" — gesture, structure, bean, robo-bean, major landmarks. All free on YouTube. Watch the first 3 videos before Week 5 Session B.',
          },
          {
            label: 'Then',
            body: 'Playlist: "Portrait Drawing" — pairs directly with Weeks 8 and 11 face construction. Watch the Loomis head video before Week 8 Session B.',
          },
          {
            label: 'Also',
            body: 'Playlist: "How to Draw Hands" — watch before Week 6 Session B. Proko\'s hand series is the clearest breakdown of the box-palm + cylinder-finger structure this schedule uses.',
          },
          {
            label: 'Link',
            body: 'youtube.com/@ProkoTV',
          },
        ],
      },
      {
        tag: {
          label: 'Gesture & Expression',
          background: '#FEF3E2',
          color: '#7A4510',
        },
        title: 'Love Life Drawing',
        body: 'The best channel specifically for gesture and expressive line. Teaches how to draw energy and weight, not just anatomically correct shapes. Essential for the Session B gesture work from Week 2 onward. Prevents gesture drawing from becoming stiff symbol-copying.',
        fixes: [
          {
            label: 'Start here',
            body: 'Playlist: "How to Draw Gesture" — watch the first 2 videos before starting Week 2. Changes how you approach the 30-second pose sessions entirely.',
          },
          {
            label: 'Also useful',
            body: '"How to Draw People" series — body weight, rhythm lines, and posture as storytelling. Relevant from Week 5 onward and directly supports the "pose as emotion" work in Phase 3.',
          },
          {
            label: 'Link',
            body: 'youtube.com/@LoveLifeDrawing',
          },
        ],
      },
      {
        tag: {
          label: 'Lines · Boxes · Spatial Structure',
          background: '#E6F1FB',
          color: '#0C447C',
        },
        title: 'Draw a Box (Uncomfortable)',
        body: 'The most structured beginner course for confident mark-making and spatial thinking. Every exercise is deliberately uncomfortable — that is the design. Covers lines, ellipses, boxes, and organic forms systematically. Pairs with Weeks 0–7 of this schedule for line quality and form understanding.',
        fixes: [
          {
            label: 'Start here',
            body: 'Lesson 1 on drawabox.com or on YouTube — lines, then ellipses, then boxes. Do the exercises alongside the video, not after. The site also provides free PDF lesson notes.',
          },
          {
            label: 'Key rule',
            body: 'The 50/50 rule: spend half your practice time on DrawABox exercises, half on free drawing. This prevents mechanical drawing and keeps the work connected to actual art-making.',
          },
          {
            label: 'Link',
            body: 'youtube.com/@drawingwithuncomfortable · drawabox.com',
          },
        ],
      },
      {
        tag: {
          label: 'Hatching · Ink · Texture',
          background: '#EAF3DE',
          color: '#27500A',
        },
        title: 'Alphonso Dunn',
        body: 'The clearest teacher of hatching, cross-hatching, stippling, and pen-and-ink texture. His approach translates directly to pencil mark-making. Watch his hatching videos before Week 9 Session A — they teach exactly what the mark-making sampler exercise requires you to understand.',
        fixes: [
          {
            label: 'Start here',
            body: 'Playlist: "Pen and Ink Drawing Tutorials" — watch the hatching and cross-hatching videos specifically before Session A of Week 9. His light-to-dark gradient exercises match the sampler format in this schedule.',
          },
          {
            label: 'Link',
            body: 'youtube.com/@AlphonsoDunn',
          },
        ],
      },
      {
        tag: {
          label: 'Common Mistakes · Anatomy Shortcuts',
          background: '#F3EDF7',
          color: '#4A2770',
        },
        title: 'Sinix Design',
        body: 'Short, dense lessons on why drawings "feel off" and how to fix specific problems. Better for diagnosing a concrete issue than watching as a course. Use this channel reactively — when something in your drawing looks wrong and you cannot identify why, search Sinix for that specific problem.',
        fixes: [
          {
            label: 'Start here',
            body: '"Anatomy Quick Tips" series — each video addresses one specific mistake beginners repeat. Relevant from Week 5 onward when figure and face work begins.',
          },
          {
            label: 'Link',
            body: 'youtube.com/@sinixdesign',
          },
        ],
      },
      {
        tag: {
          label: 'Expressive Drawing · Process',
          background: '#FCEBEB',
          color: '#791F1F',
        },
        title: 'Peter Draws',
        body: 'Counterbalance to overly technical channels. Teaches drawing as a personal, exploratory practice — not a performance. Watch when the work starts feeling mechanical, joyless, or like you are "failing" a test. Pairs directly with Session B emotional pages throughout Phase 1.',
        fixes: [
          {
            label: 'Start here',
            body: 'Any "how I actually draw" or sketchbook process video. Watch when you feel stuck or rigid — not as a course. This channel restores the reason you are doing this in the first place.',
          },
          {
            label: 'Link',
            body: 'youtube.com/@peterdraws',
          },
        ],
      },
      {
        tag: {
          label: 'Still Life · Classical Drawing',
          background: '#F1EFE8',
          color: '#5F5E5A',
        },
        title: 'GnomoniC Art Tutorials',
        body: 'Classical academic drawing approach — still life, tonal rendering, and measuring. Detailed, slow-paced instruction that pairs well with the still life sessions in Weeks 3, 6, 8, and 12. Shows the full process from blank paper to finished pencil drawing in real time.',
        fixes: [
          {
            label: 'Start here',
            body: 'Search "GnomoniC still life pencil" — watch one full process video before Week 8 Session A (the first serious still life). Seeing the complete process demystifies the measuring and layering steps.',
          },
          {
            label: 'Link',
            body: 'youtube.com/@GnomoniCDrawingTutorials',
          },
        ],
      },
    ],
  },
  {
    label: 'Free course sites — structured learning paths',
    resources: [
      {
        tag: {
          label: 'Free Curriculum',
          background: '#E6F1FB',
          color: '#0C447C',
        },
        title: 'Ctrl+Paint — ctrlpaint.com',
        body: 'A completely free library of short, focused video lessons organized as a curriculum. Despite the name, the fundamentals section covers drawing, value, edges, and form — all relevant to pencil drawing. Has a clear beginner learning path you can follow linearly. The best free bridge between Phase 1 drawing and Phase 2 value/light work.',
        fixes: [
          {
            label: 'Phase 1 use',
            body: 'Watch the "Drawing" section of the free library. Covers shape, form, and line in short 5–10 min videos. No account needed, no cost.',
          },
          {
            label: 'Phase 2 preview',
            body: 'Watch the "Value" section during Week 12 review — prepares you for the light and shadow work ahead without rushing into it.',
          },
          {
            label: 'Link',
            body: 'ctrlpaint.com/library',
          },
        ],
      },
      {
        tag: {
          label: 'Structured Exercises',
          background: '#E6F1FB',
          color: '#0C447C',
        },
        title: 'Draw a Box — drawabox.com',
        body: 'A completely free structured course starting from absolute zero. Lessons are exercises you actually do — not just watch. Covers confident lines, ellipses, boxes, and organic forms. Submit your work for community critique in the r/ArtFundamentals subreddit or the DrawABox Discord.',
        fixes: [
          {
            label: 'Phase 1 use',
            body: 'Run Lessons 1–2 alongside Weeks 0–7 of this schedule. Lesson 1 (lines and ellipses) starts in Week 0. Lesson 2 (boxes) starts alongside Week 5 when 3D form becomes the focus.',
          },
          {
            label: 'Link',
            body: 'drawabox.com',
          },
        ],
      },
    ],
  },
  {
    label: 'Practice tools — open these during sessions',
    resources: [
      {
        tag: {
          label: 'Gesture Practice · Timed Poses',
          background: '#EAF3DE',
          color: '#27500A',
        },
        title: 'Line-of-Action — line-of-action.com',
        body: 'The timed pose reference tool used in every gesture session from Week 2 onward. Set your timer (30 sec, 1 min, 2 min), choose a category, draw. The timer enforces decisiveness — it prevents fussing and forces you to capture the essence before the details.',
        fixes: [
          {
            label: 'Categories to use',
            body: 'Figures (Weeks 2–12 gesture sessions) · Hands specifically (Weeks 6 and 11 hand studies) · Faces (Week 11 face practice)',
          },
          {
            label: 'Setup',
            body: 'Open on your phone or a second device beside your sketchbook. Do not draw on screen — draw on paper, use the screen only as a reference.',
          },
        ],
      },
      {
        tag: {
          label: 'Pose Practice · Alternative Pool',
          background: '#EAF3DE',
          color: '#27500A',
        },
        title: 'Quickposes — quickposes.com',
        body: 'Alternative to Line-of-Action with a different image library and a strong hands/feet mode. Use when Line-of-Action feels repetitive or you need references for specific body parts. Has a "timed intervals" mode that counts reps per session — useful for tracking gesture volume.',
        fixes: [
          {
            label: 'Best for',
            body: 'Hand studies (Weeks 6, 11) · Feet reference (Phase 2+) · Full figure when you want different reference photos than Line-of-Action provides',
          },
        ],
      },
    ],
  },
  {
    label: 'Art dictionaries, encyclopedias & reference libraries',
    resources: [
      {
        tag: {
          label: 'Master Works Encyclopedia',
          background: '#F1EFE8',
          color: '#5F5E5A',
        },
        title: 'WikiArt — wikiart.org',
        body: 'A searchable encyclopedia of art history and master works. Browse by artist, style, movement, or subject. The fastest way to find specific masters to copy. Every image is in the public domain or clearly credited. No account needed.',
        fixes: [
          {
            label: 'Use for',
            body: 'Finding Rembrandt pen sketches, Da Vinci anatomical drawings, Käthe Kollwitz charcoal work, and Egon Schiele figures for the master copy sessions in Weeks 4, 8, and 12.',
          },
          {
            label: 'Search tip',
            body: 'Filter by "Drawing" under media type. Sort by artist. For Phase 1 line-only copies: Rembrandt, Da Vinci, Schiele. For Phase 2 value copies: Kollwitz, Sargent charcoal studies.',
          },
        ],
      },
      {
        tag: {
          label: 'High-Resolution Master Works',
          background: '#F1EFE8',
          color: '#5F5E5A',
        },
        title: 'The Met Open Access — metmuseum.org/art/collection',
        body: 'The Metropolitan Museum of Art has made 500,000+ high-resolution images freely available for personal use. The best source for print-quality versions of master drawings. Better image quality than Google Images for pinning next to your sketchbook during master copy sessions.',
        fixes: [
          {
            label: 'Use for',
            body: 'Downloading high-resolution master drawings to print or display at full screen. Search "Rembrandt drawing" or "Da Vinci sketch" — filter to the Drawings category.',
          },
        ],
      },
      {
        tag: {
          label: 'Anatomy Reference',
          background: '#F1EFE8',
          color: '#5F5E5A',
        },
        title: 'Anatomy for Sculptors — anatomy4sculptors.com',
        body: 'Visualizes the body as simplified 3D forms — exactly how this schedule approaches anatomy (structure before detail). Shows how muscles and bones create the surface shapes you draw. More useful than a medical anatomy book because it is already translated into the visual language artists use.',
        fixes: [
          {
            label: 'Use for',
            body: 'Understanding why a form has the shape it does when your gestures start to feel flat. Not for Phase 1 detail work — use as a reference dictionary, not a course. Look up specific body parts when they repeatedly look wrong.',
          },
        ],
      },
      {
        tag: {
          label: 'Free Photo Reference',
          background: '#F1EFE8',
          color: '#5F5E5A',
        },
        title: 'Unsplash + Pixabay — unsplash.com · pixabay.com',
        body: 'Free, high-quality stock photo libraries. Use when you want to draw from reference beyond objects in your room. All images are free for personal use with no account needed on Pixabay (Unsplash requires a free account).',
        fixes: [
          {
            label: 'Use for',
            body: 'Still life setups (Weeks 3, 6, 8, 12) · Portrait reference for Week 11 face study · Landscape and environment reference for Week 10 thumbnail compositions',
          },
        ],
      },
      {
        tag: {
          label: 'Critique Community',
          background: '#FCEBEB',
          color: '#791F1F',
        },
        title: 'r/learnart + r/ArtFundamentals — reddit.com',
        body: 'The two most useful Reddit communities for beginner drawing critique. Post one drawing per month with a specific question rather than a general "please critique." Specific questions get specific, actionable answers. Do not post just for validation.',
        fixes: [
          {
            label: 'How to post',
            body: 'Include: (1) what you were trying to achieve, (2) what you think looks wrong, (3) one specific question. Example: "I drew these hands from life — the knuckles look flat. What am I missing structurally?"',
          },
          {
            label: 'Faster option',
            body: 'DrawABox Discord and Ctrl+Paint Discord both have active beginner critique channels with faster response times than Reddit. Better for quick turnaround between sessions.',
          },
        ],
      },
    ],
  },
]

export const referenceInfoBox =
  'How to use references without becoming a copy-paster: references are inputs, not outputs. When watching YouTube, pause the video after each concept and immediately draw what you just saw — do not watch 3 videos and then draw. The hand needs to practice within minutes of seeing the concept. When copying a master, you are reverse-engineering a decision, not reproducing a surface. See the "How to copy masters correctly" tab for the full method.'
