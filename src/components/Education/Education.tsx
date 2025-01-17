import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import styles from "./Education.module.css";

const educationList = [
    {
        institution: "Universidad Politécnica de Madrid",
        description: "Grado en Ingeniería Informática ",
        icon: <FaGraduationCap />,
        status: "-",
    },
];

const Education: React.FC = () => {
    return (
        <section className={styles.educationSection}>
            <h2 className={styles.title}>Formación</h2>
            <div className={styles.educationList}>
                {educationList.map((edu, index) => (
                    <div key={index} className={styles.educationItem}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}>{edu.icon}</div>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.institution}>{edu.institution}</h3>
                            <p className={styles.description}>{edu.description}</p>
                        </div>
                        <div className={styles.status}>
                            <span className={styles.statusLabel}>{edu.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
