import { Sobretitulo } from '../Tipografia';

interface CabecalhoSecaoProps {
  sobretitulo: string;
  titulo: string;
  idTitulo: string;
  texto: string;
}

/** `.pc-cabecalho` */
export function CabecalhoSecao({ sobretitulo, titulo, idTitulo, texto }: CabecalhoSecaoProps) {
  return (
    <div className="mb-9 max-w-[750px]">
      <Sobretitulo>{sobretitulo}</Sobretitulo>
      <h2 id={idTitulo} className="max-w-[25ch]">
        {titulo}
      </h2>
      <p className="text-texto-claro">{texto}</p>
    </div>
  );
}
