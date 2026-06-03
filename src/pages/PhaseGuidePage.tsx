import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/layout/PageHeader'
import { TabBar } from '../components/layout/TabBar'
import { InfoBox, WarnBox } from '../components/guide/Callouts'
import { GapCard } from '../components/guide/GapCard'
import { CopyStepList } from '../components/guide/CopyStepList'
import { ResourceCard } from '../components/guide/ResourceCard'
import { WeekBlock } from '../components/guide/WeekBlock'
import { WeekJumpNav } from '../components/guide/WeekJumpNav'
import { getDetailedPhaseGuide } from '../data/phases/loadGuide'
import { getPhaseNavItem } from '../data/phases/registry'
import { weeklyPhaseOverviews } from '../data/roadmap/weeklyPhases'

type PhaseGuideTabId =
  | 'weeks'
  | 'gaps'
  | 'copy'
  | 'stop'
  | 'refs'
  | 'assessment'

type PhaseGuidePageProps = {
  phaseNumber: number
}

export function PhaseGuidePage({ phaseNumber }: PhaseGuidePageProps) {
  const guide = getDetailedPhaseGuide(phaseNumber)
  const phaseNav = getPhaseNavItem(phaseNumber)
  const weeklyOverview = weeklyPhaseOverviews.find((p) => p.phaseNumber === phaseNumber)

  if (guide) {
    return <DetailedPhaseGuide guide={guide} />
  }

  if (!weeklyOverview || !phaseNav) {
    return (
      <div className="container">
        <PageHeader
          eyebrow="Not found"
          title="Phase not found"
          subtitle="This phase does not exist in the roadmap."
        />
        <Link to="/">← Back to roadmap</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <PageHeader
        eyebrow={`Phase ${phaseNumber}`}
        title={weeklyOverview.title}
        subtitle={weeklyOverview.intro}
      />
      <div className="coming-soon-banner">
        Detailed session-by-session guide for Phase {phaseNumber} is not yet added. The week-by-week
        overview below is from the 18-month roadmap. To add a full guide like Phase 1, create{' '}
        <code>src/data/phase{phaseNumber}/</code> and register it in{' '}
        <code>src/data/phases/loadGuide.ts</code>.
      </div>
      <WeeklyOverviewPanel overview={weeklyOverview} />
      <div className="button-row">
        <Link to="/" className="ask-btn">
          ← Full roadmap
        </Link>
        {phaseNumber === 1 ? null : (
          <Link to={`/phase/${phaseNumber - 1}`} className="ask-btn">
            Previous phase
          </Link>
        )}
        {phaseNumber < 5 ? (
          <Link to={`/phase/${phaseNumber + 1}`} className="ask-btn">
            Next phase →
          </Link>
        ) : null}
      </div>
    </div>
  )
}

function DetailedPhaseGuide({ guide }: { guide: NonNullable<ReturnType<typeof getDetailedPhaseGuide>> }) {
  const [activeTab, setActiveTab] = useState<PhaseGuideTabId>('weeks')
  const [openWeeks, setOpenWeeks] = useState<Set<string>>(() => new Set())
  const [activeWeekId, setActiveWeekId] = useState<string | undefined>()

  const toggleWeek = useCallback((weekId: string) => {
    setOpenWeeks((prev) => {
      const next = new Set(prev)
      if (next.has(weekId)) next.delete(weekId)
      else next.add(weekId)
      return next
    })
  }, [])

  const jumpToWeek = useCallback((weekId: string) => {
    setActiveTab('weeks')
    setOpenWeeks((prev) => new Set(prev).add(weekId))
    setActiveWeekId(weekId)
    requestAnimationFrame(() => {
      document.getElementById(weekId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  return (
    <div className="container">
      <PageHeader
        eyebrow={guide.meta.eyebrow}
        title={guide.meta.title}
        subtitle={guide.meta.subtitle}
        srTitle={guide.meta.srTitle}
      />

      <TabBar
        tabs={guide.meta.tabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as PhaseGuideTabId)}
        ariaLabel={`Phase ${guide.meta.phaseNumber} guide sections`}
      />

      <div className={`panel${activeTab === 'weeks' ? ' active' : ''}`}>
        <InfoBox>{guide.meta.weeksIntro}</InfoBox>
        <WeekJumpNav
          weeks={guide.weeks.map((w) => ({ id: w.id, weekNumber: w.weekNumber }))}
          activeWeekId={activeWeekId}
          onJump={jumpToWeek}
        />
        {guide.weeks.map((week) => (
          <WeekBlock
            key={week.id}
            week={week}
            isOpen={openWeeks.has(week.id)}
            onToggle={() => toggleWeek(week.id)}
          />
        ))}
      </div>

      <div className={`panel${activeTab === 'gaps' ? ' active' : ''}`}>
        {guide.meta.gapsIntro ? <InfoBox>{guide.meta.gapsIntro}</InfoBox> : null}
        {guide.gaps.map((gap) => (
          <GapCard key={gap.title} card={gap} />
        ))}
      </div>

      <div className={`panel${activeTab === 'copy' ? ' active' : ''}`}>
        <p className="sl">{guide.meta.copySectionTitle ?? 'How to copy a master — the correct method'}</p>
        <CopyStepList steps={guide.copyMethodSteps} />
        <InfoBox>{guide.copyMethodInfoBox}</InfoBox>
      </div>

      <div className={`panel${activeTab === 'stop' ? ' active' : ''}`}>
        <p className="sl">When to stop — session rules and drawing rules</p>
        <div className="timing-grid">
          {guide.timingCells.map((cell) => (
            <div key={cell.label} className="timing-cell">
              <p className="timing-label">{cell.label}</p>
              <p className="timing-val">{cell.value}</p>
            </div>
          ))}
        </div>
        <p className="sl" style={{ marginTop: 28 }}>
          How to know when a specific drawing is done
        </p>
        <CopyStepList steps={guide.drawingStopSteps} />
        <WarnBox>{guide.stopWarnBox}</WarnBox>
        <div className="button-row">
          {guide.stopAskButtons.map((btn) => (
            <button key={btn.label} type="button" className="ask-btn">
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`panel${activeTab === 'refs' ? ' active' : ''}`}>
        {guide.referenceSections.map((section) => (
          <section key={section.label}>
            <p className="sl" style={section.label.includes('dictionary') ? { marginTop: 28 } : undefined}>
              {section.label}
            </p>
            {section.resources.map((card) => (
              <ResourceCard key={card.title} card={card} />
            ))}
          </section>
        ))}
        <InfoBox>{guide.referenceInfoBox}</InfoBox>
      </div>

      <div className={`panel${activeTab === 'assessment' ? ' active' : ''}`}>
        <p className="sl">
          {guide.meta.assessmentTitle ??
            `Phase ${guide.meta.phaseNumber} complete guide — quality assessment`}
        </p>
        <div className="rating-overall">
          <div className="rating-overall-score">
            {guide.assessment.overallScore}
            <span>/10</span>
          </div>
          <div className="rating-overall-text">
            <p className="rating-overall-label">Pedagogical score</p>
            <p className="rating-overall-verdict">{guide.assessment.verdict}</p>
            <p className="rating-overall-reason">{guide.assessment.reason}</p>
          </div>
        </div>
        {'followabilityScore' in guide.assessment && (
          <div className="rating-overall" style={{ marginTop: 16 }}>
            <div className="rating-overall-score">
              {guide.assessment.followabilityScore as number}
              <span>/10</span>
            </div>
            <div className="rating-overall-text">
              <p className="rating-overall-label">Followability score</p>
              <p className="rating-overall-reason">
                How realistically the week-by-week schedule can be completed at the stated hours —
                split weeks, buffers, and uncontrollable steps removed or softened.
              </p>
            </div>
          </div>
        )}
        {guide.assessment.ratingItems.map((item) => (
          <div key={item.title} className="rating-row">
            <div className="rating-score-badge">{item.score}</div>
            <div>
              <p className="rating-item-title">{item.title}</p>
              <p className="rating-item-body">{item.body}</p>
            </div>
          </div>
        ))}
        <InfoBox>{guide.assessment.infoBox}</InfoBox>
      </div>
    </div>
  )
}

function WeeklyOverviewPanel({
  overview,
}: {
  overview: (typeof weeklyPhaseOverviews)[number]
}) {
  return (
    <div className="phase-panel active">
      <div
        className="phase-panel-header"
        style={{ background: overview.headerBg, borderColor: overview.headerBorder }}
      >
        <div>
          <span
            className="phase-panel-badge"
            style={{ background: overview.badge.color, color: overview.badge.background }}
          >
            {overview.badge.label}
          </span>
          <p className="phase-panel-title">{overview.title}</p>
        </div>
        <p className="phase-panel-meta">{overview.meta}</p>
      </div>
      <p
        className="phase-panel-intro"
        style={{ borderColor: overview.headerBorder }}
      >
        {overview.intro}
      </p>
      <div className="phase-panel-body">
        {overview.weeks.map((week) => (
          <div key={week.label} className="week-row">
            <div className="week-num">{week.label}</div>
            <div>
              <p className="week-title">{week.title}</p>
              <p className="week-body">{week.body}</p>
            </div>
          </div>
        ))}
        {overview.infoBox ? <InfoBox>{overview.infoBox}</InfoBox> : null}
        {overview.warnBox ? <WarnBox>{overview.warnBox}</WarnBox> : null}
        <div
          className="week-milestone-box"
          style={{ borderColor: overview.milestoneBorder, color: overview.milestoneColor }}
        >
          {overview.milestone}
        </div>
      </div>
    </div>
  )
}
