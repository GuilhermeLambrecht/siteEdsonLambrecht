import type { ReactNode } from 'react';
import type { DadosPagina } from '../conteudo/tipos';
import { useMetadados } from '../hooks/useMetadados';
import { Header } from './Header';
import { Rodape } from './Rodape';
import { WhatsAppFlutuante } from './WhatsAppFlutuante';

/** Estrutura comum: menu, conteúdo principal, rodapé e botão flutuante. Também define title e description. */
export function Layout({ pagina, children }: { pagina: DadosPagina; children: ReactNode }) {
  useMetadados(pagina.meta);

  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        {children}
      </main>
      <Rodape {...pagina.rodape} />
      <WhatsAppFlutuante href={pagina.whatsapp} />
    </>
  );
}
