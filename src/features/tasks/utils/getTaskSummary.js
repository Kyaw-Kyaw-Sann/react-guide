export function getTaskSummary(tasks) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length

  return {
    total,
    completed,
    remaining: total - completed,
    progressPercentage: total === 0 ? 0 : Math.round((completed / total) * 100),
  }
}
