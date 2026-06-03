export type BadgeStyle = {
  label: string
  background: string
  color: string
}

export type Session = {
  label: string
  title: string
  steps: string[]
}

export type WeekDetail = {
  id: string
  weekNumber: number
  title: string
  focus: string
  badge: BadgeStyle
  sessions: Session[]
  stopRule?: string
  note?: string
  milestone?: string
}

export type FixRow = {
  label: string
  body: string
}

export type GapCard = {
  tag: BadgeStyle
  title: string
  body: string
  fixes: FixRow[]
}

export type CopyStep = {
  title: string
  body: string
  variant?: 'success'
}

export type TimingCell = {
  label: string
  value: string
}

export type ResourceCard = {
  tag: BadgeStyle
  title: string
  body: string
  fixes: FixRow[]
}

export type RatingItem = {
  score: string
  title: string
  body: string
}

export type RatingCard = {
  score: number
  phaseLabel: string
  phaseColor: string
  name: string
  note: string
}

export type PhaseGuideTab = {
  id: string
  label: string
}

export type PhaseGuideMeta = {
  phaseNumber: number
  eyebrow: string
  title: string
  subtitle: string
  srTitle?: string
  tabs: PhaseGuideTab[]
  weeksIntro: string
  gapsIntro?: string
  copySectionTitle?: string
  assessmentTitle?: string
}

export type SessionCardData = {
  label: string
  value: string
}

export type PhaseOverview = {
  id: string
  phaseNumber: number
  badge: BadgeStyle
  title: string
  subtitle: string
  duration: string
  sessionCards: SessionCardData[]
  exercises: string[]
  milestone: string
}

export type WeeklyOverviewWeek = {
  label: string
  title: string
  body: string
}

export type WeeklyPhaseOverview = {
  id: string
  phaseNumber: number
  badge: BadgeStyle
  headerBg: string
  headerBorder: string
  title: string
  meta: string
  intro: string
  weeks: WeeklyOverviewWeek[]
  infoBox?: string
  warnBox?: string
  milestone: string
  milestoneBorder: string
  milestoneColor: string
}

export type SupplyCard = {
  tag: BadgeStyle
  name: string
  body: string
  cost: string
  costColor: string
}

export type SupplySection = {
  label: string
  items: SupplyCard[]
}

export type Principle = {
  title: string
  body: string
}

export type RoadmapTab = {
  id: string
  label: string
}

export type PhaseNavItem = {
  phaseNumber: number
  label: string
  badge: BadgeStyle
  hasDetailedGuide: boolean
}

export type RoadmapMeta = {
  eyebrow: string
  title: string
  subtitle: string
  roadmapTabs: RoadmapTab[]
}

export type RoadmapAssessment = {
  overallScore: number
  verdict: string
  reason: string
  ratingCards: RatingCard[]
}
