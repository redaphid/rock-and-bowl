export interface GameView {
  score: number
}
export const getGameView = (frames: number[][]):GameView => {
  return {score:0}
}
