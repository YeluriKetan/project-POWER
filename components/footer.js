import Link from "next/link";
import footerStyles from "../styles/footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={footerStyles.footerDiv}>
      <article className={footerStyles.iconArticle}>
        <p>Connect:</p>
        <a
          href="https://www.linkedin.com/in/ketanyeluri/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/linkedin.svg"
            width="40"
            height="40"
            alt="Link to my LinkedIn profile"
            priority
          />
        </a>
        <a
          href="https://github.com/YeluriKetan/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/github.png"
            width="40"
            height="40"
            alt="Link to my Github account"
            priority
            className={footerStyles.githubIcon}
          />
        </a>
        <a
          href="https://www.instagram.com/legend_for_eternity/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/instagram.png"
            width="40"
            height="40"
            alt="Link to my Instagram account"
            priority
          />
        </a>
      </article>
      <article>
        <p>
          Meticulously handcrafted with ❤️ using{" "}
          <Link
            legacyBehavior
            href="/projects/power"
            rel="noreferrer"
            target="blank"
          >
            Nextjs
          </Link>
        </p>
      </article>
    </footer>
  );
}
