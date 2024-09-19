import guaranaJesus from '@img/clientes/guaranajesus.webp';
import addera from '@img/clientes/addera.svg';
import benegrip from '@img/clientes/benegrip.svg';
import estomazil from '@img/clientes/estomazil.svg';
import tamarine from '@img/clientes/tamarine.svg';
import fribal from '@img/clientes/fribal.svg';
import pdf from '@img/clientes/pdf.webp';
import govma from '@img/clientes/govma.webp';
import govpi from '@img/clientes/govpi.webp';
import vale from '@img/clientes/vale.webp';
import rioanil from '@img/clientes/rioanil.svg';
import kw from '@img/clientes/kw.svg';
import isaac from '@img/clientes/isaac.svg';
import hsd from '@img/clientes/hsd.svg';
import valparaiso from '@img/clientes/valparaiso.svg';
import yummy from '@img/clientes/yummy.svg';
import tvn from '@img/clientes/tvn.png';
import cabana from '@img/clientes/cabana.svg';
import berg from '@img/clientes/berg.png';
import undb from '@img/clientes/undb.webp';
import dbosco from '@img/clientes/dbosco.svg';
import Image from 'next/image';

const marcas = [
  { src: guaranaJesus, alt: 'Guaraná Jesus' },
  { src: addera, alt: 'Addera' },
  { src: benegrip, alt: 'Benegrip' },
  { src: estomazil, alt: 'Estomazil' },
  { src: tamarine, alt: 'Tamarine' },
  { src: fribal, alt: 'Fribal' },
  { src: pdf, alt: 'PDF' },
  { src: govma, alt: 'Governo Maranhão' },
  { src: govpi, alt: 'Governo Piauí' },
  { src: vale, alt: 'Vale' },
  { src: rioanil, alt: 'Rio Anil' },
  { src: kw, alt: 'KW' },
  { src: isaac, alt: 'Isaac' },
  { src: hsd, alt: 'HSD' },
  { src: valparaiso, alt: 'Valparaíso' },
  { src: yummy, alt: 'Yummy' },
  { src: tvn, alt: 'TVN' },
  { src: cabana, alt: 'Cabana' },
  { src: berg, alt: 'Berg' },
  { src: undb, alt: 'UNDB' },
  { src: dbosco, alt: 'Don Bosco' },
];

export default function MarcasConectadas() {
  return (
    <div className="min-h-dvh h-full w-full" id="marcas">
      <h3 className="text-4xl sm:text-6xl font-semibold -tracking-[3px] mb-24">
        Marcas
        <br />
        conectadas
      </h3>
      <ul className="gap-6 grid grid-cols-3 sm:grid-cols-4 sm:gap-10 lg:grid-cols-6 xl:grid-cols-7">
        {marcas.map((marca) => (
          <li
            key={marca.alt}
            className="max-w-[150px] w-full aspect-square flex items-center grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          >
            <Image src={marca.src} alt={marca.alt} className="h-full w-full object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
}
