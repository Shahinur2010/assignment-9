import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAddressBook, faMoneyBill, faPhone, faPlaceOfWorship, faVoicemail } from '@fortawesome/free-solid-svg-icons'


const Job = () => {
    const detail = useParams();
    console.log(detail.id)
    const [singleJob, setSingleJob] = useState([]);
    useEffect(() => {
        fetch('./featuredJobs.json')
            .then(res => res.json())
            .then(data => setSingleJob(data))
    }, [])

    const selectedJob = singleJob.find(item => item.id == detail.id)
    console.log(selectedJob)
    console.log(singleJob)

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
                <div className='text-center'>
                    <h1>Job Details</h1>
                    <p>Salary: <FontAwesomeIcon className='w-6 h-6' icon={faMoneyBill}/>{selectedJob.salary}</p>
                    <p>Job Title: <FontAwesomeIcon className='w-6 h-6' icon={faPlaceOfWorship}/>{selectedJob.jobTitle}</p>
                    <br />
                    <h1>Contact Information</h1>
                    <p>Phone: <FontAwesomeIcon className='w-6 h-6' icon={faPhone} />{selectedJob.contactInfo.phone}</p>
                    <p>Email: <FontAwesomeIcon className='w-6 h-6' icon={faVoicemail} />{selectedJob.contactInfo.email}</p>
                    <p>Address: <FontAwesomeIcon className='w-6 h-6' icon={faAddressBook}/>{selectedJob.location}</p>
                </div>
                <Link to='/appliedJobs'><button className='bg-violet-200 rounded-md p-2'>Apply Now</button></Link>
            </div>
        </div>
    );
};

export default Job;