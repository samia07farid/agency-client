import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div style={{transform: 'skew(0deg, 5deg)'}}>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;