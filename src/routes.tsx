import { createBrowserRouter } from "react-router-dom";
import Page404 from "./Page404";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Layout from "./layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/sign-up',
    element: <SignUp/>
  },
  {
    path: "*",
    element: <Page404/>,
  },
]);