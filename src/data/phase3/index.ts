import { phase3Meta } from './meta'
import { phase3Weeks } from './weeks'
import { phase3Gaps } from './gaps'
import { copyMethodSteps, copyMethodInfoBox } from './copyMethod'
import {
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  askButtons as stopAskButtons,
} from './stopRules'
import { referenceSections, referenceInfoBox } from './references'
import { phase3Assessment } from './assessment'

export const phase3Guide = {
  meta: phase3Meta,
  weeks: phase3Weeks,
  gaps: phase3Gaps,
  copyMethodSteps,
  copyMethodInfoBox,
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  stopAskButtons,
  referenceSections,
  referenceInfoBox,
  assessment: phase3Assessment,
}

export type Phase3Guide = typeof phase3Guide
