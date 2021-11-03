//*technically* this could be done with an array of arrays,
//but I'm putting them in properties for clarity.
interface Frame {
  rolls: number[]
}

interface Game {
  frames: Frame[]
}
