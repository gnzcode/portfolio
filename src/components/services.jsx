import Container from "./layout/container";
import Section from "./layout/section";
import Service from "./service";

export default function Services() {
  return (
    <Section
      className="services"
      title="My Services"
      subtitle="I know how to do this"
      id="services"
    >
      <Container>
        <div className="services__container grid">
          <Service
            name="Frontend APPS"
            description="Development of complete web applications, made in react or nextjs"
          >
            <i className="fa-solid fa-laptop-code"></i>
          </Service>
          <Service
            name="Mobile APPS"
            description="Simple apps for android and ios using react native"
          >
            <i className="fa-brands fa-react"></i>
          </Service>
          <Service
            name="Rest API'S"
            description="Applications with the basic points of CRUD (create, read, update and delete)"
          >
            <i className="uil uil-server"></i>
          </Service>
          <Service
            name="Backend APPS"
            description="Backend applications with more complex nodejs (Jwt, sockets, etc)."
          >
            <i className="uil uil-database"></i>
          </Service>
        </div>
      </Container>
    </Section>
  );
}
