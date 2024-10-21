import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

type PortfolioItemProps = {
  title: string;
  subtitle: string;
  year: string;
  thumbFull: StaticImageData;
  link: string;
  filters: string[];
  filterState: string[];
};
function PortfolioItem({
  title,
  subtitle,
  year,
  thumbFull,
  link,
  filters,
  filterState,
}: PortfolioItemProps) {
  return (
    <Link
      className="relative w-full h-48 md:h-80 lg:h-[425px] flex flex-col justify-center gap-4 px-4 md:px-16 font-semibold group"
      href={link}
      style={{
        display:
          filterState.length === 0 || filterState.some((filter) => filters.includes(filter))
            ? 'flex'
            : 'none',
      }}
    >
      <p className="relative z-[1] w-fit px-4 text-[var(--vermelho)] text-2xl sm:text-3xl transition-colors before:transition-transform before:duration-300 before:origin-left before:content-[''] before:-z-[1] before:absolute before:inset-0 before:transform group-hover:before:scale-x-100 before:scale-x-0 before:bg-[var(--preto)]">
        {title}
      </p>
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-8 tracking-[6px] relative z-[1] w-fit text-xs sm:text-base px-4 uppercase transition-colors before:transition-transform before:duration-300 before:origin-left before:content-[''] before:-z-[1] before:absolute before:inset-0 before:transform group-hover:before:scale-x-100 before:scale-x-0 before:bg-[var(--preto)]">
        <p className=" ">{subtitle}</p>
        <p>{year}</p>
      </div>
      <div className="bg-white absolute w-full h-full inset-0 grayscale brightness-50 transition-all duration-300 ease-in group-hover:grayscale-0 group-hover:brightness-100">
        <Image src={thumbFull} alt={title} layout="fill" objectFit="cover" />
      </div>
    </Link>
  );
}
export default PortfolioItem;
