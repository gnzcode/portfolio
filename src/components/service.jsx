export default function Service({ name, description, children }) {
  return (
    <article className="service">
      <div className="service__icon">
        <div className="service__icon-i">{children}</div>
      </div>
      <div className="service__card">
        <div className="service__name">{name}</div>
        <div className="service__description">{description}</div>
      </div>
    </article>
  );
}
