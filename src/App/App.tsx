import { AppProvider } from './provider'
import { AppRoutes } from './router'
import { useAutoLoginAndSetCart } from '@/hooks/useAutoLoginAndSetCart'

export const App = () => {
  useAutoLoginAndSetCart()

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
