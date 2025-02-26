'use client'

import { motion } from 'motion/react'

import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function Demo() {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              See Promptly in Action
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Watch how Promptly transforms vague requirements into precise AI
              prompts that generate accurate code.
            </p>
          </motion.div>
          <Separator className="mx-auto my-8 max-w-md" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <Card className="overflow-hidden border-none shadow-xl">
            <div className="relative aspect-video bg-muted">
              {/* This would be replaced with an actual video or interactive demo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-3xl space-y-6">
                  <div className="rounded-lg bg-background p-4 shadow-md">
                    <p className="mb-2 text-sm font-medium">User Input:</p>
                    <p className="rounded bg-muted p-3 text-sm">
                      "I need a React component that fetches data from an API
                      and displays it in a table with sorting and pagination."
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                    </div>
                    <div className="h-px w-16 bg-border"></div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>

                  <div className="rounded-lg bg-background p-4 shadow-md">
                    <p className="mb-2 text-sm font-medium">
                      Promptly Generated Prompt:
                    </p>
                    <p className="rounded bg-muted p-3 text-sm">
                      "Create a React functional component named 'DataTable'
                      that: 1. Uses React Query or SWR to fetch data from an API
                      endpoint 2. Implements a responsive table with column
                      headers that support sorting when clicked 3. Includes
                      pagination controls with customizable page size 4. Handles
                      loading, error, and empty states appropriately 5.
                      Implements proper TypeScript types for all props and data
                      structures 6. Uses modern React patterns including hooks
                      and context if necessary 7. Includes brief comments
                      explaining complex logic The component should be reusable
                      and accept the following props: 'apiUrl', 'columns',
                      'initialSort', and 'pageSize'."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
