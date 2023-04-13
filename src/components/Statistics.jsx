import React from 'react';
import bannerImage1 from '../assets/assets/All Images/Vector-1.png';
import bannerImage from '../assets/assets/All Images/Vector.png';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const marks = useLoaderData();

    return (
        <div>
          <div className='h-56 bg-purple-200 mb-4'>
                <img className='h-16 ms-auto' src={bannerImage1} alt="" />
                <h1 className='text-center font-bold text-3xl my-3'>Assignment Marks</h1>
                <img className='h-16' src={bannerImage}alt="" />
            </div>
            
            <AreaChart className='mx-auto my-8'
          width={500}
          height={400}
          data={marks}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 10,
          }}
        >
          <XAxis dataKey="assignment" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    );
};

export default Statistics;