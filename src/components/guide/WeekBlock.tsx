import type { WeekDetail } from '../../types/guide'
import { StopBox, MilestoneBox } from './Callouts'

type WeekBlockProps = {
  week: WeekDetail
  isOpen: boolean
  onToggle: () => void
}

export function WeekBlock({ week, isOpen, onToggle }: WeekBlockProps) {
  const displayTitle =
    week.weekNumber === 0
      ? `Week 0 — ${week.title}`
      : `Week ${week.weekNumber} — ${week.title}`

  return (
    <article className="week-block" id={week.id}>
      <button
        type="button"
        className="week-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${week.id}-body`}
      >
        <div>
          <p className="week-title">{displayTitle}</p>
          <p className="week-focus">{week.focus}</p>
        </div>
        <span
          className="week-badge"
          style={{ background: week.badge.background, color: week.badge.color }}
        >
          {week.badge.label}
        </span>
        <span className={`chevron${isOpen ? ' open' : ''}`} aria-hidden="true">
          ▶
        </span>
      </button>
      {isOpen ? (
        <div className="week-body" id={`${week.id}-body`}>
          <div className="session-wrap">
            {week.sessions.map((session) => (
              <div key={session.label} className="session">
                <p className="session-label">{session.label}</p>
                <p className="session-title">{session.title}</p>
                <ol className="session-steps">
                  {session.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          {week.stopRule ? <StopBox>{week.stopRule}</StopBox> : null}
          {week.milestone ? <MilestoneBox>{week.milestone}</MilestoneBox> : null}
          {week.note ? <p className="note">{week.note}</p> : null}
        </div>
      ) : null}
    </article>
  )
}
