'use client';

import MenuIcon from '@img/menu-icon.svg';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Início' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' },
];

export default function NavMobile() {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width >= 640) setOpen(false);
  }, [width]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="sm:hidden">
        <span className="sr-only">Menu</span>
        <Image src={MenuIcon} alt="Menu" width={28} height={28} />
      </SheetTrigger>
      <SheetContent className="linearRed p-24 px-16 menuLine">
        <nav className="flex flex-col justify-end h-full">
          <ul className="grid gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[15px] uppercase font-medium"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
