import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
const LoginForm = () => {
    return (
        <div className='flex items-center flex-col lg:flex-row'>
            <div className='flex-1'>
                <img className='' src={image} alt="" />
            </div>
            <div className='flex-1'>
                <form>
                    <h2 className='text-3xl font-bold mb-4'>Please Login Now</h2>
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
                    <input className='bg-[#ff3438] px-4 py-2 rounded-lg mt-4 w-full text-white font-bold' type="submit" value="Login" />
                </form>
                <p className='my-4'>Dont have an account Please <Link className='font-bold text-xl text-[#ff3438]' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;