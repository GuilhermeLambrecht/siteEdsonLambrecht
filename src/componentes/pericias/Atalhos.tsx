import { Container } from '../Container';

/** `.pc-atalhos`: navegação pelas seções da página. */
export function Atalhos({ rotulo, itens }: { rotulo: string; itens: { rotulo: string; ancora: string }[] }) {
  return (
    <nav aria-label={rotulo} className="border-b border-linha bg-branco">
      <Container className="flex flex-wrap gap-x-[30px] gap-y-0 py-2 max-md:gap-x-[22px]">
        {itens.map((item) => (
          <a
            key={item.ancora}
            href={`#${item.ancora}`}
            className="flex min-h-11 items-center text-[.82rem] text-azul no-underline hover:underline hover:decoration-dourado-escuro"
          >
            {item.rotulo}
          </a>
        ))}
      </Container>
    </nav>
  );
}
