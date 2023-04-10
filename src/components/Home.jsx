import React from 'react';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import JobCategoryList from './JobCategoryList';

const Home = () => {
    const featuredJobs = useLoaderData();
    console.log(featuredJobs)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-4 p-6'>
                <div>
                    <h1 >
                        One Step Closer To Your Dream Job
                    </h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-violet-200 rounded-md p-2'>Get Started</button>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1602763288580-927cfda37a72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1pY3Jvc29mdCUyMGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    
                </div>
            </div>
            <div>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div>
                    {/* <JobCategoryList jobCategoryList={jobCategoryList}></JobCategoryList> */}
                </div>
            </div>
            <h1 className='font-bold text-3xl text-center'>Featured Jobs</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <FeaturedJobs featuredJobs={featuredJobs}></FeaturedJobs>
        </div>
    );
};

export default Home;