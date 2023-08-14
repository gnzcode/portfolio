import { useEffect, useState } from "react";
import NavLink from "./nav-link";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);
  const handleHideMenu = () => setShowMenu(false);

  const [light, setLight] = useState();

  useEffect(() => {
    let isLight = localStorage.getItem("light");
    setLight(isLight ? true : false);
  }, []);

  useEffect(() => {
    if (light) {
      document.body.classList.add("light");
      return;
    }
    document.body.classList.remove("light");
  }, [light]);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("hidden");
      return;
    }
    document.body.classList.remove("hidden");
  }, [showMenu]);

  const switchTheme = () => {
    if (light) {
      setLight(false);
      localStorage.removeItem("light");
      return;
    }
    setLight(true);
    localStorage.setItem("light", "true");
  };

  return (
    <nav className="navigation">
      <div className="navigation__container container">
        <h2>
          <a href="#" className="navigation__logo">
            Gnzcode
          </a>
        </h2>
        <menu className={`navigation__menu ${showMenu ? "show" : ""}`}>
          <div className="navigation__links">
            <NavLink href="#" label="Home" hide={handleHideMenu}>
              <i className="uil uil-estate"></i>
            </NavLink>
            <NavLink href="#about" label="About" hide={handleHideMenu}>
              <i className="uil uil-user-md"></i>
            </NavLink>
            <NavLink href="#projects" label="Projects" hide={handleHideMenu}>
              <i className="uil uil-bag"></i>
            </NavLink>
            <NavLink href="#contact" label="Contact" hide={handleHideMenu}>
              <i className="uil uil-phone"></i>
            </NavLink>
          </div>
        </menu>
        <div className="navigation__buttons">
          <button className="navigation__button" onClick={switchTheme}>
            {light ? (
              <i className="uil uil-moon"></i>
            ) : (
              <i className="uil uil-sun"></i>
            )}
          </button>
          <button
            className="navigation__button navigation__button--menu"
            onClick={handleShowMenu}
          >
            <i className="uil uil-apps"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
