import styles from "./about.module.css";
import { data } from "../lib/data";

const about = data.about

export default function About() {
  return (
    <section className={styles.about__Wrapper}>
      <h2 className="global__Title">About</h2>
      <p>{about.description}</p>
    </section>
  );
}
