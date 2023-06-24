
import { FaStar } from 'react-icons/fa';
import OutlineButton from '../../components/OutlineButton';
import SolidButton from '../../components/SolidButton';
import { useState } from 'react';

const ReviewCard = ({ review, handleDelete }) => {
    const [reviewData, setReviewData] = useState(review)
    const { _id, serviceName, rating, date, message } = reviewData;

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const upRating = parseFloat(form.rating.value);
        const upMessage = form.message.value;

        const updateReview = {
            serviceName,
            date,
            rating: upRating,
            message: upMessage
        }

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
                    alert('User updated');
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
                        Destination: {serviceName}
                    </h2>
                    <div className='flex items-center gap-3 mt-3'>
                        <span className='font-medium'>Rating: </span>
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
            </div>
            <div className='text-start my-4'>
                <span className='font-medium'>Submitted Date:</span>  {date}
            </div>
            <p className='text-start my-4'><span className='font-medium'>Comments:</span> {message}</p>

            <div className='flex gap-5 justify-start items-center my-10'>
                <div onClick={() => { handleDelete(_id) }}><OutlineButton>Delete</OutlineButton></div>
                {/* <input htmlFor="rating"><OutlineButton>Edit</OutlineButton></input> */}
            </div>
            <button htmlFor="rating" className="btn" >open modal</button>
            <dialog id="rating" className="modal">

                <form onSubmit={handleUpdateUser} method="dialog" className='text-start'>
                    <label  className="block mb-2 text-base text-gray-900 dark:text-white">Give a rating</label>
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
                    <SolidButton>Submit</SolidButton>

                </form>
            </dialog>
        </div>
    );
};

export default ReviewCard;