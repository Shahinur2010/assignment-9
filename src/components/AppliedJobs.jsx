import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import appliedJobsLoader from '../loaders/appliedJobsLoader';
import AppliedJobsInfo from './AppliedJobsInfo';

const AppliedJobs = () => {
    // const appliedJobs = useLoaderData()
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        
        const job = localStorage.getItem('applied-job');
        
        if (job) {
            const selectedJob = JSON.parse(job);
            setJobs([...jobs, selectedJob])
        }
        
    }, [])
    
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-2'>Applied Jobs</h1>
            {
                jobs.map((appliedJob,i) => <AppliedJobsInfo key={i} appliedJob={appliedJob}></AppliedJobsInfo>)
            }
        </div>
    );
};

export default AppliedJobs;