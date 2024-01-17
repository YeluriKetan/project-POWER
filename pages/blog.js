import "@mantine/core/styles.layer.css";
import Header from "../components/header";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.scss";
import projectsStyles from "../styles/Projects.module.scss";
import { getSortedBlogData } from "../lib/blog";
import Head from "next/head";
import Footer from "../components/footer";
import {
  MultiSelect,
  MantineProvider,
  DEFAULT_THEME,
  Badge,
} from "@mantine/core";
import { useState } from "react";
import { HashIcon } from "../components/hashIcon";

export async function getStaticProps() {
  const allBlogData = getSortedBlogData();
  return {
    props: {
      allBlogData,
    },
  };
}

export default function Blog({ allBlogData }) {
  const uniqMetaData = Array.from(
    new Set(allBlogData.flatMap((e) => e.tags))
  ).sort();
  const [value, setValue] = useState([]);
  return (
    <div className={utilStyles.page}>
      <Head>
        <title>Blog</title>
      </Head>
      <Header page="blog"></Header>
      <MantineProvider theme={DEFAULT_THEME}>
        <main className={projectsStyles.main}>
          <MultiSelect
            label="Tags"
            placeholder="Pick a tag"
            data={uniqMetaData}
            searchable
            clearable
            nothingFoundMessage="No such tags"
            checkIconPosition="right"
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
              offset: 1,
            }}
            value={value}
            onChange={setValue}
            classNames={{
              root: projectsStyles.msRoot,
              label: projectsStyles.msLabel,
              input: projectsStyles.msInput,
              pill: projectsStyles.msPill,
              pillsList: projectsStyles.msPillsList,
              dropdown: projectsStyles.msDropdown,
              option: projectsStyles.msOption,
            }}
          />
          <ul className={projectsStyles.list}>
            {allBlogData.flatMap(({ id, date, title, intro, tags }) => {
              if (value.length === 0 || tags.some((v) => value.includes(v))) {
              } else {
                return [];
              }
              return (
                <li className={projectsStyles.listItem} key={id}>
                  <Link legacyBehavior href={`/blog/${id}`}>
                    <a className={projectsStyles.link}>
                      <div className={projectsStyles.div}>
                        <h3 className={projectsStyles.projectsTitle}>
                          {title}
                        </h3>
                        <small className={utilStyles.lightText}>
                          <Date dateString={date} formatString="LLL yyyy" />
                        </small>
                        <br />
                        <small className={utilStyles.lightText}>{intro}</small>
                        <br />
                        {tags.sort().map((v) => (
                          <Badge
                            key={v}
                            classNames={{
                              root: projectsStyles.badge,
                              label: projectsStyles.badgeLabel,
                              section: projectsStyles.badgeSection,
                            }}
                            leftSection={<HashIcon size={16} />}
                          >
                            {v}
                          </Badge>
                        ))}
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </main>
      </MantineProvider>
      <Footer></Footer>
    </div>
  );
}
