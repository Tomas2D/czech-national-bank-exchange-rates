import { QueryClientProvider } from './QueryClientProvider'
import { ThemeProvider } from './ThemeProvider'
import { ReactNode } from 'react'

interface CoreProps {
  children?: ReactNode
}

export function Core({ children }: CoreProps) {
  return (
    <QueryClientProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
