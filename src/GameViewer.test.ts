import { GameView, getGameView } from "./GameViewer"
describe("GameViewer", () => {
  describe("Given an empty frame array", () => {
    let frames: number[][]
    let game: GameView
    beforeEach(() => {
      frames = []
      game = getGameView(frames)
    })
    it("should give us a score of 0", () => {
      expect(game.score).toEqual(0)
    })
  })
})
