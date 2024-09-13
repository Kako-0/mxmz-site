import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <div
      className={`bg-[url('/assets/img/footer.webp')] bg-fixed bg-center h-[100dvh] flex items-center`}
    >
      <div className="container px-24 mx-auto grid justify-start items-start gap-32">
        <div className="grid justify-start items-start gap-8">
          <h3 className=" text-5xl sm:text-6xl font-semibold -tracking-[3px]">
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
              className="uppercase w-fit px-10 tracking-wider"
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
