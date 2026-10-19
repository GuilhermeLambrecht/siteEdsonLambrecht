import type { DadosPaginaPericia, DadosServicoPericia, PartesTexto } from '../../conteudo/tipos';
import { Icone } from '../Icones';
import { TextoRico } from '../TextoRico';
import { LinkFrente } from '../Tipografia';

/** `.pc-indice`: atalhos numerados para os serviços (Segurança do Trabalho). */
export function IndiceServicos({ itens }: { itens: NonNullable<DadosPaginaPericia['indice']> }) {
  return (
    <ul className="m-0 mb-12 grid grid-cols-2 gap-x-[30px] gap-y-0 border-t border-linha max-md:mb-9 max-md:grid-cols-[1fr_1fr] max-md:gap-x-[22px]">
      {itens.map((item) => (
        <li key={item.ancora}>
          <a
            href={`#${item.ancora}`}
            className="flex min-h-16 items-center gap-3 border-b border-linha py-3 text-[.86rem] text-azul no-underline hover:underline max-md:text-[.82rem] max-md:leading-[1.4]"
          >
            <span aria-hidden="true" className="font-serifa text-[1.2rem] text-texto-claro">
              {item.numero}
            </span>
            {item.titulo}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** `.pc-servico`; `destaque` aplica `.pc-servico-destaque` (fundo e padding). */
export function ServicoPericia({ servico, destaque }: { servico: DadosServicoPericia; destaque: boolean }) {
  const idTitulo = `titulo-${servico.id}`;
  return (
    <article
      id={servico.id}
      aria-labelledby={idTitulo}
      className={`flex min-w-0 flex-col items-start border-t-dourado ${destaque ? 'border-t-[3px] bg-branco p-7 max-md:p-6' : 'border-t-2 pt-[27px]'}`}
    >
      <div className="mb-5 flex items-center gap-3.5">
        <Icone nome={servico.icone} className="h-10 w-10 flex-[0_0_40px] text-azul" />
        <span className="text-[.7rem] tracking-[.08em] text-texto-claro uppercase">{servico.rotulo}</span>
      </div>
      <h3
        id={idTitulo}
        className="mb-3.5 font-serifa text-[1.85rem] leading-[1.12] font-medium max-sm:text-[1.65rem]"
      >
        {servico.titulo}
      </h3>
      <p className="mb-[15px] text-[.94rem] text-texto-claro">{servico.texto}</p>
      <ul className="mb-5 grid gap-2">
        {servico.pontos.map((ponto) => (
          <li
            key={ponto}
            className="relative pl-4 text-[.87rem] text-texto before:absolute before:top-[.75em] before:left-0 before:h-px before:w-1.5 before:bg-dourado-escuro"
          >
            {ponto}
          </li>
        ))}
      </ul>
      <LinkFrente href={servico.whatsapp} tamanho="servico" className="mt-auto">
        {servico.rotuloLink}
      </LinkFrente>
    </article>
  );
}

/** `.pc-aviso` */
export function Aviso({ partes }: { partes: PartesTexto }) {
  return (
    <p className="mt-10 mb-0 border-l-2 border-dourado pl-5 text-[.86rem] text-texto-claro">
      <TextoRico partes={partes} />
    </p>
  );
}
