"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navigation.module.css";
import '../../lib/globals.css'

const navLinks = ["About", "Projects", "Experience"];

function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation__Wrapper}>
      <ul>
        {navLinks.map((navLink, i) => {
          return (
            <li className={styles.navigation__Link} key={`${i}${navLink}`}>
              <Link
                className={`${styles.navigation__LinkItem} ${
                  pathname === `/${navLink.toLowerCase()}`
                    ? `${styles.navigation__CurrentLink}`
                    : ""
                } hoverAccent`}
                href={`${navLink.toLowerCase()}`}
              >
                {navLink}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
