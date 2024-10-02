import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Sidebar from "./Components/Sidebar";
import { useAsciiText, ansiShadow } from 'react-ascii-text';

function AsciiArt() {
    const asciiTextRef = useAsciiText({
        font: ansiShadow,
        text: "Leo McGill",
        animationLoop: false,
        fadeInOnly: true,
        animationSpeed: 35,
    });

    return <pre className='ascii-art' ref={asciiTextRef}></pre>
}

export default function App(){
    const [startScreen, setStartScreen] = useState(true);
    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.code === 'Enter') {
            setStartScreen(false); // Hide start screen when space is pressed
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        // Cleanup event listener
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);


    return (
    <>
    <Router>
        <div className='App'>
            {startScreen ? (
            <div className="start-screen">
              <AsciiArt/>
              <div className="hide-text">
                <p>start &lt;Enter&gt;</p>
              </div>
            </div>
        ) : (
          <div className='bg-div'>        
            <div className='terminal-screen'>
              <Sidebar />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              </Routes>
              </div>
            </div>
            )}
        </div>
    </Router>
    </>
    );
}