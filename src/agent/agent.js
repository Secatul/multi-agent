import { agentLoopTest } from "./agentLoop.js"
import { plannerTest } from "../planner/planner.js"

export const runAgent = (goal) => {
  console.log(`Goal reaceived: ${goal}`)
  agentLoopTest()
  plannerTest()
}