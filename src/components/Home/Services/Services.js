import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://shielded-lowlands-58151.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <section className="mt-5 pt-5">
            <div className="mt-5 text-center">
                <h2 style={{ color: 'black' }}> <strong>Provide awesome <span style={{ color: '#7AB259' }}>services</span></strong></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="container-md row mt-5 pt-3">
                    {
                        service.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;