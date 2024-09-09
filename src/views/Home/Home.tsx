import React from 'react';
import MobileBackgroundImage from '../../assets/images/mobile-header-hero.png';
import DesktopBackgroundImage from '../../assets/images/desktop-header-hero.png';
import HeaderHero from '../../components/HeaderHero/HeaderHero';
import './home.css';
import useHome from './useHome';
import Navbar from '../../components/Navbar/Navbar';
import ServicesCards from '../../components/ServicesCards/ServicesCards';
import servicesCardData from '../../components/ServicesCards/servicesCardsData';
import { ServiceCard } from '../../types/ServicesCards';

const Home: React.FC = () => {
  const { onButtonClick } = useHome();

  return (
    <div className="home-container">
      <header className="home-header-container">
        <nav className="home-header-nav-container">
          <Navbar />
        </nav>
        <HeaderHero
          mobileBackgroundImage={MobileBackgroundImage}
          desktopBackgroundImage={DesktopBackgroundImage}
          title="Empresa de Inovação Digital que cria Progresso."
          description="Descubra recursos incríveis."
          buttonText="Conheça os recursos"
          onButtonClick={onButtonClick}
          altText="Header Image"
        />
      </header>
      <main className="home-main-container">
        <section className="home-main-services-cards-container">
          {servicesCardData.map((serviceCard: ServiceCard) => (
            <ServicesCards
              key={serviceCard.id}
              id={serviceCard.id}
              icon={serviceCard.icon}
              title={serviceCard.title}
              paragraph={serviceCard.paragraph}
              altText={serviceCard.altText}
            />
          ))}
        </section>
      </main>
      <footer className="home-footer-container">Rodapé aqui</footer>
    </div>
  );
};

export default Home;