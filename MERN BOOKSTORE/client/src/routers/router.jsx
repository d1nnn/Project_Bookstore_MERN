import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Author from "../components/Author";
import AuthorDetail from "../components/AuthorDetail";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
// import Login from "../components/login";
// import Signup from "../components/Signup";
import CreateAuthor from "../dashboard/CreateAuthor";
import EditAuthor from "../dashboard/EditAuthor";
import ManageAuthor from "../dashboard/ManageAuthor";
import SignIn from "../account/SignIn";
import SignUp from "../account/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Logout from "../components/Logout";
import AuthProvider from "../contacts/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/author",
        element: <Author />,
      },
      // {
      //   path: "/admin/dashboard/manage",
      //   element: <ManageBook />,
      // },
      // {
      //   path: "/account/signin",
      //   element: <SignIn />,
      // },
      // {
      //   path: "/account/signup",
      //   element: <SignUp />,
      // },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: async ({ params }) => {
          const response = await fetch(`/book/${params.id}`);
          const data = await response.json();
          return data;
        },
      },

      {
        path: "/author/:id",
        element: <AuthorDetail />,
        loader: async ({ params }) => {
          const response = await fetch(`/author/${params.id}`);
          const data = await response.json();
          return data;
        },
      },
    ],
  },
  {
    path: "/account/signup",
    element: <SignUp />,
  },
  {
    path: "/account/signin",
    element: <SignIn />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload-book",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />,
      },
      {
        path: "/admin/dashboard/edit-book/:id",
        element: <EditBook />,
        loader: ({ params }) => fetch(`/book/${params.id}`),
      },

      {
        path: "/admin/dashboard/create-author",
        element: <CreateAuthor />,
      },

      {
        path: "/admin/dashboard/manage-author",
        element: <ManageAuthor />,
      },
      {
        path: "/admin/dashboard/edit-author/:id",
        element: <EditAuthor />,
        loader: ({ params }) => fetch(`/author/${params.id}`),
      },
    ],
  },
]);

export default router;
