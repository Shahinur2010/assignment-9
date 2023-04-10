import React from 'react';

const FeaturedJob = ({ featuredJob }) => {
    console.log(featuredJob)
    const { id, companyLogo, jobTitle, companyName, contactInfo, educationalRequirements, experience, fulltime, jobDescription, jobResponsibility, remote, salary } = featuredJob;
    return (
        <div className='p-2'>
            <img className='w-36 rounded-md' src={companyLogo} alt="" />
            <h1>{jobTitle}</h1>
            <p>{companyName}</p>
            <button className='bg-violet-200 rounded-md p-1 me-2'>{fulltime? 'Full-time':'Part-time'}</button>
            <button className='bg-violet-200 rounded-md p-1'>{remote? 'Remote': 'On-site'}</button>
            <p>{salary}</p>
            <p>{contactInfo.email}</p>
            <button className='bg-violet-200 rounded-md p-2'>View Details</button>
        </div>
    );
};

export default FeaturedJob;