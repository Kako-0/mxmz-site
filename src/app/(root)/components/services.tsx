import { Button } from '@/components/ui/button';
import Link from 'next/link';

const list = [
  {
    title: 'Comunicação Digital',
    items: ['Posicionamento', 'Campanhas'],
  },
  {
    title: 'Gerenciamento de Redes Sociais',
    items: ['Monitoramento de performance', 'Análise de dados e resultados'],
  },
  {
    title: 'Tecnologia',
    items: ['Aplicativos', 'SaaS e BI', 'Games', 'Cloud Computing', 'Solution Selling'],
  },
  {
    title: 'Comunicação',
    items: ['Website', 'eCommerce', 'Ações digitais'],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col gap-16 relative z-[1]">
      <div className="">
        <p className="font-medium w-5/6 text-sm leading-6 mb-8">
          Confira alguns dos trabalhos que desenvolvemos para nossos clientes, sempre buscando
          alcançar os objetivos propostos e maximizar resultados.
        </p>
        <Button asChild variant="outline">
          <Link href="/portfolio" className="uppercase w-fit px-10 tracking-wider">
            Veja nossos cases
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-10">
        {list.map((item) => (
          <ul key={item.title} className="flex flex-col gap-4 w-5/6">
            <li className="font-semibold first:text-[var(--cinzaescuro2)] leading-[1.1]">
              {item.title}
            </li>
            {item.items.map((subItem) => (
              <li key={subItem} className="font-medium text-xs -mb-2">
                {subItem}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
