//*technically* this could be done with an array of arrays,
//but I'm putting them in properties for clarity.
interface Frame {
  rolls: number[]
}

interface Game {
  frames: Frame[]
}

export const characterizeFrame = (rolls:number[]): FrameType => {
  //It seems like Typescript doesn't care about checking undefineds.
  if (rolls[0] === 10) return FrameType.Strike
  if (rolls[0] + rolls[1] === 10) return FrameType.Spare

  return FrameType.Open
}
export enum FrameType {
  Open = "Open",
  Spare = "Spare",
  Strike = "Strike",
  Incomplete = "Incomplete",
}
