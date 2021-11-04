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
    })
    describe("When the player rolled the ball twice", () => {
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
  })
})
