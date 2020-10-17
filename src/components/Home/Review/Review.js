import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [reviews, setReviews] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <div>
            <div className="text-center mt-5">
                <h2><strong>Cliets <span style={{ color: '#7AB259' }}>Feedback</span></strong></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="container-md row">
                    {
                        reviews.map(review => <ReviewDetail review={review}></ReviewDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;