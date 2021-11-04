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
    const lastFormatted = specialLastFrameLogic(lastFrame)
    libraryFormat.push(lastFormatted)
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
      return "0"
    default:
      return ""
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

/* 
* The score for the 10th frame is the total number of pins knocked down in the 10th frame.
* If you roll a spare in the first two shots of the 10th frame, you get 1 more shot.
* If you leave the 10th frame open after two shots, the game is over and you do not get an additional shot.
*/
const specialLastFrameLogic = (frame: number[]):string =>{
  const [first,  second, third] = frame

  if(first === undefined) return ''
  if(second === undefined) return frameToLibraryFormat([first])

  const firstFrameStatus = getFrameStatus([first])
  
  if(firstFrameStatus === FrameStatus.Strike) {
    return `X${specialLastFrameLogic([second, third])}`
  }

  const secondFrameStatus = getFrameStatus([first, second])
  if(secondFrameStatus === FrameStatus.Spare) {
    return `${first}/${frameToLibraryFormat([third])}`
  }
  console.log({first})
  return `${first}`
}
