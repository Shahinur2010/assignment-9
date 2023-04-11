import React from 'react';

const JobCatagoryDetails = ({list}) => {
    const {categoryLogo, categoryName,jobsAvailable} = list; 
    return (
        <div className='ms-4 bg-purple-200 p-4 my-2'>
            <img className='w-12 h-8 ms-10' src={categoryLogo} alt="" />
                        <h1>{categoryName}</h1>
                        <p>{jobsAvailable}</p>
        </div>
    );
};

export default JobCatagoryDetails;