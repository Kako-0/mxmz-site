import Link from 'next/link';
import Social from './Social';

const links = [
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' },
];

export default function Nav() {
  return (
    <nav className="hidden sm:flex gap-8">
      <ul className="flex gap-12 items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="uppercase text-[11px] tracking-[6px] font-semibold nav__link relative py-2"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Social styleContainer="flex items-center gap-8" />
    </nav>
  );
}
