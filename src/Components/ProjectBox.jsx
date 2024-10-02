import React from "react";
import ShapeLineIcon from '@mui/icons-material/ShapeLine';

const Box = ({ title , about, link}) => {
    const handleClick = () => {
        window.open(link, '_blank'); // Opens the link in a new tab
      };

    return (
        <div className='project-box' onClick={handleClick}>
            <ShapeLineIcon className='project-icon' sx={{fontSize:100}}/>
            <div className='project-info'>
                <h1 className='project-title'>{title}</h1>
                <p className='project-about'>{about}</p>
            </div>
        </div>
    );
};

export default Box;

