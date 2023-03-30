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
              path: "/admin/elearning-management",
              element: <ElearningManagement />,
            },
          ],
        },
      ],
    },
  ]);
  return routing;
}
