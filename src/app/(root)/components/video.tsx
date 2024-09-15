import Fancybox from '@/components/FancyBox';
import thumbnail from '@img/foto-agencia.webp';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/video.css';

export default function Video() {
  return (
    <div className="relative z-[2] grid grid-cols-2 grid-rows-[auto_auto_auto] py-8">
      <h2 className="font-semibold -tracking-[2px] text-[28px] sm:text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl relative z-[3] row-[2/4] col-[2/3] max-h-[600px] leading-[1.1] mt-[15%]">
        Somos apaixonados pelo que fazemos
      </h2>
      <div className="relative col-[1/3] row-[1/3]">
        <Image src={thumbnail} alt="Agência de publicidade" />
        <Fancybox>
          <Link
            data-fancybox
            href="https://vimeo.com/289945384"
            className="absolute top-1/2 left-[36%] lg:left-[22%] uppercase text-sm tracking-[3px] sm:tracking-[7px] font-semibold text-secondary video__play"
          >
            Assistir
          </Link>
        </Fancybox>
      </div>
    </div>
  );
}
