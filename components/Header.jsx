import Link from "next/link";
import React from "react";
import { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuActive = menu
    ? `${styles.header} ${styles.header__mobile}`
    : `${styles.header}`;
  return (
    <>
      <header className={menuActive}>
        <div className={styles.header__logo}>
          <Link href={"/"}>
            <img src="/logo.png" />
          </Link>
        </div>
        <nav className={styles.header__menu}>
          <ul>
            <li>
              <Link href={"/"}>Ínicio</Link>
            </li>
            <li>
              <Link href={"#history"}>História</Link>
            </li>
            <li>
              <Link href={"#projects"}>Projetos</Link>
            </li>
            <li>
              <Link href={"#causes"}>Causas</Link>
            </li>
            <li>
              <Link target={"_blank"} href={"/"}>
                Doar
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => setMenu(!menu)}
          className={styles.header__toggle}
        ></div>
      </header>
    </>
  );
};
export default Header;
