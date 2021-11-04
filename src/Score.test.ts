import { scoreGame } from "./Score"
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
      const frames = [[2]]
      score = scoreGame(frames)
    })
    it("should give them a score of 0", () => {
      expect(score).toEqual(0)
    })
  })
  describe("When the player completed a single frame, hitting 7 pins down", () => {
    let score: number
    beforeEach(() => {
      const frames = [[3, 4]]
      score = scoreGame(frames)
    })

    it("should give them a score of 7", () => {
      expect(score).toEqual(7)
    })
  })
  describe("When the player completed a single frame, hitting 7 pins down", () => {
    let score: number
    beforeEach(() => {
      const frames = [[3, 4]]
      score = scoreGame(frames)
    })

    it("should give them a score of 7", () => {
      expect(score).toEqual(7)
    })
  })

  //spot check unfinished game
  describe("When the player completes a few frames", () => {
    let score: number
    beforeEach(() => {
      const frames = [
        [1, 2],
        [3, 4],
        [5, 5],
        [6, 3],
      ]
      score = scoreGame(frames)
    })

    it("should give them the correct score", () => {
      expect(score).toEqual(35)
    })
  })

  //Spot checking with the wikipedia examples
  describe("When a player gets a strike on the first frame, and knocks down 9 pins total in the 2nd", () => {
    let score: number
    beforeEach(() => {
      const frames = [[10], [3, 6]]
      score = scoreGame(frames)
    })
    it("should give them a score of 28", () => {
      expect(score).toEqual(28)
    })
  })
  describe("When a player gets a spare after knocking down 7 pins, then knocks down 6 the next frame", () => {
    let score: number
    beforeEach(() => {
      const frames = [
        [7, 3],
        [4, 2],
      ]
      score = scoreGame(frames)
    })
    it("should give them a score of 20", () => {
      expect(score).toEqual(20)
    })
  })
  describe("When a player is almost done with the game, and so far had strikes every time", () => {
    let score: number = 0
    beforeEach(() => {
      const frames = new Array(9).fill([10])
      score = scoreGame(frames)
    })
    it("should give us some score of 210", () => {
      expect(score).toBe(210)
    })
  })
  describe("10th frame problems", () => {
    // Test case results from https://www.bowlinggenius.com/
    describe("When a player played a perfect game", () => {
      let score: number = 0
      beforeEach(() => {
        const frames = new Array(9).fill([10])
        frames.push([10, 10, 10])
        score = scoreGame(frames)
      })
      it("should give us t a score of 300", () => {
        expect(score).toBe(300)
      })
    })
    describe("When a player rolled 10 strikes in a row", () => {
      let score: number = 0
      beforeEach(() => {
        const frames = new Array(10).fill([10])
        score = scoreGame(frames)
      })
      it("should give us a score of 240", () => {
        expect(score).toBe(240)
      })
    })
    describe("When a player rolls a spare on the last frame", () => {
      let score: number = 0
      beforeEach(() => {
        const frames = new Array(9).fill([10])
        frames.push([10, 5, 5])
        score = scoreGame(frames)
      })
      it("should give us a score of 285", () => {
        expect(score).toBe(285)
      })
    })
  })
})
