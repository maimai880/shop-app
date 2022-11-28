import { AppProvider } from './provider'
import { AppRoutes } from './router'
import { useAutoLoginAndSetCart } from '@/features/auth/hooks/useAutoLoginAndSetCart'

export const App = () => {
  useAutoLoginAndSetCart()

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
