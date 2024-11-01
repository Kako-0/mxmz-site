'use client';

import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import PdfMaFull from '@img/pdfma/full.jpg';
import Cadastro from '@img/pdfma/1.jpg';
import Busca from '@img/pdfma/2.jpg';
import Empresa from '@img/pdfma/3.jpg';
import Mobile1 from '@img/pdfma/mobile1.png';
import Mobile2 from '@img/pdfma/mobile2.png';
import Mobile3 from '@img/pdfma/mobile3.png';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react';

const item = {
  title: 'PDF Maranhão',
  subtitle: '',
  type: 'hotsite',
  year: '2019',
  thumbFull: PdfMaFull,
  link: '/portfolio/pdf-ma',
  description: [
    {
      title: 'Recursos',
      content: ['Vue.js', 'Laravel', 'PostgreSQL'],
    },
  ],
  screenshots: [
    { title: 'Sobre', src: 'https://youtu.be/d0Uo18bNR8o', type: 'youtube' },
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

function GuaranaJesus() {
  return (
    <main className="bg-[var(--branco2)] text-[var(--grafite)] leading-7 grid gap-16">
      <section
        className="flex flex-col items-center justify-center h-[80dvh] relative z-[1]"
        id="banner"
      >
        <div className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center tracking-[-2px] text-white">
          <h1>{item.title}</h1>
          <h2>{item.subtitle}</h2>
          <p className="uppercase tracking-[6px] text-sm mt-8 font-medium">{item.type}</p>
        </div>

        <Image
          src={item.thumbFull}
          alt={item.title}
          className="h-full absolute inset-0 -z-[1] object-cover grayscale brightness-[.4] min-[1920px]:object-cover min-[1920px]:w-full"
        />
      </section>
      <section
        className="container sm:w-4/5 2xl:w-1/2 min-[1920px]:w-9/12 mx-auto p-4 grid gap-4"
        id="description"
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
            O Programa de Desenvolvimento de Fornecedores do Maranhão tem como objetivo gerar
            negócios, desenvolvimento, inovação e valorização dos fornecedores locais em todo o
            estado. Para isso, um site que comunicasse todos os seus processos e serviços era
            fundamental. O PDF Maranhão visa contribuir para a geração de oportunidades de negócios
            e para o desenvolvimento de fornecedores locais. Através do portal de negócios do PDF as
            empresas podem se apresentar para o mercado, encontrar novos parceiros comerciais,
            identificar oportunidades de negócios e buscar cursos para se desenvolver.
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
      </section>
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
              {screenshot.type === 'youtube' && (
                <iframe
                  className="lg:w-4/5 aspect-video"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/d0Uo18bNR8o?si=ksjfkWG2m3WuSQXi&amp;controls=0"
                  title="PDF Maranhão"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
              {screenshot.type === 'video' && (
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
              )}
              {screenshot.type === 'image' && (
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
