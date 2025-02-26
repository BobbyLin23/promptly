import { Header } from '@/features/landing/ui/components/header'
import { Hero } from '@/features/landing/ui/components/hero'
import { Features } from '@/features/landing/ui/components/features'
import { HowItWorks } from '@/features/landing/ui/components/how-it-works'
import { Demo } from '@/features/landing/ui/components/demo'
import { Testimonials } from '@/features/landing/ui/components/testimonials'
import { CTA } from '@/features/landing/ui/components/cta'
import { Footer } from '@/features/landing/ui/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <Demo />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
