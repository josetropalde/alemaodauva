import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import History from "../components/History";
import styles from "../styles/Index.module.css";
import Projects from "../components/Projects";
import Causes from "../components/Causes";
import Footer from "../components/Footer";
import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";

const PROJECTS_QUERY = `
query {
  allProjects(first: 4) {
    id
    title
    text {
      value
    }
    image {
      url
    }
    slug
  }
}
`;

export async function getStaticProps(context) {
  const graphqlRequest = {
    query: PROJECTS_QUERY,
    includeDrafts: context.preview,
  };
  return {
    props: {
      subscription: context.preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Home(props) {
  const { subscription } = props;

  const { data, error, status } = useQuerySubscription(subscription);
  return (
    <>
      <Head>
        <title>Alemão Da Uva</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <History />
        <Projects projectsData={data} />
        <Causes />
      </main>

      <Footer projectsData={data} projectPage={false} />
    </>
  );
}
