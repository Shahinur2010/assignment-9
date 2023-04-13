import React, { useEffect, useState } from 'react';
import bannerImage1 from '../assets/assets/All Images/Vector-1.png';
import bannerImage from '../assets/assets/All Images/Vector.png';
import AppliedJobsInfo from './AppliedJobsInfo';
import { getAppliedJob } from '../utilities/fakedb';

const AppliedJobs = () => {
    const chosenJob = getAppliedJob();
    const [jobType, setJobType] = useState(chosenJob)

    const handleOnSite = () => {
        const chosenJob = getAppliedJob();
        const remoteJob = chosenJob.filter(rj => rj.remote === false)
        setJobType(remoteJob)
    }

    const handleRemote = () => {
        const chosenJob = getAppliedJob();
        const onSiteJob = chosenJob.filter(osj => osj.remote === true)
        setJobType(onSiteJob)
    }

    return (
        <div>
            <div className='h-64 bg-purple-200 mb-4'>
                <img className='h-16 ms-auto' src={bannerImage1} alt="" />
                <h1 className='text-center font-bold text-3xl my-2'>Applied Jobs</h1>
                <img className='h-16' src={bannerImage} alt="" />
            </div>
            
            <div className='text-end me-24'>
                <button onClick={handleOnSite} className='bg-violet-400 rounded-md p-1 mx-2'>Filter On-Site</button>
                <button onClick={handleRemote} className='bg-violet-400 rounded-md p-1 mx-2'>Filter Remote</button>
            </div>
            {
                jobType.map((appliedJob, i) => <AppliedJobsInfo key={i} appliedJob={appliedJob}></AppliedJobsInfo>)
            }
        </div>
    );
};

export default AppliedJobs;