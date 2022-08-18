import React from 'react'
import { Routes, Route } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default MyRoutes