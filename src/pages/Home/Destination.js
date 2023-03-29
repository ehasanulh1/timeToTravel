import React from 'react';
import { useLoaderData } from 'react-router-dom';
import line from '../../assets/line.svg';
import DestinationCard from './DestinationCard';

const Destination = () => {
    const destinationData = useLoaderData()
    console.log(destinationData)
    return (
        <div className='py-28'>
            <div className='container-xl mx-auto px-4'>
                <div className='text-center pb-20'>
                    <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>POPULAR DESTINATIONS</h1>
                    <p className='text-lg italic mb-8 tracking-widest font-mono'>Here you can visit some beautiful places, we will help you with all the facilities.</p>
                    <img className='mx-auto text-yellow-500' src={line} alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        destinationData.map(destination => <DestinationCard
                            key={destination._id}
                            destination={destination}
                        ></DestinationCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Destination;