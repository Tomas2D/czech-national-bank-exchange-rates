import {
  QueryClient as ReactQueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from 'react-query'
import { ReactNode } from 'react'

const client = new ReactQueryClient()

interface QueryClientProps {
  children?: ReactNode
}

export function QueryClientProvider({ children }: QueryClientProps) {
  return <ReactQueryClientProvider client={client}>{children}</ReactQueryClientProvider>
}
