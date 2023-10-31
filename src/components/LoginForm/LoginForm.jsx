import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
const LoginForm = () => {
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                // navigate(location?.state ? location?.state : '/');

                // get access token
                axios.post('http://localhost:5000/jwt', user)
                .then(res =>{
                    console.log(res.data)
                })
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='flex items-center flex-col lg:flex-row'>
            <div className='flex-1'>
                <img className='' src={image} alt="" />
            </div>
            <div className='flex-1'>
                <form onSubmit={handleLogin}>
                    <h2 className='text-3xl font-bold mb-4'>Please Login Now</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                    </div>
                    <input className='bg-[#ff3438] px-4 py-2 rounded-lg mt-4 w-full text-white font-bold' type="submit" value="Login" />
                </form>
                <p className='my-4'>Dont have an account Please <Link className='font-bold text-xl text-[#ff3438]' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;