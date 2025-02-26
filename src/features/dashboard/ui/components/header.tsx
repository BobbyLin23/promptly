import { UserButton } from '@clerk/nextjs'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/logo.png" alt="Promptly" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </header>
  )
}
