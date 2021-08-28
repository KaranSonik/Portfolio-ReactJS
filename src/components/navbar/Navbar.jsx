import React, { useState } from 'react';
import "./navbar.scss";
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

export default function Navbar() {

    const[showNav, SetShowNav] = useState(false);


    return (
        <div className="navbar">
            <div className="openedIcon" onClick={()=> SetShowNav(!showNav)} role="button" onKeyDown={() => SetShowNav(!showNav)} tabIndex={0} >
                <MenuIcon/> 
            </div>
            <div className="navWrapper">
                <div className="navLinks">
                  
                    <ul className={!showNav ? 'navItem hide-item' : 'navItem'}>
                        <div className="closedIcon" onClick={()=> SetShowNav(!showNav)} role="button" onKeyDown={() => SetShowNav(!showNav)} tabIndex={0} >
                            <ClearIcon/>
                        </div>
                        <li><NavLink to="/home" className="inactiveNav growup" id="homeNav" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/projects" className="inactiveNav growup" activeClassName="active">Projects</NavLink></li>
                        <li><NavLink to="/about" className="inactiveNav growup" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/contact" className="inactiveNav growup" activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
