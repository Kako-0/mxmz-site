'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@img/logo.svg';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Slogan from './Slogan';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Header = ({ colorInitialIsRed = true }) => {
  const { scrollYProgress } = useScroll();

  const paddingAnimation = useTransform(scrollYProgress, [0, 0.03], ['py-8', 'py-3']);
  const bgAnimation = useTransform(
    scrollYProgress,
    [0, 0.02, 0.03],
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
    <header
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

      <Nav colorInitialIsRed={colorInitialIsRed} />
      <NavMobile />
    </header>
  );
};

export default Header;
