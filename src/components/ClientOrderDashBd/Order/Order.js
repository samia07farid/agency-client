import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import DashNav from '../DashNav/DashNav';
import ServiceList from '../ServiceList/ServiceList';
import SideBar from '../SideBar/SideBar';
import './Order.css'

const Order = () => {
    const { serviceName, serviceId } = useParams();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
     
        fetch('https://shielded-lowlands-58151.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Your order has been made successfully!')
            }
        })
    }

    return (
        <div>
            <DashNav></DashNav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="container-fluid col-md-10 d-flex align-items-center" style={{ backgroundColor: '#E5E5E5', height: '574px' }}>
                    <div className="form-contain">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Your email address"
                                className="form-input"
                                ref={register({ required: true })}
                            />
                             {errors.email && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name / company's name"
                                className="form-input"
                                style={{color: 'black'}}
                                ref={register({ required: true })}
                            /> 
                            {errors.name && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                type="text"
                                name="order"
                                placeholder="Service name"
                                style={{color: 'black'}}
                                defaultValue={serviceName}
                                className="form-input"
                                ref={register({ required: true })}
                            /> 
                            {errors.order && <span className="text-danger ml-3">This field is required</span>}<br />
                            <textarea
                                rows="3"
                                cols="50"
                                maxlength="100"
                                name="details"
                                placeholder="Project details"
                                className="text-area"
                                style={{color: 'black'}}
                                ref={register({ required: true })}
                            ></textarea>
                            {errors.details && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                className="form-input price"
                                ref={register({ required: true })}
                            /> 
                            {errors.price && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                style={{ backgroundColor: '#111430' }}
                                class="btn pr-5 pl-5 text-white"
                                type="submit"
                                placeholder="Send"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;