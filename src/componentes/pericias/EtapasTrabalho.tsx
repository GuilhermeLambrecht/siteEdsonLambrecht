import { etapas } from '../../conteudo/pericias-comum';
import { Container } from '../Container';
import { Secao } from '../Secao';
import { CabecalhoSecao } from './CabecalhoSecao';

/** Seção `#etapas` (`.pc-etapas`): 5 colunas → 3 → 2 → 1 com número à esquerda. */
export function EtapasTrabalho() {
  return (
    <Secao id="etapas" aria-labelledby="titulo-etapas">
      <Container>
        <CabecalhoSecao
          sobretitulo={etapas.sobretitulo}
          titulo={etapas.titulo}
          idTitulo="titulo-etapas"
          texto={etapas.texto}
        />
        <ol className="m-0 grid grid-cols-[repeat(5,1fr)] gap-6 max-lg:grid-cols-[repeat(3,1fr)] max-lg:gap-[30px] max-md:grid-cols-[1fr_1fr] max-md:gap-7 max-sm:grid-cols-[1fr] max-sm:gap-6">
          {etapas.itens.map((etapa, i) => (
            <li
              key={etapa.titulo}
              className="border-t border-linha pt-[18px] max-sm:grid max-sm:grid-cols-[40px_1fr] max-sm:gap-x-4 max-sm:gap-y-0"
            >
              <span
                aria-hidden="true"
                className="mb-[18px] block font-serifa text-[2rem] text-azul max-sm:row-span-2 max-sm:mb-0 max-sm:text-[1.6rem]"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-2.5 text-[.95rem] leading-[1.35] max-sm:col-[2]">{etapa.titulo}</h3>
              <p className="mb-0 text-[.84rem] text-texto-claro max-sm:col-[2]">{etapa.texto}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 border-t border-linha pt-[22px] text-[.87rem] text-texto-claro">
          <strong>{etapas.publicosRotulo}</strong> {etapas.publicosTexto}
        </p>
      </Container>
    </Secao>
  );
}
