import HeroSection from '@/components/landing-page-sections/hero-section/hero-section'
import { AnimatedThemeToggler } from '@/components/theme-togglers/animated-theme-toggler'
import UsageSection from '@/components/landing-page-sections/usage-section'

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <AnimatedThemeToggler className='fixed top-4 right-4 z-10' />
      <HeroSection />
      <UsageSection />
    </div>
  )
}

export default HomePage