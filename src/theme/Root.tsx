import { MsalProvider } from "@azure/msal-react";
import useMsalAuth from "../hooks/useMsalAuth";

export default function Root({ children }: { children: React.ReactNode }) {
  // if (String(process.env.NODE_ENV) !== "development") {
  const { msalInstance } = useMsalAuth();
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
  // }

  // console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  // return <>{children}</>;
}
