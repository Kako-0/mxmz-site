import Header from '@/components/Header';

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
