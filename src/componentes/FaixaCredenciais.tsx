import type { Credencial } from '../conteudo/tipos';
import { Container } from './Container';

interface FaixaCredenciaisProps {
  itens: Credencial[];
  /**
   * `inicio`: `.dados-profissionais` (destaque em cima, descrição embaixo).
   * `pericias`: `.pc-provas` (rótulo em caixa alta em cima, destaque azul embaixo).
   */
  variante?: 'inicio' | 'pericias';
}

/** Faixa de três colunas com borda esquerda dourada logo abaixo do hero. */
export function FaixaCredenciais({ itens, variante = 'inicio' }: FaixaCredenciaisProps) {
  const pericias = variante === 'pericias';
  // Na referência, `.container { padding: 0 20px }` (≤ 440px) vem depois de `.dados-profissionais` e zera o padding vertical.
  return (
    <section aria-label="Formação e localização" className="border-b border-linha bg-branco">
      <Container
        className={`grid grid-cols-[repeat(3,1fr)] gap-[30px] max-md:grid-cols-[1fr] max-md:gap-[18px] ${pericias ? 'py-6' : 'py-[25px] max-md:py-6 max-sm:py-0'}`}
      >
        {itens.map((item) =>
          pericias ? (
            <p key={item.titulo} className="m-0 border-l border-credencial pl-5">
              <span className="block text-[.7rem] tracking-[.08em] text-texto-claro uppercase">{item.titulo}</span>
              <strong className="mt-[3px] block text-[.9rem] text-azul">{item.descricao}</strong>
            </p>
          ) : (
            <p key={item.titulo} className="m-0 border-l border-credencial pl-[22px]">
              <strong className="block text-[.87rem] font-semibold">{item.titulo}</strong>
              <span className="mt-[3px] block text-[.77rem] text-texto-claro">{item.descricao}</span>
            </p>
          ),
        )}
      </Container>
    </section>
  );
}
