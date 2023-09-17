import Head from "next/head";
import Layout from "../../components/layout";
import { getAllBlogIds, getBlogData } from "../../lib/blog";
import Date from "../../components/date";
import idStyles from "./../../styles/Id.module.scss";

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
  return {
    props: {
      blogData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Blog({ blogData }) {
  return (
    <Layout header_highlight="blog" parent_page="Blog">
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article className={idStyles.articleContainer}>
        <h1 className={idStyles.articleTitle}>{blogData.title}</h1>
        <div className={idStyles.articleDate}>
          <Date dateString={blogData.date} formatString="LLL yyyy" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </article>
    </Layout>
  );
}
