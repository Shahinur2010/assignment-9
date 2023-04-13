import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobsInfo = ({ appliedJob }) => {
    
    const { id, companyLogo, jobTitle, companyName, fulltime, remote, salary, location } = appliedJob;
    return (
        <div className='p-4 my-2'>
            
            <div className='flex justify-between items-center border px-20 mx-20'>
                <div className='w-[70%] my-2'>
                    <div className='flex my-2 gap-10'>
                    <img className='w-28 h-28 rounded-md ms-5 mt-4' src={companyLogo? companyLogo : ''} alt="" />
                    
                    <div className='text-start'>
                    <h1>{jobTitle? jobTitle : ''}</h1>
                    <p>{companyName? companyName: ''}</p>
                    <button className='bg-violet-200 rounded-md p-1'>{fulltime ? 'Full-time' : 'Part-time'}</button>
                    <button className='bg-violet-200 rounded-md p-1 mx-2'>{remote ? 'Remote' : 'On-site'}</button>
                    <p>{location? location: ''}</p>
                    <p>{salary? salary: ''}</p>
                    </div>
                    </div>
                </div>
                <div className='me-5 my-3'>
                    <Link to={`/job/${id}`}><button className='bg-violet-300 rounded-md p-2'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsInfo;