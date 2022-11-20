import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '@/App/components/Home/Home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" />
    </Routes>
  )
}
