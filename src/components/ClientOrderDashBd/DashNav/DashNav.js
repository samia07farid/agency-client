import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'

const DashNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top pt-3">
            <div class="d-flex">
                <img style={{ width: '130px' }} src={logo} alt="" />
                <div className="ml-5 pl-5 d-flex" >
                    <h3>Order</h3>
                    <h4 style={{marginLeft: '850px'}}>{loggedInUser.username}</h4>
                </div>
            </div>
        </nav>
    );
};

export default DashNav;