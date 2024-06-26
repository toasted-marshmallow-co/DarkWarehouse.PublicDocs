import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

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

  return (
    <>
      <Layout title={`${siteConfig.title}`} description="Dark Warehouse Docs">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}
