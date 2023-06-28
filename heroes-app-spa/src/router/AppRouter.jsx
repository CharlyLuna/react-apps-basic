import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { HomePage } from '../home/HomePage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/heroes/*' element={<HeroesRoutes />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}
