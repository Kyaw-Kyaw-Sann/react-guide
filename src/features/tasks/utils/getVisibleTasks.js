const priorityOrder = { High: 0, Medium: 1, Low: 2 }

export function getVisibleTasks(tasks, filters) {
  const query = filters.search.trim().toLowerCase()

  const visibleTasks = tasks.filter((task) => (
    task.title.toLowerCase().includes(query)
    && (filters.status === 'All' || (filters.status === 'Completed') === task.completed)
    && (filters.category === 'All' || task.category === filters.category)
    && (filters.priority === 'All' || task.priority === filters.priority)
  ))

  if (filters.sort === 'Due date: earliest') {
    visibleTasks.sort((first, second) => {
      if (!first.dueDate) return second.dueDate ? 1 : 0
      if (!second.dueDate) return -1
      return first.dueDate.localeCompare(second.dueDate)
    })
  }

  if (filters.sort === 'Priority: highest') {
    visibleTasks.sort((first, second) => priorityOrder[first.priority] - priorityOrder[second.priority])
  }

  return visibleTasks
}
