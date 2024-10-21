import '@/styles/landing.css';
import * as motion from 'framer-motion/client';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ease: 'easeIn', duration: 0.2, delay: 1.2 },
};

export default function Landing() {
  return (
    <div
      className="flex flex-col gap-32 justify-center min-h-dvh landing lg:flex-row lg:gap-2 lg:items-center lg:justify-between container sm:w-4/5 min-[1920]:w-9/12 mx-auto px-4 sm:px-0"
      id="landing"
    >
      <motion.p
        className="landing__link pointer-events-none"
        initial={variants.initial}
        animate={variants.animate}
        transition={variants.transition}
      >
        Tecnologia
        <span>
          Identificar necessidades, problemas e oportunidades, de forma a propor soluções
          interativas que facilitem a comunicação e otimizem processos.
        </span>
      </motion.p>
      <motion.p
        className="landing__link self-end text-right lg:self-auto pointer-events-none"
        initial={variants.initial}
        animate={variants.animate}
        transition={variants.transition}
      >
        Comunicação
        <span>Nosso objetivo é criar experiências interativas que aproximem pessoas e marcas.</span>
      </motion.p>
    </div>
  );
}
