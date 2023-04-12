import React from 'react';

const AppliedJobsInfo = ({ appliedJob }) => {
    const { id, companyLogo, jobTitle, companyName, fulltime, remote, salary, location } = appliedJob;
    return (
        <div className='p-2 bg-purple-400'>
            <button className='bg-violet-400 rounded-md p-1 me-2'>Filter Full-time</button>
            <button className='bg-violet-400 rounded-md p-1 me-2'>Filter Remote</button>
            <div className='flex'>
                <div>
                    <img className='w-36 rounded-md mx-auto' src={companyLogo} alt="" />
                    <h1>{jobTitle}</h1>
                    <p>{companyName}</p>
                    <button className='bg-violet-200 rounded-md p-1 me-2'>{fulltime ? 'Full-time' : 'Part-time'}</button>
                    <button className='bg-violet-200 rounded-md p-1'>{remote ? 'Remote' : 'On-site'}</button>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <div>
                    <Link to={`/job/${id}`}><button className='bg-violet-200 rounded-md p-2'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsInfo;