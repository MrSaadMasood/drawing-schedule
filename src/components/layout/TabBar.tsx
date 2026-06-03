type TabBarProps = {
  tabs: { id: string; label: string }[]
  activeTab: string
  onTabChange: (tab: string) => void
  ariaLabel?: string
}

export function TabBar({
  tabs,
  activeTab,
  onTabChange,
  ariaLabel = 'Content sections',
}: TabBarProps) {
  return (
    <div className="tabs" role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          className={`tab${activeTab === tab.id ? ' active' : ''}`}
          aria-selected={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
