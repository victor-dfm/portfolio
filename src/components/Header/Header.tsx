import React from "react";
import styles from "./Header.module.css";
import avatarImage from "../../assets/image1.jpg";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img src={avatarImage} alt="Avatar" className={styles.avatar} />
                <div className={styles.info}>
                    <h1 className={styles.name}>Víctor Domínguez Fernández-Marcote</h1>
                    <p className={styles.title}>Software Developer</p>
                    <p className={styles.location}><FaMapMarkerAlt /> Móstoles, Madrid, España</p>
                    <div className={styles.buttons}>
                        <a
                            href="mailto:victor.dguezfm@gmail.com"
                            className={`${styles.button} ${styles.emailButton}`}
                        >
                            <FaEnvelope className={styles.icon} />
                            victor.dguezfm@gmail.com
                        </a>
                        <a
                            href="https://github.com/victor-dfm"
                            className={styles.button}
                            title="GitHub"
                        >
                            <FaGithub className={styles.icon} />
                        </a>
                        <a
                            href="https://linkedin.com/in/víctor-domínguez-6766ab242"
                            className={styles.button}
                            title="LinkedIn"
                        >
                            <FaLinkedin className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
