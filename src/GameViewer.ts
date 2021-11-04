import { FrameInfo, FrameStatus, getFrameStatus } from "./Frame"
import { scoreGame } from "./Game"

export interface GameView {
  score: number
  currentFrame: number
  frames: FrameInfo[]
}
export const getGameView = (frames: number[][]): GameView => {
  const displayFrames = getDisplayFrames(frames)
  const view = {
    score: scoreGame(frames),
    currentFrame: findCurrentFrame(frames),
    frames: displayFrames
  } as GameView
  return view
}

function getDisplayFrame(frame: number[]): FrameInfo {
  return {
    status: getFrameStatus(frame),
    rolls: frame,
  }
}
function findCurrentFrame(frames: number[][]): number {
  let currentFrame = frames.length
  frames.forEach((frame, i) => {
    const status = getFrameStatus(frame)
    if (status == FrameStatus.Incomplete) {
      currentFrame = i
      return
    }
  })
  return currentFrame + 1
}
function getDisplayFrames(frames: number[][]): FrameInfo[] {
  const displayFrames = frames.map(getDisplayFrame)
  while(displayFrames.length < 10) {
    displayFrames.push({
      status: FrameStatus.Incomplete,
      rolls: [],
    })
  }
  return displayFrames
}