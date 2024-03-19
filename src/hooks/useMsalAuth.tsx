import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Configuration, PublicClientApplication, LogLevel, PopupRequest } from "@azure/msal-browser";
import { useEffect, useMemo } from "react";

/**
 * Custom hook for using MSAL authentication in a React component.
 *
 * @returns An object containing the customFields and msalInstance.
 */
export default function useMsalAuth() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const msalConfig: Configuration = {
    auth: {
      clientId: String(customFields.msalClientId),
      authority: `https://login.microsoftonline.com/${String(customFields.msalTenantId)}`,
      redirectUri: String(customFields.msalRedirectUri),
      postLogoutRedirectUri: "/",
      navigateToLoginRequestUrl: false,
    },
    cache: {
      cacheLocation: "sessionStorage", // "sessionStorage" or"localStorage"
      storeAuthStateInCookie: false,
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case LogLevel.Error:
              console.error(message);
              return;
            case LogLevel.Info:
              console.info(message);
              return;
            case LogLevel.Verbose:
              console.debug(message);
              return;
            case LogLevel.Warning:
              console.warn(message);
              return;
            default:
              return;
          }
        },
      },
      allowNativeBroker: false,
    },
  };

  const msalInstance = useMemo(() => new PublicClientApplication(msalConfig), []);

  useEffect(() => {
    const handleInit = async () => {
      await msalInstance.initialize();
    };

    handleInit();
  }, [msalInstance]);

  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  const loginRequest: PopupRequest = {
    scopes: ["User.Read"],
  };

  // Add here the endpoints for MS Graph API services you would like to use.
  const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  };

  return {
    customFields,
    msalInstance,
    loginRequest,
    graphConfig,
  };
}
