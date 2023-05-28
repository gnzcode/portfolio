export default function AboutSkill({ children, label }) {
  return (
    <div className="about__skill">
      <div className="about__skill-icon">{children}</div>
      <div className="about__label">{label}</div>
    </div>
  );
}
