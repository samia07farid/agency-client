import React from 'react';
import './ReviewDetail.css'

const ReviewDetail = ({ review }) => {
    return (
        <div className="col-md-4 mt-5 mb-5">
            <div className="review-card">
            <div className="d-flex justify-content-start">
                <div>
                    <img style={{height: '50px', borderRadius: '50%'}} src={require('../../../images/customer-1.png')} alt="" />
                </div>
                <div className="pl-3">
                    <h5><strong>{review.name}</strong></h5>
                    <h6>{review.role}</h6>
                </div>
            </div>
            <div className="mt-3 text-secondary">
                <p>{review.description}</p>
            </div>
            </div>
        </div>
    );
};

export default ReviewDetail;