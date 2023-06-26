import React, { useContext } from 'react';
import SolidButton from '../../components/SolidButton';
import { AuthContext } from '../../contexts/UserContext';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddReview = ({ destinationData }) => {
    const { user } = useContext(AuthContext);
    const { _id, title } = destinationData;
    useTitle('Add a review')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const rating = parseFloat(form.rating.value);
        const message = form.message.value;

        // for set today date
        let today = new Date();
        const date = String(today.getDate()).padStart(2, '0') + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + today.getFullYear();

        const review = {
            service_id: _id,
            serviceName: title,
            customer: user?.displayName,
            photoURL: user?.photoURL,
            rating,
            date,
            email: user?.email,
            message
        }

        fetch('https://time-to-travel-server-ehasanulh1.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review added successfully');
                    form.reset();
                }
            })
    }

    return (
        <div>

            {
                user?.uid ?
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
                    :
                    <div className='text-start'><Link to='/login' ><SolidButton>Write A Review</SolidButton></Link></div>
                    

            }
        </div>
    );
};

export default AddReview;