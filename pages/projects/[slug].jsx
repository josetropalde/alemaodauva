import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { StructuredText } from "react-datocms";
import styles from "../../styles/ProjectsPage.module.css";
import Head from "next/head";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import Link from "next/link";

export async function getStaticPaths() {
  const slugQuery = await request({
    query: `query MyQuery {
      allProjects {
        slug
      }
    }
    `,
  });
  return {
    paths: slugQuery.allProjects.map((post) => `/projects/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query MyQuery($slug: String) {
        project(filter: {slug: {eq: $slug}}) {
          title
          text {
            value
          }
          slug
          image {
            url
          }
        }
        moreProjects: allProjects(first: 4, filter: {slug: {neq: $slug}}) {
          title,
          slug
        }    
      }    
    `,
    variables: { slug: params.slug },
    preview,
  };
  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
      preview,
    },
  };
}

const ProjectsPage = (props) => {
  const { subscription, preview } = props;
  const {
    data: { site, project, moreProjects },
  } = useQuerySubscription(subscription);

  return (
    <>
      <Head>
        <title>{project.title} - Alemão da uva</title>
      </Head>

      <Header />
      <main>
        <div className={styles.projectPage}>
          <div className={styles.projectPage__content}>
            <h2>{project.title}</h2>
            <img src={project.image.url} alt />
            <StructuredText data={project.text} />
          </div>
        </div>
      </main>
      <Footer projectsData={moreProjects} projectPage={true} />
    </>
  );
};
export default ProjectsPage;
