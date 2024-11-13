import type { StaticImageData } from 'next/image';
import type { ScreenshotType } from './screenshotType';

export type PortfolioItem = {
  title: string;
  subtitle?: string;
  type: string;
  year: string;
  thumbFull: StaticImageData;
  link: string;
  resume: string;
  description: {
    title: string;
    content: string[] | string;
  }[];
  screenshots?: {
    title: string;
    src: string | StaticImageData;
    type: ScreenshotType;
  }[];
  screenshotsMobile?: {
    title: string;
    src: string | StaticImageData;
    type: ScreenshotType;
  }[];
  filters: string[];
};
