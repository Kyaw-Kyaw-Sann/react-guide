import { useState } from 'react'
import Button from '../../../components/ui/Button.jsx'
import Input from '../../../components/ui/Input.jsx'
import Select from '../../../components/ui/Select.jsx'

const categoryOptions = ['Learning', 'Build', 'Design', 'Personal', 'Other']
const priorityOptions = ['Low', 'Medium', 'High']

export default function TaskForm({ task, onSubmit, onCancel }) {
  const [values, setValues] = useState({
    title: task?.title ?? '',
    category: task?.category ?? 'Learning',
    priority: task?.priority ?? 'Medium',
    dueDate: task?.dueDate ?? '',
  })
  const [titleError, setTitleError] = useState('')
  const isEditing = Boolean(task)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    if (name === 'title') setTitleError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const title = values.title.trim()

    if (!title) {
      setTitleError('Please enter a task title.')
      return
    }

    onSubmit({ ...values, title })
  }

  return (
    <form className="grid gap-5 rounded-xl border border-brand/20 bg-brand-soft/40 p-5 sm:p-6" onSubmit={handleSubmit} noValidate>
      <div>
        <h4 className="text-lg font-bold text-ink">{isEditing ? 'Edit task' : 'Add a task'}</h4>
        <p className="mt-1 text-sm text-muted">Keep the details short and useful.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          autoFocus
          className="sm:col-span-2"
          error={titleError}
          hint="What needs to be done?"
          label="Task title"
          maxLength={120}
          name="title"
          onChange={handleChange}
          placeholder="For example, practice React forms"
          type="text"
          value={values.title}
        />
        <Select label="Category" name="category" onChange={handleChange} options={categoryOptions} value={values.category} />
        <Select label="Priority" name="priority" onChange={handleChange} options={priorityOptions} value={values.priority} />
        <Input label="Due date (optional)" name="dueDate" onChange={handleChange} type="date" value={values.dueDate} />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit">{isEditing ? 'Save changes' : 'Add task'}</Button>
        <Button onClick={onCancel} type="button" variant="secondary">Cancel</Button>
      </div>
    </form>
  )
}
