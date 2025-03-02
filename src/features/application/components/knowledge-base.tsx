'use client'

import { useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function KnowledgeBase() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  // Mock workflow nodes - in a real app, these would be stored in a database
  const nodes = [
    { id: 'project-background', label: 'Project Background', type: 'basic' },
    { id: 'requirements', label: 'Requirements', type: 'basic' },
    { id: 'tech-stack', label: 'Technology Stack', type: 'basic' },
    { id: 'custom-knowledge', label: 'Custom Knowledge', type: 'custom' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Knowledge Base</CardTitle>
        <CardDescription>
          Manage your project's knowledge base for AI retrieval and generation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Workflow Canvas */}
            <div className="flex-1 rounded-lg border bg-card p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium">Knowledge Workflow</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Add Node
                  </Button>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] rounded-md border bg-muted/40 p-4">
                {nodes.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {nodes.map((node) => (
                      <div
                        key={node.id}
                        className={`cursor-pointer rounded-md border bg-card p-4 shadow-sm transition-all ${selectedNode === node.id ? 'ring-2 ring-primary' : 'hover:bg-accent/50'} `}
                        onClick={() => setSelectedNode(node.id)}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                            {node.type === 'basic' ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                <polyline points="14 2 14 8 20 8" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                              </svg>
                            )}
                          </div>
                          <span className="font-medium">{node.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-2 size-10 text-muted-foreground/60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 10h10" />
                      <path d="M7 14h10" />
                      <path d="M9 18h6" />
                    </svg>
                    <p className="text-center text-muted-foreground">
                      Your workflow diagram will appear here. <br />
                      Use the buttons above to create knowledge nodes.
                    </p>
                    <Button variant="secondary" size="sm" className="mt-4">
                      Start Building Workflow
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-2">
                <p className="text-xs text-muted-foreground">
                  Knowledge nodes will be vectorized and stored in a vector
                  database for AI retrieval.
                </p>
              </div>
            </div>

            {/* Node Editor */}
            <div className="w-full rounded-lg border bg-card p-4 lg:w-[350px]">
              <h3 className="mb-4 text-lg font-medium">Node Editor</h3>

              {selectedNode ? (
                <div className="space-y-4">
                  <div className="rounded-md bg-muted p-3">
                    <h4 className="font-medium">
                      {nodes.find((n) => n.id === selectedNode)?.label}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {selectedNode === 'project-background' &&
                        'Describe your project background and context'}
                      {selectedNode === 'requirements' &&
                        'List your project requirements and goals'}
                      {selectedNode === 'tech-stack' &&
                        'Describe the technology stack used in your project'}
                      {selectedNode === 'custom-knowledge' &&
                        'Add custom knowledge for your AI assistant'}
                    </p>
                  </div>

                  <div className="rounded-md border p-3">
                    <textarea
                      className="min-h-[200px] w-full resize-none bg-transparent p-0 focus:outline-none"
                      placeholder={`Enter ${nodes.find((n) => n.id === selectedNode)?.label.toLowerCase()} here...`}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button size="sm">Save Node</Button>
                  </div>
                </div>
              ) : (
                <div className="flex h-[300px] flex-col items-center justify-center rounded-md border border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2 size-8 text-muted-foreground/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  <p className="text-center text-sm text-muted-foreground">
                    Select a node from the workflow <br /> to edit its content
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Knowledge Base</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
