import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import LoginNavbar from '../LoginNavbar/LoginNavbar';
const Register = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-4 mb-16'>
                <LoginNavbar></LoginNavbar>
            </div>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex items-center flex-col lg:flex-row'>
                    <div className='flex-1'>
                        <img className='' src={image} alt="" />
                    </div>
                    <div className='flex-1'>
                        <form>
                            <h2 className='text-3xl font-bold mb-4'>Please Register Now</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            <input className='bg-[#ff3438] px-4 py-2 rounded-lg mt-4 w-full text-white font-bold' type="submit" value="Register" />
                        </form>
                        <p className='my-4'>Dont have an account Please <Link className='font-bold text-xl text-[#ff3438]' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;