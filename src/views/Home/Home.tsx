// images
import MobileBackgroundImage from '../../assets/images/mobile-header-hero.png';
import DesktopBackgroundImage from '../../assets/images/desktop-header-hero.png';
//styles
import './home.css';
//components
import HeaderHero from '../../components/HeaderHero/HeaderHero';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header-container">
        <nav className="home-header-nav-container">
          Barra de navegação
        </nav>
        <HeaderHero
          mobileBackgroundImage={MobileBackgroundImage}
          desktopBackgroundImage={DesktopBackgroundImage}
          altText="Header Image"
        />
      </header>
      <main className="home-main-container">Main aqui</main>
      <footer className="home-footer-container">Rodapé aqui</footer>
    </div>
  );
}

export default Home;
