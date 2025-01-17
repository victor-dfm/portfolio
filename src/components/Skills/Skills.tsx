import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNode, FaJava } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { SiSentry, SiJest, SiRedux, SiMongodb, SiRealm, SiMysql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import styles from "./Skills.module.css";

const skills = [
    { name: "JavaScript", icon: <BiLogoJavascript /> },
    { name: "TypeScript", icon: <BiLogoTypescript /> },
    { name: "React/React-Native", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "Git/GitHub", icon: <FaGitAlt /> },
    { name: "Sentry", icon: <SiSentry /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Realm", icon: <SiRealm /> },
    { name: "Java", icon: <FaJava /> },
    { name: "MySQL", icon: <GrMysql /> },
];

const Skills: React.FC = () => {
    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.title}>Tecnologías</h2>
            <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <div className={styles.icon}>{skill.icon}</div>
                        <span className={styles.name}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
