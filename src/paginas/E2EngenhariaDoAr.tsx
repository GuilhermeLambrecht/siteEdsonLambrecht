import { Container } from '../componentes/Container';
import { ContatoFinal } from '../componentes/ContatoFinal';
import { Hero } from '../componentes/Hero';
import { Layout } from '../componentes/Layout';
import { DuasColunas, Secao } from '../componentes/Secao';
import { Frase, Introducao, LinkFrente, ListaAreas, ListaQualificacoes, Sobretitulo } from '../componentes/Tipografia';
import { hero, pagina, pmoc, quemAtende, servicos } from '../conteudo/e2-engenharia-do-ar';

export function E2EngenhariaDoAr() {
  return (
    <Layout pagina={pagina}>
      <Hero dados={hero} />

      <Secao id="areas">
        <Container>
          <h2 className="mb-[.65em]">{servicos.titulo}</h2>
          <Introducao>{servicos.introducao}</Introducao>
          <ListaAreas itens={servicos.itens} />
        </Container>
      </Secao>

      <Secao>
        <DuasColunas container>
          <div>
            <h2>{quemAtende.titulo}</h2>
            <ListaQualificacoes itens={quemAtende.itens} />
          </div>
          <div>
            <Frase emDuasColunas>{quemAtende.frase}</Frase>
          </div>
        </DuasColunas>
      </Secao>

      <Secao>
        <DuasColunas container>
          <div>
            <Sobretitulo>{pmoc.sobretitulo}</Sobretitulo>
            <h2>{pmoc.titulo}</h2>
          </div>
          <div>
            {pmoc.paragrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <LinkFrente href={pmoc.href}>{pmoc.rotuloLink}</LinkFrente>
          </div>
        </DuasColunas>
      </Secao>

      <ContatoFinal {...pagina.contato} />
    </Layout>
  );
}
