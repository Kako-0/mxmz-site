import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <div
      className={`bg-[url('/assets/img/footer.webp')] bg-fixed bg-center bg-cover h-[100dvh] flex items-center relative z-1 before:absolute before:top-0 before:left-0 before:w-full before:h-1/3 before:z-[9] before:bg-gradient-to-b before:from-black before:to-transparent before:to-33%`}
    >
      <div className="container sm:w-4/5 min-[1920]:w-9/12 px-4 mx-auto flex flex-wrap  md:justify-between md:items-center gap-32 ">
        <div className="grid justify-start items-start gap-8">
          <h3 className="text-4xl sm:text-6xl font-semibold -tracking-[3px]">
            Fale com <br /> a gente
          </h3>
          <Button asChild size="lg">
            <Link href="/contato" className="uppercase w-fit px-10 tracking-wider">
              Entre em contato
            </Link>
          </Button>
        </div>
        <div className="grid justify-start items-start gap-8">
          <address className="font-medium not-italic text-sm leading-7">
            Av. dos Holandeses, 1 - Ponta do Farol <br />
            Ed. Biadene Office, 7º Andar <br />
            CEP: 65077-635 - São Luís - MA, Brasil
          </address>

          <Button asChild variant="outline" size="lg">
            <Link
              href="https://goo.gl/maps/qj6AaJUwxCz4UtMx7"
              target="_blank"
              className="uppercase w-fit px-10 tracking-[4px]"
              rel="noreferrer"
            >
              Ver no mapa
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
