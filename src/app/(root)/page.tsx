import Footer from './components/footer';
import Landing from './components/landing';
import MarcasConectadas from './components/marcasConectadas';
import '@/styles/home.css';
import Video from './components/video';
import Services from './components/services';
import Cases from './components/cases';

export default function Home() {
  return (
    <>
      <div className="relative min-h-dvh home__bg overflow-x-hidden">
        <Landing />
        <div className="relative z-[2] bg-gradient-to-t from-black to-transparent to-100% bg-no-repeat py-4 sm:py-16 before:hidden lg:before:block before:absolute before:-top-52 before:left-[10%] before:pointer-events-none before:w-[2px] before:h-[250px] before:bg-[var(--branco)] before:content-[''] ">
          <div className="container sm:w-4/5 min-[1920px]:w-9/12 mx-auto px-4 grid gap-16">
            <Video />
            <Services />
            <Cases />
            <MarcasConectadas />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
