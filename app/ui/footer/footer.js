import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { data } from "@/app/lib/data";

const footerLinks = data.footerLinks;

function Footer() {
  return (
    <footer className={styles.footer__Wrapper}>
      <ul>
        {footerLinks.map((footerLink, i) => {
          return (
            <li key={`${i}${footerLink}`}>
              <Link href={footerLink.link}>
                <Image
                  className={styles.footer__Image}
                  alt={footerLink?.name}
                  src={footerLink?.img}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
