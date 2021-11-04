export enum FrameStatus {
  Open = "Open",
  Spare = "Spare",
  Strike = "Strike",
  Incomplete = "Incomplete",
  Invalid = "Invalid",
  Unknown = "Unknown",
}
export interface FrameInfo {
  status: FrameStatus
  rolls: number[]
}
export const getFrameStatus = (rolls: number[]): FrameStatus => {
  switch (rolls.length) {
    case 0:
      return FrameStatus.Incomplete
    case 1:
      if (rolls[0] === 10) {
        return FrameStatus.Strike
      }
      return FrameStatus.Incomplete

    case 2:
      if (rolls[0] + rolls[1] === 10) {
        return FrameStatus.Spare
      }
      return FrameStatus.Open

    default:
      return FrameStatus.Invalid
  }
}
