import { FrameInfo } from "./Frame"

export interface GameView {
  score: number
  currentFrame: number
  frames: FrameInfo[]
}
export const getGameView = (frames: number[][]): GameView => {
  return {
    score: 0,
    currentFrame: 0,
    frames: []
  }
}
