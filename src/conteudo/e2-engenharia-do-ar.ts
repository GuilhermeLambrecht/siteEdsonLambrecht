import type { DadosHero, DadosPagina, ItemLista } from './tipos';

const whatsapp =
  'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20para%20PMOC%20ou%20qualidade%20do%20ar.';

export const pagina: DadosPagina = {
  meta: {
    titulo: 'E² Engenharia do Ar — Edson Lambrecht',
    descricao:
      'PMOC, ART no CREA, qualidade do ar interior e inspeções técnicas para empresas, condomínios e clínicas.',
  },
  whatsapp,
  contato: {
    whatsapp,
    emails: [
      { endereco: 'peritocerto.rs@gmail.com' },
      { endereco: 'e2.engenhariadoar@gmail.com', rotulo: '(E² Engenharia do Ar)' },
    ],
  },
  rodape: {
    colunas: [
      {
        titulo: 'Contato',
        itens: [
          { texto: '(53) 98103-1797', href: whatsapp },
          { texto: 'e2.engenhariadoar@gmail.com', href: 'mailto:e2.engenhariadoar@gmail.com' },
        ],
      },
      {
        titulo: 'E² Engenharia do Ar',
        itens: [
          { texto: 'e2engenharia.vercel.app', href: 'https://e2engenharia.vercel.app/' },
          'PMOC · ART CREA · Qualidade do ar',
        ],
      },
      {
        titulo: 'Atuação',
        itens: ['Pelotas/RS e região', 'Empresas, condomínios, clínicas e indústrias'],
      },
    ],
    assinatura: 'E² Engenharia do Ar — responsável técnico Edson Lambrecht, CREA/RS nº 190820',
  },
};

export const hero: DadosHero = {
  variante: 'e2',
  caminho: 'E² Engenharia do Ar',
  sobretitulo: 'E² Engenharia do Ar · Pelotas e região',
  titulo: { texto: 'Engenharia para a qualidade do ar e a gestão da climatização' },
  paragrafo:
    'A E² Engenharia do Ar oferece PMOC, inspeções e documentação técnica para apoiar a manutenção dos sistemas de climatização e o atendimento aos requisitos aplicáveis. Atuação de Edson Lambrecht como responsável técnico em engenharia de segurança do trabalho, conforme as atribuições profissionais registradas.',
  botoes: [
    { rotulo: 'Solicitar orçamento', href: whatsapp, variante: 'cheio' },
    { rotulo: 'Visitar o site da E²', href: 'https://e2engenharia.vercel.app/', variante: 'vazio' },
    { rotulo: 'Enviar e-mail', href: 'mailto:e2.engenhariadoar@gmail.com', variante: 'vazio' },
  ],
  credenciais: [
    { titulo: 'PMOC', descricao: 'Plano técnico' },
    { titulo: 'ART CREA', descricao: 'Responsabilidade técnica' },
    { titulo: 'Lei 13.589/2018', descricao: 'Referência legal para PMOC' },
  ],
  midia: {
    tipo: 'logo',
    src: '/img/logo-e2.png',
    alt: 'E² Engenharia do Ar',
    largura: 812,
    altura: 528,
    href: 'https://e2engenharia.vercel.app/',
    rotuloLink: 'Visitar o site da E² Engenharia do Ar',
    legenda: 'Seu ar sob controle',
    identidade: {
      monograma: 'E²',
      nome: ['Engenharia do Ar'],
      cargo: ['PMOC · Inspeções', 'Qualidade do ar'],
      clara: true,
    },
  },
};

export const servicos = {
  titulo: 'O que a E² faz',
  introducao:
    'Planejamento, inspeção e documentação técnica para os sistemas de climatização e os ambientes de trabalho.',
  itens: [
    {
      titulo: 'Laudos para PMOC',
      texto:
        'Plano de Manutenção, Operação e Controle, com definição de rotinas e registros para os sistemas de climatização, conforme o escopo e as atribuições do responsável técnico.',
    },
    {
      titulo: 'ART no CREA',
      texto:
        'Registro da Anotação de Responsabilidade Técnica correspondente ao serviço e às atribuições profissionais.',
    },
    {
      titulo: 'Qualidade do ar interior',
      texto: 'Avaliação e orientação técnica para ambientes internos mais seguros.',
    },
    {
      titulo: 'Segurança do trabalho',
      texto: 'Identificação de riscos e adequação de ambientes de trabalho.',
    },
    {
      titulo: 'Inspeções técnicas',
      texto: 'Vistoria de sistemas de climatização, com apontamento de falhas e necessidades de manutenção.',
    },
    {
      titulo: 'Relatórios técnicos',
      texto: 'Documentação para controle, conformidade e apresentação em fiscalização.',
    },
  ] satisfies ItemLista[],
};

export const quemAtende = {
  titulo: 'Quem atende',
  itens: [
    'Áreas de uso coletivo de condomínios e edifícios comerciais',
    'Clínicas e consultórios',
    'Academias e espaços de grande circulação',
    'Escritórios e estabelecimentos comerciais',
    'Indústrias',
  ],
  frase: 'Documentação, manutenção e acompanhamento técnico fazem parte do cuidado com a qualidade do ar.',
};

export const pmoc = {
  sobretitulo: 'Entenda o PMOC',
  titulo: 'Um plano para o cuidado contínuo com a climatização.',
  paragrafos: [
    'A Lei nº 13.589/2018 prevê PMOC para edifícios de uso público e coletivo com ambientes climatizados artificialmente. O plano integra as rotinas de manutenção, operação e controle dos sistemas.',
    'O atendimento começa pela avaliação do local, dos equipamentos e das necessidades de documentação.',
  ],
  rotuloLink: 'Consultar a Lei nº 13.589/2018',
  href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13589.htm',
};
