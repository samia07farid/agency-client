import React from 'react';
import ClientLogo from '../ClientLogo/ClientLogo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientLogo></ClientLogo>
            <Services></Services>
            <Works></Works>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;