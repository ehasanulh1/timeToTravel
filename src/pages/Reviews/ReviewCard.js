
import { FaStar } from 'react-icons/fa';
import OutlineButton from '../../components/OutlineButton';
import SolidButton from '../../components/SolidButton';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ReviewCard = ({ review, handleDelete }) => {
    const { _id} = review;
    const [reviewData, setReviewData] = useState(review)
    const { serviceName, rating, date, message } = reviewData;

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        let upRating = parseFloat(form.rating.value);
        const upMessage = form.message.value;

        const updateReview = {
            serviceName,
            date,
            rating: upRating,
            message: upMessage
        }
        console.log(updateReview)

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User updated successfully');
                    setReviewData(updateReview)
                    event.target.reset();
                }
            })
    }

    return (
        <div className="border-b-2 border-yellow-500 mb-10">
            <div className='flex items-center'>

                <div>
                    <h2 className="text-xl">
                       <span className='font-semibold'>Destination: </span>  {serviceName}
                    </h2>
                    <div className='flex items-center gap-3 mt-3'>
                        <span className='font-semibold'>Rating: </span>
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
                    </div>

                </div>
            </div>
            <div className='text-start my-4'>
                <span className='font-semibold'>Submitted Date:</span>  {date}
            </div>
            <p className='text-start my-4'><span className='font-semibold'>Comments:</span> {message}</p>

            <div className='flex gap-5 justify-start items-center my-10'>
                <div onClick={() => { handleDelete(_id) }}><OutlineButton>Delete</OutlineButton></div>
                <OutlineButton><label htmlFor="my_modal_6">Edit</label></OutlineButton>
            </div>

            {/* modal */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleUpdateUser} className='text-start'>
                        <label className="block mb-2 text-base text-gray-900 dark:text-white">Give a rating</label>
                        <div className='text-xl mb-3'>
                            <div className="rating" >
                                <input type="radio" name="rating" value='1' className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating" value='2' className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating" value='3' className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating" value='4' className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating" value='5' className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <label htmlFor='message' className="block mb-2 text-base text-gray-900 dark:text-white">Your message</label>
                        <textarea name='message' id="message" rows="4" className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Leave a comment..."></textarea>
                        <SolidButton><label htmlFor="my_modal_6">Submit</label></SolidButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;