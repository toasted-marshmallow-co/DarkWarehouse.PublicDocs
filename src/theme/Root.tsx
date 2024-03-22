import { MsalProvider } from "@azure/msal-react";
import useMsalAuth from "../hooks/useMsalAuth";
import { AuthCheck } from "../components/Auth/AuthCheck";

export default function Root({ children }: { children: React.ReactNode }) {
  const { msalInstance } = useMsalAuth();
  return (
    <MsalProvider instance={msalInstance}>
      <AuthCheck>{children}</AuthCheck>
    </MsalProvider>
  );
}
