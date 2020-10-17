import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const NavBar = () => {
    return (
        <div className="col-md-10 offset-md-1">
        <nav className="navbar navbar-expand-lg navbar-light pt-3">
            <a className="navbar-brand" href="#"><img src={logo} alt="" style={{ height: '50px' }} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse font-weight-bold" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#contactUs">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-dark px-5">Login</button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
};

export default NavBar;