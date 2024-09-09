//types
import { ServiceCard } from "../../types/ServicesCards";
//icons
import iconRocket from '../../assets/icons/icon-rocket.png';
import iconCellphone from '../../assets/icons/icon-cellphone.png';
import iconCursor from '../../assets/icons/icon-cursor.png';


const servicesCardData: ServiceCard[] = [
    {
      id: 1,
      icon: iconRocket,
      title: 'Produtos Digitais',
      paragraph: 'Inove com produtos digitais que transformam o futuro.',
      altText: 'Icon representing digital products',
    },
    {
      id: 2,
      icon: iconCellphone,
      title: 'Online Marketing',
      paragraph: 'Impulsione sua marca com estratégias de marketing online.',
      altText: 'Icon representing online marketing',
    },
    {
      id: 3,
      icon: iconCursor,
      title: 'Product Design',
      paragraph: 'Crie experiências únicas com design de produto inovador.',
      altText: 'Icon representing product design',
    },
];
  
export default servicesCardData;
  