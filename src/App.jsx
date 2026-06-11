import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Agent from "./components/pages/Agent";
import MediaLibrary from "./components/pages/MediaLibrary";
import Properties from "./components/pages/Properties";
import Settings from "./components/pages/Settings";
import AdminLogin from "./components/pages/AdminLogin";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/media" element={<MediaLibrary />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
