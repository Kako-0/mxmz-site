'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagePosition, setImagePosition] = useState<{
    width: number;
    height: number;
    top: number;
    left: number;
  } | null>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  const handleExpand = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setImagePosition({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
      });
    }
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (isAnimating) {
      router.push(link);
    }
  };

  const shouldDisplayButton =
    filterState.length === 0 || filterState.some((filter) => filters.includes(filter));

  return (
    <>
      {/* Botão que exibe a imagem e ativa a expansão */}
      <Link
        ref={buttonRef}
        href={link}
        className="relative w-full h-48 md:h-80 lg:h-[425px] flex flex-col justify-center gap-4 px-4 md:px-16 font-semibold group"
        type="button"
        style={{ display: shouldDisplayButton ? 'flex' : 'none' }}
        onClick={(e) => {
          handleExpand();
          handleClick(e);
        }}
        aria-label={`${title} - ${subtitle} (${year})`}
      >
        <p className="relative z-[1] w-fit px-4 text-[var(--vermelho)] text-2xl sm:text-3xl transition-colors before:transition-transform before:duration-300 before:origin-left before:content-[''] before:-z-[1] before:absolute before:inset-0 before:transform group-hover:before:scale-x-100 before:scale-x-0 before:bg-[var(--preto)]">
          {title}
        </p>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-8 tracking-[6px] relative z-[1] w-fit text-xs sm:text-base px-4 uppercase transition-colors before:transition-transform before:duration-300 before:origin-left before:content-[''] before:-z-[1] before:absolute before:inset-0 before:transform group-hover:before:scale-x-100 before:scale-x-0 before:bg-[var(--preto)]">
          <p>{subtitle}</p>
          <p>{year}</p>
        </div>
        <div className="bg-white absolute w-full h-full inset-0 grayscale brightness-50 transition-all duration-300 ease-in group-hover:grayscale-0 group-hover:brightness-100">
          <Image src={thumbFull} alt={title} className="object-cover h-full" />
        </div>
      </Link>

      {/* Lightbox com expansão a partir da posição do botão */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-[var(--branco2)] z-[9] overflow-hidden flex justify-center items-start"
            initial={{
              width: imagePosition ? imagePosition.width : '90%',
              height: imagePosition ? imagePosition.height : 'auto',
              top: imagePosition ? imagePosition.top : '50%',
              left: imagePosition ? imagePosition.left : '50%',
              opacity: 0.8,
              translateX: imagePosition ? 0 : '-50%',
              translateY: imagePosition ? 0 : '-50%',
            }}
            animate={{
              width: '99dvw',
              height: '100dvh',
              top: 0,
              left: 0,
              opacity: 1,
              translateX: 0,
              translateY: 0,
            }}
            exit={{
              width: imagePosition ? imagePosition.width : '90%',
              height: imagePosition ? imagePosition.height : 'auto',
              top: imagePosition ? imagePosition.top : '50%',
              left: imagePosition ? imagePosition.left : '50%',
              opacity: 0,
              translateX: imagePosition ? 0 : '-50%',
              translateY: imagePosition ? 0 : '-50%',
            }}
            transition={{ duration: 1.5, ease: [0.19, 0.64, 0.14, 1] }}
            onClick={handleClose}
            onAnimationComplete={handleAnimationComplete}
          >
            <motion.img src={thumbFull.src} alt={title} className="object-cover w-full h-[80vh]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default PortfolioItem;
