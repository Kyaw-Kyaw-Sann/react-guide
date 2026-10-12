import { Outlet } from 'react-router'
import SiteFooter from '../features/home/components/SiteFooter.jsx'
import SiteHeader from '../features/home/components/SiteHeader.jsx'

export default function AppLayout() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
