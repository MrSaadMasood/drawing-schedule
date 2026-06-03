import { phase4Meta } from './meta'
import { phase4Weeks } from './weeks'
import { phase4Gaps } from './gaps'
import { copyMethodSteps, copyMethodInfoBox } from './copyMethod'
import {
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  askButtons as stopAskButtons,
} from './stopRules'
import { referenceSections, referenceInfoBox } from './references'
import { phase4Assessment } from './assessment'

export const phase4Guide = {
  meta: phase4Meta,
  weeks: phase4Weeks,
  gaps: phase4Gaps,
  copyMethodSteps,
  copyMethodInfoBox,
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  stopAskButtons,
  referenceSections,
  referenceInfoBox,
  assessment: phase4Assessment,
}

export type Phase4Guide = typeof phase4Guide
