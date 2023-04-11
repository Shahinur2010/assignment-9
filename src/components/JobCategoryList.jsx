import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import JobCatagoryDetails from './JobCatagoryDetails';


const JobCategoryList = () => {
    const category = useParams();

    const [lists, setLists] = useState([])
    useEffect(() => {
        fetch('/jobCategoryList.json')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])

    return (
        <div className='flex flex-col items-center justify-center md:flex-row my-4 p-6 gap:4'>
            {
                lists.map(list => <JobCatagoryDetails key={list.id} list={list}></JobCatagoryDetails>
                )
            }
        </div>
    );
};

export default JobCategoryList;