"use client";

import { usePathname } from "next/navigation";
import { useRouterWrapper } from "../provider/RouterWrapperProvider";
import ExtendedLink from "./ExtendedLink";

export function NavLinks() {
  const pathname = usePathname();

  const router = useRouterWrapper();

  return (
    <nav className=" flex gap-4">
      <button onClick={router.back}>{`<`}</button>
      <ExtendedLink
        className={`link ${pathname === "/" ? "active" : ""}`}
        href="/"
      >
        Home
      </ExtendedLink>

      <ExtendedLink
        className={`link ${pathname === "/about" ? "active" : ""}`}
        href="/example"
      >
        Example
      </ExtendedLink>
    </nav>
  );
}
