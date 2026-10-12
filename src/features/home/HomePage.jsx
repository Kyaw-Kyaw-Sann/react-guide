import DashboardSection from './components/DashboardSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
