import { characterizeFrame, FrameType } from "./Frame"
describe("Frame", () => {
  describe("Characterizing a Frame", () => {
    let frameType: FrameType | undefined
    describe("When a frame has no shots yet", () => {
      beforeEach(() => {
        const frame = []
        frameType = characterizeFrame(frame)
      })
      it.only("should be incomplete", () => {
        expect(frameType).toBe(FrameType.Open)
      })
    })
    describe("When a frame has 1 shot, and it isn't a strike", () => {
      beforeEach(() => {
        frameType = characterizeFrame([5])
      })
      it("should be a open frame", () => {
        expect(frameType).toBe(FrameType.Open)
      })
    })
    describe("When a frame has 10 pins on the first shot", () => {
      beforeEach(() => {
        frameType = characterizeFrame([10])
      })
      it("should be a strike frame", () => {
        expect(frameType).toBe(FrameType.Strike)
      })
    })
    describe("When a frame has 10 pins on the second shot", () => {
      beforeEach(() => {
        frameType = characterizeFrame([6, 4])
      })
      it("should be a spare frame", () => {
        expect(frameType).toBe(FrameType.Spare)
      })
    })
  })
})
