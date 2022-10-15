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
              <Link href="/#history">História</Link>
            </li>
            <li>
              <Link href="/#projects">Projetos</Link>
            </li>
            <li>
              <Link href="/#causes">Causas</Link>
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
            <Link href="">
              <img src="/facebook 1.png" alt />
            </Link>
          </div>
          <div className={styles.social}>
            <Link href="">
              <img src="/envelope-solid.png" alt />
            </Link>
          </div>
          <div className={styles.social}>
            <Link href="">
              <img src="/whatsapp-brands.png" alt />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
