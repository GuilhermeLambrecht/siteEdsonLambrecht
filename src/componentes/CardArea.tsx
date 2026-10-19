import type { DadosCardArea } from '../conteudo/tipos';
import { Icone } from './Icones';
import { LinkFrente } from './Tipografia';

/** Card de área de atuação da Início (`.frente`). `inteiro` faz o card ocupar a linha toda. */
export function CardArea({ dados, inteiro = false }: { dados: DadosCardArea; inteiro?: boolean }) {
  return (
    <article
      className={`flex flex-col items-start border border-t-[3px] border-linha border-t-dourado bg-branco p-7 transition-[border-color,box-shadow] duration-[160ms] ease-[ease] hover:border-azul hover:border-t-dourado hover:shadow-card max-md:p-[22px] ${inteiro ? 'col-span-full' : ''}`}
    >
      <div className="mb-5 flex items-center gap-3.5">
        <Icone nome={dados.icone} className="h-[52px] w-[52px] flex-[0_0_52px] text-azul" />
        <span className="font-serifa text-[1.35rem] text-texto-claro" aria-hidden="true">
          {dados.numero}
        </span>
      </div>
      <h3 className="font-serifa text-[1.6rem] font-medium">{dados.titulo}</h3>
      <p className="text-[.94rem] text-texto-claro">{dados.texto}</p>
      <LinkFrente href={dados.href} className="mt-auto">
        {dados.rotuloLink}
      </LinkFrente>
    </article>
  );
}
