import type { DadosRodape } from '../conteudo/tipos';
import { Ancora } from './Ancora';
import { Container } from './Container';

/** `.rodape`: fundo azul, colunas automáticas de no mínimo 190px. */
export function Rodape({ colunas, assinatura }: DadosRodape) {
  return (
    <footer className="bg-azul pt-12 pb-[100px] text-[.85rem] text-azul-claro-texto [&_:focus-visible]:outline-branco">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[34px] border-b border-borda-header pb-[30px] max-md:grid-cols-[1fr_1fr] max-md:gap-7 max-sm:grid-cols-[1fr]">
          {colunas.map((coluna) => (
            <div key={coluna.titulo}>
              <h3 className="mb-[18px] font-sans text-[.78rem] tracking-[.06em] text-branco">{coluna.titulo}</h3>
              <ul className="grid gap-2.5">
                {coluna.itens.map((item) => (
                  <li key={typeof item === 'string' ? item : item.texto}>
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <Ancora href={item.href} className="text-dourado-claro wrap-anywhere hover:text-branco">
                        {item.texto}
                      </Ancora>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mb-0 pt-6 text-[.77rem] text-azul-claro-texto">{assinatura}</p>
      </Container>
    </footer>
  );
}
