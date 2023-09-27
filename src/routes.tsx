import { createBrowserRouter } from "react-router-dom";
import Page404 from "./Page404";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Layout from "./layout/Layout";
import Designs from "./pages/designs/Designs";
import Home from "./pages/home/Home";
import Main from "./Main";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";
import ResetPassord from "./pages/reset-password/ResetPassword";
import IdentityConfirmation from "./pages/identity-confirmation/IdentityConfirmation";
import SetNewPassword from "./pages/set-new-password/SetNewPassword";

export const router = createBrowserRouter([
  {
    element: <Main/>,
    children: [
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
        element: <AuthRoute><Login/></AuthRoute>
      },
      {
        path: '/sign-up',
        element: <AuthRoute><SignUp/></AuthRoute>
      },
      {
        path: '/reset-password',
        element: <AuthRoute><ResetPassord/></AuthRoute>
      },
      {
        path: '/identity-confirmation',
        element: <AuthRoute><IdentityConfirmation/></AuthRoute>
      },
      {
        path: '/set-new-password',
        element: <AuthRoute><SetNewPassword/></AuthRoute>
      },
      {
        path: "*",
        element: <Page404/>,
      },
    ]
  }
]);