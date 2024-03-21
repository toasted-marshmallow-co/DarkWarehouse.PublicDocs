import React from "react";
import clsx from "clsx";
import { SignOutButton } from "@site/src/components/ui-components/SignOutButton";
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      // className={clsx("footer", {
      //   "footer--dark": style === "dark",
      // })}
      className={clsx("footer", "bg-neutral-100 dark:bg-neutral-900")}
    >
      <div className="container container-fluid">
        <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row">
          {links}
          <div className="flex lg:items-end ">
            <SignOutButton />
          </div>
        </div>

        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
