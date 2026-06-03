import { phase2Meta } from './meta'
import { phase2Weeks } from './weeks'
import { phase2Gaps } from './gaps'
import { copyMethodSteps, copyMethodInfoBox } from './copyMethod'
import {
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  askButtons as stopAskButtons,
} from './stopRules'
import { referenceSections, referenceInfoBox } from './references'
import { phase2Assessment } from './assessment'

export const phase2Guide = {
  meta: phase2Meta,
  weeks: phase2Weeks,
  gaps: phase2Gaps,
  copyMethodSteps,
  copyMethodInfoBox,
  timingCells,
  drawingStopSteps,
  stopWarnBox,
  stopAskButtons,
  referenceSections,
  referenceInfoBox,
  assessment: phase2Assessment,
}

export type Phase2Guide = typeof phase2Guide
