import Header from "./../components/header";
import Link from "next/link";
import utilStyles from "../styles/utils.module.scss";
import Footer from "../components/footer";

export default function Custom404() {
  return (
    <div className={utilStyles.page}>
      <Header></Header>
      <main className={utilStyles.flexVertically}>
        <h1>404 - Page Not Found</h1>
        <Link legacyBehavior href="/">
          <a>← Back to home</a>
        </Link>
      </main>
      <Footer></Footer>
    </div>
  );
}
