import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import line from '../../assets/line.svg';
import ReviewCard from './ReviewCard';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const noReviews = 'No reviews you added';
    useTitle('My Reviews')

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email]);

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete review`);
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully');
                        const remainingReviews = myReviews.filter(rvw => rvw._id !== id);
                        setMyReviews(remainingReviews);
                    }
                });
        }
    }

    return (
        <div style={{ minHeight: '700px' }} className="mb-20 container mx-auto">
            <div className='text-center pb-20 mt-20'>
                <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>Your Reviews</h1>
                <p className='text-lg italic mb-8 tracking-widest font-mono'>Here your reviews with all destinations, You can see your previous experiences with those places.</p>
                <img className='mx-auto text-yellow-500' src={line} alt="" />
            </div>
            <div className='items-center'>
                {
                    myReviews?.length > 0 ?
                        <div className='grid grid-cols-2 gap-10 mb-10'>
                            {
                                myReviews.map(review => <ReviewCard
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                ></ReviewCard>)
                            }
                        </div>
                        :
                        <div className='font-medium text-3xl'>{noReviews}</div>
                }
            </div>

        </div>
    );
};

export default MyReviews;