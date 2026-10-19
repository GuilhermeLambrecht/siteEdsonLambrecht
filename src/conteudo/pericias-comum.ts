/** Textos iguais nas três páginas de perícias (Grafotécnicas, Agrícolas e Segurança do Trabalho). */
import type { DadosRodape, ItemLista } from './tipos';

export const atalhos = [
  { rotulo: 'Serviços', ancora: 'areas' },
  { rotulo: 'O perito', ancora: 'o-perito' },
  { rotulo: 'Assistência técnica', ancora: 'assistencia' },
  { rotulo: 'Etapas', ancora: 'etapas' },
  { rotulo: 'Dúvidas', ancora: 'duvidas' },
  { rotulo: 'Contato', ancora: 'contato' },
];

export const cabecalhoServicos = {
  sobretitulo: 'Áreas de atuação',
  titulo: 'Qual é a sua demanda?',
  texto:
    'Conheça os serviços e entre em contato para definir o objeto da análise, os documentos necessários e a viabilidade técnica.',
};

export const perfil = {
  sobretitulo: 'O perito',
  titulo: 'Edson Lambrecht',
  paragrafoAtuacao:
    'Atuação como perito nomeado pelo juízo e como assistente técnico da parte, com análise dos elementos disponíveis, registro das observações e elaboração de laudos e pareceres fundamentados.',
  tituloHistorico: 'Histórico de atuação pericial',
  historico: [
    'TJRS — Tribunal de Justiça do Rio Grande do Sul',
    'TJSC — Tribunal de Justiça de Santa Catarina',
    'TJPR — Tribunal de Justiça do Paraná',
  ],
  rotuloLattes: 'Ver Currículo Lattes',
  formacao: [
    { titulo: 'Doutor em Agronomia', texto: 'Formação acadêmica aplicada à análise técnica' },
    { titulo: 'Engenheiro Agrícola', texto: 'CREA/RS nº 190820' },
    { titulo: 'Engenheiro de Segurança do Trabalho', texto: 'Condições de trabalho e avaliação técnica' },
    { titulo: 'Técnico em Mecânica', texto: 'Formação técnica em máquinas e equipamentos' },
  ] satisfies ItemLista[],
  tituloCursos: 'Formação complementar em perícias',
};

export const lattes = 'https://lattes.cnpq.br/6933655622146714';

export const assistencia = {
  sobretitulo: 'Assistência técnica',
  titulo: 'Apoio técnico ao longo da prova pericial.',
  texto:
    'Como assistente técnico da parte, o trabalho pode abranger a preparação dos quesitos, o acompanhamento da diligência e a análise do laudo, com manifestação fundamentada sobre os elementos examinados.',
  rotuloBotao: 'Consultar sobre assistência técnica',
  apoios: [
    {
      titulo: 'Quesitos técnicos',
      texto: 'Formulação de perguntas relacionadas ao objeto e aos pontos que precisam de esclarecimento.',
    },
    {
      titulo: 'Acompanhamento de diligências',
      texto: 'Observação dos procedimentos, das condições de exame e dos elementos registrados.',
    },
    {
      titulo: 'Análise de laudos',
      texto: 'Exame dos critérios, da fundamentação e das respostas aos quesitos apresentados.',
    },
    {
      titulo: 'Parecer e esclarecimentos',
      texto: 'Manifestação técnica sobre os achados, inclusive divergências quando fundamentadas.',
    },
  ] satisfies ItemLista[],
};

export const etapas = {
  sobretitulo: 'Forma de trabalho',
  titulo: 'Da análise inicial à entrega.',
  texto:
    'Cada demanda exige um escopo próprio. As etapas são organizadas conforme o objeto, a documentação e a natureza da atuação.',
  itens: [
    { titulo: 'Análise da demanda', texto: 'Compreensão do objeto, do prazo e dos elementos disponíveis.' },
    { titulo: 'Escopo e proposta', texto: 'Definição do serviço, das necessidades de exame e dos honorários.' },
    { titulo: 'Exame ou diligência', texto: 'Levantamento de dados e registro dos elementos relevantes.' },
    {
      titulo: 'Laudo ou parecer',
      texto: 'Apresentação da análise, dos limites do exame e das conclusões fundamentadas.',
    },
    { titulo: 'Esclarecimentos', texto: 'Respostas às questões técnicas relacionadas ao trabalho realizado.' },
  ] satisfies ItemLista[],
  publicosRotulo: 'Para quem:',
  publicosTexto:
    'escritórios de advocacia, empresas e pessoas físicas que necessitem de exame ou assistência técnica, além da atuação como perito nomeado pelo juízo.',
};

export const duvidas = {
  sobretitulo: 'Antes do primeiro contato',
  titulo: 'Dúvidas frequentes.',
  introducao: 'Estas informações ajudam a organizar a conversa inicial e a definição do serviço.',
  primeiraPergunta: 'O que informar no primeiro contato?',
  /** Da segunda pergunta em diante, iguais nas três páginas. */
  demais: [
    {
      pergunta: 'O atendimento pode ser online?',
      resposta:
        'Sim. O atendimento inicial e a organização dos documentos podem ocorrer online. A necessidade de exame presencial ou de diligência depende do objeto da análise.',
    },
    {
      pergunta: 'Como são definidos os honorários?',
      resposta:
        'A proposta considera o objeto do trabalho, o volume de material, as diligências e o prazo. Os honorários são apresentados ao juízo ou à parte, conforme o caso.',
    },
    {
      pergunta: 'Qual é o prazo de entrega?',
      resposta:
        'O prazo é definido após a análise da demanda e das condições de execução. Complexidade, disponibilidade de material e diligências necessárias influenciam a programação.',
    },
    {
      pergunta: 'Há atendimento fora de Pelotas?',
      resposta:
        'A base é em Pelotas/RS, com atendimento presencial e online em todo o território nacional. A forma de atendimento é combinada conforme a demanda.',
    },
  ],
};

export const blog = {
  titulo: 'Conteúdo sobre perícias.',
  texto: 'Acompanhe as publicações no Blog Perito Certo.',
  rotuloLink: 'Visitar o blog',
  href: 'https://peritocerto.blogspot.com/',
};

/** Rodapé das páginas de perícia; muda apenas a mensagem do WhatsApp. */
export function rodapePericias(whatsappRodape: string): DadosRodape {
  return {
    colunas: [
      {
        titulo: 'Contato',
        itens: [
          { texto: '(53) 98103-1797', href: whatsappRodape },
          { texto: 'peritocerto.rs@gmail.com', href: 'mailto:peritocerto.rs@gmail.com' },
          'Comunicações processuais pelos sistemas oficiais dos tribunais',
        ],
      },
      {
        titulo: 'Conteúdo e redes',
        itens: [
          { texto: 'Instagram @peritocerto', href: 'https://www.instagram.com/peritocerto' },
          { texto: 'Blog Perito Certo', href: 'https://peritocerto.blogspot.com/' },
        ],
      },
      {
        titulo: 'Atuação',
        itens: ['Rua Major Cícero, 410 — Pelotas/RS', 'TJRS · TJSC · TJPR', 'Presencial e online, em todo o país'],
      },
    ],
    assinatura: 'Edson Lambrecht — CREA/RS nº 190820 — Perito Judicial',
  };
}
