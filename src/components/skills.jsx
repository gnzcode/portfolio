import useAnimations from "package/hooks/animations";

export default function Skills() {
  const skills = ["typescript", "react", "mysql", "mongodb", "nodejs"];
  return (
    <div className="skills__container">
      <div className="skills container">
        {skills.map((skill) => {
          const animation = useAnimations("scale-entry");
          return (
            <img
              className="skills__skill"
              src={`assets/${skill}.webp`}
              key={skill}
              ref={animation}
            />
          );
        })}
      </div>
    </div>
  );
}
