import { FrameStatus } from "./Frame"
import { scoreGame } from "./Score"
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
    it("should tell us we're on frame 1", () => {
      expect(game.currentFrame).toEqual(1)
    })
    it("should tell us all the frames are incomplete", () => {
      game.frames.forEach((frame) => {
        expect(frame.status).toEqual(FrameStatus.Incomplete)
        expect(frame.rolls).toEqual([])
      })
    })
  })
  describe("Given a frame array with a few frames played", () => {
    let frames: number[][]
    let game: GameView
    beforeEach(() => {
      frames = [[1, 2], [3, 4], [5, 5], [6,3]]
      game = getGameView(frames)
    })
    it("should give us a score of 35", () => {
      expect(game.score).toEqual(scoreGame(frames))
    })
    it("should tell us we're on frame 5", () => {
      expect(game.currentFrame).toEqual(5)
    })  
    
    it("should tell the current score is 35", () => {
      expect(game.frames.slice(-1)[0].scoreUntilNow).toEqual(19)
    })  
  })
  describe("Given a complete, perfect game", () => {
    let frames: number[][]
    let game: GameView
    beforeEach(() => {
      frames = new Array(9).fill([10])
      frames.push([10, 10, 10])

      game = getGameView(frames)
    })
    it("should give us a score of 300", () => {
      expect(game.score).toEqual(300)
    })
    it("should tell us we're done", () => {
      expect(game.currentFrame).toEqual(10)
    })  
  })
})
