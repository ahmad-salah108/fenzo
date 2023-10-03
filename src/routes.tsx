import { createBrowserRouter } from "react-router-dom";
import Page404 from "./Page404";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/sign-up/SignUp";
import Layout from "./layout/Layout";
import Designs from "./pages/designs-management/designs/Designs";
import Home from "./pages/home/Home";
import Main from "./Main";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";
import ResetPassord from "./pages/auth/reset-password/ResetPassword";
import IdentityConfirmation from "./pages/auth/identity-confirmation/IdentityConfirmation";
import SetNewPassword from "./pages/auth/set-new-password/SetNewPassword";
import Profile from "./pages/profile/Profile";
import DesignDetails from "./pages/designs-management/design-details/DesignDetails";
import PackageDetails from "./pages/designs-management/package-details/PackageDetails";

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
            path: 'designs/:designId',
            element: <DesignDetails/>
          },
          {
            path: 'designs/:designId/:packageId',
            element: <PackageDetails/>
          },
          {
            path: 'profile',
            element: <PrivateRoute><Profile/></PrivateRoute>
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