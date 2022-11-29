import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import { worker } from '@/mocks/browser'

// mswでサーバーを起動
worker.start()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
