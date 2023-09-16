import { createBrowserRouter } from "react-router-dom";
import Page404 from "./Page404";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Layout from "./layout/Layout";
import Designs from "./pages/designs/Designs";
import Home from "./pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'designs',
        element: <Designs/>
      },
      {
        path: '*',
        element: <Page404/>
      }
    ]
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