import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../ClientOrderDashBd/SideBar/SideBar';
import OrderHistory from '../OrderHistory/OrderHistory';
import logo from '../../../images/logos/logo.png'

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top pt-3">
                <div class="d-flex">
                    <img style={{ width: '130px' }} src={logo} alt="" />
                    <div className="ml-5 pl-5 d-flex" >
                        <h3>Service List</h3>
                        <h4 style={{ marginLeft: '850px' }}>{loggedInUser.username}</h4>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 d-flex align-items-center" style={{ backgroundColor: '#E5E5E5' }}>
                    <div className="container-fluid" style={{ margin: '10px', paddingTop: '10px', backgroundColor: 'white', borderRadius: '10px' }} >
                        <OrderHistory allOrder={allOrder}></OrderHistory>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;