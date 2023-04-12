import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const marks = useLoaderData();

    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-3'>Assignment Marks</h1>
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