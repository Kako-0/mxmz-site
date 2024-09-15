import Footer from './components/footer';
import Landing from './components/landing';
import MarcasConectadas from './components/marcasConectadas';
import '@/styles/home.css';
import Video from './components/video';
import Services from './components/services';

export default function Home() {
  return (
    <>
      <div className="relative min-h-dvh home__bg mb-12">
        <div className="container sm:w-4/5 min-[1920]:w-9/12 mx-auto px-4 sm:px-0 grid gap-16">
          <Landing />
          <Video />
          <Services />
          {/* <MarcasConectadas /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
