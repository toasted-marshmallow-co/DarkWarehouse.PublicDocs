import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
// import "dotenv/config";
require("dotenv").config();

const config: Config = {
  title: "Dark Warehouse",
  tagline: "Intelligent software for efficiently managing traffic in an Omni-Mole warehouse.",
  favicon: "img/favicon.ico",

  customFields: {
    adminDomains: process.env.REACT_APP_ADMIN_DOMAINS as string,
    externalAccessEmails: process.env.REACT_APP_EXTERNAL_ACCESS_EMAILS as string,
    externalAccessDomains: process.env.REACT_APP_EXTERNAL_ACCESS_DOMAINS as string,
    msalClientId: process.env.REACT_APP_MSAL_CLIENT_ID as string,
    msalTenantId: process.env.REACT_APP_MSAL_TENANT_ID as string,
    msalSecretId: process.env.REACT_APP_MSAL_SECRET_ID as string,
    msalSecretValue: process.env.REACT_APP_MSAL_SECRET_VALUE as string,
    // msalRedirectUri:
    //   process.env.NODE_ENV === "production"
    //     ? (process.env.REACT_APP_MSAL_REDIRECT_URI_PRODUCTION as string)
    //     : (process.env.REACT_APP_MSAL_REDIRECT_URI_DEVELOPMENT as string),
    msalRedirectUri: process.env.REACT_APP_MSAL_REDIRECT_URI_PRODUCTION as string,
  },

  // Set the production url of your site here
  url: "https://docs.darkwarehouse.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "toasted-marshmallow-co", // Usually your GitHub org/user name.
  projectName: "DarkWarehouse.PublicDocs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Add static directories
  staticDirectories: ["static"],

  // Add Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      hideOnScroll: true,
      title: "Dark Warehouse",
      logo: {
        alt: "Dark Warehouse Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/toasted-marshmallow-co/DarkWarehouse.PublicDocs",
          label: "Repository",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Documentation",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        {
          title: "Resources",
          items: [
            {
              label: "Website",
              href: "https://darkwarehouse.io",
            },
            {
              label: "Toasted Marshmallow",
              href: "https://toastedmarshmallow.co",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dark Warehouse.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // for tailwind css:
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
