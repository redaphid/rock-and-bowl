//*technically* this could be done with an array of arrays,
//but I'm putting them in properties for clarity.
interface Frame {
  rolls: number[]
}

interface Game {
  frames: Frame[]
}

export const characterizeFrame = (rolls: number[]): FrameType => {
  switch(rolls.length) {
    case 0:
      return FrameType.Incomplete
    case 1:

     if(rolls[0] === 10) {
       return FrameType.Strike
     }
     return FrameType.Incomplete

    case 2:
      if(rolls[0] + rolls[1] === 10) {
        return FrameType.Spare
      }
      return FrameType.Open

    default:
      throw new Error('Invalid frame length')
  }
}
export enum FrameType {
  Open = "Open",
  Spare = "Spare",
  Strike = "Strike",
  Incomplete = "Incomplete",
}
