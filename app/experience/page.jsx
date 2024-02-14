"use client";

import Link from "next/link";
import styles from "./experience.module.css";
import { data } from "../lib/data";
import FadeReveal from "../ui/fadeReveal/fadeReveal";

const experience = data.experience;

function Experience() {
  return (
    <section className={styles.experience__Wrapper}>
      <h2 className="global__Title">Experience</h2>
      {experience.map((item, i) => {
        return (
          <FadeReveal className={styles.experience__Card} key={i + item} x={200} duration="0.5s" threshold={0.01}>

              <Link href={item?.link}>
                <h3 className={styles.experience__Company}>{item.company}</h3>
              </Link>
              <h4 className={styles.experience__Position}>{item.position}</h4>
              <p className={styles.experience__Description}>
                {item.description}
              </p>
              <p className={styles.experience__Dates}>
                {item.jobStart} - {item.jobEnd}
              </p>

          </FadeReveal>
        );
      })}
    </section>
  );
}

export default Experience;
