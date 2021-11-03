import { characterizeFrame, FrameType } from "./Frame"
describe("Frame", () => {
  describe("When characterizing a Frame", () => {
    let frameType: FrameType | undefined
    let rolls: number[] | undefined
    describe("Incomplete frames", () => {
      describe("When the player hasn't rolled the ball yet", () => {
        beforeEach(() => {
          rolls = []
          frameType = characterizeFrame(rolls)
        })
        it("should be incomplete", () => {
          expect(frameType).toBe(FrameType.Incomplete)
        })
        describe
        describe("When the player rolled the ball once, and it isn't a strike", () => {
          beforeEach(() => {
            rolls = [5]
            frameType = characterizeFrame(rolls)
          })
          it("should be an incomplete frame", () => {
            expect(frameType).toBe(FrameType.Incomplete)
          })
        })
      })
    })
    describe("Open frames", ()=>{
      describe("when the frame has 2 shots, and the sum of the 2 <10", () => {
        beforeEach(() => {
          rolls = [5, 2]
          frameType = characterizeFrame(rolls)
        })
        it("should be a open frame", () => {
          expect(frameType).toBe(FrameType.Open)
        })
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
    describe("When a frame has a sum 10 pins on the second shot", () => {
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
