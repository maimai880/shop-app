import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import styles from './appProvider.module.css'
import { Button, ChakraProvider, Spinner } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from '@/theme'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <React.Suspense
        fallback={
          <div className={styles.fallback}>
            <Spinner size="xl" />
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BrowserRouter>{children}</BrowserRouter>
        </ErrorBoundary>
      </React.Suspense>
    </ChakraProvider>
  )
}

const ErrorFallback = () => {
  return (
    <div className={styles.errorFallback} role="alert">
      <h2>エラーが発生しました</h2>
      <Button
        colorScheme="red"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  )
}
