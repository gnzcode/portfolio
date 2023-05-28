import Contact from "../contact";
import Footer from "../footer";
import Container from "./container";
import Section from "./section";

export default function Bottom() {
  return (
    <Section className="bottom">
      <Container>
        <Contact />
        <Footer />
      </Container>
    </Section>
  );
}
