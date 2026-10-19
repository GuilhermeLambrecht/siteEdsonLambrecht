import type { DadosHero, DadosPagina, ItemLista } from './tipos';

const whatsapp =
  'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Gostaria%20de%20conversar%20sobre%20ensino%20ou%20conte%C3%BAdo%20t%C3%A9cnico.';

const lattes = 'https://lattes.cnpq.br/6933655622146714';

export const pagina: DadosPagina = {
  meta: {
    titulo: 'Professor Edson Lambrecht — Ensino e produção técnica',
    descricao:
      'Doutor em Agronomia pela UFPel. Experiência docente no IFSul em Mecânica Industrial e Eletromecânica. Autor de sete livros técnicos.',
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
          { texto: 'peritocerto.rs@gmail.com', href: 'mailto:peritocerto.rs@gmail.com' },
        ],
      },
      {
        titulo: 'Acompanhe',
        itens: [
          { texto: 'Instagram @eng_edsonlambrecht', href: 'https://www.instagram.com/eng_edsonlambrecht' },
          { texto: 'Blog do Professor', href: 'https://profedsonlambrecht.blogspot.com/' },
          { texto: 'Currículo Lattes', href: lattes },
        ],
      },
      {
        titulo: 'Formação',
        itens: [
          'Doutor em Agronomia — UFPel',
          'Engenheiro Agrícola e de Segurança do Trabalho',
          'Licenciado em Matemática',
        ],
      },
    ],
    assinatura: 'Prof. Edson Lambrecht',
  },
};

export const hero: DadosHero = {
  variante: 'professor',
  caminho: 'Professor',
  sobretitulo: 'Ensino e produção técnica',
  titulo: { texto: 'Sala de aula, oficina e laboratório' },
  cargo: 'Doutor em Agronomia · Professor de Mecânica e Eletromecânica',
  paragrafo:
    'Experiência docente nos cursos técnicos de Mecânica Industrial e Eletromecânica do IFSul, Câmpus Pelotas, em disciplinas como elementos de máquinas, máquinas térmicas, metrologia, cálculo técnico e produção mecânica. Autor de sete livros técnicos e de artigos sobre mecanização agrícola.',
  botoes: [
    { rotulo: 'Currículo Lattes', href: lattes, variante: 'cheio' },
    { rotulo: 'Acessar o blog', href: 'https://profedsonlambrecht.blogspot.com/', variante: 'vazio' },
  ],
  midia: {
    tipo: 'retrato',
    src: '/img/edson-lattes.jpg',
    alt: 'Retrato de Edson Lambrecht',
    largura: 774,
    altura: 966,
    identidade: {
      sobretitulo: 'Formação e experiência',
      monograma: 'EL',
      ponto: true,
      nome: ['Professor', 'Edson Lambrecht'],
      cargo: ['Doutor em Agronomia', 'Mecânica e Eletromecânica'],
    },
  },
};

export const atuacaoDocente = {
  titulo: 'Atuação docente',
  itens: [
    {
      titulo: 'IFSul — Câmpus Pelotas · Curso Técnico de Eletromecânica',
      texto: '2024 a 2025. Atuação docente no curso técnico.',
    },
    {
      titulo: 'IFSul — Curso de Mecânica Industrial',
      texto:
        '2016 a 2018. Elementos de Máquinas, Máquinas Térmicas, Cálculo Técnico, Metrologia I e II, Informática Básica e Produção Mecânica.',
    },
    {
      titulo: 'IFSul — Curso de Eletromecânica',
      texto: '2012 a 2014. Elementos de Máquinas, Máquinas Térmicas e Organização da Manutenção.',
    },
    {
      titulo: 'Ensino de Matemática',
      texto: '2020 a 2021, Albert Colégio. Também com atuação em Educação de Jovens e Adultos, ensino médio.',
    },
    {
      titulo: 'Orientação de projetos técnicos',
      texto: 'Orientação de trabalhos de alunos nos cursos de Eletromecânica e Técnico em Mecânica do IFSul.',
    },
  ] satisfies ItemLista[],
};

export const producao = {
  titulo: 'Livros, pesquisa e material didático',
  livros: {
    titulo: 'Livros publicados',
    itens: [
      'Resistência dos materiais: equilíbrio, tensão e deformação, solicitações e gráfica computacional (2021)',
      'Construções rurais: dos circuitos elétricos, motores e geradores, estruturas de silos (2020)',
      'Construções rurais: da introdução à resistência dos materiais, redes e instalações elétricas à energia alternativa (2019)',
      'Construções rurais: da técnica ao orçamento, da ambiência ao interesse zootécnico (2019)',
      'Desenvolvimento de linha de semeadura e adubação com único mecanismo de aplicação de cargas (2019)',
      'Materiais, técnicas e projeto de construções rurais (2017, em coautoria)',
      'Desenvolvimento de linha de adubação para semeadoras-adubadoras (2016, em coautoria)',
    ],
  },
  artigos: {
    titulo: 'Artigos e material didático',
    itens: [
      'Oito artigos completos em periódicos, entre eles Ciência Rural e Engenharia na Agricultura',
      'Trabalhos apresentados no CONBEA e em congressos de iniciação científica',
      'Material didático de Matemática para o ensino médio, volumes I e II',
      'Cadernos de Cálculo Técnico, Máquinas Térmicas, Elementos de Máquinas e Organização da Manutenção',
      'Precificação de máquinas e equipamentos agrícolas — programa de computador (2019)',
    ],
  },
};

export const formacao = {
  titulo: 'Formação acadêmica',
  itens: [
    {
      titulo: 'Doutorado em Agronomia — UFPel, 2019',
      texto:
        'Tese sobre desenvolvimento de linha de semeadura e adubação com único mecanismo de aplicação de cargas. Bolsista CAPES.',
    },
    {
      titulo: 'Mestrado em Agronomia — UFPel, 2016',
      texto:
        'Linha de adubação para semeadoras-adubadoras voltadas à agricultura familiar, com transferência de peso por mola plana. Área de mecanização agrícola. Bolsista CAPES.',
    },
    {
      titulo: 'Especialização em Engenharia de Segurança do Trabalho — 2026',
      texto: 'Universidade Anhanguera de São Paulo.',
    },
    {
      titulo: 'Licenciatura em Matemática — UNIFRAN, 2023',
      texto: 'Com formação pedagógica para graduados não licenciados, 1.200 horas.',
    },
    {
      titulo: 'Graduação em Engenharia Agrícola — UFPel, 1994',
      texto: 'Registro profissional CREA/RS nº 190820.',
    },
    {
      titulo: 'Técnico em Mecânica Industrial — ETFPel, 1989',
      texto: 'Escola Técnica Federal de Pelotas.',
    },
  ] satisfies ItemLista[],
};

export const frase = 'Conhecimento técnico só serve quando alguém consegue aplicá-lo.';
