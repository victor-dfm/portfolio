import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
    return (
        <section className={styles.contactSection}>
            <h2 className={styles.title}>Contacto</h2>
            <div className={styles.contactButtons}>
                <a href="mailto:victor.dguezfm@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    <FaEnvelope className={styles.icon} />
                    <span>victor.dguezfm@gmail.com</span>
                </a>
                <a href="https://github.com/victor-dfm" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    <FaGithub className={styles.icon} />
                </a>
                <a href="https://linkedin.com/in/víctor-domínguez-6766ab242" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    <FaLinkedin className={styles.icon} />
                </a>
            </div>
        </section>
    );
};

export default Contact;
