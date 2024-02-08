import Image from "next/image";
import styles from "./main.module.css";
import About from "./about/page";
import avatar from './lib/images/avatar.png'

export default function Home() {
  return (
    <div className={styles.home__Wrapper}>
      <h3 className={styles.home__Title}>Hello!</h3>
      <p className={styles.home__Paragraph}>
        {" "}
        Thank you for taking the time to visit my portfolio. I am frequently
        updating this site and trying new ideas out, so it might look a bit
        different the next time you visit.
      </p>
      <Image className={styles.home__Avatar} height={"300"} alt="Image of Jacques Everiss looking sexy" src={avatar}/>
    </div>
  );
}
