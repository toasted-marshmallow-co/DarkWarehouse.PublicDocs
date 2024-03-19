// src/components/Auth/index.js

import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { Redirect, useLocation } from "@docusaurus/router";
import { BASE, LOGIN_PATH, LOGOUT_PATH, PROTECTED_PATHS } from "@site/src/utils/constants";
import SignInComponent from "../ui-components/SignInComponent";

// Your helper constants (make sure to define these according to your application's routes)

export function AuthCheck({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();
  let from = location.pathname;

  if (isAuthenticated) {
    // Redirects after login or logout
    if (from === LOGOUT_PATH) {
      // Sign out logic here with MSAL, then redirect
      return <Redirect to={BASE} />;
    } else if (from === LOGIN_PATH) {
      // If logged in and on login path, redirect to base/home
      return <Redirect to={BASE} />;
    }
    // If authenticated, render the protected component
    return children;
  } else {
    // If not authenticated, and trying to access a protected path, show login
    if (PROTECTED_PATHS.some((path: any) => from.startsWith(path))) {
      return <SignInComponent />;
    }
    // If on the login path, show login
    else if (from === LOGIN_PATH) {
      return <SignInComponent />;
    }
    // For all other paths, it depends on how you want to handle it,
    // You might want to render some public part of your app or redirect to login
    return children;
  }
}
