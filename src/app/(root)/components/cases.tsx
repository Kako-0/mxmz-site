import GuaranaJesus from '@img/guaranajesus/destaque.webp';
import PDFMA from '@img/pdfma/destaque.webp';
import CorreSio from '@img/corresio/destaque.webp';
import Valparaiso from '@img/valparaiso/destaque.webp';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/cases.css';

const cases = [
  {
    title: 'Guaraná Jesus',
    subtitle: 'Social Media',
    year: '2020',
    thumb: GuaranaJesus,
    link: 'https://maximize.com.br/portfolio/guarana-jesus',
  },
  {
    title: 'PDF Maranhão',
    subtitle: 'Website',
    year: '2019',
    thumb: PDFMA,
    link: 'https://maximize.com.br/portfolio/pdf-ma',
  },
  {
    title: 'Corre Siô!',
    subtitle: 'Mobile Game',
    year: '2020',
    thumb: CorreSio,
    link: 'https://maximize.com.br/portfolio/corre-sio',
  },
  {
    title: 'Valparaíso',
    subtitle: 'Website',
    year: '2020',
    thumb: Valparaiso,
    link: 'https://maximize.com.br/portfolio/valparaiso',
  },
];

export default function Cases() {
  return (
    <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:min-h-[55dvh]">
      <h3 className="text-[28px] md:text-4xl lg:text-lg lg:tracking-[5px] lg:uppercase leading-none -tracking-[1] font-bold w-56 cases__title">
        Cases em destaque
      </h3>
      <ul className="lg:relative">
        {cases.map((item) => (
          <li key={item.title} className="group">
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="relative flex justify-end group-even:justify-start lg:group-even:justify-end lg:static"
            >
              <Image
                src={item.thumb}
                alt={item.title}
                className="relative right-0 top-0 -z-[1] w-3/4 lg:absolute lg:hidden lg:group-first:block"
              />
              <div className="absolute top-12 left-0 leading-normal w-full grid items-start gap-1 group-even:justify-end group-even:justify-items-end lg:group-even:justify-start lg:group-even:justify-items-start lg:static">
                <h4 className="relative w-fit text-secondary text-2xl sm:text-4xl sm:px-5 font-semibold px-2 bg-[var(--grafite)] lg:bg-transparent lg:text-5xl lg:py-2 lg:mb-1 2xl:text-7xl hover:text-white hover:before:scale-x-100 before:bg-[var(--grafite)] before:absolute before:inset-0 before:transition-transform before:transform before:origin-left before:scale-x-0 before:content-[''] before:-z-[1]">
                  {item.title}
                </h4>
                <div className="flex gap-4 px-2 py-1 text-[10px] font-semibold sm:text-sm sm:px-5 uppercase tracking-[3px] bg-[var(--grafite)] w-fit lg:py-0 lg:bg-transparent lg:absolute lg:top-0 lg:right-0 lg:flex-col lg:gap-0 lg:items-end lg:tracking-[6px] lg:text-base lg:hidden lg:group-first:flex">
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
