import { assistencia } from '../../conteudo/pericias-comum';
import { Botao, Botoes } from '../Botao';
import { DuasColunas, Secao } from '../Secao';
import { Sobretitulo } from '../Tipografia';

/** Seção `#assistencia` (`.pc-assistencia`). */
export function AssistenciaTecnica({ whatsapp }: { whatsapp: string }) {
  return (
    <Secao id="assistencia" aria-labelledby="titulo-assistencia" className="text-texto">
      <DuasColunas container>
        <div>
          <Sobretitulo grande>{assistencia.sobretitulo}</Sobretitulo>
          <h2 id="titulo-assistencia" className="max-w-[22ch]">
            {assistencia.titulo}
          </h2>
          <p className="text-[.95rem] text-texto-claro">{assistencia.texto}</p>
          <Botoes>
            <Botao href={whatsapp} variante="cheio">
              {assistencia.rotuloBotao}
            </Botao>
          </Botoes>
        </div>
        <ul className="grid gap-5">
          {assistencia.apoios.map((apoio) => (
            <li key={apoio.titulo} className="border-t border-linha pt-4">
              <h3 className="mb-[7px] text-[1rem] text-texto">{apoio.titulo}</h3>
              <p className="m-0 text-[.86rem] text-texto-claro">{apoio.texto}</p>
            </li>
          ))}
        </ul>
      </DuasColunas>
    </Secao>
  );
}
