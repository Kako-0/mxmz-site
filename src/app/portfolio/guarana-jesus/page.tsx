'use client';

import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
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
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react';
import { motion } from 'framer-motion';

const item = {
  title: 'Guaraná Jesus',
  subtitle: '408 Anos São Luís',
  type: 'hotsite',
  year: '2019',
  thumbFull: GuaranaJesusFull,
  link: '/portfolio/guarana-jesus',
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

const variants = {
  image: {
    initial: { filter: 'grayscale(0) brightness(1)' },
    animate: { filter: 'grayscale(1) brightness(.4)' },
  },
  banner: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
};
const text = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function GuaranaJesus() {
  return (
    <main className="bg-[var(--branco2)] text-[var(--grafite)] leading-7 grid gap-16">
      <motion.section
        className="flex flex-col items-center justify-center h-[80dvh] relative z-[1]"
        id="banner"
      >
        <motion.div
          className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center tracking-[-2px] text-white"
          variants={variants.banner}
          initial="hidden"
          animate="show"
          transition={{ delay: 1 }}
        >
          <motion.h1 variants={text} transition={{ ease: 'easeIn' }}>
            {item.title}
          </motion.h1>
          <motion.h2 variants={text} transition={{ ease: 'easeIn' }}>
            {item.subtitle}
          </motion.h2>
          <motion.p
            variants={text}
            transition={{ delay: 0.5 }}
            className="uppercase tracking-[6px] text-sm mt-8 font-medium"
          >
            {item.type}
          </motion.p>
        </motion.div>

        <motion.img
          src={item.thumbFull.src}
          alt={item.title}
          className="h-full absolute inset-0 -z-[1] object-cover grayscale brightness-[.4] min-[1920px]:object-cover min-[1920px]:w-full"
          initial={variants.image.initial}
          animate={variants.image.animate}
          variants={variants.image}
          transition={{ ease: [0.73, 0.01, 0.5, 0.5] }}
        />
      </motion.section>
      <motion.section
        className="container sm:w-4/5 2xl:w-1/2 min-[1920px]:w-9/12 mx-auto p-4 grid gap-4"
        id="description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, ease: 'easeIn' }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-2px]">
            O projeto
          </h1>
          <p className="tracking-[10px] font-light sm:text-xl md:text-2xl lg:text-3xl">
            {item.year}
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p>
            Um hotsite que permitia ao público compartilhar seu amor pela cidade por todo o Brasil,
            através de cartões postais personalizados que continham mensagens e ilustrações que
            representavam história, cultura e sabores da capital do Maranhão. O projeto foi uma
            parceria com o artista Jailson Belfort, que produziu as ilustrações dos postais
            virtuais. Além do hotsite, enviamos kits personalizados da campanha para
            influenciadores, imprensa e utilizamos o Google Ads para divulgar a campanha.
          </p>
          <Button asChild variant="outline" size="lg" className="uppercase my-8">
            <Link href={item.link}>Acesse o site</Link>
          </Button>
        </div>
        <article className="grid gap-4 lg:grid-cols-2 lg:gap-12">
          {item.description.map((desc) => {
            return (
              <React.Fragment key={desc.title}>
                <h1 className="flex flex-col w-fit lg:w-full lg:flex-row lg:justify-between font-semibold sm:text-xl md:text-2xl lg:text-3xl relative after:content-[''] after:h-[2px] after:w-2/3 lg:after:w-16 after:mt-2 after:bg-[var(--vermelho)] after:relative">
                  {desc.title}
                </h1>
                {Array.isArray(desc.content) ? (
                  <ul>
                    {desc.content.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{desc.content}</p>
                )}
              </React.Fragment>
            );
          })}
        </article>
      </motion.section>
      <section
        className="container sm:w-4/5 2xl:w-3/4 min-[1920px]:w-9/12 mx-auto p-4 py-16 grid gap-16"
        id="screenshots"
      >
        {item.screenshots.map((screenshot) => {
          return (
            <article key={screenshot.title} className="grid gap-8 justify-items-center">
              <h1 className="tracking-[10px] font-light uppercase mx-8 justify-self-start lg:ml-64">
                {screenshot.title}
              </h1>
              {screenshot.type === 'video' ? (
                <video
                  width="100%"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="shadow-[0_0_40px_0_rgba(0,0,0,0.15)] lg:w-4/5"
                >
                  <source src={screenshot.src.toString()} type="video/mp4" />
                  <track src="" kind="captions" srcLang="en" label="English" />
                </video>
              ) : (
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  className="shadow-[0_0_40px_0_rgba(0,0,0,0.15)] lg:w-4/5"
                />
              )}
            </article>
          );
        })}
      </section>
      <section className="bg-slate-200" id="screenshotsMobile">
        <div className="container sm:w-4/5 2xl:w-3/4 min-[1920px]:w-9/12 mx-auto p-4 py-16 gap-8 flex flex-col overflow-hidden h-dvh">
          <h1 className="tracking-[10px] font-light uppercase mx-8 lg:ml-64">Mobile</h1>
          <Carousel
            className="w-full"
            opts={{
              align: 'center',
              slidesToScroll: 1,
              loop: true,
              active: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="">
              {item.screenshotsMobile.map(
                (screenshot) =>
                  screenshot.type === 'image' && (
                    <CarouselItem key={screenshot.title} className="max-h-[720px] max-w-fit">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.title}
                        className="object-contain h-full"
                      />
                    </CarouselItem>
                  )
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </main>
  );
}
export default GuaranaJesus;
