import { scoreGame } from "./Game"
describe("When scoring a game", () => {
  it("should exist", () => {
    expect(scoreGame).toBeDefined()
  })

  describe("When the player hasn't even rolled the ball", () => {
    let score: number
    beforeEach(() => {
      const frames = []
      score = scoreGame(frames)
    })
    it("should give them a score of 0", () => {
      expect(score).toEqual(0)
    })
  })
  describe("When the player hasn't completed any frames", () => {
    let score: number
    beforeEach(() => {
      const frames = [
        [2]
      ]
      score = scoreGame(frames)
    })
    it("should give them a score of 0", () => {
      expect(score).toEqual(0)
    })
  })
    describe("When the player completed a single frame, hitting 7 pins down", () => {
      let score: number
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
    describe("When the player completed a single frame, hitting 7 pins down", () => {
      let score: number
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

    //Spot checking with the wikipedia examples
    describe("When a player gets a strike on the first frame, and knocks down 9 pins total in the 2nd", () => {
      let score: number
      beforeEach(() => {  
        const frames = [
          [10],
          [3,6]
        ]
        score = scoreGame(frames)
      })
      it("should give them a score of 28", ()=>{
        expect(score).toEqual(28)
      })
    })
    describe("When a player gets a spare after knocking down 7 pins, then knocks down 6 the next frame", () => {
      let score: number
      beforeEach(() => {  
        const frames = [
          [7,3],
          [4,2]
        ]
        score = scoreGame(frames)
      })
      it("should give them a score of 20", ()=>{
        expect(score).toEqual(20)
      })
    })
    describe.only("When a player gets is the best bowler ever, and hits a strike every time", () => {
      let score: number
      beforeEach(() => {  
        const frames = [
          [10],
          [10],
          [10],
          [10],
          [10],
          [10],
          [10],
          [10],
          [10],
          [10,1,3],
        ]
        score = scoreGame(frames)
      })
      it.only("should give them a score of 300", ()=>{
        expect(score).toEqual(300)
      })
    })
  })
