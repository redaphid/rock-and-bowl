import { FrameInfo, FrameStatus, getFrameStatus } from "./Frame"
import bowl from "bowling"

const last = (arr) => arr[arr.length - 1]

export const scoreGame = (frames: number[][]) => {
  console.log({frames})
  const libraryFormat = frames.map(frameToLibraryFormat)
  console.log({libraryFormat})
  const scoreResults = bowl(libraryFormat)
  return last(scoreResults)?.cumulative || 0
}
const frameToLibraryFormat = (frame: number[]) => {
  const frameStatus = getFrameStatus(frame)
  console.log({frame, frameStatus})
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
      return "X81"
  }
}
