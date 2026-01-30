import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../dashboard/pages/Dashboard'

function DashboardRouter() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default DashboardRouter