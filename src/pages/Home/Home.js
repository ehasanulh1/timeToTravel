import React from 'react';
import Banner from './Banner';
import Destination from './Destination';
import Partners from './Partners';
import News from './News';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
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