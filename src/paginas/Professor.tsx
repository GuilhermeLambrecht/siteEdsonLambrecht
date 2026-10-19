import { Container } from '../componentes/Container';
import { ContatoFinal } from '../componentes/ContatoFinal';
import { Hero } from '../componentes/Hero';
import { Layout } from '../componentes/Layout';
import { DuasColunas, Secao } from '../componentes/Secao';
import { Frase, ListaAreas, ListaQualificacoes } from '../componentes/Tipografia';
import { atuacaoDocente, formacao, frase, hero, pagina, producao } from '../conteudo/professor';

export function Professor() {
  return (
    <Layout pagina={pagina}>
      <Hero dados={hero} />

      <Secao id="areas">
        <Container>
          <h2 className="mb-[.65em]">{atuacaoDocente.titulo}</h2>
          <ListaAreas itens={atuacaoDocente.itens} />
        </Container>
      </Secao>

      <Secao>
        <Container>
          <h2 className="mb-[.65em]">{producao.titulo}</h2>
          <DuasColunas>
            <div>
              <h3>{producao.livros.titulo}</h3>
              <ListaQualificacoes itens={producao.livros.itens} />
            </div>
            <div>
              <h3>{producao.artigos.titulo}</h3>
              <ListaQualificacoes itens={producao.artigos.itens} />
            </div>
          </DuasColunas>
        </Container>
      </Secao>

      <Secao>
        <Container>
          <h2 className="mb-[.65em]">{formacao.titulo}</h2>
          <ListaAreas itens={formacao.itens} />
        </Container>
      </Secao>

      <Secao>
        <Container>
          <Frase>{frase}</Frase>
        </Container>
      </Secao>

      <ContatoFinal {...pagina.contato} />
    </Layout>
  );
}
