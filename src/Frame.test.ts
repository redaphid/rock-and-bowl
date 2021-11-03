import { characterizeFrame, FrameType } from "./Frame"
describe("Frame", () => {
  describe("When characterizing a Frame", () => {
    let frameType: FrameType | undefined
    let rolls: number[] | undefined
    describe("When the player hasn't rolled the ball", () => {     
        beforeEach(() => {
          rolls = []
          frameType = characterizeFrame(rolls)
        })
        it("should be incomplete", () => {
          expect(frameType).toBe(FrameType.Incomplete)
        })
      })

      describe("When the player rolled the ball once", ()=>{
        
        describe("When they didn't knock all the pins down", () => {
          beforeEach(() => {
            rolls = [5]
            frameType = characterizeFrame(rolls)
          })
          it("should be an incomplete frame", () => {
            expect(frameType).toBe(FrameType.Incomplete)
          })
        })

        describe("When they knocked all 10 pins down", () => {
          beforeEach(() => {
            rolls = [10]
            frameType = characterizeFrame(rolls)
          })
          it("should be a strike frame", () => {
            expect(frameType).toBe(FrameType.Strike)
          })
      })
    })
    describe("When the player rolled the ball twice", ()=>{
      describe("When the player didn't knock all of the pins down", () => {
        beforeEach(() => {
          rolls = [5, 2]
          frameType = characterizeFrame(rolls)
        })
        it("should be a open frame", () => {
          expect(frameType).toBe(FrameType.Open)
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
