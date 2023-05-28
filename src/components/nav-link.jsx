export default function NavLink({ label, href, children, hide }) {
  return (
    <a href={href} className="navigation__link" onClick={hide}>
      <div className="navigation__link-icon">{children}</div>
      {label}
    </a>
  );
}
