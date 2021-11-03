import { characterizeFrame, FrameType } from "./Frame"
describe("Frame", () => {
  describe("Characterizing a Frame", () => {
    let frameType: FrameType | undefined
    let rolls: number[] | undefined
    describe("When a frame has no shots yet", () => {
      beforeEach(() => {
        rolls = []
        frameType = characterizeFrame(rolls)
      })
      it("should be incomplete", () => {
        expect(frameType).toBe(FrameType.Incomplete)
      })
    })
    describe("When a frame has 1 shot, and it isn't a strike", () => {
      beforeEach(() => {
        rolls = [5]
        frameType = characterizeFrame(rolls)
      })
      it("should be a open frame", () => {
        expect(frameType).toBe(FrameType.Incomplete)
      })
    })
    describe("When a frame has 10 pins on the first shot", () => {
      beforeEach(() => {
        rolls = [10]
        frameType = characterizeFrame(rolls)
      })
      it("should be a strike frame", () => {
        expect(frameType).toBe(FrameType.Strike)
      })
    })
    describe("When a frame has 10 pins on the second shot", () => {
      beforeEach(() => {
        rolls = [6, 4]
        frameType = characterizeFrame(rolls)
      })
      it("should be a spare frame", () => {
        expect(frameType).toBe(FrameType.Spare)
      })
    })
  })
})
