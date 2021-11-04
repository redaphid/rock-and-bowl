import { FrameInfo } from "./Frame"
import bowl from "bowling"


// var aCompleteGame = ['81','9-','9/','71','9-','X','90','70','x','7-'],
//     result

// result = bowl(aCompleteGame)

// console.log(result)
export const scoreGame = (frames: FrameInfo[]) => {
  const scoreResults = bowl(['0'])
  return scoreResults.slice(-1)[0].cumulative
  const rolls = frames.map((f) => f.rolls)

  return rolls.reduce((score, roll) => {
    return score + roll[0]
  }, 0)
}
