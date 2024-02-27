import Header from "./../components/header";
import Head from "next/head";
import { getAllImagesLinks } from "../lib/gallery";
import Image from "next/image";
import galleryStyles from "../styles/Gallery.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Date from "../components/date";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const allImagesLinks = await getAllImagesLinks();
  return {
    props: {
      allImagesLinks,
    },
  };
}

export default function Gallery({ allImagesLinks }) {
  const [imageWidth, setImageWidth] = useState(500);

  useEffect(() => {
    function handleWindowResize() {
      setImageWidth(window.innerWidth < 600 ? 300 : 500);
    }

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={utilStyles.page}>
      <Head>
        <title>Gallery</title>
      </Head>
      <Header page="gallery"></Header>
      <main className={galleryStyles.mainGrid}>
        {allImagesLinks.map(({ title, date, link, width, height, ratio }) => (
          <div key={title} className={galleryStyles.image}>
            <Image
              src={link}
              width={imageWidth}
              height={(imageWidth / width) * height}
              // fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain", borderRadius: "3px" }}
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
