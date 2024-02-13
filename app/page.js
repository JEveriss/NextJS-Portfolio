import Image from "next/image";
import styles from "./page.module.css";
import avatar from "./lib/images/avatar.png";
import { data } from "./lib/data";

const about = data.about;

export default function Home() {
  return (
    <section className={styles.home__Wrapper}>
      <h3 className={styles.home__Title}>Hello!</h3>
      <p className={styles.home__Paragraph}> {about.greeting}</p>

      <div className={styles.home__AvatarWrapper}>
        <Image
          className={styles.home__Avatar}
          height="300"
          alt="A photo of Jacques Everiss looking smug, yet polite"
          src={avatar}
        />
        <p className={styles.home__AvatarText}>Hello</p>
      </div>
    </section>
  );
}
