import { useMsal } from "@azure/msal-react";
import { MoveRight } from "lucide-react";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: "/",
    });
  };

  return (
    <>
      <button
        onClick={() => handleLogout()}
        className="inline-flex items-center justify-center w-full px-4 py-3 text-lg font-bold tracking-wider text-white uppercase bg-blue-400 border border-blue-500 rounded-md shadow-sm cursor-pointer hover:bg-blue-400/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100 focus:ring-blue-700"
      >
        Sign Out
        <MoveRight className="ml-2 font-normal size-4" />
      </button>
    </>
  );
};
