import React from 'react';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import JobCategoryList from './JobCategoryList';

const Home = () => {
    const featuredJobs = useLoaderData();
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-4 p-6'>
                <div>
                    <h1 className='text-5xl font-semibold pb-4'>
                        One Step
                        <br/>
                        Closer To Your <br/><span className='text-cyan-200 '>Dream Job</span>
                    </h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-violet-200 rounded-md p-2 my-4'>Get Started</button>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1602763288580-927cfda37a72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1pY3Jvc29mdCUyMGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    
                </div>
            </div>
            <div className='text-center my-4'>
                <h1 className='font-bold text-3xl'>Job Category List</h1>
                <p className='my-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div>
                    <JobCategoryList ></JobCategoryList>
                </div>
            </div>
            <h1 className='font-bold text-3xl text-center'>Featured Jobs</h1>
            <p className='text-center my-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='text-center gap-2 grid grid-cols-1 md:grid-col mx-auto'>
            <FeaturedJobs featuredJobs={featuredJobs}></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;