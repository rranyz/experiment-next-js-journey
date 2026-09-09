import Link from "next/link";

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
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
