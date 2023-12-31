import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Blogs from './components/Blogs';
import Error from './components/Error';
import AppliedJobs from './components/AppliedJobs';
import FeaturedJobs from './components/FeaturedJobs';
import Job from './components/Job';
import JobCategoryList from './components/JobCategoryList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: '/',
        element: <JobCategoryList></JobCategoryList>,
      },
      {
        path: '/job/:jobId',
        element: <Job></Job>,
        loader: ({params})=> fetch(`/featuredJobs.json`)
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/assignmentMarks.json')
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
