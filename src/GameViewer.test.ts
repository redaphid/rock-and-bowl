import { FrameStatus } from "./Frame"
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
    it("should tell us we're on frame 0", () => {
      expect(game.currentFrame).toEqual(0)
    })
    it("should tell us all the frames are incomplete", () => {
      game.frames.forEach((frame) => {
        expect(frame.status).toEqual(FrameStatus.Incomplete)
      })
    })
  })
})
