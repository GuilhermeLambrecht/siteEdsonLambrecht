import { duvidas as texto } from '../../conteudo/pericias-comum';
import type { DadosPaginaPericia } from '../../conteudo/tipos';
import { Container } from '../Container';
import { Secao } from '../Secao';
import { Introducao, Sobretitulo } from '../Tipografia';

/** Seção `#duvidas` (`.pc-duvidas`), com perguntas em <details>. */
export function DuvidasFrequentes({ perguntas }: { perguntas: DadosPaginaPericia['duvidas'] }) {
  return (
    <Secao id="duvidas" aria-labelledby="titulo-duvidas">
      <Container className="grid grid-cols-[.85fr_1.15fr] gap-16 max-lg:gap-9 max-md:grid-cols-[1fr] max-md:gap-8">
        <div>
          <Sobretitulo>{texto.sobretitulo}</Sobretitulo>
          <h2 id="titulo-duvidas">{texto.titulo}</h2>
          <Introducao>{texto.introducao}</Introducao>
        </div>
        <div>
          {perguntas.map((item) => (
            <details key={item.pergunta} className="border-b border-linha first:border-t">
              <summary className="min-h-11 cursor-pointer py-[17px] pr-1 pl-0 text-[.91rem] font-semibold">
                {item.pergunta}
              </summary>
              <p className="m-0 pt-[3px] pb-[18px] text-[.9rem] text-texto-claro">{item.resposta}</p>
            </details>
          ))}
        </div>
      </Container>
    </Secao>
  );
}
