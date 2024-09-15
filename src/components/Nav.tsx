'use client';
import Social from './Social';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('landing');
      const sectionHeight = section?.getBoundingClientRect().height;

      if (sectionHeight && window.scrollY > sectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="hidden sm:flex gap-8">
      <ul className="flex gap-12 items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <motion.a
              href={href}
              className={
                'uppercase text-[11px] tracking-[6px] font-semibold nav__link relative py-2 text-white'
              }
              animate={{ color: isScrolled ? '#ff3644' : '#ffffff' }}
              transition={{ duration: 0.4 }}
            >
              {label}
            </motion.a>
          </li>
        ))}
      </ul>
      <Social styleContainer="flex items-center gap-6" styleIcon="text-[16px]" />
    </nav>
  );
}
