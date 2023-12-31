import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const LoginNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const navLoginNavItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
        <li><NavLink to="/manage">Manage</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLoginNavItem}
                    </ul>
                </div>
                <Link to="/">
                    <img className="w-[80px]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLoginNavItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleLogOut} className="bg-[#ff3438] px-4 py-2 rounded-lg text-white font-bold">Log Out</button>
                        :
                        <button className="bg-[#ff3438] px-4 py-2 rounded-lg text-white font-bold">Login</button>
                }
            </div>
        </div>
    );
};

export default LoginNavbar;