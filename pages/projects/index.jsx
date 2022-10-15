import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../../styles/AllProjects.module.css";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import Link from "next/link";

const PROJECTS_QUERY = `
query {
  allProjects {
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
const AllProjects = (props) => {
  const { subscription } = props;

  const { data, error, status } = useQuerySubscription(subscription);

  return (
    <>
      <Head>
        <title>Todos os projetos - Alemão da uva</title>
      </Head>

      <Header />
      <main>
        <section className={styles.allProjects}>
          <div className={styles.allProjects__itens}>
            {data.allProjects.map((item, index) => {
              const trimmedText =
                item.text.value.document.children[0].children[0].value;
              return (
                <article className={styles.allProjects__item} key={index}>
                  <div className={styles.allProjects__image}>
                    <img src={item.image.url} alt />
                  </div>
                  <div className={styles.allProjects__content}>
                    <h3>{item.title}</h3>
                    <p>{trimmedText.slice(0, 400) + "..."}</p>
                    <Link href={`/projects/${item.slug}`}>
                      <a>Ler mais</a>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer projectsData={data} projectPage={false} />
    </>
  );
};
export default AllProjects;
