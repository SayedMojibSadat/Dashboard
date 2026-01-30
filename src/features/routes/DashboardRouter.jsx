import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../dashboard/Dashboard'
import Products from '../products/Products'

function DashboardRouter() {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
    </Routes>
  )
}

export default DashboardRouter