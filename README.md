# React Learning Task Manager

A practical React project for learning core concepts by building a complete task manager. It combines a responsive landing page, task management, browser persistence, theme switching, and client-side routing in one approachable codebase.

## Features

- Add, edit, complete, and delete tasks
- Validate a controlled task form
- Search tasks by title
- Filter by status, category, and priority
- Sort by due date or priority
- View total, completed, and remaining task counts
- Save tasks in browser `localStorage`
- Switch between light and dark themes
- Restore the saved theme or use the operating system preference
- Navigate between Home, Tasks, and Learn pages
- Use a responsive mobile navigation menu
- Open a React state-driven FAQ accordion
- Display an accessible 404 page for unknown routes

## React concepts covered

- JSX and functional components
- Props and component composition
- List rendering and stable keys
- Conditional rendering
- Event handling and callback props
- `useState`, `useEffect`, `useId`, and `useContext`
- Controlled forms and validation
- State ownership and lifting state
- Functional and immutable state updates
- Derived state and pure utility functions
- Custom hooks and Context
- Browser persistence with `localStorage`
- Client-side routing and shared layouts
- Accessible and responsive interactions

## Tech stack

- React
- React Router
- Vite
- Tailwind CSS
- Browser `localStorage`

No backend is required. Tasks and theme preferences are stored only in the current browser.

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page with the project introduction, features, and FAQ |
| `/tasks` | Interactive task dashboard |
| `/learn` | Summary of the eight learning phases |
| `*` | Not-found page for unknown URLs |

## Project structure

```text
src/
|-- app/                 # Route configuration, shared layout, and providers
|-- components/
|   `-- ui/              # Reusable, feature-independent UI components
|-- features/
|   |-- home/            # Landing page and website sections
|   |-- learn/           # Learning roadmap page
|   `-- tasks/           # Task page, components, data, and utilities
|-- pages/               # General pages such as the 404 page
|-- styles/              # Tailwind import, theme tokens, and base styles
`-- main.jsx             # React entry point and BrowserRouter
```

## Architecture

The project uses feature-based folders so related UI, data, and logic stay together.

- `app/` owns app-level composition, routes, layouts, and global providers.
- `components/ui/` contains reusable presentation components such as buttons and form controls.
- `features/home/` owns the landing-page experience.
- `features/tasks/` owns task state, forms, filters, storage, and task-specific UI.
- `features/learn/` presents the learning roadmap.
- `pages/` contains pages that do not belong to one feature.

Task data follows one-directional React data flow:

```text
User action
  -> event handler
  -> state update
  -> derived values
  -> React rerender
  -> localStorage effect
```

`TaskDashboard` owns the task, editor, and filter states. It passes data down through props and receives user actions through callback props. Summary and visible-task values are derived from the task state instead of being stored as duplicate state.

## Learning roadmap

| Phase | What was built | Main concepts |
| --- | --- | --- |
| 1 | Project foundation and shared UI | JSX, components, props, composition, Tailwind CSS |
| 2 | Responsive website shell | Sections, array rendering, semantic HTML, responsive design |
| 3 | Task dashboard UI | Lists, keys, derived values, conditional rendering |
| 4 | Task management | State, events, controlled forms, validation, immutable updates |
| 5 | Search, filters, and sorting | Derived state, array methods, pure functions |
| 6 | Browser persistence | Effects, lazy initialization, JSON, `localStorage` |
| 7 | Theme switching | Context, custom hook, global state, semantic color tokens |
| 8 | Client-side routing | Routes, links, shared layout, `Outlet`, active navigation, 404 page |

The finished FAQ also replaces the original native disclosure with a React state-driven accordion. The responsive header uses local state for its mobile dropdown menu.

## How to study this project

Read the source in this order:

1. `index.html`, `src/main.jsx`, and `src/app/App.jsx`
2. `src/app/AppLayout.jsx` and `src/app/ThemeProvider.jsx`
3. `src/styles/index.css` and `src/components/ui/`
4. `src/features/home/` and the page components
5. `src/features/tasks/data/` and `src/features/tasks/utils/`
6. Small task components such as `TaskCard` and `TaskForm`
7. `TaskDashboard.jsx` last, after understanding its children and utilities

For every file, answer these questions:

- What is this file responsible for?
- What props or input does it receive?
- What state does it own?
- What values does it derive?
- What events does it handle?
- What side effects does it perform?
- Which components depend on it?

When rebuilding the project without AI, complete one phase at a time:

1. Write the user requirements.
2. Sketch the component tree.
3. Decide which component owns each state value.
4. Implement the smallest working behavior.
5. Test normal, empty, and error cases manually.
6. Compare with this project only after finishing your attempt.
7. Commit the completed phase before continuing.

## Persistence behavior

- Tasks are loaded lazily from `localStorage` when the dashboard state is created.
- Task changes are saved after the task state updates.
- A saved empty array remains empty after refresh.
- Missing or invalid saved task data falls back to sample tasks.
- Theme preference is saved separately from task data.
- Search, filters, sorting, the open editor, mobile menu, and FAQ state are intentionally temporary.

Clearing site data or using another browser removes access to the saved tasks. This project does not sync data between devices.

## Production deployment

The app uses `BrowserRouter`. A production server must return `index.html` for client-side routes such as `/tasks` and `/learn`; otherwise, refreshing a nested route may return a server-level 404 response.

## Next learning step

Rebuild the project in a new repository without copying the source. After the rebuild, add one feature that does not exist here, such as:

- Clear all completed tasks
- Filter overdue tasks
- Show task counts by category
- Reset all saved data
- Add a Light, Dark, and System theme selector

Adding a new feature independently is the best check that you understand the React data flow instead of only remembering the existing code.
