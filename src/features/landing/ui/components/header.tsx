'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import { ShinyButton } from '@/components/magicui/shiny-button'
import { RainbowButton } from '@/components/magicui/rainbow-button'

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white">
              <span className="text-lg font-bold">P</span>
            </div>
            <span className="text-xl font-bold">Promptly</span>
          </motion.div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              href="#features"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
            >
              Features
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              href="#how-it-works"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
            >
              How It Works
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              href="#pricing"
              className="relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
            >
              Pricing
            </Link>
          </motion.div>
        </nav>
        <div className="flex items-center gap-4">
          <RainbowButton>
            <Link href="/sign-in">Log In</Link>
          </RainbowButton>
          <ShinyButton>
            <Link href="/sign-up">Sign Up</Link>
          </ShinyButton>
        </div>
      </div>
    </motion.header>
  )
}
