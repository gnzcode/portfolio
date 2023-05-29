import Container from "./layout/container";
import Section from "./layout/section";
import SkillCard from "./skill-card";

export default function Skills() {
  return (
    <Section
      id="skills"
      className="skills"
      title="My Skills"
      subtitle="What to do?"
      light
    >
      <Container>
        <div className="skills__container grid">
          <SkillCard title="Node JS" years={2}>
            <i className="uil uil-java-script"></i>
          </SkillCard>
          <SkillCard title="React Mobile" years={3}>
            <i className="uil uil-react"></i>
          </SkillCard>
          <SkillCard title="React" years={2}>
            <i className="uil uil-react"></i>
          </SkillCard>
          <SkillCard title="Mongo DB" years={2}>
            <i className="uil uil-server-alt"></i>
          </SkillCard>
          <SkillCard title="Postgress" years={2}>
            <i className="uil uil-database"></i>
          </SkillCard>
          <SkillCard title="Git / Github" years={2}>
            <i className="uil uil-github-alt"></i>
          </SkillCard>
        </div>
      </Container>
    </Section>
  );
}
