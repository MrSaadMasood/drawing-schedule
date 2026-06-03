import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/layout/PageHeader'
import { TabBar } from '../components/layout/TabBar'
import { InfoBox, WarnBox } from '../components/guide/Callouts'
import { roadmapMeta } from '../data/roadmap/meta'
import { phaseOverviews } from '../data/roadmap/phases'
import { weeklyPhaseOverviews } from '../data/roadmap/weeklyPhases'
import { supplySections } from '../data/roadmap/supplies'
import { principles } from '../data/roadmap/principles'
import { roadmapAssessment } from '../data/roadmap/assessment'
import { hasDetailedGuide } from '../data/phases/registry'

type RoadmapTabId = 'phases' | 'weekly' | 'supplies' | 'principles'

export function RoadmapPage() {
  const [activeTab, setActiveTab] = useState<RoadmapTabId>('phases')
  const [activePhaseId, setActivePhaseId] = useState('p1')

  const activeWeekly = weeklyPhaseOverviews.find((p) => p.id === activePhaseId)

  return (
    <div className="container">
      <PageHeader
        eyebrow={roadmapMeta.eyebrow}
        title={roadmapMeta.title}
        subtitle={roadmapMeta.subtitle}
        srTitle="Complete painting and drawing learning roadmap — 89 weeks (~21 months), 3 to 4 hours per week, pencil and charcoal to paint"
      />

      <TabBar
        tabs={roadmapMeta.roadmapTabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as RoadmapTabId)}
        ariaLabel="Roadmap sections"
      />

      <div className={`panel${activeTab === 'phases' ? ' active' : ''}`}>
        {phaseOverviews.map((phase) => (
          <article key={phase.id} className="phase">
            <div className="phase-header">
              <div>
                <span
                  className="phase-num"
                  style={{ background: phase.badge.background, color: phase.badge.color }}
                >
                  Phase {phase.phaseNumber}
                </span>
                <p className="phase-title">{phase.title}</p>
                <p className="phase-sub">{phase.subtitle}</p>
              </div>
              <div className="phase-duration">{phase.duration}</div>
            </div>
            <div className="phase-body">
              <div className="session-grid">
                {phase.sessionCards.map((card) => (
                  <div key={card.label} className="session-card">
                    <p className="session-label">{card.label}</p>
                    <p className="session-val">{card.value}</p>
                  </div>
                ))}
              </div>
              <ul className="exercise-list">
                {phase.exercises.map((exercise) => (
                  <li key={exercise}>{exercise}</li>
                ))}
              </ul>
              <span className="milestone">{phase.milestone}</span>
              <Link to={`/phase/${phase.phaseNumber}`} className="phase-detail-link">
                {hasDetailedGuide(phase.phaseNumber)
                  ? 'Open detailed week-by-week guide →'
                  : 'View phase overview →'}
              </Link>
            </div>
          </article>
        ))}

        <div className="button-row">
          <button type="button" className="ask-btn" onClick={() => setActiveTab('weekly')}>
            Jump to week by week ↗
          </button>
        </div>

        <div className="rating-section">
          <p className="rating-title">Schedule quality assessment</p>
          <p className="rating-subtitle">
            An honest evaluation of the plan&apos;s pedagogical strength, completability, and
            capacity to build an expressive voice.
          </p>
          <div className="rating-overall">
            <div className="rating-overall-score">
              {roadmapAssessment.overallScore}
              <span>/10</span>
            </div>
            <div className="rating-overall-text">
              <p className="rating-overall-label">Overall — ~21 months (89 weeks)</p>
              <p className="rating-overall-verdict">{roadmapAssessment.verdict}</p>
              <p className="rating-overall-reason">{roadmapAssessment.reason}</p>
            </div>
          </div>
          <div className="rating-grid">
            {roadmapAssessment.ratingCards.map((card) => (
              <div key={card.phaseLabel} className="rating-card">
                <div>
                  <div className="rating-card-score-wrap">
                    <div className="rating-card-score">{card.score}</div>
                    <span className="rating-card-denom">/ 10</span>
                    <div className="rating-card-bar">
                      <div
                        className="rating-card-bar-fill"
                        style={{ width: `${card.score * 10}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="rating-card-phase" style={{ color: card.phaseColor }}>
                    {card.phaseLabel}
                  </p>
                  <p className="rating-card-name">{card.name}</p>
                  <p className="rating-card-note">{card.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`panel${activeTab === 'weekly' ? ' active' : ''}`}>
        <div className="phase-subnav" role="tablist" aria-label="Phases">
          {weeklyPhaseOverviews.map((phase) => (
            <button
              key={phase.id}
              type="button"
              role="tab"
              className={`phase-tab${activePhaseId === phase.id ? ' active' : ''}`}
              style={
                {
                  '--ph-bg': phase.badge.background,
                  '--ph-color': phase.badge.color,
                } as React.CSSProperties
              }
              aria-selected={activePhaseId === phase.id}
              onClick={() => setActivePhaseId(phase.id)}
            >
              Phase {phase.phaseNumber}
            </button>
          ))}
        </div>

        {activeWeekly ? (
          <div className="phase-panel active">
            <div
              className="phase-panel-header"
              style={{
                background: activeWeekly.headerBg,
                borderColor: activeWeekly.headerBorder,
              }}
            >
              <div>
                <span
                  className="phase-panel-badge"
                  style={{
                    background: activeWeekly.badge.color,
                    color: activeWeekly.badge.background,
                  }}
                >
                  {activeWeekly.badge.label}
                </span>
                <p className="phase-panel-title">{activeWeekly.title}</p>
              </div>
              <p className="phase-panel-meta">{activeWeekly.meta}</p>
            </div>
            <p
              className="phase-panel-intro"
              style={{ borderColor: activeWeekly.headerBorder }}
            >
              {activeWeekly.intro}
            </p>
            <div className="phase-panel-body">
              {activeWeekly.weeks.map((week) => (
                <div key={week.label} className="week-row">
                  <div className="week-num">{week.label}</div>
                  <div>
                    <p className="week-title">{week.title}</p>
                    <p className="week-body">{week.body}</p>
                  </div>
                </div>
              ))}
              {activeWeekly.infoBox ? <InfoBox>{activeWeekly.infoBox}</InfoBox> : null}
              {activeWeekly.warnBox ? <WarnBox>{activeWeekly.warnBox}</WarnBox> : null}
              <div
                className="week-milestone-box"
                style={{
                  borderColor: activeWeekly.milestoneBorder,
                  color: activeWeekly.milestoneColor,
                }}
              >
                {activeWeekly.milestone}
              </div>
              {hasDetailedGuide(activeWeekly.phaseNumber) ? (
                <Link
                  to={`/phase/${activeWeekly.phaseNumber}`}
                  className="phase-detail-link"
                  style={{ marginTop: 16, display: 'inline-flex' }}
                >
                  Open full session-by-session guide for Phase {activeWeekly.phaseNumber} →
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      <div className={`panel${activeTab === 'supplies' ? ' active' : ''}`}>
        <p className="sl">What to buy — and when</p>
        <WarnBox>
          Buy only what&apos;s listed for the current phase. Buying everything at once is
          procrastination disguised as preparation. You&apos;ll know what you actually need after
          using it.
        </WarnBox>
        {supplySections.map((section) => (
          <section key={section.label}>
            <p className="sl" style={{ marginTop: 24 }}>
              {section.label}
            </p>
            <div className="supply-grid">
              {section.items.map((item) => (
                <div key={item.name} className="supply-card">
                  <span
                    className="tag"
                    style={{ background: item.tag.background, color: item.tag.color }}
                  >
                    {item.tag.label}
                  </span>
                  <p className="supply-name">{item.name}</p>
                  <p className="supply-body">{item.body}</p>
                  <p className="supply-cost" style={{ color: item.costColor }}>
                    {item.cost}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className={`panel${activeTab === 'principles' ? ' active' : ''}`}>
        <p className="sl">Rules that will keep you growing</p>
        {principles.map((principle, index) => (
          <div key={principle.title} className="principle-row">
            <div className="p-num">{index + 1}</div>
            <div>
              <p className="p-title">{principle.title}</p>
              <p className="p-body">{principle.body}</p>
            </div>
          </div>
        ))}
        <div className="button-row">
          <button type="button" className="ask-btn">
            Best YouTube channels ↗
          </button>
          <button type="button" className="ask-btn">
            Buy supplies in Lahore ↗
          </button>
          <button type="button" className="ask-btn">
            Developing your style ↗
          </button>
        </div>
      </div>
    </div>
  )
}
