import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import useCachedResources from './src/hooks/useCachedResources'
import Router from './src/router'
import AuthProvider from './src/contexts/AuthProvider'

const queryClient = new QueryClient()

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SafeAreaProvider>
            <Router />
            <StatusBar />
          </SafeAreaProvider>
        </AuthProvider>
      </QueryClientProvider>
    )
  }
}
