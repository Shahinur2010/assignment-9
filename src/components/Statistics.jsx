import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const marks = useLoaderData();

    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-3'>Assignment Marks</h1>
            <AreaChart
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
             {/* আপনি নিচের স্টেপ গুলো ফলো করুন
আপনি useParams() টা explore করুন।
https://m.facebook.com/groups/phwebdevelopmentbatch7/permalink/1313088012579614/?mibextid=Nif5অয
১) main.jsx এ যে পেজ এ details দেখাবেন সে পেজটার route dynamic রাখবেন।
২) যে পেজ এ view details button আছে সেটাতে ক্লিক করার সময় id টা পাঠিয়ে দিবেন
৩) details পেজ এ useParams থেকে id টা নিবেন এবং useEffect করে ডাটা নিয়ে সেখানে find চালাই দিবেন।
  */}
        </div>
    );
};

export default Statistics;