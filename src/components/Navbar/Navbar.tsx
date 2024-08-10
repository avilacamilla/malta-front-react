import React from 'react';
import { useNavbar } from './useNavbar'; // Assumindo que o hook está no mesmo diretório
import './navbar.css';

function Navbar() {
  const {
    isVisible,
    isScrolled,
    activeItem,
    dropdownOpen,
    toggleVisibility,
    setActive,
    toggleDropdown,
  } = useNavbar({ offset: 50 });

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Itens de navegação */}
        <div
          className={`navbar-item ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => setActive('home')}
        >
          <h1 className="nav-item-logo">
            malta.
          </h1>
        </div>
      
        <div className="navbar-item">
          <div
            className={`dropdown-toggle ${dropdownOpen === 'menu' ? 'open' : ''}`}
            onClick={() => toggleDropdown('menu')}
          >
            <span className="hamburger-icon"></span>
          </div>
          {dropdownOpen === 'menu' && (
            <div className="dropdown-menu">
              <div onClick={() => setActive('option1')}>Início</div>
              <div onClick={() => setActive('option2')}>Sobre Nós</div>
              <div onClick={() => setActive('option2')}>O que fazemos</div>
              <div onClick={() => setActive('option2')}>Contato</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;