import { phase1Meta } from './meta'
import { phase1Weeks } from './weeks'
import { phase1Gaps } from './gaps'
import { copyMethodSteps, copyMethodInfoBox } from './copyMethod'
import {
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  askButtons as stopAskButtons,
} from './stopRules'
import { referenceSections, referenceInfoBox } from './references'
import { phase1Assessment } from './assessment'

export const phase1Guide = {
  meta: phase1Meta,
  weeks: phase1Weeks,
  gaps: phase1Gaps,
  copyMethodSteps,
  copyMethodInfoBox,
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  stopAskButtons,
  referenceSections,
  referenceInfoBox,
  assessment: phase1Assessment,
}

export type Phase1Guide = typeof phase1Guide
