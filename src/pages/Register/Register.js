import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import SolidButton from '../../components/SolidButton';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import signUpImg from '../../assets/Login.gif';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../../api/auth';

const Register = () => {
    const { providerLogin, createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Register')

    const googleProvider = new GoogleAuthProvider();
    // const twitterProvider = new TwitterAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('User create successfully');
                console.log(user)
                const userInfo = {
                    displayName: name,
                    photoURL,
                }
                console.log(userInfo)
                updateUser(userInfo)
                    .then(() => {
                        form.reset();
                        navigate('/');
                    })
                    .catch(err => console.log(err));
                setAuthToken(user)
            })
            .catch(error => {
                console.log(error);
                // setSignupError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setAuthToken(user)
                navigate('/')
            })
            .catch(error => {
                console.error(error)

            })
    }
    return (
        <div style={{ minHeight: '700px' }} className="mb-20 container mx-auto">
            <div className="grid gap-10 items-center md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signUpImg} alt="" className="md:w-3/4 m-5" />
                </div>
                <div className="lg:mt-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-4xl text-center my-3 font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered rounded-[3px] py-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered rounded-[3px] py-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photoURL' className="input input-bordered rounded-[3px] py-4" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded-[3px] py-4" required />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <SolidButton><input className='font-bold text-sm text-white' type="submit" value="REGISTER" /></SolidButton>
                        </div>
                    </form>
                    <div className='text-center mb-6'>
                        <p className='text-sm text-gray-600 py-1'>Or Sign In with</p>
                        <div className='flex justify-center my-4'>
                            <button className='p-3 rounded-full border  hover:bg-primary hover:text-white'><FaFacebookF /></button>
                            <button className='p-3 mx-3 rounded-full border hover:bg-primary hover:text-white'><FaLinkedinIn /></button>
                            <button onClick={handleGoogleSignIn} className='p-3 rounded-full border hover:bg-primary hover:text-white'><FaGoogle /></button>
                        </div>
                        <p className='text-sm py-4'>Already have an account? <Link className='underline text-yellow-500' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;