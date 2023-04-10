import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = ({featuredJobs}) => {
    
    console.log(featuredJobs)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {featuredJobs?.map(featuredJob=> <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}>
            </FeaturedJob>)}
        </div>
    );
};

export default FeaturedJobs;