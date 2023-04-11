import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faMoneyBill, faPhone, faStarOfLife, faVoicemail } from '@fortawesome/free-solid-svg-icons'


const Job = () => {
    const { id } = useParams();

    const detail = useLoaderData();

const [data, setData] = useState([]);
    useEffect(() => {
        if (detail) {
            const jobDetails = detail.find(data => data.id == id)
            setData(jobDetails)
        }
    }, [])
    
    const { educationalRequirements, jobDescription, jobResponsibility, experience, salary, jobTitle, contactInfo, location } = data;
    
    return (
        <div>
            <h1 className='text-center font-semibold text-4xl my-2'>Job Details</h1>
            <div className='flex'>
                <div className='text-start my-2 p-4'>
                    <p>Job description: {jobDescription}</p>
                    <p>Job Responsibility: {jobResponsibility}</p>
                    <p>Educational Requirements: {educationalRequirements
                    }</p>
                    <p>Experience: {experience}</p>
                </div>
                <div className='text-center'>
                    <h1>Job Details</h1>
                    <p>Salary: <FontAwesomeIcon className='w-6 h-6' icon={faMoneyBill} />{salary}</p>
                    <p>Job Title: <FontAwesomeIcon className='w-6 h-6' icon={faStarOfLife} />{jobTitle}</p>
                    <br />
                    <h1>Contact Information</h1>
                    <p>Phone: <FontAwesomeIcon className='w-6 h-6' icon={faPhone} />{contactInfo?.phone}</p>
                    <p>Email: <FontAwesomeIcon className='w-6 h-6' icon={faVoicemail} />{contactInfo?.email}</p>
                    <p>Address: <FontAwesomeIcon className='w-6 h-6' icon={faAddressBook} />{location}</p>
                </div>
                <Link to='/appliedJobs'><button className='bg-violet-200 rounded-md p-2'>Apply Now</button></Link>
            </div>
        </div>
    );
};

export default Job;