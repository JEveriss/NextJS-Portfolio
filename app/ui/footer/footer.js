import Link from "next/link";
import styles from "./footer.module.css";
import "./footerIcons.css";
import {data} from '../../lib/data'
import { LinkedInIcon, GitHubIcon } from "./footerIcons";

const footerLinks = data.footerLinks;

function Footer() {
  return (
    <footer className={styles.footer__Wrapper}>
      <ul className={styles.footer__IconList}>
        {/* {footerLinks.map((footerLink) => {
          return (
            <li key={footerLink.name}>
              <Link href={footerLink.link}>
                <Image
                  className={styles.footer__Image}
                  alt={footerLink?.name}
                  src={footerLink?.img}
                />
              </Link>
            </li>
          );
        })} */}
        <li className={styles.footer__IconLink}>
          <Link href={footerLinks[1]?.link}>
            <LinkedInIcon />
          </Link>
        </li>
        <li>
          <Link href={footerLinks[0]?.link}>
            <GitHubIcon />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
