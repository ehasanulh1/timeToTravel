import React, { useContext } from 'react';
import SolidButton from '../../components/SolidButton';
import { AuthContext } from '../../contexts/UserContext';
import line from '../../assets/line.svg';
import signUpImg from '../../assets/Login.gif';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddDestination = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = parseFloat(form.price.value);
        const img = form.photoURL.value;
        const rating = parseFloat(form.rating.value);
        const message = form.message.value;
        console.log(title, price, img, rating, message)

        const destination = {
            img,
            title,
            rating,
            price,
            description: message
        }

        fetch('https://time-to-travel-server-ehasanulh1.vercel.app/destination', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(destination)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Destination added successfully');
                    form.reset();
                }
            })
    }
    return (
        <div style={{ minHeight: '700px' }} className="mb-20 container mx-auto">
            <div className='text-center pb-20 mt-20'>
                <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>Add Destination</h1>
                <p className='text-lg italic mb-8 tracking-widest font-mono'>Add a new place for update service. People can see enjoy another place.</p>
                <img className='mx-auto text-yellow-500' src={line} alt="" />
            </div>
            <div className="grid gap-10 items-center md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signUpImg} alt="" className="md:w-3/4 m-5" />
                </div>
                <div className="lg:mt-10">
                    {
                        user?.uid ?
                            <form onSubmit={handleSubmit} className='text-start'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name='title' placeholder="title" className="input input-bordered rounded-[3px] py-4" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name='price' placeholder="price" className="input input-bordered rounded-[3px] py-4" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="photoURL" name='photoURL' className="input input-bordered rounded-[3px] py-4" placeholder="photoURL" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea name='message' required id="message" rows="4" className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 rounded-[3px]" placeholder="Leave a comment..."></textarea >
                                </div>
                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <div className="rating">
                                        <input type="radio" name="rating" value='1' className="mask mask-star-2 bg-orange-400" required/>
                                        <input type="radio" name="rating" value='2' className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating" value='3' className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating" value='4' className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating" value='5' className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>

                                <SolidButton>Submit</SolidButton>

                            </form>
                            :
                            <div>
                                <Link className='underline text-yellow-500' to='/login'>Please login</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AddDestination;