import React from 'react';
import { FaStar } from 'react-icons/fa';
import OutlineButton from '../../components/OutlineButton';

const DestinationCard = ({ destination }) => {
    const { img, title, price, rating } = destination;
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
                    <OutlineButton>Book Now</OutlineButton>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;