import Link from 'next/link';
import '@/styles/landing.css';

export default function Landing() {
  return (
    <div
      className="flex flex-col gap-32 justify-center min-h-dvh landing lg:flex-row lg:gap-2 lg:items-center lg:justify-between container sm:w-4/5 min-[1920]:w-9/12 mx-auto px-4 sm:px-0"
      id="landing"
    >
      <Link className="landing__link" href="/portfolio">
        Tecnologia
        <span>
          Identificar necessidades, problemas e oportunidades, de forma a propor soluções
          interativas que facilitem a comunicação e otimizem processos.
        </span>
      </Link>
      <Link className="landing__link self-end text-right lg:self-auto" href="/portfolio">
        Comunicação
        <span>Nosso objetivo é criar experiências interativas que aproximem pessoas e marcas.</span>
      </Link>
    </div>
  );
}
