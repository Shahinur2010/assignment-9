import React from 'react';
const  jobs = [
    
        {
            id: 1,
            categoryLogo: "https://images.unsplash.com/photo-1590795769046-b197fb723a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWljcm9zb2Z0JTIwY29tcGFueSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            categoryName: "Account & Finance",
            jobsAvailable: "300 Jobs Available"
        },
        {
            id: 2,
            categoryLogo: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1pY3Jvc29mdCUyMGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            categoryName: "Creative Design",
            jobsAvailable: "100+ Jobs Available"
        },
        {
            id: 3,
            categoryLogo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWljcm9zb2Z0JTIwY29tcGFueSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            categoryName: "Marketing & Sales",
            jobsAvailable: "150 Jobs Available"
        },
        {
            id: 4,
            categoryLogo: "https://media.istockphoto.com/id/181865386/photo/banks-building-san-francisco-financial-district.jpg?b=1&s=170667a&w=0&k=20&c=AQhcCSgbktYLADf6QpjYCEirXCaI7voX-K04AkMAE-w=",
            categoryName: "Engineering Job",
            jobsAvailable: "224 Jobs Available"
        }   
    ];

const JobCategoryList = () => {  
    console.log(jobs) 
    return (
        <div>
            {
                jobs?.map(job=>{
                    
                    return <div key={job.id}>
                        <img src={job.categoryLogo} alt="" />
                        <h1>{job.categoryName}</h1>
                        <p>{job.jobsAvailable}</p>
                    </div>
                    
                })
            }
        </div>
    );
};

export default JobCategoryList;