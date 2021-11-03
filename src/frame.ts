export class Frame {
  bowl(pins: number) {
    return pins
  }
}

export const scoreFrame = (shots: number[]) => {
  return shots.reduce((score, pins) => score + pins, 0)
}

export const characterizeFrame = (shots: number[]): FrameType => {
  //It seems like Typescript doesn't care about checking undefineds.
  if (shots[0] === 10) return FrameType.Strike
  if (shots[0] + shots[1] === 10) return FrameType.Spare

  return FrameType.Open
}
export enum FrameType {
  Open = "Open",
  Spare = "Spare",
  Strike = "Strike",
}
