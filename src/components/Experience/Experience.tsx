import React from "react";
import styles from "./Experience.module.css";
import { FaCode, FaHourglassStart } from "react-icons/fa";

const Experience: React.FC = () => {
    const experiences = [
        {
            company: "Yapiko Software House",
            role: "Prácticas de Ingeniería Informática",
            description: "Desarrollo y mantenimiento de una aplicación de escritorio: Uso de tecnologías backend (Java) y bases de datos (mySQL).",
            date: "Febrero 2019 - Abril 2019",
            icon: <FaHourglassStart />,
        },
        {
            company: "Yapiko Software House",
            role: "Desarrollador de Software",
            description: "Desarrollo de aplicaciones móviles y web, para clientes internacionales y producto propio.",
            date: "Mayo 2019 - Mayo 2024",
            icon: <FaCode />,
        },
    ];

    return (
        <section className={styles.experienceSection}>
            <h2 className={styles.title}>Experiencia</h2>
            <div className={styles.experienceList}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.experienceItem}>
                        <div className={styles.icon}>{exp.icon}</div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <span className={styles.company}>{exp.company}</span>
                                <span className={styles.date}>{exp.date}</span>
                            </div>
                            <div className={styles.role}>{exp.role}</div>
                            <div className={styles.description}>{exp.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
