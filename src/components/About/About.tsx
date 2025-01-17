import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>Sobre mí</h2>
            <p className={styles.description}>
                Desarrollador Frontend con 5 años de experiencia. Entusiasta del diseño web y móvil e implementación de innovadoras
                innovadoras y el desarrollo de nuevas aplicaciones.
            </p>
        </section>
    );
};

export default About;
