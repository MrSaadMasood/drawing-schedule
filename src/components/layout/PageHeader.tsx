type PageHeaderProps = {
  eyebrow: string
  title: string
  subtitle: string
  srTitle?: string
}

export function PageHeader({ eyebrow, title, subtitle, srTitle }: PageHeaderProps) {
  return (
    <header className="app-header">
      <p className="app-eyebrow">{eyebrow}</p>
      <h1 className="app-title">{title}</h1>
      <p className="app-subtitle">{subtitle}</p>
      {srTitle ? <h2 className="sr-only">{srTitle}</h2> : null}
    </header>
  )
}
