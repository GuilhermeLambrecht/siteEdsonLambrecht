import type { ReactNode } from 'react';
import { Ancora } from './Ancora';

const base =
  'inline-flex min-h-12 items-center justify-center border px-[22px] py-[13px] text-center text-[.9rem] leading-[1.4] font-semibold no-underline transition-[background,color] duration-[160ms] ease-[ease]';

const variantes = {
  cheio: 'border-dourado bg-dourado text-texto hover:border-dourado-claro hover:bg-dourado-claro',
  vazio: 'border-azul text-azul hover:bg-branco hover:underline',
  vazioSobreAzul: 'border-branco text-branco hover:bg-azul hover:underline',
};

interface BotaoProps {
  href: string;
  variante: 'cheio' | 'vazio';
  /** Contorno branco usado dentro do hero azul. */
  sobreAzul?: boolean;
  children: ReactNode;
}

/** `.botao--cheio` e `.botao--vazio`: altura mínima de 48px e cantos retos. */
export function Botao({ href, variante, sobreAzul = false, children }: BotaoProps) {
  const estilo = variante === 'cheio' ? variantes.cheio : sobreAzul ? variantes.vazioSobreAzul : variantes.vazio;
  return (
    <Ancora href={href} className={`${base} ${estilo}`}>
      {children}
    </Ancora>
  );
}

/** `.botoes`: no celular estreito (≤ 440px) os botões ficam empilhados e com largura total. */
export function Botoes({ children }: { children: ReactNode }) {
  return (
    <div className="mt-7 flex flex-wrap gap-3 max-sm:flex-col max-sm:items-stretch max-sm:*:w-full">{children}</div>
  );
}
