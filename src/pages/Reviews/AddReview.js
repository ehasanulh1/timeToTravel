import React from 'react';
import SolidButton from '../../components/SolidButton';

const AddReview = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const message = form.message.value;
        console.log(rating, message)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='text-start'>
                <label htmlFor="rating" className="block mb-2 text-base text-gray-900 dark:text-white">Give a rating</label>
                <div className='text-xl mb-3'>
                    <div className="rating">
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
        </div>
    );
};

export default AddReview;