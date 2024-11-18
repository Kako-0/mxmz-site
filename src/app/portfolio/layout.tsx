import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s - Maximize', default: 'Portfolio - Maximize' },
  description:
    'A criatividade e a tecnologia são nossas chaves para envolver o público em cada projeto, gerando engajamento e resultados relevantes.',
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header colorInitialIsRed={true} />
      {children}
    </>
  );
}
