type WeekJumpNavProps = {
  weeks: { id: string; weekNumber: number }[]
  activeWeekId?: string
  onJump: (weekId: string) => void
}

export function WeekJumpNav({ weeks, activeWeekId, onJump }: WeekJumpNavProps) {
  return (
    <nav className="week-jump-nav" aria-label="Jump to week">
      {weeks.map((week) => (
        <button
          key={week.id}
          type="button"
          className={`week-jump-btn${activeWeekId === week.id ? ' active' : ''}`}
          onClick={() => onJump(week.id)}
        >
          {week.weekNumber === 0 ? 'W0' : `W${week.weekNumber}`}
        </button>
      ))}
    </nav>
  )
}
