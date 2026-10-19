import type { ReactNode } from 'react';
import type { NomeIcone } from '../conteudo/tipos';

function Svg48({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const desenhos: Record<NomeIcone, ReactNode> = {
  // Cards das áreas (Início)
  grafotecnica: (
    <>
      <path d="M30 6l8 8-18 18-10 2 2-10Z" />
      <path d="M26 10l8 8" />
      <path d="M6 42c4-3 7-3 9 0s5 3 8 0 6-3 9 0 5 2 10-1" />
    </>
  ),
  agricola: (
    <>
      <path d="M6 32V20h14l4 8h12v4" />
      <path d="M14 20v-7h8l3 7" />
      <circle cx="14" cy="34" r="7" />
      <circle cx="14" cy="34" r="2" />
      <circle cx="36" cy="36" r="5" />
      <path d="M28 28h8" />
    </>
  ),
  seguranca: (
    <>
      <path d="M8 32a16 16 0 0 1 32 0" />
      <path d="M5 32h38v4H5z" />
      <path d="M20 17v8M28 17v8M24 16v-4" />
    </>
  ),
  e2: (
    <>
      <circle cx="24" cy="24" r="3" />
      <path d="M24 21c0-8 2-13 8-13 4 0 5 5 0 8l-8 5" />
      <path d="M27 24c8 0 13 2 13 8 0 4-5 5-8 0l-5-8" />
      <path d="M24 27c0 8-2 13-8 13-4 0-5-5 0-8l8-5" />
      <path d="M21 24c-8 0-13-2-13-8 0-4 5-5 8 0l5 8" />
    </>
  ),
  professor: (
    <>
      <rect x="6" y="8" width="36" height="24" />
      <path d="M12 16h16M12 22h10M24 32l-6 10M24 32l6 10M24 32v4" />
    </>
  ),
  // Serviços das páginas de perícia
  assinatura: <path d="M6 30c9-1 9-18 12-17s-5 21-1 21 8-13 10-12-3 11 1 10 6-7 12-6M8 39h32" />,
  documento: (
    <>
      <path d="M12 40V7h18l7 7v13M29 7v10h8M18 23h11M18 29h6" />
      <circle cx="33" cy="34" r="7" />
      <path d="m38 39 6 6" />
    </>
  ),
  planta: <path d="M8 40h32M24 39V15M24 26C8 27 9 11 10 9c12 0 14 8 14 17ZM24 33c14 0 15-13 14-18-10 0-14 7-14 18Z" />,
  trator: (
    <>
      <path d="M8 25h26v10H8zM11 25v-9h12v9M24 21h10l6 6v8h-6M11 16h12M7 35h4M35 35h7" />
      <circle cx="15" cy="35" r="5" />
      <circle cx="33" cy="35" r="5" />
    </>
  ),
  casa: (
    <>
      <path d="m7 24 17-15 17 15M12 22v19h24V22M20 41V29h8v12" />
      <path d="M6 44h36" />
    </>
  ),
  capacete: <path d="M6 30h36v6H6zM10 30V23a14 14 0 0 1 28 0v7M20 30V9h8v21M12 41h24" />,
};

export function Icone({ nome, className }: { nome: NomeIcone; className?: string }) {
  return <Svg48 className={className}>{desenhos[nome]}</Svg48>;
}

export function IconeWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path d="M20 11.5a8 8 0 0 1-12 7L4 20l1.5-4a8 8 0 1 1 14.5-4.5Z" />
      <path d="M9 8c0 3 2 5 5 6l1-2-2-1-1 1-2-2 1-1-1-2Z" />
    </svg>
  );
}
