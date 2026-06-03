import type { GapCard as GapCardType } from '../../types/guide'

export function GapCard({ card }: { card: GapCardType }) {
  return (
    <div className="gap-card">
      <span
        className="tag"
        style={{ background: card.tag.background, color: card.tag.color }}
      >
        {card.tag.label}
      </span>
      <p className="gap-title">{card.title}</p>
      <p className="gap-body">{card.body}</p>
      {card.fixes.map((fix) => (
        <div key={fix.label} className="fix-row">
          <span className="fix-label">{fix.label}</span>
          <p className="fix-body">{fix.body}</p>
        </div>
      ))}
    </div>
  )
}
