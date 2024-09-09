import React from 'react';
import './servicesCards.css';

interface ServicesCardsProps {
    id: number;
    icon: string;
    title: string;
    paragraph: string;
    altText?: string;
}

const ServicesCards: React.FC<ServicesCardsProps> = ({
    icon,
    title,
    paragraph,
    altText
}) => {
    return (
        <section className="services-cards-container">
            <div className="services-cards-content">
                <header className="services-cards-content-header">
                    <img 
                        src={icon} 
                        alt={altText} 
                        className="services-cards-content-header-icon" 
                    />
                    <h3 className="services-cards-content-header-title">{title}</h3>
                </header>
                <p className="services-cards-content-header-paragraph">
                    {paragraph}
                </p>
            </div>
        </section>
    );
};

export default ServicesCards;