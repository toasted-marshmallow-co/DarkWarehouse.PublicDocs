import { MsalAuthenticationResult } from "@azure/msal-react";

export const ErrorComponent: React.FC<MsalAuthenticationResult> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl font-semibold text-red-600">An Error Occurred: {error ? error.errorCode : "unknown error"}</p>
    </div>
  );
};
