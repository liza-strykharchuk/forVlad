import './App.scss';
import { HeaderOnPage } from './components/Header/HeaderOnPage';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './components/HomePage/Carusel/MainPage/HomePage';

export const App = () => (
  <div className="page">
    <HeaderOnPage />

    <HomePage />
    <Footer />
  </div>
);

