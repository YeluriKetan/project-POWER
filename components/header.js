import headerStyles from "../styles/header.module.scss";
import Link from "next/link";

export default function Header({ home, projects, gallery, about }) {
  return (
    <header className={headerStyles.headerBar}>
      <h1 className={headerStyles.name}>YELURI KETAN.</h1>
      <nav className={headerStyles.navBar}>
        <ul>
          <li className={home ? headerStyles.currentLink : ""}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={projects ? headerStyles.currentLink : ""}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className={gallery ? headerStyles.currentLink : ""}>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li className={about ? headerStyles.currentLink : ""}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
