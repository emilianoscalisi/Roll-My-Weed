import React from "react";
import './Sidebar.css';
import MenuIcon from '@mui/icons-material/Menu';


const Sidebar = () => {
    return (
        <>
            <button className="btn btn-primary custome-btn-sidebar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <MenuIcon></MenuIcon>
            </button>

            <div className="offcanvas offcanvas-start custome-bg-sidebar" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Roll My Weed</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar;