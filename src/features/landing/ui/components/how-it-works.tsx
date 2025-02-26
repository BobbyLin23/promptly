'use client'

import { motion } from 'motion/react'
import { ArrowRight, Edit3, Code2, Sparkles } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

const steps = [
  {
    icon: <Edit3 className="h-12 w-12 text-primary" />,
    title: 'Describe Your Task',
    description:
      'Start by describing what you want to accomplish in plain language. Promptly analyzes your requirements to understand the context.',
  },
  {
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    title: 'Generate Optimized Prompt',
    description:
      'Our AI engine transforms your description into a precisely engineered prompt designed to produce accurate code results.',
  },
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: 'Get Quality Code',
    description:
      'Use the optimized prompt with your preferred AI coding assistant to receive high-quality, accurate code that meets your requirements.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              How Promptly Works
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              A simple three-step process to transform your ideas into perfect
              code through optimized AI prompts.
            </p>
          </motion.div>
          <Separator className="mx-auto my-8 max-w-md" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                {step.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="absolute hidden translate-x-[150%] translate-y-12 transform md:block">
                  <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-4xl rounded-xl border border-primary/20 bg-gradient-to-r from-purple-600/10 to-blue-500/10 p-8"
        >
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold">
              Ready to transform your AI coding experience?
            </h3>
            <p className="mb-0 text-muted-foreground">
              Join thousands of developers who are creating better code with
              Promptly's AI-optimized prompts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
