import GithubIcon from "../lib/icons/GithubIcon.svg";
import LinkedinIcon from "../lib/icons/LinkedinIcon.svg";
import TheIvyHousePage from "../lib/images/TheIvyHousePage.png";
import RandomMtGCardPAge from "../lib/images/RandomMtGCardPage.png";
import FullNelsonPage from "../lib/images/FullNelsonPage.png";
export const data = {
  experience: [
    {
      company: "383 Project",
      position: "Associate Frontend Engineer",
      jobStart: "01/05/2022",
      jobEnd: "01/09/2023",
      description: `I'm not cool enough. People in bands are cool. I'm not cool.
      Dude, you are cool. The way you play. Why do you say you're not cool?
      Nobody ever talks to me.
      Well, those days are over, buddy. You could be the ugliest sad sack on the planet, but if you're in a rocking band, you're the cat's pajamas. You're the bee's knees.
      Bee's knees?
      Yeah, the bee's knees. You'll be the most popular guy in school.
      OK. I'll do it.
      Now, listen, this is a big commitment. Don't say yes if you're gonna flake out.
      I won't.
      Larry... welcome to my world.`,
    },
    {
      company: "Freelance",
      position: "Frontend Developer",
      jobStart: "01/09/2023",
      jobEnd: "Present",
      description: `Hey, you've got something everybody wants. You've got talent, girl. You have an incredible voice. I'm not just saying that. You heard of Aretha Franklin, right? OK, she's a big lady. But when she sings, she blows people's minds. Everybody wants to party with Aretha! And you know who else has a weight issue?
      Who?
      Me. But once I get up on-stage, start doing my thing, people worship me. Because I'm sexy and chubby, man.`,
    },
    {
      company: "Meet Bernard",
      position: "Store Manager",
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
    description: ``,
  },

  footerLinks: [
    {
      link: "https://github.com/JEveriss",
      img: GithubIcon,
      name: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/jacques-everiss/",
      img: LinkedinIcon,
      name: "LinkedIn",
    },
    // {
    //   link: "https://www.instagram.com/jacquesattacques/",
    //   img: InstagramIcon,
    //   name: "Instagram",
    // },
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
