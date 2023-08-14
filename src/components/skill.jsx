import useAnimations from "package/hooks/animations";

export default function Skill({ skill }) {
  const animation = useAnimations("scale-entry");
  return (
    <img
      className="skills__skill"
      src={`assets/${skill}.webp`}
      ref={animation}
    />
  );
}
