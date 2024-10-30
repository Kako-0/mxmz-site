'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@img/logo.svg';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Slogan from './Slogan';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const { scrollYProgress } = useScroll();

  const paddingAnimation = useTransform(scrollYProgress, [0, 0.1], ['py-8', 'py-3']);
  const bgAnimation = useTransform(
    scrollYProgress,
    [0, 0.2, 0.25],
    [
      'bg-transparent',
      'bg-transparent',
      'bg-[#000] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10',
    ]
  );

  const [paddingClass, setPaddingClass] = useState(paddingAnimation.get());
  const [bgClass, setBgClass] = useState(bgAnimation.get());

  useMotionValueEvent(paddingAnimation, 'change', (latest) => {
    setPaddingClass(latest);
  });
  useMotionValueEvent(bgAnimation, 'change', (latest) => {
    setBgClass(latest);
  });

  return (
    <motion.header
      className={`fixed z-10 p-8 flex justify-between items-center w-full transition-all ease-in duration-150 ${paddingClass} ${bgClass} `}
    >
      <Slogan />
      <Link href="/" className="">
        <Image
          src={Logo}
          width={67}
          height={36}
          alt="Maximize"
          priority
          style={{ color: 'currentcolor' }}
        />
      </Link>

      <Nav />
      <NavMobile />
    </motion.header>
  );
};

export default Header;
