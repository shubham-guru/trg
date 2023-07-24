import React from 'react'
import { Routes, Route } from 'react-router-dom'
import pageRoutes from './pageRoutes'
import Home from '../presentation/screens/Home'
import NoPageFound from '../presentation/screens/NoPageFound'

const AppRoutes= () => {
  return (
    <Routes>
      <Route path={pageRoutes.HOME} element={<Home />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  )
}

export default AppRoutes