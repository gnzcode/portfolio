import Container from "./layout/container";
import Section from "./layout/section";

export default function Home() {
  return (
    <Section className="home">
      <Container>
        <div className="home__container grid">
          <img
            src="assets/home.webp"
            alt="Gnzcode avatar"
            className="home__img"
          />
          <div className="home__data">
            <h1 className="home__job">
              I AM A <span className="home__job-span">WEB DEVELOPER</span>
            </h1>
            <h2 className="home__title">
              My name is Alexis, <br />I am a{" "}
              <span className="home__title-span">Full Stack</span> <br />
              Web <span className="home__title-span">Developer</span>
            </h2>
            <p className="home__description">
              Planning, design and development of digital solutions.
            </p>
            <div className="home__buttons">
              <a href="#contact" className="home__button button">
                Contact Me<i className="uil uil-message"></i>
              </a>
              <a
                href="assets/gnzcode-cv.pdf"
                download
                className="home__button button home__button--outline"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
