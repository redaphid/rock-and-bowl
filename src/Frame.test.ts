import { characterizeFrame, FrameType } from "./Frame"
describe("Frame", () => {
  describe("When characterizing a Frame", () => {
    let frameType: FrameType | undefined
    let rolls: number[] | undefined
    describe("Incomplete", () => {
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
    describe("Open", ()=>{
      describe("when a player rolled twice, and didn't knock all of the pins down", () => {
        beforeEach(() => {
          rolls = [5, 2]
          frameType = characterizeFrame(rolls)
        })
        it("should be a open frame", () => {
          expect(frameType).toBe(FrameType.Open)
        })
      })
    })
    describe("Strike", ()=>{
      describe("When a the player knocked down 10 pins the first roll", () => {
        beforeEach(() => {
          rolls = [10]
          frameType = characterizeFrame(rolls)
        })
        it("should be a strike frame", () => {
          expect(frameType).toBe(FrameType.Strike)
        })
      })
    })
    describe("Spare", ()=>{
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
})
