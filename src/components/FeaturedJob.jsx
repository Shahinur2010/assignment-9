import React from 'react';

const FeaturedJob = ({ featuredJob }) => {
    const { id, companyLogo, jobTitle, companyName, contactInfo, educationalRequirements, experience, fulltime, jobDescription, jobResponsibility, remote, salary } = featuredJob;
    return (
        <div className='p-2'>
            <img src={companyLogo} alt="" />
            <h1>{jobTitle}</h1>
            <p>{companyName}</p>
            <button>{fulltime}</button>
            <button>{remote}</button>
            <p>{salary}</p>
            <p>{contactInfo.email}</p>
            <button className='bg-violet-200 rounded-md p-2'>View Details</button>
        </div>
    );
};

export default FeaturedJob;