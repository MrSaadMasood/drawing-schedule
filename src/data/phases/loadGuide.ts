import { phase1Guide } from '../phase1'
import { phase2Guide } from '../phase2'
import { phase3Guide } from '../phase3'
import { phase4Guide } from '../phase4'
import { phase5Guide } from '../phase5'

const guides = {
  1: phase1Guide,
  2: phase2Guide,
  3: phase3Guide,
  4: phase4Guide,
  5: phase5Guide,
} as const

export function getDetailedPhaseGuide(phaseNumber: number) {
  return guides[phaseNumber as keyof typeof guides] ?? null
}
