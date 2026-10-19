import type { ReactNode } from 'react';
import type { ItemLista } from '../conteudo/tipos';
import { Ancora } from './Ancora';

const coresSobretitulo = {
  azul: 'text-azul',
  dourado: 'text-dourado-claro',
  /** Nas páginas Agrícolas e Segurança, `.hero p` deixa o sobretítulo do hero claro. */
  claro: 'text-azul-claro-texto',
};

interface SobretituloProps {
  children: ReactNode;
  tom?: keyof typeof coresSobretitulo;
  as?: 'p' | 'span';
  /** Em `.pc-assistencia`, a regra `p { font-size: .95rem }` aumenta o sobretítulo. */
  grande?: boolean;
}

/** `.sobretitulo`: .74rem, 600, caixa alta, espaçamento .12em. */
export function Sobretitulo({ children, tom = 'azul', as: Tag = 'p', grande = false }: SobretituloProps) {
  return (
    <Tag
      className={`mb-[18px] font-sans font-semibold uppercase tracking-[.12em] ${grande ? 'text-[.95rem]' : 'text-sobretitulo'} ${coresSobretitulo[tom]}`}
    >
      {children}
    </Tag>
  );
}

/** `.introducao` */
export function Introducao({ children }: { children: ReactNode }) {
  return <p className="mb-[34px] max-w-[65ch] text-texto-claro">{children}</p>;
}

interface LinkFrenteProps {
  href: string;
  children: ReactNode;
  /** `servico`: tamanho usado nos cards `.pc-servico`. */
  tamanho?: 'padrao' | 'servico';
  className?: string;
}

/** `.link-frente`: link com sublinhado dourado de 2px. */
export function LinkFrente({ href, children, tamanho = 'padrao', className = '' }: LinkFrenteProps) {
  const medidas = tamanho === 'servico' ? 'min-h-11 text-[.85rem]' : 'min-h-[38px] text-[.88rem]';
  return (
    <Ancora
      href={href}
      className={`border-b-2 border-dourado py-1.5 font-semibold text-azul no-underline hover:border-b-azul ${medidas} ${className}`}
    >
      {children}
    </Ancora>
  );
}

/** `.qualificacoes`: lista com marcador quadrado dourado. */
export function ListaQualificacoes({
  itens,
  className = '',
  tamanhoItem = 'text-[.96rem]',
}: {
  itens: string[];
  className?: string;
  tamanhoItem?: string;
}) {
  return (
    <ul className={`grid gap-[13px] ${className}`}>
      {itens.map((item) => (
        <li
          key={item}
          className={`relative pl-5 before:absolute before:top-[.7em] before:left-0 before:h-[7px] before:w-[7px] before:bg-dourado ${tamanhoItem}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** `.areas`: lista em duas colunas com divisória superior. */
export function ListaAreas({ itens }: { itens: ItemLista[] }) {
  return (
    <ul className="grid grid-cols-[1fr_1fr] gap-x-[46px] gap-y-0 max-md:grid-cols-[1fr] max-md:gap-0">
      {itens.map((item) => (
        <li key={item.titulo} className="max-w-[64ch] border-t border-linha py-[23px]">
          <strong className="mb-2 block text-[1rem] leading-[1.45]">{item.titulo}</strong>
          <span className="block text-[.93rem] text-texto-claro">{item.texto}</span>
        </li>
      ))}
    </ul>
  );
}

/** `.frase`: citação em serifa com borda dourada. */
export function Frase({ children, emDuasColunas = false }: { children: ReactNode; emDuasColunas?: boolean }) {
  return (
    <p
      className={`mx-0 mb-0 max-w-[28ch] border-l-2 border-dourado pl-7 font-serifa text-[length:clamp(1.5rem,2.8vw,2.2rem)] leading-[1.35] max-md:max-w-none ${emDuasColunas ? 'mt-7 max-md:mt-0' : 'mt-0'}`}
    >
      {children}
    </p>
  );
}
