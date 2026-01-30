import React from 'react';
import { BrowserRouter } from 'react-router';
import DashboardRouter from './features/routes/DashboardRouter';
import Content from './features/dashboard/components/Content';
import Dashboard from './features/dashboard/pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;