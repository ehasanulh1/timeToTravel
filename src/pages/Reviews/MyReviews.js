import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import line from '../../assets/line.svg';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const noReviews = 'No reviews you added';

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyReviews(data))
    },[user?.email])


    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews?service_id=${_id}`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [_id]);
    return (
        <div style={{ minHeight: '700px' }} className="mb-20 container mx-auto">
            <div className='text-center pb-20 mt-20'>
                <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>Your Reviews</h1>
                <p className='text-lg italic mb-8 tracking-widest font-mono'>Here your reviews with all destinations, You can see your previous experiences with those places.</p>
                <img className='mx-auto text-yellow-500' src={line} alt="" />
            </div>
            <div className='items-center'>
                {
                myReviews.length > 0 ?
                <div>
                    {
                        myReviews.map(review=><p>{review.serviceName}</p>)
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