import React from 'react';
import "../App.css";
import Box from '../Components/ProjectBox';
import ProjectData from '../Components/ProjectData';

function Projects(){
    return (
    <>
    <div className='project-container'>
        <div className="main-text-container">
            <p>PROJECTS</p>
        </div>
        <div className='project-content-container'>
            {ProjectData.map((box, index) => (
                <Box 
                key={index}
                title={box.title}
                about={box.about}
                link={box.link}
                />
            ))}
        </div>
    </div>
    </>
    );
}

export default Projects;