import React from 'react';
import FeaturedJobs from './FeaturedJobs';
 import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const featuredJobs = useLoaderData();
    console.log(featuredJobs)
    return (
        <div>
            <h1>This is home page</h1>
            <h1 className='font-bold text-3xl text-center'>Featured Jobs</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <FeaturedJobs featuredJobs={featuredJobs}></FeaturedJobs>
        </div>
    );
};

export default Home;