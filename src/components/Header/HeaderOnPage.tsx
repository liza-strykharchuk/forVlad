import './HeaderStyles.scss';

export const HeaderOnPage = () => {

  const logo: string = require("../../icons/logo.svg").default;

  return (
    <header className="header">
      <div className="container">
      <a
        href="#home"
        className="header__img"
       >
        <img src={logo} alt='logo'/>
      </a>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="#home"
              className="nav__link"
            >
              Home
            </a>
          </li>

          <li className="nav__item">
            <a
              href="#phones"
              className="nav__link"
            >
              Phones
            </a>
          </li>

          <li className="nav__item">
            <a
              href="#tablets"
              className="nav__link"
            >
              Tablets
            </a>
          </li>

          <li className="nav__item">
            <a
              href="#accessories"
              className="nav__link"
              data-qa="hover"
            >
              Accessories
            </a>
          </li>
        </ul>
      </nav>
      </div>

      <div className='header__buttons'>
        <div className="header__like header__chose"></div>
        <div className="header__add header__chose"></div>
      </div>
    </header>
  );
}
