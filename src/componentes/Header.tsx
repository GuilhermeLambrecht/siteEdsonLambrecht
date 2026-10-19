import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Link, NavLink } from 'react-router';
import { marca, navegacao } from '../conteudo/comum';
import { useScrollHeader } from '../hooks/useScrollHeader';
import { Botao } from './Botao';
import { Container } from './Container';

/* Largura a partir da qual o menu completo cabe no header (--breakpoint-nav). */
const DESKTOP = '(min-width: 1200px)';
const transicao = 'duration-300 ease-[cubic-bezier(.22,.61,.36,1)]';

/*
  Desktop: links com sublinhado dourado que cresce a partir do centro.
  O tamanho da fonte muda em .15s, junto com a troca de posição (com os links invisíveis).
*/
const linkDesktop =
  'relative flex min-h-11 items-center whitespace-nowrap text-[.84rem] text-azul-claro-texto no-underline [transition:color_.2s_ease,font-size_0s_.15s] ' +
  'hover:text-branco aria-[current=page]:text-branco rolado:text-[.8rem] ' +
  'after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-dourado ' +
  'after:transition-transform after:duration-[280ms] after:ease-[ease] hover:after:scale-x-100 aria-[current=page]:after:scale-x-100';

/* Desktop: "Contato" com contorno dourado completo; no hover recebe fundo dourado. */
const contatoDesktop =
  'flex min-h-11 items-center whitespace-nowrap border border-dourado px-4 text-[.84rem] text-dourado-claro no-underline [transition:background-color_.2s_ease,color_.2s_ease,font-size_0s_.15s] ' +
  'hover:bg-dourado hover:text-texto rolado:text-[.8rem]';

const progressoInicial = { transform: 'scaleX(0)' };

export function Header() {
  const { rolado, jaRolou, barraRef } = useScrollHeader();
  const trocaDosLinks = jaRolou ? (rolado ? 'motion-safe:animate-nav-compactar' : 'motion-safe:animate-nav-expandir') : '';
  const [menuAberto, setMenuAberto] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);

  // Menu aberto: Esc fecha (devolvendo o foco ao botão) e a página atrás não rola.
  useEffect(() => {
    if (!menuAberto) return;
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key !== 'Escape') return;
      setMenuAberto(false);
      botaoRef.current?.focus();
    };
    const html = document.documentElement;
    const overflowAnterior = html.style.overflow;
    html.style.overflow = 'hidden';
    document.addEventListener('keydown', aoTeclar);
    return () => {
      html.style.overflow = overflowAnterior;
      document.removeEventListener('keydown', aoTeclar);
    };
  }, [menuAberto]);

  // Ao passar para a largura de desktop, o menu do celular fecha.
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP);
    const fechar = () => setMenuAberto(false);
    desktop.addEventListener('change', fechar);
    return () => desktop.removeEventListener('change', fechar);
  }, []);

  const fecharAoEscolherLink = (evento: MouseEvent<HTMLElement>) => {
    if ((evento.target as HTMLElement).closest('a')) setMenuAberto(false);
  };

  return (
    <>
      <a
        className="fixed top-2.5 left-3 z-100 -translate-y-[180%] bg-branco px-[18px] py-3 text-azul focus:translate-y-0"
        href="#conteudo"
      >
        Ir para o conteúdo
      </a>

      <header
        data-rolado={rolado}
        data-menu={menuAberto}
        className={`fixed inset-x-0 top-0 z-30 border-b border-borda-header bg-azul text-branco transition-shadow ${transicao} data-[menu=true]:z-50 data-[rolado=true]:shadow-topo [&_:focus-visible]:outline-branco`}
      >
        {/*
          Barra: 74px no celular e 97px no desktop, 60px depois de rolar.
          No desktop, ao passar de "centralizado em duas linhas" para "marca à esquerda, links à direita",
          a marca desliza e os links fazem uma troca rápida (somem, mudam de lugar e reaparecem), sem se cruzarem.
        */}
        <Container
          className={`relative z-10 flex h-[74px] items-center justify-between transition-[height] ${transicao} rolado:h-[60px] nav:block nav:h-[96.88px]`}
        >
          <Link
            to="/"
            aria-label={marca.rotulo}
            // Ao expandir, a marca espera os links sumirem (delay) antes de voltar ao centro.
            className={`font-serifa text-[1.4rem] leading-[1.2] whitespace-nowrap no-underline transition-[font-size,left,top,translate] ${transicao} delay-[130ms] max-sm:text-[1.25rem] rolado:text-[1.2rem] rolado:delay-0 nav:absolute nav:top-3.5 nav:left-1/2 nav:-translate-x-1/2 nav:rolado:top-1/2 nav:rolado:left-7 nav:rolado:translate-x-0 nav:rolado:-translate-y-1/2`}
          >
            {marca.nome} <span className="text-dourado-claro">{marca.sobrenome}</span>
          </Link>

          <nav
            aria-label="Navegação principal"
            className={`absolute bottom-1.5 left-1/2 hidden -translate-x-1/2 items-center gap-x-6 [transition:left_0s_.15s,bottom_0s_.15s,translate_0s_.15s,column-gap_0s_.15s] nav:flex rolado:bottom-1/2 rolado:left-[calc(100%-1.75rem)] rolado:-translate-x-full rolado:translate-y-1/2 rolado:gap-x-5 ${trocaDosLinks}`}
          >
            {navegacao.map((item) => (
              <NavLink key={item.para} to={item.para} end className={linkDesktop}>
                {item.rotulo}
              </NavLink>
            ))}
            <a className={contatoDesktop} href="#contato">
              Contato
            </a>
          </nav>

          <button
            ref={botaoRef}
            type="button"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            className="group -mr-1 flex min-h-11 cursor-pointer items-center gap-3 px-1 text-[.74rem] font-semibold tracking-[.12em] text-branco uppercase nav:hidden"
          >
            <span>{menuAberto ? 'Fechar' : 'Menu'}</span>
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute top-0 left-0 h-px w-full bg-dourado-claro transition-[top,rotate] ${transicao} group-aria-expanded:top-[5.5px] group-aria-expanded:rotate-45`}
              />
              <span
                className={`absolute top-[11px] left-0 h-px w-full bg-dourado-claro transition-[top,rotate] ${transicao} group-aria-expanded:top-[5.5px] group-aria-expanded:-rotate-45`}
              />
            </span>
          </button>
        </Container>

        <span
          ref={barraRef}
          aria-hidden="true"
          style={progressoInicial}
          className="pointer-events-none absolute -bottom-px left-0 z-10 h-0.5 w-full origin-left bg-dourado"
        />

        {/* Menu do celular e tablet: tela cheia, links grandes numerados entrando em sequência. */}
        <div
          id="menu-principal"
          onClick={fecharAoEscolherLink}
          className={`fixed inset-0 overflow-y-auto overscroll-contain bg-azul pt-[75px] transition-[opacity,visibility] ${transicao} nav:hidden ${menuAberto ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <Container as="nav" aria-label="Navegação principal" className="flex min-h-full flex-col pt-4 pb-10">
            <ul>
              {navegacao.map((item, i) => (
                <li
                  key={item.para}
                  style={{ transitionDelay: menuAberto ? `${60 + i * 45}ms` : '0ms' }}
                  className={`border-b border-divisoria-menu transition-[opacity,translate] duration-500 ease-[cubic-bezier(.22,.61,.36,1)] ${menuAberto ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
                >
                  <NavLink
                    to={item.para}
                    end
                    className="flex items-baseline gap-4 py-4 font-serifa text-[1.6rem] leading-[1.15] text-branco no-underline transition-colors duration-200 hover:text-dourado-claro aria-[current=page]:text-dourado-claro max-sm:text-[1.45rem]"
                  >
                    <span className="w-6 shrink-0 font-sans text-[.74rem] font-semibold tracking-[.12em] text-dourado-claro">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.rotulo}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div
              style={{ transitionDelay: menuAberto ? `${60 + navegacao.length * 45}ms` : '0ms' }}
              className={`mt-auto grid pt-10 transition-[opacity,translate] duration-500 ease-[cubic-bezier(.22,.61,.36,1)] ${menuAberto ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
            >
              <Botao href="#contato" variante="cheio">
                Contato
              </Botao>
            </div>
          </Container>
        </div>
      </header>

      {/* Reserva o espaço do header fixo; como não muda de altura, o conteúdo não pula ao rolar. */}
      <div aria-hidden="true" className="h-[75px] nav:h-[97.88px]" />
    </>
  );
}
