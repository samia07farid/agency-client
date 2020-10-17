import React from 'react';
import reviewData from './reviewData';
import serviceData from './serviceData';

const Buttons = () => {
    // const handleAddService = () => {
    //     fetch('http://localhost:5000/addService', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify(serviceData)
    //     })
    // }

    // const handleAddReview = () => {
    //     fetch('http://localhost:5000/addReview', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify(reviewData)
    //     })
    // }

    return (
        <div>
            {/* <button onClick={handleAddService}>Add All Services</button> */}
            {/* <button onClick={handleAddReview}>Add All Reviews</button> */}
        </div>
    );
};

export default Buttons;