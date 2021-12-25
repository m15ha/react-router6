import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </header>
            <main className='container'>
                <Outlet />
            </main>
            <footer>2021</footer>
        </>
    );
};

export default Layout;
