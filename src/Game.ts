import { FrameInfo, FrameStatus, getFrameStatus } from "./Frame"
import bowl from "bowling"

const last = (arr) => arr[arr.length - 1]

export const scoreGame = (frames: number[][]) => {
  //don't want to modify the input
  let framesToCheck = [...frames]
  let lastFrame;
  if(framesToCheck.length === 10) {
    lastFrame = framesToCheck.pop()
  }
  const libraryFormat = framesToCheck.map(frameToLibraryFormat)
  const scoreResults = bowl(libraryFormat)
  return last(scoreResults)?.cumulative || 0
}
export const frameToLibraryFormat = (frame: number[]) => {

  const frameStatus = getFrameStatus(frame)
  switch (frameStatus) {
    case FrameStatus.Strike:
      return "X"
    case FrameStatus.Spare:
      return `${frame[0]}/`
    case FrameStatus.Open:
      return `${frame[0]}${frame[1]}`
    case FrameStatus.Invalid:
      return `${frame[0]}${frame[1]}}`
    default:
      return "0"
  }
}
