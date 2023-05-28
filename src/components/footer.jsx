import Container from "./layout/container";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__name">Gnzcode</h2>
      <h1 className="footer__job">A full stack web developer</h1>
      <div className="footer__hr">
        <div className="footer__hr-line"></div>
        <div className="footer__hr-text">Social networks</div>
        <div className="footer__hr-line"></div>
      </div>
      <div className="footer__socials">
        <a href="#" className="footer__social" target="_blank">
          <div className="footer__social-icon">
            <i className="uil uil-github-alt"></i>
          </div>
        </a>
        <a href="#" className="footer__social" target="_blank">
          <div className="footer__social-icon">
            <i className="uil uil-envelope"></i>
          </div>
        </a>
        <a href="#" className="footer__social" target="_blank">
          <div className="footer__social-icon">
            <i className="uil uil-discord"></i>
          </div>
        </a>
        <a href="#" className="footer__social" target="_blank">
          <div className="footer__social-icon">
            <i className="uil uil-linkedin-alt"></i>
          </div>
        </a>
      </div>
    </footer>
  );
}
