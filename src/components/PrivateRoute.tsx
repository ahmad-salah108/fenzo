import React from "react";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  if (!user?.token) return <Navigate to={"/"} />;

  return <>{children}</>;
}
