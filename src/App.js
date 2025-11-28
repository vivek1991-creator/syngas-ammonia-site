import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import PFD from './pages/PFD';
import PID from './pages/PID';
import Equipment from './pages/Equipment';
import SOPs from './pages/SOPs';
import Troubleshooting from './pages/Troubleshooting';
import Calculations from './pages/Calculations';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App(){
  return (
    <Router>
      <div style={{minHeight:'100vh',padding:20}}>
        <Nav />
        <main style={{marginTop:16}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pfd" element={<PFD/>} />
            <Route path="/p&id" element={<PID/>} />
            <Route path="/equipment" element={<Equipment/>} />
            <Route path="/sops" element={<SOPs/>} />
            <Route path="/troubleshooting" element={<Troubleshooting/>} />
            <Route path="/calculations" element={<Calculations/>} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}