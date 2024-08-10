import React from 'react';
import MobileBackgroundImage from '../../assets/images/mobile-header-hero.png';
import DesktopBackgroundImage from '../../assets/images/desktop-header-hero.png';
import HeaderHero from '../../components/HeaderHero/HeaderHero';
import './home.css';
import useHome from './useHome';

const Home: React.FC = () => {
  const { onButtonClick } = useHome();

  return (
    <div className="home-container">
      <header className="home-header-container">
        <nav className="home-header-nav-container">
          {/* Your navigation components */}
        </nav>
        <HeaderHero
          mobileBackgroundImage={MobileBackgroundImage}
          desktopBackgroundImage={DesktopBackgroundImage}
          title="Empresa de inovação digital que cria progresso."
          description="Descubra recursos incríveis."
          buttonText="Começar agora"
          onButtonClick={onButtonClick}
          altText="Header Image"
        />
      </header>
      <main className="home-main-container">Main aqui</main>
      <footer className="home-footer-container">Rodapé aqui</footer>
    </div>
  );
};

export default Home;
