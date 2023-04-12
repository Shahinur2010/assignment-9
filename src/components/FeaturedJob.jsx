import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {
    
    const { id, companyLogo, jobTitle, companyName, fulltime, remote, salary,location } = featuredJob;
    
    return (
        <div className='p-8 bg-purple-300'>
            <img className='w-36 rounded-md mx-auto' src={companyLogo} alt="" />
            <h1>{jobTitle}</h1>
            <p>{companyName}</p>
            <button className='bg-violet-200 rounded-md p-1 me-2'>{fulltime? 'Full-time':'Part-time'}</button>
            <button className='bg-violet-200 rounded-md p-1'>{remote? 'Remote': 'On-site'}</button>
            <p>{location}</p>
            <p>{salary}</p>
            <Link to={`/job/${id}`}><button className='bg-violet-200 rounded-md p-2'>View Details</button></Link>
        </div>
    );
};

export default FeaturedJob;