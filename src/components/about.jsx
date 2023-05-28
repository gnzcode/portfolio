import AboutSkill from "./about-skill";
import Container from "./layout/container";
import Section from "./layout/section";

export default function About() {
  return (
    <Section
      id="about"
      light
      className="about"
      title="About Me"
      subtitle="Who am I?"
    >
      <Container>
        <div className="about__container grid">
          <div className="about__image">
            <div className="about__card">
              <img
                src="assets/about.webp"
                alt="About gnzcode"
                className="about__img"
              />
              <div className="about__exp">2+ YEARS OF EXPERIENCE</div>
            </div>
          </div>
          <div className="about__data">
            <h2 className="about__name">
              <span className="about__icon">
                <i className="uil uil-user-md"></i>
              </span>
              Gnzcode
            </h2>
            <h1 className="about__job">A FULL STACK WEB DEVELOPER</h1>
            <div className="about__description">
              My name is Alexis Ganzalez and I am a full stack web developer. I
              have more than 2 years of experience in web development. I learned{" "}
              <strong>
                javascript, css, sass, tailwindcss, react, nextjs, nodejs,
                express, git, mongodb and postgres
              </strong>{" "}
              in 2020-2021 with which I was practicing on personal projects.
            </div>
            <a href="#contact" className="about__button button">
              Contact Me <i className="uil uil-message"></i>
            </a>
          </div>
          <div className="about__skills grid">
            <AboutSkill label="Proactive">
              <i className="uil uil-bolt-alt"></i>
            </AboutSkill>
            <AboutSkill label="Positive">
              <i className="uil uil-grin-tongue-wink"></i>
            </AboutSkill>
            <AboutSkill label="Collaborative">
              <i className="uil uil-channel"></i>
            </AboutSkill>
            <AboutSkill label="Communicative">
              <i className="uil uil-users-alt"></i>
            </AboutSkill>
          </div>
        </div>
      </Container>
    </Section>
  );
}
