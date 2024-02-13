import TheIvyHousePage from "../lib/images/TheIvyHousePage.png";
import RandomMtGCardPAge from "../lib/images/RandomMtGCardPage.png";
import FullNelsonPage from "../lib/images/FullNelsonPage.png";
export const data = {
  experience: [
    {
      company: "Freelance",
      position: "Frontend Developer",
      link: "/",
      jobStart: "01/09/2023",
      jobEnd: "Present",
      description: `Hey, you've got something everybody wants. You've got talent, girl. You have an incredible voice. I'm not just saying that. You heard of Aretha Franklin, right? OK, she's a big lady. But when she sings, she blows people's minds. Everybody wants to party with Aretha! And you know who else has a weight issue?
      Who?
      Me. But once I get up on-stage, start doing my thing, people worship me. Because I'm sexy and chubby, man.`,
    },
    {
      company: "383 Project",
      position: "Associate Frontend Engineer",
      link: "https://www.383project.com/",
      jobStart: "01/05/2022",
      jobEnd: "01/09/2023",
      description: `At my time at 383 I worked as part of the Hilton Hotels Product Team where I contributed to feature development, maintaining existing React.js components, and reducing technical debt that had accrued over the 9 year lifespan of the project. I was also worked with the Support Team dealing with time sensitive and often urgent SLAs.

      I also led the development of projects including building a WordPress site to show the company’s cross-browser compatibility to clients and building a working Shopify prototype that could be demoed to clients`,
    },
    {
      company: "Meet Bernard",
      position: "Store Manager",
      link: "https://www.meetbernard.com/",
      jobStart: "20/09/2020",
      jobEnd: "30/10/2021",
      description: `Do you think I could cut out a little early today? I got some stuff I gotta do. It's cool. I can stay.
      Mr. Schneebly... this is considered the best elementary school in the state, and we maintain that by adhering to a strict code of conduct faculty included.
      Don't worry about me. I'm a hard-ass. If a kid gets out of line, I got no problem smacking him.
      No, no. We don't use corporal punishment here.
      OK, so just verbal abuse?`,
    },
  ],
  about: {
    fullName: "Jacques Everiss",
    email: "Jacques.Everiss@Gmail.com",
    greeting: `Thank you for taking the time to visit my portfolio. I am frequently
    updating this site and trying new ideas out, so it might look a bit
    different the next time you visit.`,
    description: `Yeah, you know, math, English... What...? Science... What else?
    Geography, history, Latin, Spanish, French, Latin... Math. Did I say
    that already? Anyway, all the stuff you want your kids to know,
    it's been covered, OK?
    So... it was great to meet you all, and drive safe.`
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
      description:
        "As a challenge to test my abilities while studying, I set myself a task to create an page that could make API requests and populate the page with the results. After revisiting the project after a few months I believed I could improve on it.",
      techStack: ["React", "API Request", "Styled Components", "Mixpanel"],
      image: RandomMtGCardPAge,
    },
    {
      name: "Block Font",
      link: "",
      description:
        "This idea was born from doodling the block font and wanting to test my TypeScript knowledge",
      techStack: ["Next.js", "TypeScript", "CSS Modules"],
      image: "",
    },
    {
      name: "The Full Nelson",
      link: "https://thefullnelson.netlify.app/",
      description:
        "The Full Nelson was a local burger bar that has since closed down. This project was my first attempt at using the package 'React Router' to create pages in React and creating a mobile spedific view",
      techStack: ["React", "CSS Modules"],
      image: FullNelsonPage,
    },
    {
      name: "The Ivy House",
      link: "https://theivyhouse.vercel.app/",
      description:
        "I was asked to submit a proposal for the revamping of the website for The Ivy House, a community owned pub in my local area. This uses Contentful as a headless CMS so the site could be easily updated with new menu items, gig listings, seasonal opening times, etc. It is set up so the site rebuilds and redeploys once the user has submitted a new addition to the CMS",
      techStack: ["Next.js", "JavaScript", "Contentful"],
      image: TheIvyHousePage,
    },
    {
      name: "The Broca Cafe",
      link: "",
      description:
        "Another local project, The Broca Cafe is a friendly, vegan cafe in South East London. The owner asked me to produce something that accurately reflected the cafe and to lose minimal detail when viewed on mobile.",
      techStack: ["Next.js", "TypeScript"],
      image: "",
    },
  ],
};
