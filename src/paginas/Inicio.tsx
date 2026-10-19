import { CardArea } from '../componentes/CardArea';
import { Container } from '../componentes/Container';
import { ContatoFinal } from '../componentes/ContatoFinal';
import { FaixaCredenciais } from '../componentes/FaixaCredenciais';
import { Hero } from '../componentes/Hero';
import { Layout } from '../componentes/Layout';
import { Secao } from '../componentes/Secao';
import { Introducao, Sobretitulo } from '../componentes/Tipografia';
import { areas, credenciais, hero, pagina } from '../conteudo/inicio';

export function Inicio() {
  return (
    <Layout pagina={pagina}>
      <Hero dados={hero} />
      <FaixaCredenciais itens={credenciais} />

      <Secao id="areas">
        <Container>
          <Sobretitulo>{areas.sobretitulo}</Sobretitulo>
          <h2 className="mb-[.65em]">{areas.titulo}</h2>
          <Introducao>{areas.introducao}</Introducao>
          {/* Cinco áreas em duas colunas; a última ocupa a linha inteira. */}
          <div className="grid grid-cols-2 gap-x-9 gap-y-7 max-md:grid-cols-[1fr] max-md:gap-6">
            {areas.cards.map((card, i) => (
              <CardArea key={card.href} dados={card} inteiro={i === areas.cards.length - 1} />
            ))}
          </div>
        </Container>
      </Secao>

      <ContatoFinal {...pagina.contato} />
    </Layout>
  );
}
