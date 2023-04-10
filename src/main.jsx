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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'featuredJobs',
        element: <FeaturedJobs></FeaturedJobs>,
        loader: () => fetch('featuredJobs.json')
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
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
