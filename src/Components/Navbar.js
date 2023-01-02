import React from "react";
import {Link} from "react-router-dom";
import "../index.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
<>
        {/* <div className="navcontainer"> */}
            <nav className="navbar navbar-expand-lg header navbar-fixed-top">
            
                <a className="navbar-brand" href="/about">Matt Cole</a>
                <button className="navbar-toggler white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <span className="dark-blue-text">
                            <i className="fas fa-bars fa-1x"></i>
                        </span>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"
                            }>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio"
                                className={
                                    window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
                            }>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact"
                                className={
                                    window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                            }>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
            
        </>
    );
}

export default Navbar;