import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
        text: "L-E-O",
    });

    return <pre className='ascii-art'>
{`
██╗                 ███████╗     ██████╗              ███╗          ███╗ ██████╗ ██████╗ ██╗██╗            ██╗     
██║                 ██╔════╝   ██╔═══██╗          ████╗   ████║ ██╔═══╝ ██╔═══╝ ██║██║            ██║
██║                 █████╗         ██║          ██║          ██╔████╔██║ ██║              ██║███╗ ██║██║            ██║     
██║                 ██╔══╝         ██║          ██║          ██║╚██╔╝██║ ██║              ██║   ██║ ██║██║            ██║     
███████╗ ███████╗  ╚██████╔╝           ██║  ╚═╝    ██║ ██████╗ ██████╝ ██║█████╗  ██████╗
╚══════╝ ╚══════╝    ╚═════╝              ╚═╝                ╚═╝ ╚═════╝ ╚═════╝ ╚═╝╚════╝   ╚═════╝
`}
    </pre>
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
            <AsciiArt />
            <p>start &lt;Enter&gt;</p>
            </div>
        ) : (        
            <div className='terminal-screen'>
            <Sidebar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>
            )}
        </div>
    </Router>
    </>
    );
}