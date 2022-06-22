import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CvDownload from "~/components/logo/CvDownload";
import ExternalLinkLogo from "~/components/logo/ExternalLinkLogo";
import LinkedinLogo from "~/components/logo/LinkedinLogo";
import Header, { links as HeaderLinks } from "~/components/Header";
import type { LinksFunction } from "@remix-run/node";

type CVSection = {
  title: string;
  type: string;
  location: string;
  description: string;
  link?: string;
  date: string;
};

type Skill = {
  logosrc: string;
  name: string;
};

type Certifications = {
  title: string;
  location: string;
  date: string;
  credentialsrc: string;
};

type Projects = {
  title: string;
  imagesrc: string;
  for: string;
  githublink: string;
};

type LoaderData = {
  cvSections: Array<CVSection>;
  skills: Array<Skill>;
  certifications: Array<Certifications>;
  projects: Array<Projects>;
};

export const loader = async () => {
  return json<LoaderData>({
    cvSections: [
      {
        title: "Web Dev Bootcamp",
        location: "Ironhack",
        description: `9-weeks intensive web development boot camp - technologies learned:
    Front end: HTML | CSS | JavaScript (ES6) | React | MERN Stack
    Back end: Express JS | NodeJs | MongoDb | Axios
    Version Control: Git | GitHub
    `,
        type: "Education",
        link: "https://www.ironhack.com/en/web-development",
        date: "From July to Sept 2022",
      },
      {
        title: "Responsive Design",
        location: "Codecademy",
        description: `Responsive design techniques: sizing units, media queries, websites viewable on devices of all sizes.`,
        type: "Education",
        link: "https://www.codecademy.com/learn/learn-responsive-design",
        date: "June 2022",
      },
      {
        title: "Beginner Javascript",
        location: "Wes Bos - Online course",
        description: `Language basics
        Ajax & Fetching data
        ES modules & structuring larger apps`,
        type: "Education",
        link: "https://beginnerjavascript.com/",
        date: "March - June 2022",
      },
      {
        title: "HTML and CSS",
        location: "Udemy",
        description: `HTML basics
        CSS basics
        `,
        type: "Education",
        link: "https://www.udemy.com/course/cours-html-css/",
        date: "February 2022",
      },
      {
        title: "Fais le Bilan",
        location: "Switch Collective",
        description: `Coaching program and skills assessment 
        Objective: identify and define next career step 
        
        `,
        type: "Career transition coaching program",
        link: "https://www.switchcollective.com/",
        date: "January - April 2022",
      },
      {
        title: "Various HR roles",
        location: "Deezer",
        description: `HR Business Partner for Product & Tech Division - 2 years
        Learning & Development Manager - 1 year
        Technical Recruiter (Dev, Infra, R&D, Data) - 3 years`,
        type: "Professional experience",
        date: "2015 - 2021 - Permanent contract",
      },

      {
        title: "Technical Recruiter",
        location: "Neurones IT",
        description: `Technical Recruiter (Infra - System & Network )`,
        type: "Professional experience",
        date: "2014 - 2015 - Permanent contract",
      },
      {
        title: "HR Master Degree ",
        location: "Sciences Po Paris",
        description: `
        Human Resources Master Degree
        1 year as an Exchange Student in Australia - Griffith University
        General studies Bachelor Degree`,
        type: "Education",
        date: "2009 - 2014 ",
      },

      {
        title: "Baccalauréat ES ",
        location: "Lycée Maillol - Perpignan",
        description: `Mention Très Bien`,
        type: "Education",
        date: "2009",
      },
    ],

    skills: [
      {
        logosrc: "_assets/Logos/Logo-html_80x80.png",
        name: "HTML",
      },

      {
        logosrc: "_assets/Logos/Logo-css_80x80.png",
        name: "CSS",
      },

      {
        logosrc: "_assets/Logos/Logo-js_80x80.png",
        name: "JAVASCRIPT",
      },
    ],
    certifications: [
      {
        title: "Responsive Design",
        location: "Codecademy",
        date: "June 2022",
        credentialsrc:
          "https://www.codecademy.com/profiles/paulinefarina8241962797/certificates/3a62023b0054dc793edc0adecd715fd7",
      },

      {
        title: "Beginner JavaScript",
        location: "Bostype Inc",
        date: "March 2022",
        credentialsrc:
          "https://courses.wesbos.com/account/certificate/622a213b664e70c64b632df4",
      },

      {
        title: "Beginner HTML & CSS",
        location: "Udemy",
        date: "Febrary 2022",
        credentialsrc:
          "https://www.udemy.com/certificate/UC-45366660-f394-4df8-85e9-85c91cea932d/",
      },
    ],
    projects: [
      {
        title: "Javascript Drum Kit",
        imagesrc: "_assets/photos/project-drum.png",
        for: "JavaScript30 - Wes Bos",
        githublink:
          "https://github.com/pftho/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit",
      },
      {
        title: "JS Clock",
        imagesrc: "_assets/photos/project-JS-clock.png",
        for: "JavaScript30 - Wes Bos",
        githublink:
          "https://github.com/pftho/JavaScript30/tree/master/02%20-%20JS%20and%20CSS%20Clock",
      },
      {
        title: "Playing with CSS Variables & JS",
        imagesrc: "_assets/photos/project-CSS-variables.png",
        for: "JavaScript30 - Wes Bos",
        githublink:
          "https://github.com/pftho/JavaScript30/tree/master/03%20-%20CSS%20Variables",
      },
    ],
  });
};

export const links: LinksFunction = () => {
  return [...HeaderLinks()];
};

export default function Index() {
  const { cvSections, skills, certifications, projects } =
    useLoaderData<LoaderData>();

  return (
    <>
      <Header />
      <div>
        <section id="home">
          <div className="wrapper displayflex-row">
            <div className="hero-text">
              <p id="helloicon"> 👋 </p>
              <h1>Hello and welcome </h1>

              <p>
                My name is Pauline Thomas. <br />I am a Web Developer in
                training{" "}
                <strong>looking for a "contrat de professionalisation"</strong>
              </p>

              <div id="contractDetails">
                <p>
                  2 months intensive bootcamp with{" "}
                  <a
                    href="https://www.ironhack.com/en/web-development"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ironhack{" "}
                  </a>{" "}
                  - Starting July 2022*
                </p>
                <p id="ampersand"> &</p>
                <p>
                  9 months full time in the company - Starting September 2022*
                </p>
              </div>

              <div className="displayflex-row" id="hello-buttons">
                <a className="button" href="#contact" target="_blank">
                  Contact me
                </a>
                <a className="button" href="resume_placeholder" target="_blank">
                  Download my resume
                </a>
              </div>
            </div>
            <div className="hero-img">
              <div>
                <img
                  src="_assets/photos/main-image.jpeg"
                  alt="Pauline Thomas"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrapper">
            <div id="about-text">
              <h2>About me</h2>
              <p>
                I am an aspiring Web Developer with an HR background in the tech
                industry. My passion for technology, learning new things and
                solving problems has led me to change my career path and start
                frontend development as an autodidact.
              </p>

              <p>
                My goal is to continue growing my skills and become a top-notch
                developer. To get there, I enrolled in the Ironhack bootcamp (9
                weeks) and am looking for a company to start their
                apprenticeship program right after the bootcamp.
              </p>
            </div>
            <div>
              <div id="CVtimeline" className="displayflex-row">
                <div className="timeline">
                  {cvSections.map((cvSection) => {
                    return (
                      <>
                        <div className="timeline-card" key={cvSection.title}>
                          <p>{cvSection.location}</p>
                          <h3 className="CVtitle">
                            {cvSection.title}{" "}
                            {cvSection.link ? (
                              <a
                                href={`${cvSection.link}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ExternalLinkLogo />
                              </a>
                            ) : null}
                          </h3>
                          <p>{cvSection.type}</p>
                          <p>{cvSection.date}</p>
                          <p>{cvSection.description}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div>
                <a href="Cvplaceholder" target="_blank" rel="noreferrer">
                  <CvDownload />
                </a>
                <a
                  href="https://www.linkedin.com/in/paulinefarina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo />
                </a>
              </div>
            </div>{" "}
          </div>
        </section>

        <section id="skills">
          <div className="wrapper">
            <h2> Technical Skills</h2>
            <div id="technical-skills" className="displayflex-row ">
              {skills.map((skill) => {
                return (
                  <div key={skill.name}>
                    <img src={`${skill.logosrc}`} alt={`${skill.name} logo`} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="certifications">
          <div className="wrapper">
            <h2> Certifications</h2>
            <div id="certifications-list" className="displayflex-row ">
              {certifications.map((certification) => {
                return (
                  <div key={certification.title}>
                    <h3> {certification.title} </h3>
                    <p>{certification.location} </p>
                    <p>{certification.date} </p>
                    <a
                      className="button"
                      href={`${certification.credentialsrc}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show Credential
                    </a>
                  </div>
                );
              })}
            </div>{" "}
          </div>
        </section>

        <section id="projects">
          <div className="wrapper">
            <div id="projects-intro">
              <h2> Projects</h2>
              <p>
                {" "}
                As I am a developer in training, please find bellow examples of
                projects realised when following online courses
              </p>
              <p>
                {" "}
                Check out my <a href="https://github.com/pftho"> </a> to see
                more{" "}
              </p>
            </div>{" "}
            <div id="gallery" className="displayflex-row">
              {projects.map((project) => {
                return (
                  <>
                    <div className="displayflex-column">
                      <figure key={project.title}>
                        <img
                          src={`${project.imagesrc}`}
                          alt="project exemple"
                        />

                        <figcaption className="project-icon">
                          {" "}
                          <a
                            href={`${project.githublink}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ExternalLinkLogo />
                          </a>{" "}
                        </figcaption>
                        <figcaption className="project-info">
                          <h3> {project.title} </h3>
                          <p>{project.for} </p>
                        </figcaption>
                      </figure>
                    </div>
                  </>
                );
              })}
            </div>{" "}
          </div>
        </section>

        <section id="contact">
          <div className="wrapper">
            <h2> Contact</h2>
            <p>
              For more information on my profile or if you have a job vacancy
              you would like me to apply for, please feel free to get in touch.
            </p>
            <form>
              <div id="contact-name" className="displayflew-row">
                <label htmlFor="fullname">Full Name*</label>
                <input type="text" id="fullname" name="fullname" required />
              </div>

              <div id="contact-info" className="displayflex-row">
                <div id="emaildiv">
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div id="phonediv">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>

              <div id="contact-message" className="displayflex-column">
                <div>
                  <label htmlFor="request">I am getting in touch to*</label>
                  <select
                    data-form-type="request"
                    id="request"
                    defaultValue={""}
                  >
                    <option value=""> </option>
                    <option value="profile">
                      Get to know more about your profile
                    </option>
                    <option value="vacancy">
                      {" "}
                      Get in touch for a job vacancy
                    </option>
                    <option value="Other"> Other </option>
                  </select>{" "}
                </div>

                <div>
                  <label htmlFor="message">Message*</label>
                  <textarea id="message" name="message" />
                  <input
                    type="submit"
                    className="button"
                    value="Send your message"
                  />
                </div>
              </div>
            </form>{" "}
          </div>
        </section>
      </div>

      <footer></footer>
    </>
  );
}
