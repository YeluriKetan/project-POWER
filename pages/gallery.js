import Header from "./../components/header";
import Head from "next/head";
import { getAllImagesLinks } from "../lib/gallery";
import Image from "next/image";
import galleryStyles from "../styles/Gallery.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Date from "../components/date";
import Footer from "../components/footer";

export async function getStaticProps() {
  const allImagesLinks = getAllImagesLinks();
  return {
    props: {
      allImagesLinks,
    },
  };
}

export default function Gallery({ allImagesLinks }) {
  return (
    <div className={utilStyles.page}>
      <Head>
        <title>Gallery</title>
      </Head>
      <Header page="gallery"></Header>
      <main className={galleryStyles.main}>
        {allImagesLinks.map(({ title, date, link }) => (
          <div key={title} className={galleryStyles.image}>
            <Image
              src={link}
              width={400}
              height={300}
              style={{ objectFit: "scale-down" }}
              alt={title}
            />
            <div className={galleryStyles.overlay}>
              <p>{title}</p>
              <br />
              <p>
                <Date dateString={date} formatString="LLL dd, yyyy"></Date>
              </p>
            </div>
          </div>
        ))}
      </main>
      <Footer></Footer>
    </div>
  );
}
