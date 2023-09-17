import headerStyles from "../styles/header.module.scss";
import Link from "next/link";

export default function Header({ page }) {
  return (
    <header className={headerStyles.headerBar}>
      <h1 className={headerStyles.name}>yeluri ketan.</h1>
      <nav className={headerStyles.navBar}>
        <ul>
          <li className={page === "home" ? headerStyles.currentLink : ""}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={page === "blog" ? headerStyles.currentLink : ""}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={page === "projects" ? headerStyles.currentLink : ""}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className={page === "gallery" ? headerStyles.currentLink : ""}>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li className={page === "about" ? headerStyles.currentLink : ""}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
