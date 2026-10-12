# React Learning Task Manager

A small React project for learning through a practical task manager. The repository includes eight phases, from React foundations through task management, persistence, Context, and client-side routing.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` to verify the production bundle.

## Structure

```text
src/
├── app/             # Routes, shared layout, and app-wide providers
├── components/ui/   # Reusable, feature-independent UI
├── features/home/   # Landing page and its website sections
├── features/learn/  # Learning roadmap page
├── features/tasks/  # Tasks page, dashboard components, and data
├── pages/           # General pages such as the 404 page
└── styles/          # Tailwind import, theme tokens, and base styles
```

## Phase 1 learning notes

- `main.jsx` mounts the app with React's `createRoot`.
- At Phase 1, `App.jsx` composed one page. Phase 8 later turns it into the route configuration.
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
- At Phase 3, the dashboard section placed `TaskDashboard` inside the home layout. Phase 8 later moves it to `TasksPage`.
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
- At this phase, changes existed only in memory. Phase 6 adds browser persistence.

## Phase 5 learning notes

- `TaskDashboard` keeps the task array as the source of truth and stores only the search, filter, and sort selections separately.
- `getVisibleTasks` derives the displayed list on each render without changing the original task order. Search ignores case and surrounding spaces.
- Status, category, and priority filters can be combined. Sorting can show earliest due dates first (tasks without dates last) or highest priority first.
- Summary cards count every task; the list reports how many of those tasks match the current selections.
- An empty task collection and a search with no matches show different messages. Completing a task while filtering for pending tasks removes it from the visible list.

## Phase 6 learning notes

- `useState(loadTasks)` uses a lazy initializer, so React reads browser storage only while creating the task state instead of on every render.
- `useEffect` saves the latest task array after `tasks` changes. Add, edit, complete, and delete handlers do not need to know how persistence works.
- `taskStorage.js` converts arrays to JSON when saving and parses JSON when loading because `localStorage` stores strings only.
- A saved empty array is valid, so deleting every task stays deleted after refresh. Missing or invalid saved data falls back to the sample tasks.
- Storage errors are caught so the task manager can continue working in memory when browser storage is unavailable.
- Search, filter, sort, and editor state are temporary UI choices and are intentionally not persisted.

## Phase 7 learning notes

- `ThemeProvider` owns the app-wide light or dark theme. `App` places the provider above the page so any descendant can read that shared state.
- `useTheme` wraps `useContext` and gives components a clear error if they try to read the theme outside its provider.
- `SiteHeader` reads the theme and passes presentation props to `ThemeToggle`, keeping the shared UI component independent from app state.
- The first visit follows the operating system preference. Later visits restore the user's saved choice from `localStorage`.
- Semantic color tokens such as `surface`, `ink`, and `line` let existing Tailwind classes adapt without adding dark-mode classes to every component.
- Task state remains local to `TaskDashboard`; Context is used only for state that truly belongs to the whole app.

## Phase 8 learning notes

- `BrowserRouter` connects the app to the browser URL and history. `Routes` and `Route` map `/`, `/tasks`, `/learn`, and unknown paths to page components.
- `AppLayout` renders the shared header and footer once. Each matched page appears where the layout renders `Outlet`.
- `NavLink` provides the active navigation state, while `Link` changes routes without requesting a new HTML document.
- `Button` renders a router `Link` when it receives `to`, an anchor when it receives `href`, and a button otherwise.
- The task dashboard now belongs to `TasksPage`; its localStorage data remains available after route changes and refreshes.
- The `*` route handles unknown URLs with a useful 404 page instead of an empty screen.
- A production server using `BrowserRouter` must send `index.html` for app routes such as `/tasks` and `/learn`.

## Before the next phase

Navigate between Home, Tasks, and Learn, then use the browser Back and Forward buttons. Open an unknown URL to see the 404 route. Finally, trace how `BrowserRouter`, `Routes`, `AppLayout`, `Outlet`, and a page component work together to render one URL.
