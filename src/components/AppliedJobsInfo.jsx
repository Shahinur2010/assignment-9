import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobsInfo = ({ appliedJob }) => {
    
    const { id, companyLogo, jobTitle, companyName, fulltime, remote, salary, location } = appliedJob;
    return (
        <div className='p-4'>
            <div className='text-end'>
            <button className='bg-violet-400 rounded-md p-1 mx-2'>Filter Full-time</button>
            <button className='bg-violet-400 rounded-md p-1 mx-2'>Filter Remote</button>
            </div>
            <div className='flex'>
                <div className='w-[70%]'>
                    <img className='w-36 rounded-md mx-auto' src={companyLogo? companyLogo : ''} alt="" />
                    <h1>{jobTitle? jobTitle : ''}</h1>
                    <p>{companyName? companyName: ''}</p>
                    <button className='bg-violet-200 rounded-md p-1 mx-2'>{fulltime ? 'Full-time' : 'Part-time'}</button>
                    <button className='bg-violet-200 rounded-md p-1 mx-2'>{remote ? 'Remote' : 'On-site'}</button>
                    <p>{location? location: ''}</p>
                    <p>{salary? salary: ''}</p>
                </div>
                <div>
                    <Link to={`/job/${id}`}><button className='bg-violet-300 rounded-md p-2'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsInfo;