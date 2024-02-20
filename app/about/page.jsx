import styles from "./about.module.css";
import { data } from "../lib/data";

const about = data.about;

export default function About() {
  return (
    <div className={styles.about__Wrapper}>
      <h2 className="global__Title">About</h2>
      <p className={styles.about__Paragraph}>{about.description}</p>
    </div>
  );
}
