import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBangladeshiTakaSign, faBusinessTime, faEnvelope, faHome,  faPhone } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../utilities/fakedb';


const Job = () => {
    const { jobId } = useParams();

    const detail = useLoaderData();

const [data, setData] = useState([]);
    useEffect(() => {
        if (detail) {
            const jobDetails = detail.find(data => data.id == jobId)
            setData(jobDetails)
        }
    }, [])
    
    const {id, educationalRequirements, jobDescription, jobResponsibility, experience, salary, jobTitle, contactInfo, location } = data;
    
    return (
        <div>
            <h1 className='text-center font-semibold text-4xl my-2'>Job Details</h1>
            <div className='flex'>
                <div className='text-start w-[60%] p-8'>
                    <p className='mb-2'><small className='font-semibold text-lg'>Job description:</small> {jobDescription}</p>
                    <p className='mb-2'><small className='font-semibold text-lg'>Job Responsibility:</small> {jobResponsibility}</p>
                    <p className='mb-2'><small className='font-semibold text-lg'>Educational Requirements:</small> {educationalRequirements
                    }</p>
                    <p><small className='font-semibold text-lg'>Experience:</small> {experience}</p>
                </div>
                <div className='text-start mt-6'>
                    <h1 className='font-semibold my-2'>Job Details</h1>
                    <p>Salary: <FontAwesomeIcon className='w-3 h-3' icon={faBangladeshiTakaSign} /> {salary}</p>
                    <p>Job Title: <FontAwesomeIcon className='w-3 h-3' icon={faBusinessTime} /> {jobTitle}</p>
                    <h1 className='font-semibold mt-2'>Contact Information</h1>
                    <p>Phone: <FontAwesomeIcon className='w-3 h-3' icon={faPhone} />{contactInfo?.phone} </p>
                    <p>Email: <FontAwesomeIcon className='w-3 h-3' icon={faEnvelope} /> {contactInfo?.email}</p>
                    <p>Address: <FontAwesomeIcon className='w-3 h-3' icon={faHome} /> {location}</p>
                    <Link to='/appliedJobs'><button onClick={addToDb(id)} className='bg-violet-200 rounded-md p-2 my-1'>Apply Now</button></Link>
                </div>              
            </div>
        </div>
    );
};

export default Job;