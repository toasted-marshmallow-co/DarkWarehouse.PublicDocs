import { useMsal } from "@azure/msal-react";
import useMsalAuth from "../../hooks/useMsalAuth";

export const SignInButton = () => {
  const { instance } = useMsal();
  const { loginRequest } = useMsalAuth();

  const handleLogin = () => {
    instance.loginPopup(loginRequest);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => handleLogin()}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        Login
      </button>
    </div>
  );
};
