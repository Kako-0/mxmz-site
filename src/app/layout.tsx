import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: '../../public/assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../public/assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const gotham = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Gotham-Thin.woff',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../../public/assets/fonts/Gotham-ThinItalic.woff',
      style: 'italic',
      weight: '100',
    },
    {
      path: '../../public/assets/fonts/Gotham-ExtraLight.woff',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../../public/assets/fonts/Gotham-ExtraLightItalic.woff',
      style: 'italic',
      weight: '200',
    },
    {
      path: '../../public/assets/fonts/Gotham-Light.woff',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/Gotham-LightItalic.woff',
      style: 'italic',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/Gotham-Book.woff',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/Gotham-BookItalic.woff',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/Gotham-Medium.woff',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/Gotham-MediumItalic.woff',
      style: 'italic',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/Gotham-Bold.woff',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../../public/assets/fonts/Gotham-BoldItalic.woff',
      style: 'italic',
      weight: '600',
    },
    {
      path: '../../public/assets/fonts/Gotham-Black.woff',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../public/assets/fonts/Gotham-BlackItalic.woff',
      style: 'italic',
      weight: '700',
    },
    {
      path: '../../public/assets/fonts/Gotham-Ultra.woff',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../../public/assets/fonts/Gotham-UltraItalic.woff',
      style: 'italic',
      weight: '800',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Maximize',
  description:
    'Identificar necessidades, problemas e oportunidades, de forma a propor soluções interativas que facilitem a comunicação e otimizem processos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${gotham.className} antialiased`}>{children}</body>
    </html>
  );
}
