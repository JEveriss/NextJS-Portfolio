import FullNelsonPage from "../lib/images/FullNelsonPage.png";
import RandomMtGCardPAge from "../lib/images/RandomMtGCardPage.png";
import TheIvyHousePage from "../lib/images/TheIvyHousePage.png";
import styles from "../experience/experience.module.css";

export const data = {
  experience: [
    {
      company: "Freelance",
      position: "Frontend Developer",
      link: "/",
      jobStart: "01/09/2023",
      jobEnd: "Present",
      description: (
        <span>
          I have created several products for local businesses in my community,
          while exploring and experimenting with new frameworks and
          methodologies.
        </span>
      ),
    },
    {
      company: "383 Project",
      position: "Associate Frontend Engineer",
      link: "https://www.383project.com/",
      jobStart: "01/05/2022",
      jobEnd: "01/09/2023",
      description: (
        <span>
          At my time at 383 I worked as part of the Hilton Hotels Product Team
          where I contributed to feature development, maintaining existing{" "}
          <b className={styles.global__Emphasise}>React.js</b> components, and
          reducing technical debt that had accrued over the 9 year lifespan of
          the project.
          <br />I was also worked with the Support Team dealing with time
          sensitive and often urgent SLAs. I also led the development of
          projects including building a{" "}
          <b className={styles.global__Emphasise}>WordPress</b> site to show the
          company’s cross-browser compatibility to clients and building a
          working <b className={styles.global__Emphasise}>Shopify</b> prototype
          that could be demoed to clients
        </span>
      ),
    },
    {
      company: "Meet Bernard",
      position: "Store Manager",
      link: "https://www.meetbernard.com/",
      jobStart: "20/09/2020",
      jobEnd: "30/10/2021",
      description: (
        <span>
          Meet Bernard is a family owned, independent clothing boutique in South
          East London that I managed, before leaving to pursue the{" "}
          <b className={styles.global__Emphasise}>School of Code Bootcamp</b>.
          <br />
          During my time I designed and wrote the employee handbook, analysed
          previous sales data to make informed decisions when ordering new
          stock, dealt with hiring and training of staff
          <br />
        </span>
      ),
    },
  ],
  about: {
    fullName: "Jacques Everiss",
    email: "Jacques.Everiss@Gmail.com",
    greeting: (
      <>
        Thank you for taking the time to visit my portfolio. I am frequently
        updating this site and trying new ideas out, so it might look a bit
        different the next time you visit.
        <br />I am Frontend Developer with a passion for what I do
      </>
    ),
    description: (
      <>
        After a decade long career in retail working for various brands and
        progressing to the position of Store Manager, I was made redundant as a
        result of the Coronavirus pandemic. Twice. Although deeply upsetting,
        this gave me the opportunity to rethink some decisions and consider my
        career choices.
        <br />
        <br />
        I had always been interested in Web Development and had made a number of
        very rudimentary websites. I had completed several online tutorials, but
        the bootcamps, which could take my knowledge to the next level, were all
        prohibitively expensive and exclusionary. Until I found the School Of
        Code.
        <br />
        <br />
        School of Code, the 16 week full-stack intensive bootcamp allowed me to
        retrain as a Web Developer, but also aided with getting employment. I
        was successful in my application to the 383 Project as an Associate
        Frontend Engineer, where I worked on several project during my time
        there.
      </>
    ),
  },

  footerLinks: [
    {
      link: "https://github.com/JEveriss",
      name: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/jacques-everiss/",
      name: "LinkedIn",
    },
  ],
  projects: [
    {
      name: "Random MtG Card",
      link: "https://mtg-api-app-jeveriss.netlify.app/",
      description: (
        <span>
          As a huge fan of Magic the Gathering, I wanted to create an app that
          used an <b className={styles.global__Emphasise}>API</b> detailing
          every card printed. It was made using React.js and styled with Styled
          Components.
        </span>
      ),
      techStack: ["React", "API Request", "Styled Components", "Mixpanel"],
      image: RandomMtGCardPAge,
    },
    {
      name: "Block Font",
      link: "",
      description: (
        <span>
          This idea was born from doodling a block font in note books and
          wanting to test my{" "}
          <b className={styles.global__Emphasise}>TypeScript</b> knowledge.
          <br />
          It is currently still in development.
        </span>
      ),
      techStack: ["Next.js", "TypeScript", "CSS Modules"],
      image: "",
    },
    {
      name: "The Full Nelson",
      link: "https://thefullnelson.netlify.app/",
      description: (
        <span>
          The Full Nelson was a local burger bar that has since closed down.
          <br />
          This self-set project was my first attempt at using the package React
          Router to create pages in{" "}
          <b className={styles.global__Emphasise}>React.js</b>. It also has
          specific layout for mobile to provide the user with the immediately
          useful data.
        </span>
      ),
      techStack: ["React", "CSS Modules"],
      image: FullNelsonPage,
    },
    {
      name: "The Ivy House",
      link: "https://theivyhouse.vercel.app/",
      description: (
        <span>
          I was asked to submit a proposal for the revamping of the website for
          The Ivy House, a community owned pub in my local area. This uses{" "}
          <b className={styles.global__Emphasise}>Contentful</b> as a{" "}
          <b className={styles.global__Emphasise}>headless CMS</b> so the site
          could be easily updated with new menu items, gig listings, seasonal
          opening times, etc. It is set up so the site rebuilds and redeploys
          once the user has submitted new content to the CMS.
        </span>
      ),
      techStack: ["Next.js", "JavaScript", "Contentful"],
      image: TheIvyHousePage,
    },
    {
      name: "The Broca Cafe",
      link: "",
      description: (
        <span>
          Another local project, The Broca Cafe is a friendly, vegan cafe in
          South East London.
          <br />
          The owner asked me to produce something that accurately reflected the
          cafe and to lose minimal detail when viewed on mobile. Development of
          this project was{" "}
          <b className={styles.global__Emphasise}>mobile first</b>
        </span>
      ),
      techStack: ["Next.js", "TypeScript"],
      image: "",
    },
  ],
};
