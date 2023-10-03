import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import axios from "axios";
import i18next from "i18next";
import { ItemsProvider, useItemsContext } from "./context/ItemsContext";
import { useForm } from "react-hook-form";

export default function Wrap() {
  return (
    <ItemsProvider>
      <UserProvider>
        <Main />
      </UserProvider>
    </ItemsProvider>
  );
}

function Main() {
  const { user } = useUser();

  axios.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
  axios.defaults.headers.common["Accept-Language"] = i18next.language;

  return <Outlet />;
}

// Main is made to make UserProvider inside RouterProvider
