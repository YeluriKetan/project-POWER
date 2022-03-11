import Header from "./../components/header";
import Head from "next/head";
import { getAllImagesLinks } from "../lib/gallery";
import Image from "next/image";
import galleryStyles from "../styles/Gallery.module.scss";
import Date from "../components/date";

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
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <Header gallery></Header>
      <main className={galleryStyles.main}>
        {allImagesLinks.map(({ title, date, link }) => (
          <div key={title} className={galleryStyles.image}>
            <Image
              src={link}
              width={400}
              height={300}
              objectFit="scale-down"
              alt="Yeluri Ketan"
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
    </>
  );
}
