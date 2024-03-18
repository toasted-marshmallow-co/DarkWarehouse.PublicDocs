import { MsalProvider } from "@azure/msal-react";
import useMsalAuth from "../hooks/useMsalAuth";

export default function Root({ children }) {
  const { msalInstance } = useMsalAuth();
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}
