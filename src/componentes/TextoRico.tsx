import { Fragment } from 'react';
import type { PartesTexto } from '../conteudo/tipos';
import { Ancora } from './Ancora';

/** Renderiza texto com links embutidos vindos dos arquivos de conteúdo. */
export function TextoRico({ partes }: { partes: PartesTexto }) {
  return (
    <>
      {partes.map((parte, i) =>
        typeof parte === 'string' ? (
          <Fragment key={i}>{parte}</Fragment>
        ) : (
          <Ancora key={i} href={parte.href}>
            {parte.texto}
          </Ancora>
        ),
      )}
    </>
  );
}
