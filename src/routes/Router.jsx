import React from 'react'

import { useRoutes } from 'react-router-dom';
import NoAuthGuard from '../guards/NoAuthGuard';
import HomeLayout from '../layouts/home/HomeLayout';
import CourseDetailPage from '../pages/course-detail/CourseDetailPage';
import HomePage from '../pages/home/HomePage';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import UserInfo from '../pages/user-info/UserInfo';

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
                path: "/",
                element: <NoAuthGuard/>,
                children: [
                    {path: "/login",
                    element: <Login/>,
                    },
                ],
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/user-info",
                element: <UserInfo/>,
            },
        ],
    },
   ]);
  return routing;
}
