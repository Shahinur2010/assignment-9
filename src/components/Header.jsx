import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='mx-auto p-4 bg-purple-400 flex flex-col justify-evenly md:flex-row md:justify-around text-xl font-semibold'>
                <h1 className='text-4xl font-bold'>Job Circular</h1>
            <div className='flex flex-col justify-center md:flex-row md:justify-center gap-8'>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/appliedJobs'>Applied Jobs</Link>
            <Link to='/blogs'>Blogs</Link>
            </div>
            <Link to='/appliedJobs'><button className='bg-violet-200 rounded-md p-4'>Start Applying</button></Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;