"use client";

import { usePathname } from "next/navigation";
import { useRouterWrapper } from "../provider/RouterWrapperProvider";
import ExtendedLink from "./ExtendedLink";
import {
  PAGE_TRANSITION_ANALYTICS_PATHNAME,
  PAGE_TRANSITION_PATHNAME,
  PAGE_TRANSITION_SETTINGS_PATHNAME,
} from "@/src/constant/pathname";

export function NavLinks() {
  const pathname = usePathname();

  const router = useRouterWrapper();

  return (
    <nav className=" flex gap-4">
      <button onClick={router.back}>{`<`}</button>

      <ExtendedLink
        className={`link ${
          pathname === PAGE_TRANSITION_PATHNAME ? "active" : ""
        }`}
        href={PAGE_TRANSITION_PATHNAME}
      >
        Page Transition
      </ExtendedLink>

      <ExtendedLink
        className={`link ${
          pathname === PAGE_TRANSITION_ANALYTICS_PATHNAME ? "active" : ""
        }`}
        href={PAGE_TRANSITION_ANALYTICS_PATHNAME}
      >
        Analytics
      </ExtendedLink>

      <ExtendedLink
        className={`link ${
          pathname === PAGE_TRANSITION_SETTINGS_PATHNAME ? "active" : ""
        }`}
        href={PAGE_TRANSITION_SETTINGS_PATHNAME}
      >
        Settings
      </ExtendedLink>
    </nav>
  );
}
