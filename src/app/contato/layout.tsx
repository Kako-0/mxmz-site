import { LayoutTransition } from '@/components/layouts/layout-transition';

export default function ContatoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutTransition initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </LayoutTransition>
  );
}
