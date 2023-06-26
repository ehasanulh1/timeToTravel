import React, { useEffect, useState } from 'react';
import line from '../../assets/line.svg';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../Reviews/AddReview';
import Review from '../Reviews/Review';

const DestinationDetails = () => {
    const [reviews, setReviews] = useState([])
    const destinationData = useLoaderData()
    const { _id, img, title, price, rating, description } = destinationData;

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id]);

    return (
        <div style={{ maxWidth: '1200px' }} className='mx-auto px-4 my-20'>
            <div className='text-center pb-20 mt-20'>
                <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>POPULAR DESTINATIONS</h1>
                <p className='text-lg italic mb-8 tracking-widest font-mono'>Here you can visit some beautiful places, we will help you with all the facilities.</p>
                <img className='mx-auto text-yellow-500' src={line} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-5 text-start items-center">
                <figure><img className='w-full' src={img} alt="destinationImage" /></figure>
                <div className='p-5'>
                    <h2 className="card-title font-bold font-sans text-4xl uppercase tracking-wider">{title}</h2>
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
                                        <FaStar className='text-gray-500 mr-0.5' />
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
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                    </>
                                    :
                                    <></>
                            }
                            {
                                rating === 2 ?
                                    <>
                                        <FaStar className='text-yellow-500 mr-0.5' />
                                        <FaStar className='text-yellow-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                    </>
                                    :
                                    <></>
                            }
                            {
                                rating === 1 ?
                                    <>
                                        <FaStar className='text-yellow-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                    </>
                                    :
                                    <>
                                    </>
                            }
                            {
                                !rating ?
                                    <>
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                        <FaStar className='text-gray-500 mr-0.5' />
                                    </>
                                    :
                                    <></>
                            }

                    </div>
                    <p className='p-0 m-0 font-semibold font-sans text-sm uppercase tracking-wider'>Price: ${price}.00
                    </p>
                    <div className="mt-5 text-gray-600 leading-loose">
                        {description}
                    </div>
                </div>
            </div>

            {/* Review section  */}
            <div className='mt-20 pt-10'>
                <div>
                    <div>
                        <h1 className='font-sans font-bold text-neutral-900 text-4xl text-start uppercase mb-8'>CUSTOMER REVIEWS</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        {
                          reviews.map(review=><Review key={review._id} review={review}></Review>) 
                        }
                    </div>

                </div>
            </div>

            <div className='mt-20'>
                <div>
                    <h1 className='font-sans font-bold text-neutral-900 text-4xl text-start uppercase mb-8'>Write a customer review</h1>
                </div>
                <div>
                    <AddReview destinationData={destinationData}></AddReview>
                </div>

            </div>
        </div>
    );
};

export default DestinationDetails;