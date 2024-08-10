import React from 'react';
import './headerHero.css';

interface HeaderHeroProps {
  mobileBackgroundImage: string;
  desktopBackgroundImage: string;
  altText?: string;
  className?: string;
}

const HeaderHero: React.FC<HeaderHeroProps> = ({
  mobileBackgroundImage,
  desktopBackgroundImage,
  altText = '',
  className = 'header-hero-image',
}) => {
  return (
    <div className="header-hero-container">
      <img
        src={mobileBackgroundImage}
        alt={altText}
        className={`${className} header-hero-mobile`}
      />
      <img
        src={desktopBackgroundImage}
        alt={altText}
        className={`${className} header-hero-desktop`}
      />
    </div>
  );
};

export default HeaderHero;