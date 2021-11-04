#!/usr/bin/env ts-node

const { getGameView } = require("./GameViewer")

const stdin = process.openStdin()

let data = ""

stdin.on("data", function (chunk) {
  data += chunk
})

stdin.on("end", function () {
  const frames = JSON.parse(data)
  const view = getGameView(frames)
  console.log(JSON.stringify(view, null, 2))
})
