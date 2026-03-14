export const agentLoopTest = (tasks) => {
  console.log("Agent loop iniciado")
  
  const queue = [...tasks]

  while (queue.length > 0) {
    let task = queue.shift()

    console.log(`Executing: ${task}`)
  }
  console.log("All tasks completed")
}