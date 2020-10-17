import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faBook, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        fetch('https://shielded-lowlands-58151.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        }) 
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    })

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/order" className="">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/userServiceList" className="">
                        <FontAwesomeIcon icon={faList} /> <span>Service list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/reviews" className="">
                        <FontAwesomeIcon icon={faBook} /> <span>Review</span>
                    </Link>
                </li>
               {isAdmin && 
               <div>
               <li>
                    <Link to="/adminServiceList" className="">
                        <FontAwesomeIcon icon={faList} /> <span>Service list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/adminAddService" className="">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
               </div>}
            </ul>
        </div>
    );
};

export default SideBar;