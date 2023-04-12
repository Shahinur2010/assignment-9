import React from 'react';
import { useLoaderData } from 'react-router-dom';
import appliedJobsLoader from '../loaders/appliedJobsLoader';
import AppliedJobsInfo from './AppliedJobsInfo';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData()
    console.log(appliedJobs)
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-2'>Applied Jobs</h1>
            {
                appliedJobs.map(appliedJob=> <AppliedJobsInfo key={appliedJob.id} appliedJob={appliedJob}></AppliedJobsInfo>)
            }
        </div>
    );
};

export default AppliedJobs;