import React from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/index';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

    return(
        <nav className='bg-blue-600 text-white p-4 flex justify-between items-center'>
            <Link to="/" className='text-2xl font-bold'>Divyam Capital Investments</Link>
            <div className='space-x-4'>
                <Link to="/">Home</Link>
                <Link to="/mutual-funds">Mutual Funds</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                {user ? (
                    <button onClick={logout} className='bg-red-500 px-2 py-1 rounded'>Logout</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;