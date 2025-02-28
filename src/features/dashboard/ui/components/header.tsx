'use client'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { motion } from 'motion/react'

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
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
        </div>
        <UserButton />
      </div>
    </header>
  )
}
