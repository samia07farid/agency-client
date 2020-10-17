import React, { useEffect, useState } from 'react';
import './ServiceListDetail.css'

const ServiceListDetail = ({ ordered }) => {
    return (
        <div className="main-card-container float-left mt-5 ml-3">
            <h2 className="m-3">{ordered.order}</h2>
            <div className="d-flex pl-3 pt-3">
                <div style={{ paddingLeft: '185px' }}>
                    <button className="card-btn btn">Pending</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceListDetail;

