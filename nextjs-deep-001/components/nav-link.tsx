"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface NavLinkProps {
  href: string;
}

function NavLink({ href, children }: PropsWithChildren<NavLinkProps>) {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}

export default NavLink;
