import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import {} from "@docusaurus/router";

import styles from "./index.module.css";
import useMsalAuth from "../hooks/useMsalAuth";
import { useAccount, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import Login from "../components/ui-components/Login";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", "bg-neutral-100  dark:bg-neutral-900", styles.heroBanner)}>
      <div className="container py-12">
        <Heading as="h1" className="hero__title text-neutral-800 dark:text-neutral-200">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle text-neutral-700 dark:text-neutral-400 ">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="px-4 py-2 font-bold text-white bg-blue-400 rounded-md hover:no-underline hover:bg-blue-400/90 hover:text-white"
            to="/docs/Introduction"
          >
            Dark Warehouse Docs ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const { customFields } = useMsalAuth();

  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuthorization = () => {
      if (!account) return false;

      const userEmail = account.username;
      const adminDomains = String(customFields.adminDomains).split(",");
      const externalAccessEmails = String(customFields.externalAccessEmails).split(",");
      const externalAccessDomains = String(customFields.externalAccessDomains).split(",");

      // Check if the user's email is in the allowed emails list
      if (externalAccessEmails.includes(userEmail)) return true;

      // Check if the user's email domain is in the allowed domains list
      const userDomain = userEmail.split("@")[1];
      if (adminDomains.includes(`@${userDomain}`) || externalAccessDomains.includes(`@${userDomain}`)) return true;

      return false;
    };

    setIsAuthorized(checkAuthorization());
  }, [account]);

  return (
    <>
      {isAuthorized ? (
        <>
          <Layout title={`${siteConfig.title}`} description="Dark Warehouse Docs">
            <HomepageHeader />
            <main>
              <HomepageFeatures />
            </main>
          </Layout>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
