import Link from "next/link";
import { title } from "../fonts";
import styles from "./title.module.css";

const firstName = "jacques";
const lastName = "everiss";

export default function Title() {
  return (
    <Link href="/" className={styles.title__Wrapper}>
      <h1
        aria-label="Jacques"
        className={`${styles.title__FirstName} ${title.className}`}
      >
        {firstName.split("").map((letter, i) => {
          return (
            <span className={styles.title__Letter} key={i}>
              {letter}
            </span>
          );
        })}
      </h1>
      <h1
        aria-label="Everiss"
        className={`${styles.title__LastName} ${title.className}`}
      >
        {lastName.split("").map((letter, i) => {
          return (
            <span className={styles.title__Letter} key={i}>
              {letter}
            </span>
          );
        })}
      </h1>
    </Link>
  );
}
