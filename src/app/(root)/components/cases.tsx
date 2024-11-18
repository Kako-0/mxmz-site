'use client';

import GuaranaJesus from '@img/guaranajesus/destaque.webp';
import PDFMA from '@img/pdfma/destaque.webp';
import CorreSio from '@img/corresio/destaque.webp';
import Valparaiso from '@img/valparaiso/destaque.webp';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/cases.css';
import { useEffect, useState } from 'react';

const cases = [
  {
    title: 'Guaraná Jesus',
    subtitle: 'Social Media',
    year: '2020',
    thumb: GuaranaJesus,
    link: '/portfolio/guarana-jesus',
  },
  {
    title: 'PDF Maranhão',
    subtitle: 'Website',
    year: '2019',
    thumb: PDFMA,
    link: '/portfolio/pdf-ma',
  },
  {
    title: 'Corre Siô!',
    subtitle: 'Mobile Game',
    year: '2020',
    thumb: CorreSio,
    link: '/portfolio/corre-sio',
  },
  {
    title: 'Valparaíso',
    subtitle: 'Website',
    year: '2020',
    thumb: Valparaiso,
    link: '/portfolio/valparaiso',
  },
];

export default function Cases() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  useEffect(() => {
    // Se a largura da tela for maior ou igual a 1024px,
    if (!autoplay) return; // Se o autoplay estiver desativado,
    const interval = setInterval(() => {
      setHoveredIndex((prevIndex) => (prevIndex + 1) % cases.length);
    }, 3000); // Muda o index a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [autoplay]);

  return (
    <div className="flex flex-col gap-10 lg:gap-16 lg:flex-row lg:min-h-[60dvh]">
      <h3 className="text-[28px] md:text-4xl lg:text-lg lg:tracking-[5px] lg:uppercase leading-none -tracking-[1] font-bold w-56 cases__title flex-[0]">
        Cases em destaque
      </h3>
      <ul className="lg:relative lg:flex-1">
        {cases.map((item, index) => (
          <li key={item.title} className="group">
            <Link
              href={item.link}
              className="relative flex justify-end group-even:justify-start lg:group-even:justify-end lg:static"
            >
              <Image
                src={item.thumb}
                alt={item.title}
                className={`relative right-0 top-0 -z-[1] w-3/4 lg:h-[60dvh] lg:object-contain lg:absolute transform transition-all duration-1000 ease-in-out ${
                  hoveredIndex === index
                    ? 'lg:translate-x-0 lg:opacity-100'
                    : 'lg:translate-x-10 lg:opacity-0'
                } lg:group-first:block`}
              />
              <div className="absolute top-12 left-0 leading-normal w-full grid items-start gap-1 group-even:justify-end group-even:justify-items-end lg:group-even:justify-start lg:group-even:justify-items-start lg:static">
                <h4
                  className={`relative w-fit text-secondary text-2xl sm:text-4xl sm:px-5 font-semibold px-2 bg-[var(--grafite)] lg:bg-transparent lg:text-5xl lg:py-2 lg:mb-1 2xl:text-7xl transition-colors before:transition-transform before:duration-300 before:origin-left before:content-[''] before:-z-[1] before:absolute before:inset-0 before:transform ${
                    hoveredIndex === index
                      ? 'text-white before:scale-x-100 before:bg-[var(--grafite)]'
                      : 'hover:text-white hover:before:scale-x-100 before:scale-x-0 before:bg-[var(--grafite)]'
                  }`}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setAutoplay(false);
                  }}
                  onMouseLeave={() => setAutoplay(true)}
                >
                  {item.title}
                </h4>
                <div
                  className={`opacity-100 flex gap-4 px-2 py-1 text-[10px] font-semibold sm:text-sm sm:px-5 uppercase tracking-[3px] bg-[var(--grafite)] w-fit lg:p-0 lg:bg-transparent lg:absolute lg:top-0 lg:right-0 lg:flex-col lg:gap-0 lg:items-end lg:tracking-[6px] lg:text-base transform transition-all duration-500 ease-in-out ${
                    hoveredIndex === index
                      ? 'lg:opacity-100 lg:flex lg:translate-x-0'
                      : 'lg::opacity-0 lg:hidden lg:translate-x-16'
                  }`}
                >
                  <p>{item.subtitle}</p>
                  <span>{item.year}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
