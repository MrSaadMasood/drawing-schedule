import type { PhaseNavItem } from '../../types/guide'

export const phaseNavItems: PhaseNavItem[] = [
  {
    phaseNumber: 1,
    label: 'Phase 1',
    badge: { label: 'Phase 1', background: '#F1EFE8', color: '#444441' },
    hasDetailedGuide: true,
  },
  {
    phaseNumber: 2,
    label: 'Phase 2',
    badge: { label: 'Phase 2', background: '#E6F1FB', color: '#0C447C' },
    hasDetailedGuide: true,
  },
  {
    phaseNumber: 3,
    label: 'Phase 3',
    badge: { label: 'Phase 3', background: '#EAF3DE', color: '#27500A' },
    hasDetailedGuide: true,
  },
  {
    phaseNumber: 4,
    label: 'Phase 4',
    badge: { label: 'Phase 4', background: '#FAEEDA', color: '#633806' },
    hasDetailedGuide: true,
  },
  {
    phaseNumber: 5,
    label: 'Phase 5',
    badge: { label: 'Phase 5', background: '#EEEDFE', color: '#3C3489' },
    hasDetailedGuide: true,
  },
]

export function getPhaseNavItem(phaseNumber: number): PhaseNavItem | undefined {
  return phaseNavItems.find((p) => p.phaseNumber === phaseNumber)
}

export function hasDetailedGuide(phaseNumber: number): boolean {
  return getPhaseNavItem(phaseNumber)?.hasDetailedGuide ?? false
}
