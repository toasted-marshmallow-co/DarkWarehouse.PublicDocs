import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { SignInButton } from "../components/ui-components/SignInButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <AuthenticatedTemplate>
        <p>At least one account is signed in!</p>
        {children}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div className="flex items-center justify-center min-h-screen gap-4 min-w-screen">
          <p>No users are signed in!</p>
          <SignInButton />
        </div>
      </UnauthenticatedTemplate>
    </React.Fragment>
  );
}
