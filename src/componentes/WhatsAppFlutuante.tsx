import { whatsappFlutuante } from '../conteudo/comum';
import { IconeWhatsApp } from './Icones';

/** Botão fixo no canto inferior direito, igual em todas as páginas. */
export function WhatsAppFlutuante({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label={whatsappFlutuante.rotuloAcessivel}
      className="fixed right-[22px] bottom-[22px] z-40 flex min-h-12 items-center gap-2.5 rounded-whatsapp border border-azul bg-dourado-claro px-[18px] py-3 text-[.83rem] font-semibold text-azul no-underline shadow-whatsapp hover:bg-dourado focus-visible:shadow-[0_0_0_6px_var(--color-azul)] focus-visible:outline-offset-3 focus-visible:outline-branco max-md:right-4 max-md:bottom-4 max-md:px-4"
    >
      <IconeWhatsApp className="h-5 w-5" />
      <span>{whatsappFlutuante.rotulo}</span>
    </a>
  );
}
