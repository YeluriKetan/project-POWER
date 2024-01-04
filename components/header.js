import headerStyles from "../styles/header.module.scss";
import Link from "next/link";

export default function Header({ page }) {
  return (
    <header className={headerStyles.headerBar}>
      <h1 className={headerStyles.name}>yeluri ketan.</h1>
      <nav className={headerStyles.navBar}>
        <ul>
          <li className={page === "home" ? headerStyles.currentLink : ""}>
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={page === "blog" ? headerStyles.currentLink : ""}>
            <Link legacyBehavior href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={page === "projects" ? headerStyles.currentLink : ""}>
            <Link legacyBehavior href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className={page === "gallery" ? headerStyles.currentLink : ""}>
            <Link legacyBehavior href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li className={page === "about" ? headerStyles.currentLink : ""}>
            <Link legacyBehavior href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
