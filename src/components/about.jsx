import useAnimations from "package/hooks/animations";
import AboutSkill from "./about-skill";
import Container from "./layout/container";
import Section from "./layout/section";

export default function About() {
  const textAnimation = useAnimations("right-entry");
  const jobAnimation = useAnimations("right-entry");
  const descriptionAnimation = useAnimations(["opacity-entry", "delay-1"]);
  const buttonAnimation = useAnimations("opacity-entry", "delay-1-5");
  const skillsAnimation = useAnimations(["low-entry", "delay-1"]);
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
                src="https://github.com/gnzcode.png"
                alt="About gnzcode"
                className="about__img"
              />
              <div className="about__exp">2+ YEARS OF EXPERIENCE</div>
            </div>
          </div>
          <div className="about__data">
            <h2 className="about__name" ref={textAnimation}>
              <span className="about__icon">
                <i className="uil uil-user-md"></i>
              </span>
              Gnzcode
            </h2>
            <h1 className="about__job" ref={jobAnimation}>
              A FULL STACK WEB DEVELOPER
            </h1>
            <div
              className="about__description opacity-entry"
              ref={descriptionAnimation}
            >
              I started programming a few years ago during the pandemic and I
              have dedicated myself to learning, practicing and developing what
              I like. I enjoy challenges and even if I don't look for a job
              before and have no work experience, I feel I can perform well in a
              position as a web developer.
            </div>
            <a
              href="#contact"
              ref={buttonAnimation}
              className="about__button button"
            >
              Contact Me <i className="uil uil-message"></i>
            </a>
          </div>
          <div className="about__skills grid" ref={skillsAnimation}>
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
