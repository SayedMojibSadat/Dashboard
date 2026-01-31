import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../dashboard/pages/Dashboard";
import DashboardPage from "../pages/dashboard/pages/DashboardPage";
import ComponentBar from "../pages/componentBar/pages/ComponentBar";
import SecurityPage from "../pages/security/pages/SecurityPage";
import PreferencesPage from "../pages/preferences/page/PreferencesPage";

function DashboardRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="/componentbar" element={<ComponentBar />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/preferences" element={<PreferencesPage />} />
    </Routes>
  );
}

export default DashboardRouter;
