import { useEffect } from 'react';
import type { Meta } from '../conteudo/tipos';

/** Atualiza <title> e <meta name="description"> da página atual. */
export function useMetadados({ titulo, descricao }: Meta) {
  useEffect(() => {
    document.title = titulo;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = descricao;
  }, [titulo, descricao]);
}
