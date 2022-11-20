import { AppProvider } from './provider'
import { AppRoutes } from './router'

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
