"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";
import { data } from "../lib/data";
import FadeReveal from "../ui/fadeReveal/fadeReveal";

const projects = data.projects;

function Projects() {
  return (
    <section id="Projects" className={styles.projects__Wrapper}>
      <h2 className="global__Title">Projects</h2>
      {projects.map((project, i) => {
        return (
          <>
            <FadeReveal x={200} duration="0.5s" threshold={0.01}>
              <div className={styles.projects__Card} key={i + project}>
                <Link
                  className={styles.projects__TitleWrapper}
                  href={project.link}
                >
                  <h3 className={styles.projects__Title}>{project.name}</h3>
                  {project.image ? (
                    <Image
                      className={styles.projects__Image}
                      alt={project.name}
                      src={project?.image}
                      height="auto"
                      width="auto"
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
                      <li className={styles.projects__Pill} key={i + stack}>
                        {stack}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeReveal>
          </>
        );
      })}
    </section>
  );
}

export default Projects;
