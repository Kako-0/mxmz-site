'use client';

import LayoutPortfolioItem from '@/components/layouts/LayoutPortfolioItem';
import type { PortfolioItem } from '@/app/types/portfolioItemType';
import ValparaisoFull from '@img/valparaiso/full.jpg';
import Aventura from '@img/valparaiso/2.jpg';
import Ingressos from '@img/valparaiso/3.jpg';
import Contato from '@img/valparaiso/4.jpg';

const item: PortfolioItem = {
  title: 'Valparaíso Adventure Park',
  type: 'Website',
  year: '2019',
  thumbFull: ValparaisoFull,
  link: '/portfolio/guarana-jesus',
  resume:
    'Criamos um site que acompanhasse o novo posicionamento e todas as transformações da marca: passou a ter design mais jovem, intuitivo e muito mais divertido.Na campanha de lançamento foram propostas ações on-line e off-line que transmitiam ao público os novos valores, utilizando estratégias como redes sociais, influenciadores, google ads, criação de materiais visuais e criação de filtros.',
  description: [
    {
      title: 'Briefing',
      content:
        'Em 2021, o maior parque do Maranhão mudou seu posicionamento e passou a focar sua experiência em aventuras. A comunicação visual do Valparaíso acompanhou a transição, trazendo cores e tipografia que se relacionassem de forma direta com o estado, como a sua cultura e belezas naturais, através de uma nova marca.',
    },
    {
      title: 'Recursos',
      content: ['Laravel', 'MySQL', 'PHP', 'VueJS', 'JavaScript Vanilla', 'Google Maps API'],
    },
  ],
  screenshots: [
    { title: '', src: '/assets/img/valparaiso/nav.mp4', type: 'video' },
    { title: '', src: '/assets/img/valparaiso/intro.mp4', type: 'video' },
    { title: 'Aventuras', src: Aventura, type: 'image' },
    { title: 'Ingressos', src: Ingressos, type: 'image' },
    { title: 'Contato', src: Contato, type: 'image' },
  ],
  filters: ['tecnologia', 'marketing', 'filtros'],
};

function Valparaiso() {
  return <LayoutPortfolioItem item={item} />;
}
export default Valparaiso;
