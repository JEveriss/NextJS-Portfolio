import styles from "./about.module.css";
import { mono } from "../ui/fonts";

export default function About() {
  return (
    <section className={styles.about__Wrapper} >
      {/* <BlockAbout /> */}
      <h2 className="global__Title">About</h2>
      <p>
        Yeah, you know, math, English... What...? Science... What else?
        Geography, history, Latin, Spanish, French, Latin... Math. Did I say
        that already? Anyway, all the stuff you want your kids to know,
        it&apos;s been covered, OK?
        <br />
        So... it was great to meet you all, and drive safe.
      </p>
    </section>
  );
}
