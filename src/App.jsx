import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import './App.css';
import News from "./pages/News";
import Keyfeature from "./pages/Keyfeature";
import CallofDuty from "./pages/CallofDuty";




function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Keyfeature />} /> 
        <Route path="/portfolio" element={<CallofDuty />} /> 
        <Route path="/news" element={<News />} />
      </Routes>
    
  );
}

export default App;
