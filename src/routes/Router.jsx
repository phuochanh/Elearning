import React from "react";

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
import CourseCatalory from "pages/course-catalory/CourseCatalory";
import RegistrationManager from "pages/registrationManager/RegistrationManager";

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
        {
          path: "/user-info",
          element: <UserInfo />,
        },
        {
          path: "/user-info/:id",
          element: <UserForm />,
        },
        {
          path: "/course-catalory/:id",
          element: <CourseCatalory />,
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
              path: "/admin/user-management/edit/:taiKhoan",
              element: <UserFormAmin />,
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
            {
              path: "/admin/elearning-management/registration-manager/:maKhoaHoc",
              element: <RegistrationManager />,
            },
          ],
        },
      ],
    },
  ]);
  return routing;
}
