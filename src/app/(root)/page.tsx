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
      <div className="relative min-h-dvh home__bg">
        <Landing />
        <div className="relative z-[2] bg-gradient-to-t from-black to-transparent to-100% bg-no-repeat">
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
