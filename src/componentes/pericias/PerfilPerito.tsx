import { perfil as texto } from '../../conteudo/pericias-comum';
import type { DadosPaginaPericia } from '../../conteudo/tipos';
import { Container } from '../Container';
import { Secao } from '../Secao';
import { LinkFrente, ListaQualificacoes, Sobretitulo } from '../Tipografia';

const paragrafo = 'text-[.95rem] text-texto-claro';

/** Seção `#o-perito` (`.pc-perfil`). */
export function PerfilPerito({ perfil }: { perfil: DadosPaginaPericia['perfil'] }) {
  return (
    <Secao id="o-perito" aria-labelledby="titulo-perito">
      <Container className="grid grid-cols-[1.05fr_1fr] items-start gap-16 max-lg:gap-9 max-md:grid-cols-[1fr] max-md:gap-8">
        <div>
          <Sobretitulo>{texto.sobretitulo}</Sobretitulo>
          <h2 id="titulo-perito" className="text-[length:clamp(2rem,3.4vw,2.8rem)]">
            {texto.titulo}
          </h2>
          {perfil.paragrafos.map((p) => (
            <p key={p} className={paragrafo}>
              {p}
            </p>
          ))}
          <p className={paragrafo}>{texto.paragrafoAtuacao}</p>
          <h3>{texto.tituloHistorico}</h3>
          <ListaQualificacoes itens={texto.historico} />
          {perfil.lattes && (
            <p className={paragrafo}>
              <LinkFrente href={perfil.lattes} className="mt-6 inline-block">
                {texto.rotuloLattes}
              </LinkFrente>
            </p>
          )}
        </div>
        <div>
          <ul className="m-0 grid gap-0 border-t border-linha">
            {texto.formacao.map((item) => (
              <li key={item.titulo} className="border-b border-linha py-4 text-[.91rem]">
                <strong className="block text-azul">{item.titulo}</strong>
                <span className="mt-[3px] block text-[.78rem] text-texto-claro">{item.texto}</span>
              </li>
            ))}
          </ul>
          {perfil.cursos && (
            <div className="mt-[26px] border-b border-linha pb-[18px]">
              <h3 className="m-0 pt-1 text-[.91rem]">{texto.tituloCursos}</h3>
              <ListaQualificacoes itens={perfil.cursos} className="mt-2.5" tamanhoItem="text-[.84rem]" />
            </div>
          )}
        </div>
      </Container>
    </Secao>
  );
}
