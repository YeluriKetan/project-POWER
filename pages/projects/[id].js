import Head from "next/head";
import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Date from "../../components/date";
import utilStyles from "./../../styles/utils.module.scss";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article className={utilStyles.resizeImages}>
        <h1 className={utilStyles.headingxl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} formatString="LLL yyyy" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  );
}
