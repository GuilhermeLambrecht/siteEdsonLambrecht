import type { Credencial, DadosCardArea, DadosHero, DadosPagina } from './tipos';

const whatsapp =
  'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.';

export const pagina: DadosPagina = {
  meta: {
    titulo: 'Edson Lambrecht — Perito Judicial, Engenheiro e Professor',
    descricao:
      'Doutor em Agronomia, engenheiro agrícola e de segurança do trabalho. Perícia judicial, laudos de PMOC e ensino técnico.',
  },
  whatsapp,
  contato: {
    whatsapp,
    emails: [{ endereco: 'eng.edsonlambrecht@gmail.com' }, { endereco: 'peritocerto.rs@gmail.com' }],
  },
  rodape: {
    colunas: [
      {
        titulo: 'Contato',
        itens: [
          { texto: '(53) 98103-1797', href: whatsapp },
          { texto: 'eng.edsonlambrecht@gmail.com', href: 'mailto:eng.edsonlambrecht@gmail.com' },
          { texto: 'peritocerto.rs@gmail.com', href: 'mailto:peritocerto.rs@gmail.com' },
        ],
      },
      {
        titulo: 'Escritório',
        itens: [
          {
            texto: 'Rua Major Cícero, 410 — Pelotas/RS',
            href: 'https://www.google.com/maps/search/?api=1&query=Rua+Major+C%C3%ADcero%2C+410%2C+Pelotas+RS',
          },
          'Atendimento presencial e online',
          'Todo o território nacional',
        ],
      },
      {
        titulo: 'Redes',
        itens: [
          { texto: 'Instagram @eng_edsonlambrecht', href: 'https://www.instagram.com/eng_edsonlambrecht' },
          { texto: 'Facebook', href: 'https://www.facebook.com/share/1K2iRmztY7/' },
          { texto: 'Blog Perito Certo', href: 'https://peritocerto.blogspot.com/' },
          { texto: 'Blog do Professor', href: 'https://profedsonlambrecht.blogspot.com/' },
        ],
      },
      {
        titulo: 'Registro',
        itens: [
          'Engenheiro Agrícola — CREA/RS nº 190820',
          'Engenheiro de Segurança do Trabalho',
          'Doutor em Agronomia',
        ],
      },
    ],
    assinatura: 'Edson Lambrecht — Perito Judicial',
  },
};

export const hero: DadosHero = {
  variante: 'inicio',
  sobretitulo: 'Atuação profissional',
  titulo: { texto: 'Edson Lambrecht' },
  cargo: 'Perícia judicial, engenharia e ensino',
  paragrafo: 'Conhecimento técnico para analisar fatos, fundamentar decisões e compartilhar experiência.',
  titulos: [
    'Doutor em Agronomia · Engenheiro Agrícola',
    'Engenheiro de Segurança do Trabalho',
    'Perito judicial',
    'Mais de 25 anos de experiência técnica',
  ],
  botoes: [
    { rotulo: 'Falar no WhatsApp', href: whatsapp, variante: 'cheio' },
    { rotulo: 'Conhecer os serviços', href: '#areas', variante: 'vazio' },
  ],
  midia: {
    tipo: 'retrato',
    src: '/img/edson-inicio.png',
    alt: 'Retrato de Edson Lambrecht',
    largura: 1012,
    altura: 1554,
    legenda: 'Experiência técnica a serviço de cada demanda.',
    identidade: {
      monograma: 'EL',
      ponto: true,
      nome: ['Edson Lambrecht'],
      cargo: ['Doutor em Agronomia', 'Engenheiro Agrícola'],
      registro: 'CREA/RS nº 190820',
    },
  },
};

export const credenciais: Credencial[] = [
  { titulo: 'CREA/RS nº 190820', descricao: 'Registro profissional' },
  { titulo: 'TJRS · TJSC · TJPR', descricao: 'Atuação como perito judicial' },
  { titulo: 'Pelotas/RS', descricao: 'Atendimento presencial e online' },
];

export const areas = {
  sobretitulo: 'Conheça os serviços',
  titulo: 'Cinco frentes. Uma base técnica.',
  introducao: 'Encontre a área adequada para a sua demanda e conheça a forma de trabalho.',
  cards: [
    {
      icone: 'grafotecnica',
      numero: '01',
      titulo: 'Perícias Grafotécnicas e Documentoscópicas',
      texto:
        'Exame de assinaturas, escritas e documentos questionados. Perícia judicial e assistência técnica, com laudos e pareceres fundamentados.',
      href: '/pericias-grafotecnicas',
      rotuloLink: 'Ver perícias de assinaturas e documentos',
    },
    {
      icone: 'agricola',
      numero: '02',
      titulo: 'Perícias Agrícolas',
      texto:
        'Análise técnica de questões agrícolas, máquinas e equipamentos, avaliação de bens e apoio técnico em usucapião.',
      href: '/pericias-agricolas',
      rotuloLink: 'Ver perícias agrícolas',
    },
    {
      icone: 'seguranca',
      numero: '03',
      titulo: 'Segurança do Trabalho',
      texto:
        'Perícias e assistência técnica em insalubridade, periculosidade e acidentes de trabalho, com exame das condições pertinentes e da documentação disponível.',
      href: '/seguranca-do-trabalho',
      rotuloLink: 'Ver segurança do trabalho',
    },
    {
      icone: 'e2',
      numero: '04',
      titulo: 'E² Engenharia do Ar',
      texto:
        'PMOC, inspeções de sistemas de climatização e documentação técnica, com responsabilidade profissional e ART conforme o serviço. Para empresas, condomínios, clínicas e indústrias.',
      href: '/e2-engenharia-do-ar',
      rotuloLink: 'Ver engenharia do ar',
    },
    {
      icone: 'professor',
      numero: '05',
      titulo: 'Professor',
      texto:
        'Ensino, capacitação e produção de conteúdo técnico nas áreas de agronomia, engenharia agrícola e segurança do trabalho.',
      href: '/professor',
      rotuloLink: 'Ver atuação docente',
    },
  ] satisfies DadosCardArea[],
};
