import Link from "next/link";
import { mono, title } from "../fonts";
import styles from "./title.module.css";
const myName = "jacques";
const lastName = "everiss";

export default function Title() {
  return (
    <Link href="/">
      <h1
        aria-label="Jacques"
        className={`${styles.title__FirstName} ${title.className}`}
      >
        {myName.split("").map((letter, i) => {
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
