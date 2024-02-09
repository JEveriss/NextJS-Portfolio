"use client";

import { data } from "../lib/data";
import Link from "next/link";
import Image from "next/image";
import styles from "./projects.module.css";


const projects = data.projects;

function Projects() {
  return (
    <section id="Projects" className={styles.projects__Wrapper}>
    <h2 className={`${styles.projects__Header} global__Title`}>Projects</h2>
      {projects.map((project, i) => {
        return (
          <>

          <div className={styles.projects__Card} key={i}>
            <Link className={styles.projects__TitleWrapper} href={project.link}>
              <h3 className={styles.projects__Title}>{project.name}</h3>
              {project.image ? (
                <Image
                  className={styles.projects__Image}
                  alt={project.name}
                  src={project?.image}
                />
              ) : (
                <div
                  className={`${styles.projects__Image} ${styles.projects__Placeholder}`}
                >
                  Image coming soon
                </div>
              )}
            </Link>

            <p className={styles.projects__Description}>
              {project.description}
            </p>
            <ul className={styles.projects__List}>
              {project.techStack.sort().map((stack, i) => {
                return (
                  <li className={styles.projects__Pill} key={i}>
                    {stack}
                  </li>
                );
              })}
            </ul>
          </div>

          </>
        );
      })}
    </section>
  );
}

export default Projects;
