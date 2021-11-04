import { getFrameStatus, FrameStatus } from "./Frame"
describe("Frame", () => {
  describe("When characterizing a Frame", () => {
    let status: FrameStatus | undefined
    let rolls: number[] | undefined
    describe("When the player hasn't rolled the ball", () => {
      beforeEach(() => {
        rolls = []
        status = getFrameStatus(rolls)
      })
      it("should be incomplete", () => {
        expect(status).toBe(FrameStatus.Incomplete)
      })
    })

    describe("When the player rolled the ball once", () => {
      describe("When they didn't knock all the pins down", () => {
        beforeEach(() => {
          rolls = [5]
          status = getFrameStatus(rolls)
        })
        it("should be an incomplete frame", () => {
          expect(status).toBe(FrameStatus.Incomplete)
        })
      })
      describe("When they knocked all 10 pins down", () => {
        beforeEach(() => {
          rolls = [10]
          status = getFrameStatus(rolls)
        })
        it("should be a strike frame", () => {
          expect(status).toBe(FrameStatus.Strike)
        })
      })

      describe("When the player didn't knock all of the pins down", () => {
        beforeEach(() => {
          rolls = [5, 2]
          status = getFrameStatus(rolls)
        })
        it("should be a open frame", () => {
          expect(status).toBe(FrameStatus.Open)
        })
      })
      describe("When the player knocked down all of the pins", () => {
        beforeEach(() => {
          rolls = [4, 6]
          status = getFrameStatus(rolls)
        })
        it("should be a spare frame", () => {
          expect(status).toBe(FrameStatus.Spare)
        })
      })
    })
    describe("Some error conditions", () => {
      describe("When the player rolls the ball more than 2 times", () => {
        it.todo("should be invalid")
      })
      describe("the player knocked some negative number of pins down", () => {
        it.todo("should be an invalid frame")
        it.todo("should tell us it's invalid because the number of pins is negative")
      })
      describe("the player knocked more than 10 pins down", () => {
        it.todo("should be an invalid frame")
        it.todo("should tell us it's invalid because the number of pins is  > 10")
      })
      describe("the player knocked some fractional number of pins down", () => {
        it.todo("should be an invalid frame")
      })
      describe("the player knocked more than 10 pins down", () => {})
      describe("When the player rolled the ball a second time in a frame after a strike", () => {
        it.todo("should be an invalid frame")
      })
    })
  })
})
