'use client'

import { motion } from 'motion/react'
import { Code, Sparkles, Zap, Lightbulb, Wand2, Layers } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const features = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Code-Optimized Prompts',
    description:
      'Generate prompts specifically designed to produce accurate, efficient, and maintainable code across multiple languages and frameworks.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'AI Editor Integration',
    description:
      'Seamlessly integrate with your favorite AI-powered code editors for a smooth workflow from prompt to implementation.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Instant Refinement',
    description:
      'Refine your prompts in real-time with intelligent suggestions that improve clarity and precision.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Context-Aware Suggestions',
    description:
      'Get smart prompt suggestions based on your project context, programming language, and specific coding tasks.',
  },
  {
    icon: <Wand2 className="h-10 w-10 text-primary" />,
    title: 'Prompt Templates',
    description:
      'Access a library of pre-built prompt templates for common coding scenarios and customize them to your needs.',
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: 'Version History',
    description:
      'Track the evolution of your prompts and their results to continuously improve your AI interactions.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Features() {
  return (
    <section id="features" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Powerful Features for Perfect Prompts
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Promptly provides everything you need to create precise AI prompts
              that generate accurate code every time.
            </p>
          </motion.div>
          <Separator className="mx-auto my-8 max-w-md" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-md transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
