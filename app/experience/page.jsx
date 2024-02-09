import React from "react";
import styles from "./experience.module.css";
import { data } from "../lib/data";

const experience = data.experience;

function Experience() {
  return (
    <section className={styles.experience__Wrapper}>
    <h2 className="global__Title">Experience</h2>
      {experience.map((item, i) => {
        return (
          <div key={i} className={styles.experience__Card}>
            <h3 className={styles.experience__Company}>{item.company}</h3>
            <h4 className={styles.experience__Position}>{item.position}</h4>
            <p className={styles.experience__Description}>{item.description}</p>
            <p className={styles.experience__Dates}>
              {item.jobStart} - {item.jobEnd}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default Experience;
