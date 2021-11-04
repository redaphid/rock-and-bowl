import { FrameStatus } from "./Frame"
import { scoreGame } from "./Game"
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
    it("should return a view with 10 frames", ()=>{
      expect(game.frames.length).toEqual(10)
    })
    it("should tell us all the frames are incomplete", () => {
      game.frames.forEach((frame) => {
        expect(frame.status).toEqual(FrameStatus.Incomplete)
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
    // it("should tell us we're on frame 3", () => {
    //   expect(game.currentFrame).toEqual(3)
    // })
    // it("should tell us all the frames are complete", () => {
    //   game.frames.forEach((frame) => {
    //     expect(frame.status).toEqual(FrameStatus.Complete)
    //   })
    // })  
  })
})
