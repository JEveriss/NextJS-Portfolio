import styles from "./page.module.css";
import "./lib/globals.css";
import { Kumbh_Sans } from "next/font/google";
import Home from "./page";
import EmailLink from "./ui/emailLink/emailLink";
import Experience from "./experience/page";
import Footer from "./ui/footer/footer";
import Navigation from "./ui/navigation/navigation";
import Projects from "./projects/page";
import Title from "./ui/title/title";

const kumbh = Kumbh_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Jacques Everiss",
  description: "Jacques Everiss - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <div className={styles.main__Wrapper}>
          <div className={styles.main__Left}>
            <Title />
            <Navigation />
            <span className={styles.main__EmailLink}>
              <EmailLink />
            </span>
            <Footer />
          </div>
          <div className={`${styles.main__Right} ${styles.main__RightDesktop}`}>
            {children}
          </div>
          <div className={`${styles.main__Right} ${styles.main__RightMobile}`}>
            <Home />
            
            <Projects />
            <Experience />
          </div>
        </div>
      </body>
    </html>
  );
}
