import { FC, ReactNode, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import {
  Button,
  Center,
  ChakraProvider,
  Heading,
  Spinner,
  VStack
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from '@/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'

type Props = {
  children: ReactNode
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Suspense
        fallback={
          <Center w="100%" h="100%">
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
      </Suspense>
    </ChakraProvider>
  )
}

const ErrorFallback = () => {
  return (
    <Center role="alert" w="100%" h="100%">
      <VStack spacing={3}>
        <Heading size="md" color="#f56565">
          エラーが発生しました
        </Heading>
        <Button
          onClick={() => window.location.assign(window.location.origin)}
          colorScheme="red"
        >
          Refresh
        </Button>
      </VStack>
    </Center>
  )
}
