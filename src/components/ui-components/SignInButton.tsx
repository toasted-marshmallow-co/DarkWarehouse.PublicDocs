import { useMsal } from "@azure/msal-react";
import useMsalAuth from "../../hooks/useMsalAuth";
import { MoveRight } from "lucide-react";

export const SignInButton = () => {
  const { instance } = useMsal();
  const { loginRequest } = useMsalAuth();

  const handleLogin = () => {
    instance.loginPopup(loginRequest);
  };

  return (
    <button
      onClick={() => handleLogin()}
      className="inline-flex items-center justify-center w-full px-4 py-3 text-lg font-bold tracking-wider text-white uppercase bg-blue-400 border border-blue-500 rounded-md shadow-sm cursor-pointer hover:bg-blue-400/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100 focus:ring-blue-700"
    >
      Login
      <MoveRight className="ml-2 size-4" />
    </button>
  );
};
