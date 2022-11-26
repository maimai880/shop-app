import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import styles from './appProvider.module.css'
import {
  Button,
  Center,
  ChakraProvider,
  Heading,
  Spinner
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from '@/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <React.Suspense
        fallback={
          <Center width="100vw" height="100vh">
            <Spinner size="xl" />
          </Center>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <RecoilRoot>
                <RecoilNexus />
                {children}
              </RecoilRoot>
            </QueryClientProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </React.Suspense>
    </ChakraProvider>
  )
}

const ErrorFallback = () => {
  return (
    <Center className={styles.errorFallback} role="alert">
      <Heading size="md">エラーが発生しました</Heading>
      <Button
        colorScheme="red"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </Center>
  )
}
