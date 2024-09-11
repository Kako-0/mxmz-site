import Image from 'next/image';
import Link from 'next/link';
import Logo from '@img/logo.svg';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import Nav from './Nav';
import NavMobile from './NavMobile';

const HeaderTw = () => {
  return (
    <header className="fixed py-8 px-10 flex justify-between items-center w-full">
      <Link href="/">
        <Image src={Logo} width={67} height={36} alt="Maximize" />
      </Link>

      {/* <h2>
        <span>We Know What We Do</span>
      </h2> */}
      <Nav />
      <NavMobile />
    </header>
  );
};

export default HeaderTw;
