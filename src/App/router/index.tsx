import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '@/App/components/Home/Home'
import { LoginPage } from '@/features/auth/component/LoginPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
