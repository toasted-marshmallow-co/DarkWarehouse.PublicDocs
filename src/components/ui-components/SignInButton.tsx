import { MoveRight } from "lucide-react";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus, PopupRequest } from "@azure/msal-browser";
import { useHistory } from "@docusaurus/router";

export const SignInButton = () => {
  const { instance, inProgress } = useMsal();
  const history = useHistory();

  const loginRequest: PopupRequest = {
    scopes: ["User.Read"],
  };

  const handleLogin = async () => {
    try {
      const loginResponse = await instance.loginPopup(loginRequest);
      if (loginResponse.account && loginResponse.account.idToken && inProgress === InteractionStatus.None) {
        history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={() => handleLogin()}
      className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold tracking-wider text-white bg-blue-400 border border-blue-500 rounded-md shadow-sm cursor-pointer hover:bg-blue-400/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-100 focus:ring-blue-700"
    >
      Login
      <MoveRight className="ml-2 size-4" />
    </button>
  );
};
