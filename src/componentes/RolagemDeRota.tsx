import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/**
 * A cada navegação, rola para o topo ou, se a URL tiver âncora (#contato, #areas…), até a seção.
 * Na primeira carga só trata a âncora, para não atrapalhar a restauração de rolagem do navegador ao recarregar.
 */
export function RolagemDeRota() {
  const { key, hash } = useLocation();
  const chaveAnterior = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (chaveAnterior.current === key) return;
    const primeiraCarga = chaveAnterior.current === null;
    chaveAnterior.current = key;

    const alvo = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (alvo) alvo.scrollIntoView();
    else if (!primeiraCarga) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [key, hash]);

  return null;
}
