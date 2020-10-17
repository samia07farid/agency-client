import React, { useContext, useEffect, useState } from 'react';
import DashNav from '../DashNav/DashNav';
import SideBar from '../SideBar/SideBar';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import ServiceListDetail from '../ServiceListDetail/ServiceListDetail';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [seeOrdered, setSeeOrdered] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/seeOrder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setSeeOrdered(data))
    }, [loggedInUser.email]);

    return (
        <div>
            <DashNav></DashNav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="container-fluid col-md-10" style={{ backgroundColor: '#E5E5E5', height: '574px' }}>
                    {
                        seeOrdered.map(ordered => <ServiceListDetail ordered={ordered}></ServiceListDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;