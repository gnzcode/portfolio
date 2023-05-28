export default function Section({
  id,
  className,
  children,
  title,
  subtitle,
  light,
}) {
  return (
    <section id={id} className={`${className} section ${light ? "light" : ""}`}>
      {title ? <h3 className="section__title">{title}</h3> : null}
      {subtitle ? <span className="section__subtitle">{subtitle}</span> : null}
      {subtitle || title ? <div className="section__br"></div> : null}
      {children}
    </section>
  );
}
