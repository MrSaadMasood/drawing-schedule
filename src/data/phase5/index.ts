import { phase5Meta } from './meta'
import { phase5Weeks } from './weeks'
import { phase5Gaps } from './gaps'
import { copyMethodSteps, copyMethodInfoBox } from './copyMethod'
import {
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  askButtons as stopAskButtons,
} from './stopRules'
import { referenceSections, referenceInfoBox } from './references'
import { phase5Assessment } from './assessment'

export const phase5Guide = {
  meta: phase5Meta,
  weeks: phase5Weeks,
  gaps: phase5Gaps,
  copyMethodSteps,
  copyMethodInfoBox,
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  stopAskButtons,
  referenceSections,
  referenceInfoBox,
  assessment: phase5Assessment,
}

export type Phase5Guide = typeof phase5Guide
