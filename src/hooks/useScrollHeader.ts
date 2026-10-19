import { useEffect, useRef, useState } from 'react';

/** Distância de rolagem (px) a partir da qual o header fica compacto. */
const LIMITE_ROLADO = 40;

/**
 * Estado do header fixo:
 * - `rolado`: scrollY > 40 (só renderiza quando cruza o limite);
 * - `jaRolou`: o header já compactou alguma vez nesta página;
 * - `barraRef`: barra de progresso de leitura, atualizada direto no estilo a cada frame, sem renderizar o React.
 */
export function useScrollHeader() {
  const [rolado, setRolado] = useState(false);
  // Fica true na primeira vez que o header compacta; evita animar a troca de posição já no carregamento.
  const [jaRolou, setJaRolou] = useState(false);
  const barraRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let pendente = false;

    const atualizar = () => {
      pendente = false;
      const y = window.scrollY;
      setRolado(y > LIMITE_ROLADO);
      if (y > LIMITE_ROLADO) setJaRolou(true);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progresso = total > 0 ? Math.min(1, y / total) : 0;
      if (barraRef.current) barraRef.current.style.transform = `scaleX(${progresso})`;
    };

    const aoRolar = () => {
      if (pendente) return;
      pendente = true;
      requestAnimationFrame(atualizar);
    };

    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', atualizar);
    atualizar();

    return () => {
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', atualizar);
    };
  }, []);

  return { rolado, jaRolou, barraRef };
}
