import React from "react";
import { Outlet } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import axios from "axios";
import i18next from "i18next";

export default function Wrap() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

function Main() {
  const { user } = useUser();

  axios.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
  axios.defaults.headers.common["Accept-Language"] = i18next.language;

  return <Outlet />;
}

// Main is made to make UserProvider inside RouterProvider
