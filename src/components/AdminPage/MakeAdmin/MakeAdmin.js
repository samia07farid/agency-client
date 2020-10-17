import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import SideBar from '../../ClientOrderDashBd/SideBar/SideBar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/adminEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }) 
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Email has been added!')
                }
            })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top pt-3">
                <div class="d-flex">
                    <img style={{ width: '130px' }} src={logo} alt="" />
                    <div className="ml-5 pl-5 d-flex" >
                        <h3>Make Admin</h3>
                        <h4 style={{ marginLeft: '850px' }}>{loggedInUser.username}</h4>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10" style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
                    <form onSubmit={handleSubmit(onSubmit)} className="m-3">
                        <div className="bg-white p-5 container-fluid row submit-area">
                            <div class="form-group col-md-6">
                                <label htmlFor=""><strong><h5>Email</h5></strong></label>
                                <input type="text" ref={register({ required: true })} name="email" className="form-control" placeholder="jon@example.com" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div class="col-md-4" style={{ marginTop: '40px' }}>
                                <button type="submit" class="btn btn-success" >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;