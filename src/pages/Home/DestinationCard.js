import React from 'react';
import { FaStar } from 'react-icons/fa';

const DestinationCard = ({ destination }) => {
    const { img, title, price, rating, description
    } = destination;
    return (
        <div className="card border-b border-yellow-500 bg-white rounded-none hover:drop-shadow-xl">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body p-5 items-center text-center">
                <h2 className="card-title font-bold font-sans text-2xl uppercase tracking-wider">{title}</h2>

                <div className='flex text-xs my-3'>
                    {
                        rating === 5 ?
                            <>
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                            </>
                            :
                            <></>
                    }
                    {
                        rating === 4 ?
                            <>
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className=' me-1' />
                            </>
                            :
                            <></>
                    }
                    {
                        rating === 3 ?
                            <>
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='text-yellow-500 mr-0.5' />
                                <FaStar className='me-1' />
                                <FaStar className='me-1' />
                            </>
                            :
                            <></>
                    }

                </div>

                <p className='p-0 m-0 font-semibold font-sans text-sm uppercase tracking-wider'>Price: ${price}.00
                </p>

                <div className="card-actions my-3">
                    <button className="px-9 py-4 uppercase font-bold text-sm tracking-widest text-yellow-500 rounded-[3px] border border-yellow-500 hover:text-white hover:bg-yellow-500">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;