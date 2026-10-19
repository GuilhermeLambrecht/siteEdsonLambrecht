import { Link } from 'react-router';
import type { DadosHero, DadosMidiaHero, VarianteHero } from '../conteudo/tipos';
import { useImagemComFallback } from '../hooks/useImagemComFallback';
import { Botao, Botoes } from './Botao';
import { Container } from './Container';
import { Identidade } from './Identidade';
import { Sobretitulo } from './Tipografia';

/* `.hero` (Início, E², Professor) e `.pc-hero` (páginas de perícia). */
const secaoPadrao = 'pt-[70px] pb-20 max-md:pt-[42px] max-md:pb-[50px]';
const secaoPericia = 'pt-11 pb-16 max-md:pt-8 max-md:pb-[42px]';
const gradePadrao = 'grid-cols-[1.35fr_.85fr] gap-[70px] max-lg:grid-cols-[1.25fr_.85fr] max-lg:gap-[42px] max-md:grid-cols-[1fr] max-md:gap-8';
const h1Padrao = 'max-md:text-[length:clamp(2.5rem,9vw,3.4rem)]';
const resumoPericia = 'max-w-[56ch] text-[1rem]';

interface EstiloVariante {
  secao: string;
  grade: string;
  texto?: string;
  h1: string;
  sobretitulo: 'dourado' | 'claro';
  paragrafo: string;
}

const variantes: Record<VarianteHero, EstiloVariante> = {
  inicio: { secao: secaoPadrao, grade: gradePadrao, h1: h1Padrao, sobretitulo: 'dourado', paragrafo: 'text-[1.08rem]' },
  professor: { secao: secaoPadrao, grade: gradePadrao, h1: h1Padrao, sobretitulo: 'dourado', paragrafo: '' },
  e2: {
    secao: secaoPadrao,
    grade: gradePadrao,
    h1: 'text-[length:clamp(2.3rem,4.3vw,3.5rem)] max-md:text-[length:clamp(2.1rem,8.3vw,3.1rem)]',
    sobretitulo: 'dourado',
    paragrafo: '',
  },
  grafotecnica: {
    secao: secaoPericia,
    grade: 'grid-cols-[1.35fr_.8fr] gap-[70px] max-lg:grid-cols-[1.25fr_.85fr] max-lg:gap-10 max-md:grid-cols-[1fr] max-md:gap-8',
    h1: 'text-[length:clamp(2.2rem,4.2vw,3.5rem)] leading-[1.08] wrap-anywhere max-md:text-[length:clamp(1.95rem,7.5vw,3rem)]',
    sobretitulo: 'dourado',
    paragrafo: resumoPericia,
  },
  agricola: {
    // Foto do campo com véu azul para manter o contraste do texto.
    secao:
      `${secaoPericia} bg-[image:linear-gradient(90deg,rgba(32,63,95,.95)_0%,rgba(32,63,95,.86)_50%,rgba(32,63,95,.6)_100%),url(/img/campo-agricola.jpg)] ` +
      'bg-cover bg-[position:center_45%] bg-no-repeat ' +
      'max-md:bg-[image:linear-gradient(rgba(32,63,95,.9),rgba(32,63,95,.9)),url(/img/campo-agricola.jpg)]',
    grade: 'grid-cols-[1fr] gap-[70px] max-lg:gap-10 max-md:gap-8',
    h1: 'text-[length:clamp(2.6rem,5.1vw,4.2rem)] leading-[1.03] max-md:text-[length:clamp(2.55rem,9vw,3.4rem)]',
    sobretitulo: 'claro',
    paragrafo: resumoPericia,
  },
  seguranca: {
    secao: `${secaoPericia} md:overflow-hidden`,
    grade: 'grid-cols-[.9fr_1.2fr] gap-6 max-md:grid-cols-[1fr]',
    texto: 'md:relative md:z-2 md:pr-[72px]',
    h1: 'leading-[1.05] md:text-[length:clamp(1.9rem,3.5vw,3.2rem)] md:whitespace-nowrap max-md:text-[length:clamp(2.55rem,9vw,3.4rem)]',
    sobretitulo: 'claro',
    paragrafo: resumoPericia,
  },
};

export function Hero({ dados }: { dados: DadosHero }) {
  const v = variantes[dados.variante];

  return (
    <section
      aria-labelledby={dados.idTitulo}
      className={`bg-azul text-branco [&_:focus-visible]:outline-branco ${v.secao}`}
    >
      {dados.caminho && (
        <Container
          as="nav"
          aria-label="Localização"
          className="mb-[38px] flex flex-wrap items-center gap-3.5 text-[.78rem] text-azul-claro-texto max-md:mb-7"
        >
          <Link to="/" className="decoration-dourado">
            Início
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{dados.caminho}</span>
        </Container>
      )}

      <Container className={`grid items-center *:min-w-0 ${v.grade}`}>
        <div className={v.texto}>
          <Sobretitulo tom={v.sobretitulo}>{dados.sobretitulo}</Sobretitulo>
          <h1 id={dados.idTitulo} className={`text-branco ${v.h1}`}>
            {dados.titulo.texto}
            {dados.titulo.quebraLinha && <br />}
            {dados.titulo.destaque && <span className="text-branco">{dados.titulo.destaque}</span>}
          </h1>
          {dados.cargo && (
            <p className="mb-6 font-serifa text-[1.35rem] leading-[1.35] text-dourado-claro">{dados.cargo}</p>
          )}
          {dados.paragrafo && <p className={`text-azul-claro-texto ${v.paragrafo}`}>{dados.paragrafo}</p>}

          {dados.titulos && (
            <ul className="mb-[26px] grid gap-[7px] text-[.9rem] text-azul-claro-texto">
              {dados.titulos.map((titulo) => (
                <li
                  key={titulo}
                  className="relative pl-[18px] before:absolute before:top-[.78em] before:left-0 before:h-px before:w-[9px] before:bg-dourado"
                >
                  {titulo}
                </li>
              ))}
            </ul>
          )}

          <Botoes>
            {dados.botoes.map((botao) => (
              <Botao key={botao.rotulo} href={botao.href} variante={botao.variante} sobreAzul>
                {botao.rotulo}
              </Botao>
            ))}
          </Botoes>

          {dados.credenciais && (
            <ul className="mt-8 flex flex-wrap gap-x-[30px] gap-y-[18px] border-t border-linha-credenciais pt-[22px]">
              {dados.credenciais.map((credencial) => (
                <li key={credencial.titulo}>
                  <strong className="block text-[.95rem] text-branco">{credencial.titulo}</strong>
                  <span className="block text-[.76rem] text-azul-claro-texto">{credencial.descricao}</span>
                </li>
              ))}
            </ul>
          )}

          {dados.local && <p className="mt-[22px] mb-0 text-[.8rem] text-azul-claro-texto">{dados.local}</p>}
        </div>

        {dados.midia && <MidiaHero midia={dados.midia} seguranca={dados.variante === 'seguranca'} />}
      </Container>
    </section>
  );
}

function MidiaHero({ midia, seguranca }: { midia: DadosMidiaHero; seguranca: boolean }) {
  const { falhou, propsImagem } = useImagemComFallback();
  const imagem = (className: string) => (
    <img
      {...propsImagem}
      hidden={falhou}
      src={midia.src}
      alt={midia.alt}
      width={midia.largura}
      height={midia.altura}
      decoding="async"
      className={className}
    />
  );

  if (midia.tipo === 'retrato') {
    // `.retrato`: moldura dourada deslocada atrás da foto.
    return (
      <figure className="relative m-0 w-full max-w-[348px] justify-self-end before:absolute before:inset-[-14px_-14px_40px_30px] before:z-0 before:border before:border-dourado max-md:mt-5 max-md:max-w-80 max-md:justify-self-start max-md:before:inset-[-10px_-10px_40px_24px]">
        {imagem('relative z-1 h-auto w-full bg-branco')}
        {falhou && <Identidade dados={midia.identidade} />}
        {midia.legenda && (
          <figcaption className="relative mt-4 text-[.76rem] text-azul-claro-texto">{midia.legenda}</figcaption>
        )}
      </figure>
    );
  }

  if (midia.tipo === 'retrato-pericia') {
    // `.pc-retrato`; em Segurança do Trabalho a foto é ampliada e avança sobre a coluna de texto.
    const figura = seguranca
      ? 'max-w-[850px] justify-self-start md:z-1 md:w-[144%] md:-translate-x-[10%] md:-translate-y-[5%] max-md:max-w-full'
      : 'max-w-[336px] justify-self-end max-md:max-w-80 max-md:justify-self-start';
    return (
      <figure className={`relative m-0 w-full ${figura}`}>
        {imagem(`h-auto w-full ${seguranca ? '' : 'border-t-[3px] border-dourado'}`)}
        {falhou && <Identidade dados={midia.identidade} alta />}
        {midia.selo && (
          <figcaption className="flex items-center gap-3.5 bg-branco px-[18px] py-[15px] text-azul">
            <img
              src="/img/selo.png"
              alt=""
              width={640}
              height={640}
              decoding="async"
              className="h-[54px] w-[54px] flex-[0_0_54px]"
            />
            <div>
              <strong className="block text-[.91rem] leading-[1.4]">{midia.selo.nome}</strong>
              <span className="mt-[3px] block text-[.73rem] text-texto-claro">{midia.selo.descricao}</span>
            </div>
          </figcaption>
        )}
      </figure>
    );
  }

  // `.logo-placa` (E²)
  return (
    <figure className="m-0 w-full max-w-[370px] justify-self-center max-md:mt-3 max-md:max-w-[340px]">
      <a href={midia.href} aria-label={midia.rotuloLink} className="block no-underline">
        {imagem('w-full')}
        {falhou && <Identidade dados={midia.identidade} />}
      </a>
      <figcaption className="mt-[18px] text-center font-serifa text-[1.15rem] text-azul-claro-texto">
        {midia.legenda}
      </figcaption>
    </figure>
  );
}
