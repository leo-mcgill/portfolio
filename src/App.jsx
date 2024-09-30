import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Sidebar from "./Components/Sidebar"

export default function App(){
  return (
  <>
  <Router>
      <div className='App'>
        <div className='terminal-screen'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </div>
    </Router>
  </>
  );
}