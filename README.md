# React Learning Task Manager

A small React project for learning through a practical task manager. The repository currently includes **Phase 1: foundation**, **Phase 2: responsive website shell**, **Phase 3: task dashboard UI**, and **Phase 4: task management**.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` to verify the production bundle.

## Structure

```text
src/
├── app/             # App entry and future app-level composition
├── components/ui/   # Reusable, feature-independent UI
├── features/home/   # Home page and its website sections
├── features/tasks/  # Task dashboard components and sample data
└── styles/          # Tailwind import, theme tokens, and base styles
```

## Phase 1 learning notes

- `main.jsx` mounts the app with React's `createRoot`.
- `App.jsx` composes the current page. Future pages can be added here before routing is introduced.
- `Button`, `Input`, and `SectionTitle` receive data through props and own their presentation.
- `Input` uses `useId` to connect its label and helper message to the input accessibly.
- `styles/index.css` imports Tailwind and defines shared colors, radius, and shadow with `@theme`.
- Component markup uses Tailwind utilities; reusable components keep repeated UI patterns in one place.

## Phase 2 learning notes

- `HomePage.jsx` composes the page from focused section components.
- Navigation and CTA links point to section IDs on the same page.
- Feature cards, FAQ entries, and preview tasks are rendered from arrays with stable keys.
- `Button` renders a link when given `href` and a button otherwise.
- Native `<details>` elements provide keyboard-accessible FAQ disclosure without extra state.
- At Phase 2, the dashboard contained sample data for presentation. The actions were added in Phase 4.

## Phase 3 learning notes

- `sampleTasks.js` defines the task shape with a stable `id` for each item.
- `DashboardSection` places `TaskDashboard` inside the website layout.
- `getTaskSummary` derives counts for the Hero example and the dashboard separately.
- `TaskDashboard` passes the derived counts to `TaskSummary` and the task array to `TaskList`.
- `TaskList` maps each task to a `TaskCard` using `task.id` as the React key.
- `TaskList` conditionally renders `EmptyState` when the array is empty. Delete all tasks to see this branch.

## Phase 4 learning notes

- `TaskDashboard` owns the task array with `useState`. The Hero is a separate sample illustration.
- Add, edit, complete, and delete handlers use functional state updates and return new arrays/objects instead of mutating existing tasks.
- `TaskForm` uses controlled fields for title, category, priority, and optional due date. A blank title shows an inline validation error.
- `TaskDashboard` also owns temporary UI state: which form is open and which task is being edited.
- `TaskCard` receives action callbacks through props. Delete asks for confirmation before removing a task.
- Changes exist only in memory and reset on refresh. LocalStorage persistence is planned for Phase 6.

## Before the next phase

Add a task, edit its title, mark it complete, and delete it. For each action, trace the path from the UI event to `TaskDashboard` state and back to the task list and summary. Notice that the Hero stays as a sample illustration. Refresh the page and explain why the changes disappear.
