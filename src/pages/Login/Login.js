import React, { useContext } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/loginImg1.gif'
import SolidButton from '../../components/SolidButton';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('Login')

    const googleProvider = new GoogleAuthProvider();
    // const twitterProvider = new TwitterAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                // const user = result.user;
                // setAuthToken(user)
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                // const user = result.user;
                // setAuthToken(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)

            })
    }
    return (
        <div style={{ minHeight: '700px' }} className="mb-20 container mx-auto">
            <div className="grid gap-10 items-center md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" className="md:w-3/4 m-5" />
                </div>
                <div className="lg:mt-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-4xl text-center my-3 font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered rounded-[3px] py-4" required />
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
                            <SolidButton><input className='font-bold text-sm text-white' type="submit" value="LOGIN" /></SolidButton>
                        </div>
                    </form>
                    <div className='text-center mb-6'>
                        <p className='text-sm text-gray-600 py-1'>Or Sign In with</p>
                        <div className='flex justify-center my-4'>
                            <button className='p-3 rounded-full border  hover:bg-primary hover:text-white'><FaFacebookF /></button>
                            <button className='p-3 mx-3 rounded-full border hover:bg-primary hover:text-white'><FaLinkedinIn /></button>
                            <button onClick={handleGoogleSignIn} className='p-3 rounded-full border hover:bg-primary hover:text-white'><FaGoogle /></button>
                        </div>
                        <p className='text-sm py-4'>Don't have an account? <Link className='underline text-yellow-500' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;