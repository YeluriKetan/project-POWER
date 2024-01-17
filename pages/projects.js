import "@mantine/core/styles.layer.css";
import Header from "./../components/header";
import Link from "next/link";
import Date from "./../components/date";
import utilStyles from "../styles/utils.module.scss";
import projectsStyles from "../styles/Projects.module.scss";
import { getSortedProjectsData } from "../lib/projects";
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
import { CodeIcon } from "../components/codeIcon";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Project({ allProjectsData }) {
  const uniqTech = Array.from(
    new Set(allProjectsData.flatMap((e) => e.tech))
  ).sort();
  const uniqTags = Array.from(
    new Set(allProjectsData.flatMap((e) => e.tags))
  ).sort();
  const [selectedTech, setTech] = useState([]);
  const [selectedTags, setTags] = useState([]);
  return (
    <div className={utilStyles.page}>
      <Head>
        <title>Projects</title>
      </Head>
      <Header page="projects"></Header>
      <MantineProvider theme={DEFAULT_THEME}>
        <main className={projectsStyles.main}>
          <MultiSelect
            label="Tech Stack"
            placeholder="Pick a tech"
            data={uniqTech}
            searchable
            clearable
            nothingFoundMessage="No such tech"
            checkIconPosition="right"
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
            }}
            value={selectedTech}
            onChange={setTech}
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
          <MultiSelect
            label="Tags"
            placeholder="Pick a topic"
            data={uniqTags}
            searchable
            clearable
            nothingFoundMessage="No such tags"
            checkIconPosition="right"
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
            }}
            value={selectedTags}
            onChange={setTags}
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
            {allProjectsData.flatMap(
              ({ id, date, title, intro, tech, tags }) => {
                if (
                  !(
                    selectedTech.length === 0 ||
                    tech.some((v) => selectedTech.includes(v))
                  )
                ) {
                  return [];
                }
                if (
                  !(
                    selectedTags.length === 0 ||
                    tags.some((v) => selectedTags.includes(v))
                  )
                ) {
                  return [];
                }
                return (
                  <li className={projectsStyles.listItem} key={id}>
                    <Link legacyBehavior href={`/projects/${id}`}>
                      <a className={projectsStyles.link}>
                        <div className={projectsStyles.div}>
                          <h3 className={projectsStyles.projectsTitle}>
                            {title}
                          </h3>
                          <small className={utilStyles.lightText}>
                            <Date dateString={date} formatString="LLL yyyy" />
                          </small>
                          <br />
                          <small className={utilStyles.lightText}>
                            {intro}
                          </small>
                          <br />
                          {tech.sort().map((v) => (
                            <Badge
                              key={v}
                              classNames={{
                                root: projectsStyles.badge,
                                label: projectsStyles.badgeLabel,
                                section: projectsStyles.badgeSection,
                              }}
                              leftSection={<CodeIcon size={16} />}
                            >
                              {v}
                            </Badge>
                          ))}
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
              }
            )}
          </ul>
        </main>
      </MantineProvider>
      <Footer></Footer>
    </div>
  );
}
