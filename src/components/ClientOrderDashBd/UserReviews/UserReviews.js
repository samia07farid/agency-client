import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import DashNav from '../DashNav/DashNav';
import SideBar from '../SideBar/SideBar';

const UserReviews = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        fetch('https://shielded-lowlands-58151.herokuapp.com/addReviews', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Your review has been made successfully!')
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
                                name="name" 
                                placeholder="Your name"
                                className="form-input"
                                style={{color: 'black'}}
                                ref={register({ required: true })} 
                            /> 
                            {errors.name && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input 
                                type="text" 
                                name="role" 
                                placeholder="Company’s name, Designation"
                                className="form-input" 
                                style={{color: 'black'}}
                                ref={register({ required: true })} 
                            /> 
                            {errors.role && <span className="text-danger ml-3">This field is required</span>}<br />
                            <textarea
                                rows="3"
                                cols="50"
                                maxlength="100"
                                name="description"
                                placeholder="Description"
                                className="text-area"
                                style={{color: 'black'}}
                                ref={register({ required: true })}
                            ></textarea>
                            {errors.description && <span className="text-danger ml-3">This field is required</span>}<br />
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

export default UserReviews;