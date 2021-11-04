import { FrameInfo, FrameStatus, getFrameStatus } from "./Frame"
import { scoreGame } from "./Score"

export interface GameView {
  score: number
  currentFrame: number
  frames: FrameInfo[]
}
export const getGameView = (frames: number[][]): GameView => {
  const displayFrames = getDisplayFrames(frames)
  const view = {
    score: scoreGame(frames),
    currentFrame: findCurrentFrame(displayFrames),
    frames: displayFrames,
  }
  return view
}

function getDisplayFrame(frame: number[]): FrameInfo {
  return {
    status: getFrameStatus(frame),
    rolls: frame,
    score: scoreGame([frame]),
    scoreUntilNow:0,
  }
}
function findCurrentFrame(frames: FrameInfo[]): number {
  let currentFrame = frames.length
  frames.forEach(({ status }, i) => {
    if (status == FrameStatus.Incomplete) {
      if (i > currentFrame) return
      currentFrame = i
    }
  })
  return currentFrame + 1
}
function getDisplayFrames(frames: number[][]): FrameInfo[] {
  const displayFrames = frames.map(getDisplayFrame)
  
  displayFrames.forEach((frame, i) => {
    frame.scoreUntilNow = scoreGame(frames.slice(0, i))
  })

  while (displayFrames.length < 10) {
    displayFrames.push({
      status: FrameStatus.Incomplete,
      score: 0,
      rolls: [],
      scoreUntilNow: 0,
    })
  }
  return displayFrames
}
