import Link from "next/link";

import NavLink from "@/components/nav-link";

function MainHeader() {
  return (
    <header className="main-header">
      <div className="logo">NextNews</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
