type CalloutProps = {
  children: React.ReactNode
}

export function InfoBox({ children }: CalloutProps) {
  return <div className="info-box">{children}</div>
}

export function WarnBox({ children }: CalloutProps) {
  return <div className="warn-box">{children}</div>
}

export function StopBox({ children }: CalloutProps) {
  return <div className="stop-box">{children}</div>
}

export function MilestoneBox({ children }: CalloutProps) {
  return <div className="milestone-box">{children}</div>
}
