import { FrameInfo } from "./Frame"
import { scoreGame } from "./Game"
describe("When scoring a game", () => {
  let score: number
  it("should exist", () => {
    expect(scoreGame).toBeDefined()
  })

  describe("When the player hasn't completed any frames", ()=>{
      beforeEach(()=>{
        const frames = []
        score = scoreGame([])
      })
      it("should give them a score of 0", ()=>{
        expect(score).toEqual(0)
      })
  })
})
