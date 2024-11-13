'use client';

import GuaranaJesusFull from '@img/guaranajesus/full.jpg';
import Home from '@img/guaranajesus/1.png';
import EscolhaPostal from '@img/guaranajesus/2.png';
import Dados from '@img/guaranajesus/7.png';
import Parabens from '@img/guaranajesus/8.png';
import Descubra from '@img/guaranajesus/9.png';
import Comunicao from '@img/guaranajesus/11.png';
import Mobile1 from '@img/guaranajesus/mobile1.png';
import Mobile2 from '@img/guaranajesus/mobile2.png';
import Mobile3 from '@img/guaranajesus/mobile3.png';
import LayoutPortfolioItem from '@/components/layouts/LayoutPortfolioItem';
import type { PortfolioItem } from '@/app/types/portfolioItemType';

const item: PortfolioItem = {
  title: 'Guaraná Jesus',
  subtitle: '408 Anos São Luís',
  type: 'hotsite',
  year: '2019',
  thumbFull: GuaranaJesusFull,
  link: '/portfolio/guarana-jesus',
  resume:
    'Um hotsite que permitia ao público compartilhar seu amor pela cidade por todo o Brasil, através de cartões postais personalizados que continham mensagens e ilustrações que representavam história, cultura e sabores da capital do Maranhão. O projeto foi uma parceria com o artista Jailson Belfort, que produziu as ilustrações dos postais virtuais. Além do hotsite, enviamos kits personalizados da campanha para influenciadores, imprensa e utilizamos o Google Ads para divulgar a campanha.',
  description: [
    {
      title: 'Briefing',
      content:
        'Com a comunicação nas redes sociais da marca pausada, como poderíamos, no cenário de pandemia, celebrar o aniversário de 408 anos de São Luís? Criamos uma ação 100% digital que permitia compartilhar amor em forma de postais com pessoas queridas de todo o país.',
    },
    {
      title: 'Recursos',
      content: ['Vue.js', 'Google Maps API'],
    },
  ],
  screenshots: [
    { title: 'Processo', src: '/assets/img/guaranajesus/video.mp4', type: 'video' },
    { title: 'Cartão postal', src: '/assets/img/guaranajesus/flip.mp4', type: 'video' },
    { title: 'Home', src: Home, type: 'image' },
    { title: 'Escolha do postal', src: EscolhaPostal, type: 'image' },
    { title: 'Dados', src: Dados, type: 'image' },
    { title: 'Parabéns', src: Parabens, type: 'image' },
    { title: 'Descubra', src: Descubra, type: 'image' },
    { title: 'Comunicação', src: Comunicao, type: 'image' },
  ],
  screenshotsMobile: [
    { title: 'Mobile1', src: Mobile1, type: 'image' },
    { title: 'Mobile2', src: Mobile2, type: 'image' },
    { title: 'Mobile3', src: Mobile3, type: 'image' },
  ],
  filters: ['tecnologia', 'marketing', 'filtros'],
};

function GuaranaJesus() {
  return <LayoutPortfolioItem item={item} />;
}
export default GuaranaJesus;
