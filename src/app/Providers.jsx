"use client"

import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from './get-query-client'

const Providers = ({ children }) => {
    const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers;
