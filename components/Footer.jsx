import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = ({ projectsData, projectPage }) => {
  const data = projectPage ? projectsData : projectsData.allProjects;

  return (
    <>
      <footer className={styles.footer}>
        <nav className={styles.footer__menu}>
          <h2>Menu</h2>
          <ul>
            <li>
              <Link href="/">Ínicio</Link>
            </li>
            <li>
              <a href="/#history">História</a>
            </li>
            <li>
              <a href="/#projects">Projetos</a>
            </li>
            <li>
              <a href="/#causes">Causas</a>
            </li>
          </ul>
        </nav>
        <nav className={styles.footer__projects}>
          <h2>Últimos Projetos</h2>
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={`/projects/${item.slug}`}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.footer__socials}>
          <h2>Redes Sociais</h2>
          <div className={styles.social}>
            <a href="">
              <img src="/facebook 1.png" alt />
            </a>
          </div>
          <div className={styles.social}>
            <a href="">
              <img src="/envelope-solid.png" alt />
            </a>
          </div>
          <div className={styles.social}>
            <a href="">
              <img src="/whatsapp-brands.png" alt />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
