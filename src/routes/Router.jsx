import React from 'react'

import { useRoutes } from 'react-router-dom';
import HomeLayout from '../layouts/home/HomeLayout';
import CourseDetailPage from '../pages/course-detail/CourseDetailPage';
import HomePage from '../pages/home/HomePage';
import Login from '../pages/login/Login';

export default function Router() {
   const routing = useRoutes([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/course-detail/:id",
                element: <CourseDetailPage/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
        ],
    },
   ]);
  return routing;
}
