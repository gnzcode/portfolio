export default function SkillCard({ children, title }) {
  return (
    <article className="skill-card">
      <div className="skill-card__icon">
        <div className="skill-card__icon-i">{children}</div>
      </div>
      <div className="skill-card__content">
        <div className="skill-card__title">{title}</div>
      </div>
    </article>
  );
}
