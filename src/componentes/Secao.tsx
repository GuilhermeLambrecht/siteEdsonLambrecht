import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Container } from './Container';

/** `.secao`: padding vertical de 76px (50px ≤ 760px). */
export function Secao({ className = '', ...props }: ComponentPropsWithoutRef<'section'>) {
  return <section className={`bg-branco py-[76px] max-md:py-[50px] ${className}`} {...props} />;
}

const classesDuasColunas =
  'grid grid-cols-[1fr_1fr] gap-16 *:min-w-0 max-lg:gap-9 max-md:grid-cols-[1fr] max-md:gap-8';

/** `.duas-colunas`. Com `container`, faz também o papel de `.container` (como em `container duas-colunas`). */
export function DuasColunas({ children, container = false }: { children: ReactNode; container?: boolean }) {
  if (container) return <Container className={classesDuasColunas}>{children}</Container>;
  return <div className={classesDuasColunas}>{children}</div>;
}
