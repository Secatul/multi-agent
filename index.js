import { runAgent } from "./src/agent/agent.js";
import readline from "node:readline"

// goal = "analyze this project and explain its structure"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("> What do you want to build\n", (answer) => {
  runAgent(answer)
  rl.close()
})