import React, { useEffect, useState } from "react";
import { useAccount, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Redirect, useLocation } from "@docusaurus/router";
import { BASE, LOGIN_PATH, LOGOUT_PATH, PROTECTED_PATHS } from "@site/src/utils/constants";
import SignInComponent from "../ui-components/SignInComponent";
import AccessRequest from "../ui-components/AccessRequest";
import useMsalAuth from "@site/src/hooks/useMsalAuth";

export function AuthCheck({ children }: { children: React.ReactNode }) {
  const { customFields } = useMsalAuth();
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [isAuthorized, setIsAuthorized] = useState(false);
  let from = location.pathname;

  useEffect(() => {
    const checkAuthorization = () => {
      if (!account) return false;

      const userEmail = account.username;
      const adminDomains = String(customFields.adminDomains).split(",");
      const externalAccessEmails = String(customFields.externalAccessEmails).split(",");
      const externalAccessDomains = String(customFields.externalAccessDomains).split(",");

      // Check if the user's email is in the allowed emails list
      if (externalAccessEmails.includes(userEmail)) return true;

      // Check if the user's email domain is in the allowed domains list
      const userDomain = userEmail.split("@")[1];
      if (adminDomains.includes(`@${userDomain}`) || externalAccessDomains.includes(`@${userDomain}`)) return true;

      return false;
    };

    setIsAuthorized(checkAuthorization());
  }, [account]);

  if (!isAuthenticated) {
    // If not authenticated, show the sign-in component
    return <SignInComponent />;
  } else if (!isAuthorized) {
    // If authenticated but not authorized, show the access request component
    return <AccessRequest />;
  } else {
    // Redirects after login or logout
    if (from === LOGOUT_PATH) {
      // Sign out logic here with MSAL, then redirect
      return <Redirect to={BASE} />;
    } else if (from === LOGIN_PATH) {
      // If logged in and on login path, redirect to base/home
      return <Redirect to={BASE} />;
    }
    // If authenticated and authorized, render the protected component
    return children;
  }
}
