import { FrameInfo, FrameStatus, getFrameStatus } from "./Frame"
import bowl from "bowling"

const last = (arr) => arr[arr.length - 1]

export const scoreGame = (frames: number[][]) => {
  //don't want to modify the input
  let framesToCheck = [...frames]
  let lastFrame

  if (framesToCheck.length === 10) {
    lastFrame = framesToCheck.pop()
  }
  let libraryFormat = framesToCheck.map(frameToLibraryFormat)
  
  if (lastFrame) {
    libraryFormat.push(specialLastFrameLogic(lastFrame))
  }
  const scoreResults = bowl(libraryFormat)

  return getLatestScorePossible(scoreResults)
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
interface libraryScore {
  cumulative: number
}
const getLatestScorePossible = (scores: libraryScore[]) => {
  let lastScore = 0
  for (let i in scores) {
    const score = scores[i]
    if (!score.cumulative) return lastScore

    lastScore = score.cumulative
  }
  return lastScore
}

const specialLastFrameLogic = (frame: number[]) => {
  if (frame.length === 3) {
    return `${frame[0]}${frame[1]}${frame[2]}`
  } else {
    return `${frame[0]}${frame[1]}`
  }
}
