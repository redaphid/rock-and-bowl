import { scoreGame } from "./Game"
describe("When scoring a game", () => {
  let score: number
  it("should exist", () => {
    expect(scoreGame).toBeDefined()
  })

  describe("When the player hasn't even rolled the ball", () => {
    beforeEach(() => {
      const frames = []
      score = scoreGame(frames)
    })
    it("should give them a score of 0", () => {
      expect(score).toEqual(0)
    })
  })
  describe("When the player hasn't completed any frames", () => {
    beforeEach(() => {
      const frames = [
        [2]
      ]
      score = scoreGame(frames)
    })
    it("should give them a score of 0", () => {
      expect(score).toEqual(0)
    })
    describe("When the player completed a single frame, hitting 7 pins down", () => {
      beforeEach(() => {
        const frames = [
         [3,4]
        ]
        score = scoreGame(frames)
      })

      it("should give them a score of 7", () => {
        expect(score).toEqual(7)
      })
    })
  })
})
