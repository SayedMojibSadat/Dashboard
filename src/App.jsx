import React from 'react'
import { BrowserRouter } from 'react-router'
import DashboardRouter from './features/routes/DashboardRouter'

function App() {
  return (
    <BrowserRouter>
      <DashboardRouter />
    </BrowserRouter>
  )
}

export default App