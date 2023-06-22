import React from 'react';
import { FaStar } from 'react-icons/fa';
import OutlineButton from '../../components/OutlineButton';

const Review = () => {
    const rating = 5;
    return (
        <div className="">
                        <div className='flex'>
                            <div className='w-14 h-14 mr-5'>
                                <img className='rounded-full' src='' alt="" />
                            </div>
                            <div>
                                <h2 className="card-title">
                                    Hasan Ali
                                </h2>
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


                        <p className='text-start my-4'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions gap-5 mt-6">
                            <OutlineButton >Delete</OutlineButton>
                            <OutlineButton>Edit</OutlineButton>
                        </div>
                    </div>
    );
};

export default Review;