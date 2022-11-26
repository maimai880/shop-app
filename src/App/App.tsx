import { AppProvider } from './provider'
import { AppRoutes } from './router'
import { useAutoLogin } from '@/features/auth/hooks/useAutoLogin'

export const App = () => {
  useAutoLogin()

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
