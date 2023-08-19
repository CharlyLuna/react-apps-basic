import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { HomePage } from '../home/HomePage'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='/heroes/*'
          element={
            <ProtectedRoute>
              <HeroesRoutes />
            </ProtectedRoute>
          }
        />
        <Route
          path='/' element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
