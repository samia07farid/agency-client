import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height: '550px'}}>
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1> <strong>Let's Grow Your <br/> Brand To The <br/> Next Level</strong> </h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur  <br/> adipisicing elit. A officia dolore maxime harum  <br/> consectetur possimus!</p>
                <button style={{backgroundColor: '#111430'}} className="btn text-white mt-4">Hire us</button>
            </div>
            <div className="col-md-6 col-12">
                <img style={{height: '400px'}} className="img-fluid pl-5" src={frame} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;