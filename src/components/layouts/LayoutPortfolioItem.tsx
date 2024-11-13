import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Fragment } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import type { PortfolioItem } from '@/app/types/portfolioItemType';

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

function LayoutPortfolioItem({ item }: { item: PortfolioItem }) {
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
          {item.subtitle && (
            <motion.h2 variants={text} transition={{ ease: 'easeIn' }}>
              {item.subtitle}
            </motion.h2>
          )}
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
          <p>{item.resume}</p>
          <Button asChild variant="outline" size="lg" className="uppercase my-8">
            <Link href={item.link}>Acesse o site</Link>
          </Button>
        </div>
        <article className="grid gap-4 lg:grid-cols-2 lg:gap-12">
          {item.description.map((desc) => {
            return (
              <Fragment key={desc.title}>
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
              </Fragment>
            );
          })}
        </article>
      </motion.section>
      {item.screenshots && (
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
                    src={screenshot.src.toString()}
                    title={item.title}
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
      )}
      {item.screenshotsMobile && (
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
              <CarouselContent>
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
      )}
    </main>
  );
}
export default LayoutPortfolioItem;
