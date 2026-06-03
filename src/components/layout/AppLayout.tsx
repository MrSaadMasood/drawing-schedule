import { NavLink, Outlet } from 'react-router-dom'
import { phaseNavItems } from '../../data/phases/registry'

export function AppLayout() {
  return (
    <>
      <nav className="site-nav" aria-label="Site navigation">
        <div className="site-nav-inner">
          <NavLink to="/" className="site-brand" end>
            Painting & Drawing Guide
          </NavLink>
          <div className="site-links">
            <NavLink
              to="/"
              className={({ isActive }) => `site-link${isActive ? ' active' : ''}`}
              end
            >
              18-Month Roadmap
            </NavLink>
            {phaseNavItems.map((phase) => (
              <NavLink
                key={phase.phaseNumber}
                to={`/phase/${phase.phaseNumber}`}
                className={({ isActive }) => `site-link${isActive ? ' active' : ''}`}
              >
                {phase.label}
                {!phase.hasDetailedGuide ? ' (overview)' : ''}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
