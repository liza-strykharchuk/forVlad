import './Footer.scss'

export const Footer = () => {
  const logo: string = require("../../icons/logo.svg").default;
  const arrowUp: string = require("../../icons/chevron-arrow-up-hover.svg").default;

  return (
    <footer className="footer">
    <div className="footer__container">
      <a
        href="/"
        className="footer__img"
      >
        <img src={logo} alt='logo'/>
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="/"
              className="nav__link"
            >
              GITHUB
            </a>
          </li>

          <li className="nav__item">
            <a
              href="#phones"
              className="nav__link"
            >
              CONTACTS
            </a>
          </li>

          <li className="nav__item">
            <a
              href="#tablets"
              className="nav__link"
            >
              RIGHTS
            </a>
          </li>
        </ul>
      </nav>

      <a href="#" className="footer__up">
        <div className="footer__up--container">
        <div className="footer__up--text"> Back to top</div>
          <img
            src={arrowUp}
            alt="top"
            className="footer__icon"/>
        </div>
      </a>
    </div>
  </footer>
  );
}

