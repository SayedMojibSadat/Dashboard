import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../dashboard/pages/Dashboard'
import DashboardPage from '../pages/dashboard/pages/DashboardPage'
import ComponentBar from '../pages/componentBar/pages/ComponentBar'

function DashboardRouter() {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path="/componentbar" element={<ComponentBar />} />
        </Routes>
    )
}

export default DashboardRouter