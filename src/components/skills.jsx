import Skill from "./skill";

export default function Skills() {
  const skills = ["typescript", "react", "mysql", "mongodb", "nodejs"];
  return (
    <div className="skills__container">
      <div className="skills container">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </div>
    </div>
  );
}
