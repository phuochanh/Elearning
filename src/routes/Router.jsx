import React from "react";

<<<<<<< HEAD
import AdminGuard from "guards/AdminGuard";
import { AdminLayout } from "layouts/admin/Admin";
import ElearningManagement from "pages/admin/ElearningManagement";
import UserManagement from "pages/admin/UserManagement";
import CourseForm from "pages/courseFormAdmin/CourseForm";

import { useRoutes } from "react-router-dom";
import NoAuthGuard from "guards/NoAuthGuard";
import HomeLayout from "layouts/home/HomeLayout";
import CourseDetailPage from "pages/course-detail/CourseDetailPage";
import HomePage from "pages/home/HomePage";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import UserForm from "pages/use-form/UserForm";
import UserInfo from "pages/user-info/UserInfo";
import UserFormAmin from "pages/userFormAdmin/UserFormAdmin";
=======
import { useRoutes } from 'react-router-dom';
import NoAuthGuard from 'guards/NoAuthGuard';
import HomeLayout from 'layouts/home/HomeLayout';
import CourseDetailPage from 'pages/course-detail/CourseDetailPage';
import HomePage from 'pages/home/HomePage';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import UserForm from 'pages/use-form/UserForm';
import UserInfo from 'pages/user-info/UserInfo';
import CourseCatalory from 'pages/course-catalory/CourseCatalory';
>>>>>>> bf0169b5542e2a7753398b18a0dabdf69117bba8

export default function Router() {
  const routing = useRoutes([
    {
<<<<<<< HEAD
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/course-detail/:id",
          element: <CourseDetailPage />,
        },
        {
          path: "/",
          element: <NoAuthGuard />,
          children: [{ path: "/login", element: <Login /> }],
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/user-info",
          element: <UserInfo />,
        },
        {
          path: "/user-form",
          element: <UserForm />,
        },
      ],
=======
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
            {
                path: "/user-form",
                element: <UserForm/>,
            },
            {
                path: "/course-catalory",
                element: <CourseCatalory/>,
                
            }
        ],
>>>>>>> bf0169b5542e2a7753398b18a0dabdf69117bba8
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <AdminGuard />,
          children: [
            {
              path: "/admin/user-management",
              element: <UserManagement />,
            },
            {
              path: "/admin/user-management/add",
              element: <UserFormAmin />,
            },
            {
              path: "/admin/elearning-management",
              element: <ElearningManagement />,
            },
            {
              path: "/admin/elearning-management/edit/:maKhoaHoc",
              element: <CourseForm />,
            },
            {
              path: "/admin/elearning-management/add",
              element: <CourseForm />,
            },
          ],
        },
      ],
    },
  ]);
  return routing;
}
