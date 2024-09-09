import React from 'react';
import './servicesCards.css';

interface ServicesCardsProps {
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
        <div className="services-cards-container">
            Componente de card aqui
        </div>
    );
};

export default ServicesCards;