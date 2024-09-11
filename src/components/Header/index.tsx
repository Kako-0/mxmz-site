import './styles.css';
import '@/app/styles/modules/nav.css';
import '@/app/styles/modules/logo.css';
import '@/app/styles/modules/social.css';

export default function Header() {
  return (
    <header className="header wrap__fixed">
      <h1 className="logo header__logo">
        <a href="/" className="logo__link">
          Maximize
        </a>
      </h1>
      <h2 className="slogan header__slogan">
        <span className="slogan__text">We Know What We Do</span>
      </h2>
      <nav className="nav header__nav">
        <ul className="nav__list">
          <li className="nav__item nav__item--mobile">
            <a href="/" className="nav__link link">
              Início
            </a>
          </li>
          <li className="nav__item">
            <a href="{% url 'portfolio' %}" className="nav__link link">
              Portfólio
            </a>
          </li>
          <li className="nav__item">
            <a href="{% url 'contato' %}" className="nav__link link">
              Contato
            </a>
          </li>
        </ul>
        <div className="social nav__social">
          <ul className="social__list">
            <li className="social__item">
              <a
                href="https://www.facebook.com/maximizeag/"
                className="social__link social__link--facebook"
              >
                <span>Facebook</span>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/maximizeag/"
                className="social__link social__link--instagram"
              >
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <button className="nav__menu" type="button">
          <span>Menu</span>
          <i className="nav__bar" />
          <i className="nav__bar" />
          <i className="nav__bar" />
        </button>
        <button className="nav__close" type="button">
          <span>Fechar</span>
        </button>
      </nav>
    </header>
  );
}
