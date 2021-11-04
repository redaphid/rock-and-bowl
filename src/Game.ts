import { FrameInfo, FrameStatus, getFrameStatus } from "./Frame"
import bowl from "bowling"


// var aCompleteGame = ['81','9-','9/','71','9-','X','90','70','x','7-'],
//     result

// result = bowl(aCompleteGame)

// console.log(result)
const last = (arr) => arr[arr.length - 1]

export const scoreGame = (frames: number[][]) => {
  const libraryFormat = frames.map(frameToLibraryFormat)
  const scoreResults = bowl(libraryFormat)
  return last(scoreResults)?.cumulative || 0
}
const frameToLibraryFormat = (frame: number[])=> {
  const frameStatus = getFrameStatus(frame)
  switch(frameStatus) {
    case FrameStatus.Strike:
      return 'X'
    case FrameStatus.Spare:
      return `${frame[0]}/`
    case FrameStatus.Open:
      return `${frame[0]}${frame[1]}`
      default:
        return '0'
  }
}

