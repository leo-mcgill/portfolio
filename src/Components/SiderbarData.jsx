// creates array of items with 3 properties (Title, Icon, link)
import React from "react";
import "../App.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const SidebarData = [
    {
        title: "Projects",
        icon: <ArrowRightIcon />,
        link: "/home"
    },
    {
        title: "Contact",
        icon: <ArrowRightIcon />,
        link: "/home"
    },
    {
        title: "Another Page",
        icon: <ArrowRightIcon />,
        link: "/home"
    },
]