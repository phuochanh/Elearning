import React from "react";

import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/AdminGuard";
import { AdminLayout } from "../layouts/admin/Admin";
import HomeLayout from "../layouts/home/HomeLayout";
import ElearningManagement from "../pages/admin/ElearningManagement";
import UserManagement from "../pages/admin/UserManagement";
import CourseDetailPage from "../pages/course-detail/CourseDetailPage";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NoAuthGuard from "../guards/NoAuthGuard";
import CourseForm from "../pages/courseFormAdmin/CourseForm";
import UserForm from "../pages/userFormAdmin/UserForm";

export default function Router() {
  const routing = useRoutes([
    {
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
      ],
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
              element: <UserForm />,
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
