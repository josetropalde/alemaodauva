import Link from "next/link";
import React from "react";
import styles from "../styles/Projects.module.css";

const Projects = (props) => {
  const { projectsData } = props;
  return (
    <>
      <section className={styles.projects} id="projects">
        <h2>Meus Projetos</h2>
        <div className={styles.projects__itens}>
          {projectsData.allProjects.map((item, index) => {
            const trimmedText =
              item.text.value.document.children[0].children[0].value;
            return (
              <article className={styles.projects__item} key={index}>
                <div className={styles.projects__image}>
                  <img src={item.image.url} alt />
                </div>
                <div className={styles.projects__content}>
                  <h3>{item.title}</h3>
                  <p>{trimmedText.slice(0, 250) + "..."}</p>
                  <Link href={`/projects/${item.slug}`}>
                    <a>Ler mais</a>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <Link href={`/projects`}>
          <a>Ver todos</a>
        </Link>
      </section>
    </>
  );
};
export default Projects;
