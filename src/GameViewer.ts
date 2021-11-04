import { FrameInfo, FrameStatus } from "./Frame"

export interface GameView {
  score: number
  currentFrame: number
  frames: FrameInfo[]
}
export const getGameView = (frames: number[][]): GameView => {
  return {
    score: 0,
    currentFrame: 0,
    frames: new Array(10).fill(0).map((_, i) => {
      return {status: FrameStatus.Incomplete, rolls: []}
    })
  }
}
