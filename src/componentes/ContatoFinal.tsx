import { contatoFinal as texto, enderecoMapa } from '../conteudo/comum';
import type { DadosContato } from '../conteudo/tipos';
import { Botao } from './Botao';
import { Container } from './Container';
import { Sobretitulo } from './Tipografia';

/** Seção `#contato`, igual em todas as páginas; mudam a mensagem do WhatsApp e os e-mails. */
export function ContatoFinal({ whatsapp, emails }: DadosContato) {
  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="border-b border-linha bg-branco py-16 text-texto max-md:py-12"
    >
      <Container className="grid grid-cols-[1.45fr_1fr] items-center gap-16 *:min-w-0 max-md:grid-cols-[1fr] max-md:gap-8">
        <div>
          <Sobretitulo>{texto.sobretitulo}</Sobretitulo>
          <h2 id="titulo-contato" className="text-[length:clamp(1.9rem,3vw,2.6rem)]">
            {texto.titulo}
          </h2>
          <p className="mb-0 text-[.96rem] text-texto-claro">{texto.texto}</p>
          <p className="mt-4 mb-0 text-[.86rem] text-texto-claro">
            {texto.notaRotulo}{' '}
            <a href={enderecoMapa} className="text-texto decoration-dourado">
              {texto.endereco}
            </a>{' '}
            {texto.notaComplemento}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3.5 max-sm:items-stretch">
          <Botao href={whatsapp} variante="cheio">
            {texto.rotuloWhatsapp}
          </Botao>
          <a href={texto.telefoneHref} className="text-[.88rem] text-texto-claro">
            {texto.telefone}
          </a>
          {emails.map((email) => (
            <a key={email.endereco} href={`mailto:${email.endereco}`} className="text-[.93rem] wrap-anywhere">
              {email.endereco}
              {email.rotulo && (
                <>
                  {' '}
                  <span className="text-[.82rem] text-texto-claro">{email.rotulo}</span>
                </>
              )}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
