import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import SideBar from '../../ClientOrderDashBd/SideBar/SideBar';
import './AddService.css'

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top pt-3">
                <div class="d-flex">
                    <img style={{ width: '130px' }} src={logo} alt="" />
                    <div className="ml-5 pl-5 d-flex" >
                        <h3>Add Services</h3>
                        <h4 style={{ marginLeft: '850px' }}>{loggedInUser.username}</h4>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10" style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
                    <form className="m-3" onSubmit={handleSubmit}>
                        <div className="bg-white p-5 container-fluid row submit-area">
                            <div className="col-md-6">
                                <div class="form-group">
                                    <label htmlFor=""><strong><h5>Service Title</h5></strong></label>
                                    <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="name" className="form-control" placeholder="Enter title" />
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor=""><strong><h5>Description</h5></strong></label>
                                    <textarea onBlur={handleBlur} type="text" ref={register({ required: true })} name="description" className="form-control" cols="30" rows="6" placeholder="Enter Description"></textarea>
                                    {errors.description && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label htmlFor=""><strong><h5>Icon</h5></strong></label>
                                <input onChange={handleFileChange} type="file" className="btn btn-success form-control-lg" />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-end mr-3 mt-3">
                            <button type="submit" class="btn btn-success" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;



