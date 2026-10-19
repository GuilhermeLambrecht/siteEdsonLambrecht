import { Container } from '../componentes/Container';
import { ContatoFinal } from '../componentes/ContatoFinal';
import { FaixaCredenciais } from '../componentes/FaixaCredenciais';
import { Hero } from '../componentes/Hero';
import { Layout } from '../componentes/Layout';
import { AssistenciaTecnica } from '../componentes/pericias/AssistenciaTecnica';
import { Atalhos } from '../componentes/pericias/Atalhos';
import { BlogPericias } from '../componentes/pericias/BlogPericias';
import { CabecalhoSecao } from '../componentes/pericias/CabecalhoSecao';
import { DuvidasFrequentes } from '../componentes/pericias/DuvidasFrequentes';
import { EtapasTrabalho } from '../componentes/pericias/EtapasTrabalho';
import { PerfilPerito } from '../componentes/pericias/PerfilPerito';
import { Aviso, IndiceServicos, ServicoPericia } from '../componentes/pericias/Servicos';
import { Secao } from '../componentes/Secao';
import { atalhos, cabecalhoServicos } from '../conteudo/pericias-comum';
import type { DadosPaginaPericia } from '../conteudo/tipos';

/** Modelo das três páginas de perícia: Grafotécnicas, Agrícolas e Segurança do Trabalho. */
export function PaginaPericia({ conteudo }: { conteudo: DadosPaginaPericia }) {
  return (
    <Layout pagina={conteudo}>
      <Hero dados={conteudo.hero} />
      <FaixaCredenciais itens={conteudo.provas} variante="pericias" />
      <Atalhos rotulo={conteudo.rotuloAtalhos} itens={atalhos} />

      <Secao id="areas" aria-labelledby="titulo-servicos">
        <Container>
          <CabecalhoSecao {...cabecalhoServicos} idTitulo="titulo-servicos" />
          {conteudo.indice && <IndiceServicos itens={conteudo.indice} />}
          <div className="grid grid-cols-[1fr_1fr] gap-x-[42px] gap-y-8 max-md:grid-cols-[1fr] max-md:gap-8">
            {conteudo.servicos.map((servico) => (
              <ServicoPericia key={servico.id} servico={servico} destaque={conteudo.servicosDestaque} />
            ))}
          </div>
          {conteudo.avisos.map((partes, i) => (
            <Aviso key={i} partes={partes} />
          ))}
        </Container>
      </Secao>

      <PerfilPerito perfil={conteudo.perfil} />
      <AssistenciaTecnica whatsapp={conteudo.whatsappAssistencia} />
      <EtapasTrabalho />
      <DuvidasFrequentes perguntas={conteudo.duvidas} />
      <BlogPericias />
      <ContatoFinal {...conteudo.contato} />
    </Layout>
  );
}
