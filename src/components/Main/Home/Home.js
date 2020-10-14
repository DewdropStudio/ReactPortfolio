import React from "react";
import styles from "./Home.module.css";
import { RoundButton } from "./RoundButton";
import { contact as contactData } from "../../../assets/data/contact";

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.avatar}>
        <img src={contactData.avatar.src} alt={contactData.avatar.alt} />
      </div>
      <section className={styles.hello}>
        <p>Hello!</p>
        
      </section>
      <section className={styles.button_group}>
        <RoundButton text="My Resume" target="nav_resume" />
        <RoundButton text="My Work" target="nav_projects" />
        
      </section>
      <p className={styles.intro}>
      My name is Rocio Avila and I am currently working at Northwestern University. My journey begins with me obtaining a bachelor’s in chemistry and working at a Biomedical Engineering Lab in the Evanston campus. I decided to sign up for the NU Bootcamp to learn the basics of web development to later explore the application of programming languages in chemistry. This opportunity will also help me expand on my skills set and guide me through my career path. 
        <br />
        <br />
      </p>
    </section>
  );
};
