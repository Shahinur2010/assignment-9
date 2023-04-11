import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Job = () => {
    const job = useParams();
    console.log(job)
    const [singleJob, setSingleJob] = useState([]);
    useEffect(() => {
        fetch(`/featuredJobs.json`)
            .then(res => res.json())
            .then(data => setSingleJob(data))
    }, [])

    const selectedJob = singleJob.find(item => item.id == job.id)
    console.log(selectedJob)

    return (
        <div>
            <h1 className='text-center font-bold text-4xl my-2'>Job Details</h1>
            <div className='flex'>
                <div className='text-start my-2 p-4'>
                    <p>Job description: {selectedJob.jobDescription}</p>
                    <p>Job Responsibility: {selectedJob.jobResponsibility}</p>
                    <p>Educational Requirements: {selectedJob.educationalRequirements
                    }</p>
                    <p>Experience: {selectedJob.experience}</p>
                </div>
                <div>
                    <h1>Job Details</h1>
                    <p>Salary: {selectedJob.salary}</p>
                    <p>Job Title: {selectedJob.jobTitle}</p>
                    <br />
                    <h1>Contact Information</h1>
                    <p>Phone: {}</p>
                    <p>Email: {}</p>
                    <p>Address: {selectedJob.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    );
};

export default Job;