import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    const featuredJobs = useLoaderData();
    console.log(featuredJobs)
    return (
        <div>
            
        </div>
    );
};

export default FeaturedJobs;