import Image from 'next/image';
import Link from 'next/link';
import Logo from '@img/logo.svg';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Slogan from './Slogan';

const Header = () => {
  return (
    <header className="fixed z-10 p-10 px-8 flex justify-between items-center w-full  ">
      <Slogan />
      <Link href="/">
        <Image src={Logo} width={67} height={36} alt="Maximize" priority />
      </Link>

      <Nav />
      <NavMobile />
    </header>
  );
};

export default Header;
