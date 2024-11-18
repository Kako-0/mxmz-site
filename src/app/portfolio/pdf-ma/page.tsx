'use client';

import PdfMaFull from '@img/pdfma/full.jpg';
import Cadastro from '@img/pdfma/1.jpg';
import Busca from '@img/pdfma/2.jpg';
import Empresa from '@img/pdfma/3.jpg';
import Mobile1 from '@img/pdfma/mobile1.png';
import Mobile2 from '@img/pdfma/mobile2.png';
import Mobile3 from '@img/pdfma/mobile3.png';
import LayoutPortfolioItem from '@/components/layouts/LayoutPortfolioItem';
import type { PortfolioItem } from '@/app/types/portfolioItemType';
import type { Metadata } from 'next';

const item: PortfolioItem = {
  title: 'PDF Maranhão',
  subtitle: '',
  type: 'hotsite',
  year: '2019',
  thumbFull: PdfMaFull,
  link: '/portfolio/pdf-ma',
  resume:
    'O Programa de Desenvolvimento de Fornecedores do Maranhão tem como objetivo gerar negócios, desenvolvimento, inovação e valorização dos fornecedores locais em todo o estado. Para isso, um site que comunicasse todos os seus processos e serviços era fundamental. O PDF Maranhão visa contribuir para a geração de oportunidades de negócios e para o desenvolvimento de fornecedores locais. Através do portal de negócios do PDF as empresas podem se apresentar para o mercado, encontrar novos parceiros comerciais, identificar oportunidades de negócios e buscar cursos para se desenvolver.',
  description: [
    {
      title: 'Recursos',
      content: ['Vue.js', 'Laravel', 'PostgreSQL'],
    },
  ],
  screenshots: [
    {
      title: 'Sobre',
      src: 'https://www.youtube.com/embed/d0Uo18bNR8o?si=ksjfkWG2m3WuSQXi&amp;controls=0',
      type: 'youtube',
    },
    { title: 'Home', src: '/assets/img/pdfma/home.mp4', type: 'video' },
    { title: 'Cadastro', src: Cadastro, type: 'image' },
    { title: 'Dados', src: Busca, type: 'image' },
    { title: 'Empresa', src: Empresa, type: 'image' },
  ],
  screenshotsMobile: [
    { title: 'Mobile1', src: Mobile1, type: 'image' },
    { title: 'Mobile2', src: Mobile2, type: 'image' },
    { title: 'Mobile3', src: Mobile3, type: 'image' },
  ],
  filters: ['tecnologia'],
};

export const metadata: Metadata = {
  title: `${item.title} - Maximize`,
  description: item.resume,
};

function PdfMa() {
  return <LayoutPortfolioItem item={item} />;
}
export default PdfMa;
