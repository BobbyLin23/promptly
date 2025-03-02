'use client'

import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export function CreateApplicationHeader() {
  const router = useRouter()

  return (
    <div className="mb-8">
      <Button
        variant="ghost"
        className="mb-4 flex items-center gap-1 pl-0 text-muted-foreground"
        onClick={() => router.back()}
      >
        <ArrowLeft className="size-4" />
        Back
      </Button>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">
          Create New Project
        </h1>
        <p className="mt-2 text-muted-foreground">
          Create a new project to manage your prompts and applications.
        </p>
      </motion.div>
    </div>
  )
}
