import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-dvh bg-secondary" />
      <div className="h-dvh bg-gray-900" id="second" />
      <div className="h-dvh bg-gray-900" />
    </>
  );
}
