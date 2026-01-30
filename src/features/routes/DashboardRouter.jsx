import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../dashboard/pages/Dashboard'
import DashboardPage from '../pages/dashboard/pages/DashboardPage'
import Leads from '../pages/leads/pages/Leads'

function DashboardRouter() {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/leads' element={<Leads />} />
        </Routes>
    )
}

export default DashboardRouter