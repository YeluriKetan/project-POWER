import Header from "./../components/header";
import Link from "next/link";
import utilStyles from "../styles/utils.module.scss";

export default function Custom404() {
  return (
    <>
      <Header></Header>
      <main className={utilStyles.flexVertically}>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </main>
    </>
  );
}
