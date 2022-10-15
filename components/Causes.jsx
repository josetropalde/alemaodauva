import React from "react";
import styles from "../styles/Causes.module.css";

const Causes = () => {
  const causesData = [
    {
      src: "https://via.placeholder.com/150x150",
      title: "Causa 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam fugiat accusantium quod perferendis ",
    },
    {
      src: "https://via.placeholder.com/150x150",
      title: "Causa 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam fugiat accusantium quod perferendis ",
    },
    {
      src: "https://via.placeholder.com/150x150",
      title: "Causa 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam fugiat accusantium quod perferendis ",
    },
    {
      src: "https://via.placeholder.com/150x150",
      title: "Causa 4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam fugiat accusantium quod perferendis ",
    },
  ];
  return (
    <>
      <section className={styles.causes} id="causes">
        <h2>Causas que apoio</h2>
        <div className={styles.causes__itens}>
          {causesData.map((item) => {
            return (
              <div className={styles.causes__item}>
                <img src={item.src} alt />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Causes;
