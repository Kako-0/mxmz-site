'use client';

import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { motion } from 'framer-motion';
import GuaranaJesusFull from '@img/guaranajesus/full.jpg';
import PDFMAFull from '@img/pdfma/full.jpg';
import CorreSioFull from '@img/corresio/full.jpg';
import ValparaisoFull from '@img/valparaiso/full.jpg';
import PortfolioItem from './components/portfolioItem';

const cases = [
  {
    title: 'Corre, Siô!',
    subtitle: 'Game',
    year: '2020',
    thumbFull: CorreSioFull,
    link: 'portfolio/corre-sio',
    filters: ['tecnologia', 'filtros'],
  },
  {
    title: 'Guaraná Jesus',
    subtitle: 'Social Media',
    year: '2020',
    thumbFull: GuaranaJesusFull,
    link: '/portfolio/guarana-jesus',
    filters: ['tecnologia', 'marketing', 'filtros'],
  },
  {
    title: 'PDF Maranhão',
    subtitle: 'Website',
    year: '2019',
    thumbFull: PDFMAFull,
    link: '/portfolio/pdf-ma',
    filters: ['tecnologia'],
  },
  {
    title: 'Valparaíso',
    subtitle: 'Website',
    year: '2020',
    thumbFull: ValparaisoFull,
    link: '/portfolio/valparaiso',
    filters: ['tecnologia'],
  },
];

export default function Portfolio() {
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <motion.main className="bg-[url('/assets/img/portfolio-title.png')] bg-[right_top_8rem] bg-contain sm:bg-[length:80%] bg-no-repeat content-[''] w-full h-full">
      <section className="relative min-h-dvh container sm:w-4/5 min-[1920px]:w-9/12 mx-auto px-4 flex flex-col gap-16 py-40 pb-16 xl:min-h-dvh">
        <div className="w-5/6 md:w-2/4 h-fit grid gap-8">
          <h1 className="font-semibold text-4xl md:text-6xl">Portfolio</h1>
          <p>
            A criatividade e a tecnologia são nossas chaves para envolver o público em cada projeto,
            gerando engajamento e resultados relevantes.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start overflow-hidden w-full">
          <p>Filtrar por:</p>
          <ToggleGroup
            type="multiple"
            variant="outline"
            size="sm"
            onValueChange={(value: string[]) => setFilters(value)}
            className="overflow-x-auto w-full justify-start"
          >
            <ToggleGroupItem value="tecnologia" aria-label="Toggle Tecnologia">
              Tecnologia
            </ToggleGroupItem>
            <ToggleGroupItem value="marketing" aria-label="Toggle Marketing digital">
              Marketing digital
            </ToggleGroupItem>
            <ToggleGroupItem value="filtros" aria-label="Toggle Filtros Instagram">
              Filtros Instagram
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col gap-4">
          {cases.map((item) => (
            <PortfolioItem key={item.title} {...item} filterState={filters} />
          ))}
        </div>
      </section>
    </motion.main>
  );
}
