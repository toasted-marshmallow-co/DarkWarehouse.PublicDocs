import React, { useEffect, useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useAccount, useMsal } from "@azure/msal-react";
import useMsalAuth from "../hooks/useMsalAuth";
import Login from "../components/ui-components/Login";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { customFields } = useMsalAuth();

  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [isAuthorized, setIsAuthorized] = useState(false);

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

  return (
    <React.Fragment>
      {customFields.enableAuth == "false" ? (
        <>{children}</>
      ) : isAuthorized ? (
        <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
      ) : (
        <UnauthenticatedTemplate>
          <Login />
        </UnauthenticatedTemplate>
      )}
    </React.Fragment>
  );
}
