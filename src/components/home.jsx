import useAnimations from "package/hooks/animations";
import Container from "./layout/container";
import Section from "./layout/section";

export default function Home() {
  const titleAnimation = useAnimations("right-entry");
  const descriptionAnimation = useAnimations(["opacity-entry", "delay-1"]);
  const buttonsAnimation = useAnimations(["low-entry", "delay-0-5"]);
  const photoAnimation = useAnimations(["opacity-entry", "delay-1"]);
  return (
    <Section className="home">
      <Container>
        <div className="home__container grid">
          <div className="home__img-ctn">
            <img
              src="https://github.com/gnzcode.png"
              alt="Gnzcode avatar"
              className="home__img opacity-entry"
              ref={photoAnimation}
            />
          </div>
          <div className="home__data">
            <h1 className="home__job">
              I AM A <span className="home__job-span">WEB DEVELOPER</span>
            </h1>
            <h2 className="home__title right-entry" ref={titleAnimation}>
              My name is Gnzcode, <br />I am a{" "}
              <span className="home__title-span">Full Stack</span> <br />
              Web <span className="home__title-span">Developer</span>
            </h2>
            <p
              className="home__description opacity-entry delay-1"
              ref={descriptionAnimation}
            >
              I enjoy developing web solutions and creating open source
              projects.
            </p>
            <div
              className="home__buttons low-entry delay-0-5"
              ref={buttonsAnimation}
            >
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
