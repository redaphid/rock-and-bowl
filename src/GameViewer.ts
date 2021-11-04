import { FrameInfo, FrameStatus } from "./Frame"
import { scoreGame } from "./Game"

export interface GameView {
  score: number
  currentFrame: number
  frames: FrameInfo[]
}
export const getGameView = (frames: number[][]): GameView => {
  return {
    score: scoreGame(frames),
    currentFrame: 0,
    frames: new Array(10).fill(0).map((_, i) => {
      return {status: FrameStatus.Incomplete, rolls: []}
    })
  }
}
