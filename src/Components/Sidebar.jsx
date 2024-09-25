import React from "react";
import "../App.css"
import {SidebarData} from './SiderbarData'
import LogoDevIcon from '@mui/icons-material/LogoDev';

function Sidebar(){
    return (
        <div className="Sidebar">
            <div className="SidebarHeader">
                <h2 className="row">Leo McGill</h2>
                <LogoDevIcon className="icon"/>
            </div>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                    <li 
                        key={key} 
                        className="row"
                        onClick={() => {
                            window.location.pathname=val.link
                            }}>
                        {" "}
                        <div>{val.title}{val.icon}</div>
                    </li>
                    );
                })}
            </ul>
        </div>
        );
    }

export default Sidebar;