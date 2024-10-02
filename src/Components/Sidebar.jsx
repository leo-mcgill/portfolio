import React from "react";
import "../App.css";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Outlet, Link} from "react-router-dom";

function Sidebar(){
    return (
        <>
        <nav className="navbar">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>`
        </>
        );
    }

export default Sidebar;