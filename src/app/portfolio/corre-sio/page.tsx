import CorresioFull from '@img/corresio/full.jpg';
import HowToPlay from '@img/corresio/2.jpg';
import LayoutPortfolioItem from '@/components/layouts/LayoutPortfolioItem';
import type { PortfolioItem } from '@/app/types/portfolioItemType';
import type { Metadata } from 'next';

const item: PortfolioItem = {
  title: 'Corre siô',
  type: 'Mobile game',
  year: '2019',
  thumbFull: CorresioFull,
  link: '/portfolio/guarana-jesus',
  resume:
    '“Corre Siô!": o primeiro game nascido e criado no Maranhão. Um projeto da Cerveja Magnífica em parceria com o grupo de humor Pão com Ovo. Inspirado nos games com o visual retrô e é uma aventura infinita que se passa em vários cenários do Maranhão, explorando nossa cultura e costumes. O objetivo do player é percorrer a maior distância e coletar a maior quantidade de tampinhas ao longo do percurso. Uma vez que ele acerta três obstáculos em sequência, a partida acaba e seus pontos são computados para gerar o ranking (geral). A execução do projeto durou 5 meses, regada a muito trabalho e dedicação da Agência Phocus, Ops Game Studio, Reutmann Santos e Deu na telha Audiolab.',
  description: [
    {
      title: 'Recursos',
      content: ['Unity 3d', 'NodeJS', 'C#', 'MongoDB'],
    },
  ],
  screenshots: [
    { title: 'Start', src: '/assets/img/corresio/0.mp4', type: 'video' },
    { title: 'Playing', src: '/assets/img/corresio/00.mp4', type: 'video' },
    { title: 'Pick your character', src: '/assets/img/corresio/1.mp4', type: 'video' },
    { title: 'How to play', src: HowToPlay, type: 'image' },
    { title: 'Achievements', src: '/assets/img/corresio/4.mp4', type: 'video' },
    { title: 'Ranking', src: '/assets/img/corresio/3.mp4', type: 'video' },
  ],
  filters: ['tecnologia', 'marketing', 'filtros'],
};

export const metadata: Metadata = {
  title: `${item.title}`,
  description: item.resume,
};

function CorreSio() {
  return <LayoutPortfolioItem item={item} />;
}
export default CorreSio;
