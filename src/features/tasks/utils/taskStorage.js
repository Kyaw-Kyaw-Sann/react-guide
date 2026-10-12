import { sampleTasks } from '../data/sampleTasks.js'

const storageKey = 'react-learning-task-manager.tasks'

function isTask(task) {
  return task
    && typeof task.id === 'string'
    && typeof task.title === 'string'
    && typeof task.category === 'string'
    && typeof task.priority === 'string'
    && typeof task.dueDate === 'string'
    && typeof task.completed === 'boolean'
}

export function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(storageKey)
    if (savedTasks === null) return sampleTasks

    const parsedTasks = JSON.parse(savedTasks)
    return Array.isArray(parsedTasks) && parsedTasks.every(isTask)
      ? parsedTasks
      : sampleTasks
  } catch {
    return sampleTasks
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(tasks))
  } catch {
    // The app can still work in memory when browser storage is unavailable.
  }
}
