import { Link, NavLink } from "react-router-dom";
import { AiFillLock } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import logo from '../../assets/logo.svg';

const NavBar = () => {
    const navItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li className="ml-2"><NavLink to="/login">Login</NavLink></li>
        <li className="ml-2"><NavLink to="/bookings">Bookings</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/">
                    <img className="w-[80px]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <AiFillLock className="text-2xl"></AiFillLock>
                        <CiSearch className="text-2xl ml-2"></CiSearch>
                    </div>
                    <div>
                        <button className="border-2 border-[#ff4834] text-[#ff4834] px-5 py-2 rounded-lg ml-4">Apoinment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;