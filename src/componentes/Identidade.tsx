import { Fragment } from 'react';
import type { DadosIdentidade } from '../conteudo/tipos';
import { Sobretitulo } from './Tipografia';

function Linhas({ linhas }: { linhas: string[] }) {
  return linhas.map((linha, i) => (
    <Fragment key={linha}>
      {i > 0 && <br />}
      {linha}
    </Fragment>
  ));
}

/** `.identidade`: monograma "EL." mostrado quando a imagem do hero não carrega. */
export function Identidade({ dados, alta = false }: { dados: DadosIdentidade; alta?: boolean }) {
  const { clara = false } = dados;
  return (
    <div
      className={`relative flex flex-col items-start justify-center border px-7 py-[34px] ${alta ? 'min-h-[400px]' : 'min-h-[340px]'} ${clara ? 'border-borda-e2 bg-branco text-azul' : 'border-borda-toggle bg-azul text-branco'}`}
    >
      {dados.sobretitulo && (
        <Sobretitulo as="span" tom="dourado">
          {dados.sobretitulo}
        </Sobretitulo>
      )}
      <span className="font-serifa text-[7rem] leading-none tracking-[-.055em]" aria-hidden="true">
        {dados.monograma}
        {dados.ponto && <span className="text-dourado">.</span>}
      </span>
      <span className="mt-4 mb-2.5 font-serifa text-[1.8rem] leading-[1.15]">
        <Linhas linhas={dados.nome} />
      </span>
      <span className={`text-[.85rem] ${clara ? 'text-texto-claro' : 'text-azul-claro-texto'}`}>
        <Linhas linhas={dados.cargo} />
      </span>
      {dados.registro && (
        <span className={`mt-7 text-[.72rem] ${clara ? 'text-texto-claro' : 'text-dourado-claro'}`}>
          {dados.registro}
        </span>
      )}
    </div>
  );
}
