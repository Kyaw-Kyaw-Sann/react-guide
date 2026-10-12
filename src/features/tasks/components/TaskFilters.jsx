import Button from '../../../components/ui/Button.jsx'
import Input from '../../../components/ui/Input.jsx'
import Select from '../../../components/ui/Select.jsx'
import { taskCategories, taskPriorities } from '../data/taskOptions.js'

export default function TaskFilters({ filters, onChange, onClear, hasActiveFilters }) {
  function handleChange(event) {
    onChange(event.target.name, event.target.value)
  }

  return (
    <section className="grid gap-4 rounded-xl border border-line bg-surface p-5" aria-label="Search and filter tasks">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Input
          label="Search tasks"
          name="search"
          onChange={handleChange}
          placeholder="Search by title"
          type="search"
          value={filters.search}
        />
        <Select label="Status" name="status" onChange={handleChange} options={['All', 'Pending', 'Completed']} value={filters.status} />
        <Select label="Category" name="category" onChange={handleChange} options={['All', ...taskCategories]} value={filters.category} />
        <Select label="Priority" name="priority" onChange={handleChange} options={['All', ...taskPriorities]} value={filters.priority} />
        <Select label="Sort by" name="sort" onChange={handleChange} options={['Default order', 'Due date: earliest', 'Priority: highest']} value={filters.sort} />
      </div>
      {hasActiveFilters && (
        <div>
          <Button onClick={onClear} type="button" variant="secondary">Clear filters</Button>
        </div>
      )}
    </section>
  )
}
