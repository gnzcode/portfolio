import useAnimations from "package/hooks/animations";

export default function Project({
  name,
  description,
  github,
  website,
  tecnologies,
}) {
  const animation = useAnimations(["low-entry", "delay-0-5"]);
  return (
    <article className="project" ref={animation}>
      <div className="project__details">
        <div className="project__icon">
          <i className="uil uil-folder-open"></i>
        </div>
        <div className="project__name">{name}</div>
        <div className="project__tecnologies">
          {tecnologies.map((tecnologie) => (
            <div key={tecnologie} className="project__tecnology">
              {tecnologie}
            </div>
          ))}
        </div>

        <div className="project__description">{description}</div>
        <div className="project__buttons">
          {website ? (
            <a
              href={website}
              className="project__button button"
              target="_blank"
            >
              <i className="uil uil-cloud"></i>
              Website
            </a>
          ) : null}
          {github ? (
            <a href={github} className="project__button button" target="_blank">
              <i className="uil uil-github-alt"></i>
              Github
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
