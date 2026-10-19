import { useCallback, useState } from 'react';

/**
 * Mostra o bloco de reserva quando a imagem não carrega (equivalente a `.media-opcional` do site.js).
 * O ref cobre o caso de a imagem já ter falhado antes de o React ligar os eventos.
 */
export function useImagemComFallback() {
  const [falhou, setFalhou] = useState(false);

  const ref = useCallback((img: HTMLImageElement | null) => {
    if (img && img.complete && img.naturalWidth === 0) setFalhou(true);
  }, []);

  return {
    falhou,
    propsImagem: {
      ref,
      onLoad: () => setFalhou(false),
      onError: () => setFalhou(true),
    },
  };
}
