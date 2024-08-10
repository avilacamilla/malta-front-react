import React from 'react';
import './headerHero.css';

interface HeaderHeroProps {
  mobileBackgroundImage: string;
  desktopBackgroundImage: string;
  altText?: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const HeaderHero: React.FC<HeaderHeroProps> = ({
  mobileBackgroundImage,
  desktopBackgroundImage,
  altText = '',
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="header-hero-container">
      <img
        src={mobileBackgroundImage}
        alt={altText}
        className="header-hero-image header-hero-mobile"
      />
      <img
        src={desktopBackgroundImage}
        alt={altText}
        className="header-hero-image header-hero-desktop"
      />
      <div className="header-hero-content">
        <p className="header-hero-description">{description}</p>
        <h1 className="header-hero-title">{title}</h1>
        <button className="header-hero-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeaderHero;