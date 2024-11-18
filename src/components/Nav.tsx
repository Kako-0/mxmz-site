'use client';
import Social from './Social';
import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const links = [
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' },
];

export default function Nav({ colorInitialIsRed = true }) {
  const { scrollYProgress } = useScroll();

  const colorAnimation = useTransform(scrollYProgress, [0, 0.5], ['text-white', 'text-[#ff3644]']);
  const [colorClass, setColorClass] = useState(
    colorInitialIsRed ? 'text-[#ff3644]' : colorAnimation.get()
  );

  useMotionValueEvent(colorAnimation, 'change', (latest) => {
    setColorClass(latest);
  });

  return (
    <nav className="hidden sm:flex gap-8">
      <ul className="flex gap-12 items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`uppercase text-[11px] tracking-[6px] font-semibold nav__link relative py-2 transition-colors duration-300 ${colorClass}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Social styleContainer="flex items-center gap-6" styleIcon="text-[16px]" />
    </nav>
  );
}
