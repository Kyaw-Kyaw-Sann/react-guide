import { useState } from 'react'
import Button from '../../../components/ui/Button.jsx'
import TaskForm from './TaskForm.jsx'
import TaskList from './TaskList.jsx'
import TaskSummary from './TaskSummary.jsx'
import { sampleTasks } from '../data/sampleTasks.js'
import { getTaskSummary } from '../utils/getTaskSummary.js'

export default function TaskDashboard() {
  const [tasks, setTasks] = useState(sampleTasks)
  const [editor, setEditor] = useState(null)
  const summary = getTaskSummary(tasks)

  function openCreateForm() {
    setEditor({ mode: 'create' })
  }

  function handleSave(values) {
    if (editor.mode === 'edit') {
      setTasks((currentTasks) => currentTasks.map((task) => (
        task.id === editor.task.id ? { ...task, ...values } : task
      )))
    } else {
      setTasks((currentTasks) => [
        { id: crypto.randomUUID(), ...values, completed: false },
        ...currentTasks,
      ])
    }
    setEditor(null)
  }

  function handleToggle(id) {
    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )))
  }

  function handleDelete(task) {
    if (!window.confirm(`Delete "${task.title}"?`)) return

    setTasks((currentTasks) => currentTasks.filter((item) => item.id !== task.id))
    if (editor?.task?.id === task.id) setEditor(null)
  }

  return (
    <div className="grid gap-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-widest text-brand uppercase">Task dashboard</p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">Your overview</h3>
        </div>
        <Button onClick={openCreateForm}>+ New task</Button>
      </div>

      {editor && (
        <TaskForm
          key={editor.task?.id ?? 'new'}
          task={editor.task}
          onSubmit={handleSave}
          onCancel={() => setEditor(null)}
        />
      )}

      <TaskSummary
        total={summary.total}
        completed={summary.completed}
        remaining={summary.remaining}
      />
      <TaskList
        tasks={tasks}
        onAddTask={openCreateForm}
        onToggleTask={handleToggle}
        onEditTask={(task) => setEditor({ mode: 'edit', task })}
        onDeleteTask={handleDelete}
      />
    </div>
  )
}
