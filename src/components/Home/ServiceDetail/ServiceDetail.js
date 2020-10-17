import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    return (
        <Link to={`/order/${service.name}`} style={{ textDecoration: 'none' }}>
            <div className="col-md-4 text-center mb-5">
                <div className="service-card align-items-center">
                    {
                        service.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt=""/>
                        :
                        <img style={{ height: '50px' }} src={require(`../../../images/icons/${service.icon}`)} alt="" />
                    }
                    <h5 className="mt-3 mb-3" style={{ color: 'black' }}>{service.name}</h5>
                    <p className="text-secondary">{service.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServiceDetail;