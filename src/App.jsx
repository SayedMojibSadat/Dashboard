import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import DashboardRouter from './features/routes/DashboardRouter';
import Content from './features/dashboard/components/Content';
import Dashboard from './features/dashboard/pages/Dashboard';
import LoginPage from './features/pages/loginPage/pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/app/*' element={<Dashboard />} />
        <Route path='/app/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;