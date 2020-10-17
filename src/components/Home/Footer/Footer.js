import React from 'react';
import './Footer.css'
import { useForm } from 'react-hook-form';

const Footer = () => {
    const { register } = useForm();

    return (
        <div className="footer-container mt-5 pt-5">
            <div className="d-flex justify-content-center container-md">
                <div className="row pt-5">
                    <div className="col-md-4 col-sm-6 col-12">
                        <h2>Let us handle your <br /> project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-8 col-sm-6 col-12 form-container">
                        <form action="">
                            <input type="text" name="emailAddress" placeholder="Your email address"
                                className="form-input" ref={register({ required: true })} /> <br />
                            <input type="text" name="name" placeholder="Your name / company's name"
                                className="form-input" ref={register({ required: true })} /> <br />
                            <input type="text" name="message" placeholder="Your message"
                                className="form-input msg-input" ref={register({ required: true })} />
                            <br />
                            <input style={{ backgroundColor: '#111430' }} class="btn pr-5 pl-5 text-white" type="submit" placeholder="Send" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3 pt-3">
                <span ><small>copyright Orange labs 2020</small></span>
            </div>
        </div>
    );
};

export default Footer;