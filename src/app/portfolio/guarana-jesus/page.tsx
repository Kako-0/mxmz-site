import { Button } from '@/components/ui/button';
import GuaranaJesusFull from '@img/guaranajesus/full.jpg';
import Home from '@img/guaranajesus/1.png';
import EscolhaPostal from '@img/guaranajesus/2.png';
import Dados from '@img/guaranajesus/7.png';
import Parabens from '@img/guaranajesus/8.png';
import Descubra from '@img/guaranajesus/9.png';
import Comunicao from '@img/guaranajesus/11.png';
import Mobile1 from '@img/guaranajesus/mobile1.png';
import Mobile2 from '@img/guaranajesus/mobile2.png';
import Mobile3 from '@img/guaranajesus/mobile3.png';
import Image from 'next/image';
import Link from 'next/link';

const item = {
  title: 'Guaraná Jesus',
  subtitle: '408 Anos São Luís',
  type: 'hotsite',
  year: '2020',
  thumbFull: GuaranaJesusFull,
  link: '/portfolio/guarana-jesus',
  screenshots: [
    { title: 'Processo', src: '/assets/img/guaranajesus/video.mp4', type: 'video' },
    { title: 'Cartão postal', src: '/assets/img/guaranajesus/flip.mp4', type: 'video' },
    { title: 'Home', src: Home, type: 'image' },
    { title: 'Escolha do postal', src: EscolhaPostal, type: 'image' },
    { title: 'Dados', src: Dados, type: 'image' },
    { title: 'Parabéns', src: Parabens, type: 'image' },
    { title: 'Descubra', src: Descubra, type: 'image' },
    { title: 'Comunicação', src: Comunicao, type: 'image' },
  ],
  screenshotsMobile: [
    { title: 'Mobile1', src: Mobile1, type: 'image' },
    { title: 'Mobile2', src: Mobile2, type: 'image' },
    { title: 'Mobile3', src: Mobile3, type: 'image' },
  ],
  filters: ['tecnologia', 'marketing', 'filtros'],
};

function GuaranaJesus() {
  return (
    <main className="bg-[var(--branco2)] text-[var(--grafite)] leading-7">
      <section className="flex flex-col items-center justify-center h-[80dvh] relative z-[1]">
        <div className="text-3xl font-semibold text-center tracking-[-2px] text-white">
          <h1>{item.title}</h1>
          <h2>{item.subtitle}</h2>
          <p className="uppercase tracking-[6px] text-sm mt-8 font-medium">{item.type}</p>
        </div>

        <Image
          src={item.thumbFull}
          alt={item.title}
          className="h-full absolute inset-0 -z-[1] object-cover grayscale brightness-[.4]"
        />
      </section>
      <section className="container sm:w-4/5 min-[1920px]:w-9/12 mx-auto p-4 grid gap-4 ">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold tracking-[-2px]">O projeto</h1>
          <p className="tracking-[10px] font-light">{item.year}</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p>
            Um hotsite que permitia ao público compartilhar seu amor pela cidade por todo o Brasil,
            através de cartões postais personalizados que continham mensagens e ilustrações que
            representavam história, cultura e sabores da capital do Maranhão. O projeto foi uma
            parceria com o artista Jailson Belfort, que produziu as ilustrações dos postais
            virtuais. Além do hotsite, enviamos kits personalizados da campanha para
            influenciadores, imprensa e utilizamos o Google Ads para divulgar a campanha.
          </p>
          <Button asChild variant="outline">
            <Link href={item.link}>Acesse o site</Link>
          </Button>
        </div>
        <article>
          <h1>Briefing</h1>
          <p>
            Com a comunicação nas redes sociais da marca pausada, como poderíamos, no cenário de
            pandemia, celebrar o aniversário de 408 anos de São Luís? Criamos uma ação 100% digital
            que permitia compartilhar amor em forma de postais com pessoas queridas de todo o país.
          </p>
        </article>
        <article>
          <h1>Recursos</h1>
          <ul>
            <li>Vue.js</li>
            <li>Google Maps API</li>
          </ul>
        </article>
      </section>
      <section className="container sm:w-4/5 min-[1920px]:w-9/12 mx-auto p-4 py-16 grid gap-16">
        {item.screenshots.map((screenshot) => {
          return (
            <article key={screenshot.title} className="grid gap-8">
              <h1 className="tracking-[10px] font-light uppercase mx-8">{screenshot.title}</h1>
              {screenshot.type === 'video' ? (
                <video
                  width="100%"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="shadow-[0_0_40px_0_rgba(0,0,0,0.15)]"
                >
                  <source src={screenshot.src.toString()} type="video/mp4" />
                  <track src="" kind="captions" srcLang="en" label="English" />
                </video>
              ) : (
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  className="shadow-[0_0_40px_0_rgba(0,0,0,0.15)]"
                />
              )}
            </article>
          );
        })}
      </section>
      <section className="container sm:w-4/5 min-[1920px]:w-9/12 mx-auto p-4 py-16 gap-8 bg-slate-200 flex flex-col overflow-hidden h-dvh">
        <h1 className="tracking-[10px] font-light uppercase mx-8">Mobile</h1>
        <div className="overflow-x-auto flex gap-4 h-full">
          {item.screenshotsMobile.map(
            (screenshot) =>
              screenshot.type === 'image' && (
                <Image src={screenshot.src} alt={screenshot.title} key={screenshot.title} />
              )
          )}
        </div>
      </section>
    </main>
  );
}
export default GuaranaJesus;
