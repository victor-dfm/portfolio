import React from "react";
import {FaApple, FaAndroid, FaReact} from "react-icons/fa";
import styles from "./Projects.module.css";
import rfm from "../../assets/rfm.jpeg";
import rfmImage from "../../assets/rfmImage.png";
import rfmInter from "../../assets/rfmInter.png";
import rfmInterImage from "../../assets/rfmInterImage.png";
import rfm24 from "../../assets/rfm24.jpeg";
import rfm24Image from "../../assets/rfm24Image.png";
import {BiLogoJavascript} from "react-icons/bi";

const projects = [
    {
        name: "Retro Football Management",
        description: "Creation, development and maintenance of the application",
        technologies: [{ name: "JavaScript", icon: <BiLogoJavascript /> },{ name: "React/React-Native", icon: <FaReact /> }],
        links: {
            apple: "https://apps.apple.com/gb/app/retro-football-management/id1383661436",
            android: "https://play.google.com/store/apps/details?id=com.rfm&hl=en&gl=US",
        },
        image: rfmImage,
        icon: rfm,
    },
    {
        name: "RFM International Football",
        description: "Creation, development and maintenance of the application",
        technologies: [{ name: "JavaScript", icon: <BiLogoJavascript /> },{ name: "React/React-Native", icon: <FaReact /> }],
        links: {
            apple: "https://apps.apple.com/us/app/rfm-international-football/id1616000230",
            android: "https://play.google.com/store/apps/details?id=com.rfmie&hl=en_GB&gl=US",
        },
        image: rfmInterImage,
        icon: rfmInter,
    },
    {
        name: "RFM 2024 Football Manager",
        description: "Creation, development and maintenance of the application",
        technologies: [{ name: "JavaScript", icon: <BiLogoJavascript /> },{ name: "React/React-Native", icon: <FaReact /> }],
        links: {
            apple: "https://apps.apple.com/gb/app/rfm-2024-football-manager/id6458144896",
            android: "https://play.google.com/store/apps/details?id=com.rfm24&hl=en&gl=US",
        },
        image: rfm24Image,
        icon: rfm24,
    },
];

const Projects: React.FC = () => {
    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.title}>Proyectos de Empresa</h2>
            <div className={styles.projectsList}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectItem}>
                        <div className={styles.iconContainer}>
                            <img src={project.icon} alt={project.icon} className={styles.projectIcon}/>
                        </div>
                        <div className={styles.projectInfo}>
                            <h3 className={styles.projectName}>{project.name}</h3>
                            <div className={styles.technologies}>
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className={styles.techBadge}>
                                        <div className={styles.techIcon}>{tech.icon}</div>
                                        <span className={styles.techName}>{tech.name}</span>
                                    </span>
                                ))}
                            </div>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.links}>
                                <a href={project.links.apple} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <FaApple />
                                </a>
                                <a href={project.links.android} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <FaAndroid />
                                </a>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={project.image} alt={project.name} className={styles.projectImage} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
