import { NavLink } from 'react-router-dom';

import classNames from 'classnames';

import './HeaderStyles.scss';

export const HeaderOnPage = () => {
  const logo: string = require("../../icons/logo.svg").default;


  const isActiveTab = ({ isActive }: { isActive: boolean }) => classNames(
    'nav__link', { 'nav__active': isActive },
  );

  return (
    <header className="header">
      <div className="container">
      <a
        href="/"
        className="header__img"
       >
        <img src={logo} alt='logo'/>
      </a>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={isActiveTab}
            >
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/phones"
              className={isActiveTab}
            >
              Phones
            </NavLink>
          </li>

          <li className="nav__item">
          <NavLink
              to="/tablets"
              className={isActiveTab}
            >
              Tablets
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/accessories"
              className={isActiveTab}
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>

      <div className='header__buttons'>
        <NavLink to={'/like'} className={classNames("header__like header__chose",{ isActiveTab})} ></NavLink>
        <NavLink to={'/add'} className="header__add header__chose"></NavLink>
      </div>
    </header>
  );
}
