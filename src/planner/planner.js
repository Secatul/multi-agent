// deve retornar as tasks no futuro

export const plannerTest = (goal) => {
  console.log("Planner iniciado")
  console.log(`Goal: ${goal}`)

  const tasks = []

  if (goal.includes("auth")) {
    tasks.push("analyse project structure")
    tasks.push("detect framework")
    tasks.push("design auth system")
    tasks.push("create auth route")
    tasks.push("test authentication")
  } else {
    tasks.push("analyse project")
    tasks.push("determine required actions")
    tasks.push("execute goal")
  }

  console.log("Generated tasks:")
  for (const task of tasks) {
    console.log(`- ${task}`)
  }

  return tasks
}
