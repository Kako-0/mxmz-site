'use client';

import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { MdOutlinePlayArrow } from 'react-icons/md';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '@/styles/contato.css';

export default function Contato() {
  return (
    <main className="bg-[url('/assets/img/contato-footer.png')] bg-bottom bg-contain bg-no-repeat content-[''] w-full h-full contato__bg">
      <div className="relative min-h-dvh container sm:w-4/5 min-[1920px]:w-9/12 mx-auto px-4 grid gap-16">
        <section className="py-40 pb-16 grid gap-24 lg:grid-cols-3 lg:gap-x-0 xl:gap-48 xl:min-h-dvh">
          <motion.h1
            className="w-3/4 font-semibold lg:col-span-2 xl:text-3xl"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.8 }}
          >
            Quer saber mais sobre a Maximize ou busca desenvolver um projeto com nosso time? Vamos
            conversar!
          </motion.h1>
          <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_auto] lg:row-start-2 lg:col-start-2 lg:col-span-2">
            <div className="">
              <h2 className="uppercase text-xs text-[var(--cinzaescuro3)]">Telefone:</h2>
              <Button asChild variant="link">
                <Link href="tel:+559832359817" className="lowercase text-base tracking-normal px-0">
                  +55 98 3235-9817
                </Link>
              </Button>
            </div>
            <div className="">
              <h2 className="uppercase text-xs text-[var(--cinzaescuro3)]">Email:</h2>
              <Button asChild variant="link">
                <Link
                  href="mailto:contato@maximize.com.br"
                  className="lowercase text-base tracking-normal px-0"
                >
                  contato@maximize.com.br
                </Link>
              </Button>
            </div>
            <div className="">
              <h2 className="uppercase text-xs text-[var(--cinzaescuro3)]">Endereço:</h2>
              <Button asChild variant="link">
                <Link
                  href="https://goo.gl/maps/H5SgaBoxY7nELPKZ8"
                  className="lowercase text-base tracking-normal px-0 h-auto max-w-64"
                >
                  Av. dos Holandeses, 1 - Ponta do Farol Ed. Biadene Office, 7º Andar CEP: 65077-635
                  - São Luís - MA, Brasil
                </Link>
              </Button>
            </div>
            <div>
              <h2 className="uppercase text-xs text-[var(--cinzaescuro3)]">Siga-nos</h2>
              <Social
                styleContainer="flex gap-4 flex-row-reverse"
                styleIcon="text-secondary text-[26px]"
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-28 lg:grid-cols-3 lg:gap-x-0 lg:min-h-[90dvh] lg:grid-rows-[auto_200px_auto]">
          <motion.h1
            className="w-56 h-fit font-semibold text-2xl xl:text-4xl lg:col-span-3 lg:w-[400px]"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.8 }}
            transition={{ ease: 'easeIn', duration: 0.8 }}
          >
            Quer fazer parte da nossa equipe?
          </motion.h1>
          <ul className="grid gap-4 row-start-2 col-span-3 lg:col-start-2">
            <li>
              <Link
                href="https://maximize.com.br/vaga"
                className="relative text-secondary font-semibold text-xl xl:text-3xl nav__link flex items-center justify-between"
              >
                Comunicação <MdOutlinePlayArrow />
              </Link>
            </li>
            <li>
              <Link
                href="https://maximize.com.br/vaga"
                className="relative text-secondary font-semibold text-xl xl:text-3xl nav__link flex items-center justify-between"
              >
                Design/UX <MdOutlinePlayArrow />
              </Link>
            </li>
            <li>
              <Link
                href="https://maximize.com.br/vaga"
                className="relative text-secondary font-semibold text-xl xl:text-3xl nav__link flex items-center justify-between"
              >
                Tecnologia <MdOutlinePlayArrow />
              </Link>
            </li>
          </ul>
          <div className="row-start-3 col-span-3 mt-auto py-4">
            <p className="text-xs text-[var(--cinzaescuro3)]">
              © Maximize 2021. Todos os direitos reservados.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
