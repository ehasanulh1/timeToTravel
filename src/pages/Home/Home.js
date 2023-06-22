import React from 'react';
import Banner from './Banner';
import Destination from './Destination';
import Partners from './Partners';
import News from './News';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <News></News>
            <Partners></Partners>
        </div>
    );
};

export default Home;