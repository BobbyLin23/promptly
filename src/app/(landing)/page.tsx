import { Header } from '@/features/landing/components/header'
import { Hero } from '@/features/landing/components/hero'
import { Features } from '@/features/landing/components/features'
import { HowItWorks } from '@/features/landing/components/how-it-works'
import { Demo } from '@/features/landing/components/demo'
import { Testimonials } from '@/features/landing/components/testimonials'
import { CTA } from '@/features/landing/components/cta'
import { Footer } from '@/features/landing/components/footer'

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
