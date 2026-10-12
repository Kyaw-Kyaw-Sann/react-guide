import { Route, Routes } from 'react-router'
import HomePage from '../features/home/HomePage.jsx'
import LearnPage from '../features/learn/LearnPage.jsx'
import TasksPage from '../features/tasks/TasksPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import AppLayout from './AppLayout.jsx'
import ThemeProvider from './ThemeProvider.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

