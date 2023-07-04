import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Logo from "../../img/Logo.JPG";
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsIcon from '@mui/icons-material/Settings';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">

                <div className="container-fluid custome-navbar">
                    <div>
                        <Sidebar></Sidebar>
                    </div>
                    <div className="img-container">
                        <img src={Logo}></img>
                    </div>

                    <div>
                        <ul className="right-menu">

                            <li className="custome-nav-item">
                                <button type="button" className="position-relative custome-btn"> 
                                    <ChatBubbleIcon/>                                   
                                    {/* <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span class="visually-hidden"></span>
                                    </span> */}
                                </button>
                            </li>                           
                            <li className="custome-nav-item">
                                <button className= "custome-btn" type="button"><SettingsIcon/></button>
                            </li>                            
                            
                            <li className="custome-nav-item">
                                <button className= "custome-btn" type="button"><SearchIcon/></button>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar