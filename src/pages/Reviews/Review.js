import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    const { customer, date, message, rating, photoURL } = review;
    return (
        <div className="border-b-2 border-yellow-500 mb-10">
            <div className='flex items-center'>
                <div className='mr-5'>
                    {
                        photoURL ?
                            <img className='rounded-full w-12 h-12' src={photoURL} alt="" />
                            :
                            <Link to='/' className='text-5xl'><FaUserCircle /></Link>
                    }
                </div>
                <div>
                    <h2 className="card-title">
                        {customer}
                    </h2>
                    <div className='flex text-xs my-1'>
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
                        {
                            rating === 2 ?
                                <>
                                    <FaStar className='text-yellow-500 mr-0.5' />
                                    <FaStar className='text-yellow-500 mr-0.5' />
                                    <FaStar className='me-1' />
                                    <FaStar className='me-1' />
                                    <FaStar className='me-1' />
                                </>
                                :
                                <></>
                        }
                        {
                            rating === 1 ?
                                <>
                                    <FaStar className='text-yellow-500 mr-0.5' />
                                    <FaStar className='me-1' />
                                    <FaStar className='me-1' />
                                    <FaStar className='me-1' />
                                    <FaStar className='me-1' />
                                </>
                                :
                                <></>
                        }

                    </div>
                </div>
            </div>
            <div className='text-start my-4'>
                <span className='font-medium'>Submitted Date:</span>  {date}
            </div>
            <p className='text-start my-4'>{message}</p>
        </div>
    );
};

export default Review;