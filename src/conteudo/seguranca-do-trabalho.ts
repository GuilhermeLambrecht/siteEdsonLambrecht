import { duvidas, rodapePericias } from './pericias-comum';
import type { DadosPaginaPericia } from './tipos';

const whatsapp =
  'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20seguran%C3%A7a%20do%20trabalho%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20per%C3%ADcia%20em%20seguran%C3%A7a%20do%20trabalho%20ou%20assist%C3%AAncia%20t%C3%A9cnica.';

const pontos = [
  'Exame das condições pertinentes e da documentação disponível.',
  'Laudos, quesitos e pareceres conforme a atuação contratada.',
];

export const segurancaDoTrabalho: DadosPaginaPericia = {
  meta: {
    titulo: 'Segurança do Trabalho — Edson Lambrecht',
    descricao:
      'Perícias e assistência técnica em insalubridade, periculosidade e acidentes de trabalho. Edson Lambrecht, Engenheiro de Segurança do Trabalho.',
  },
  whatsapp,
  hero: {
    variante: 'seguranca',
    caminho: 'Segurança do Trabalho',
    idTitulo: 'titulo-pericias',
    sobretitulo: 'Segurança do trabalho · Edson Lambrecht',
    titulo: { texto: 'Segurança ', destaque: 'do trabalho.' },
    cargo: 'Análise fundamentada. Comunicação clara.',
    paragrafo:
      'Perícias e assistência técnica relacionadas a insalubridade, periculosidade e acidentes de trabalho, com exame de documentos, avaliação das condições pertinentes e fundamentação técnica.',
    botoes: [
      { rotulo: 'Solicitar análise inicial', href: whatsapp, variante: 'cheio' },
      { rotulo: 'Conhecer os serviços', href: '#areas', variante: 'vazio' },
    ],
    local: 'Base em Pelotas/RS · Atendimento presencial e online em todo o Brasil',
    midia: {
      tipo: 'retrato-pericia',
      src: '/img/edson-seguranca.png',
      alt: 'Edson Lambrecht com capacete e uniforme de segurança, consultando um tablet',
      largura: 900,
      altura: 601,
      identidade: {
        monograma: 'EL',
        ponto: true,
        nome: ['Edson Lambrecht'],
        cargo: ['Engenheiro Agrícola · Perito Judicial'],
      },
    },
  },
  provas: [
    { titulo: 'Formação profissional', descricao: 'Engenheiro de Segurança do Trabalho' },
    { titulo: 'Registro profissional', descricao: 'CREA/RS nº 190820' },
    { titulo: 'Escritório', descricao: 'Pelotas/RS' },
  ],
  rotuloAtalhos: 'Seções de Segurança do Trabalho',
  indice: [
    { numero: '01', titulo: 'Insalubridade', ancora: 'insalubridade' },
    { numero: '02', titulo: 'Periculosidade', ancora: 'periculosidade' },
    { numero: '03', titulo: 'Acidentes de trabalho', ancora: 'acidentes-trabalho' },
  ],
  servicosDestaque: false,
  servicos: [
    {
      id: 'insalubridade',
      icone: 'capacete',
      rotulo: '01 · Condições de trabalho',
      titulo: 'Insalubridade',
      texto:
        'Análise técnica das condições de trabalho relacionadas à discussão de insalubridade. O escopo reúne exame de documentos e avaliação das condições pertinentes à demanda.',
      pontos,
      whatsapp:
        'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20seguran%C3%A7a%20do%20trabalho%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20insalubridade.',
      rotuloLink: 'Consultar sobre insalubridade',
    },
    {
      id: 'periculosidade',
      icone: 'capacete',
      rotulo: '02 · Condições e riscos',
      titulo: 'Periculosidade',
      texto:
        'Perícias e assistência técnica sobre condições de trabalho em discussão quanto à periculosidade. O exame é definido a partir do objeto, dos documentos e das diligências necessárias.',
      pontos,
      whatsapp:
        'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20seguran%C3%A7a%20do%20trabalho%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20periculosidade.',
      rotuloLink: 'Consultar sobre periculosidade',
    },
    {
      id: 'acidentes-trabalho',
      icone: 'capacete',
      rotulo: '03 · Análise técnica dos fatos',
      titulo: 'Acidentes de trabalho',
      texto:
        'Exame dos elementos disponíveis em demandas relacionadas a acidentes de trabalho. Os documentos, registros e observações são organizados para responder aos quesitos e fundamentar laudos ou pareceres.',
      pontos,
      whatsapp:
        'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20seguran%C3%A7a%20do%20trabalho%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20acidentes%20de%20trabalho.',
      rotuloLink: 'Consultar sobre acidentes de trabalho',
    },
  ],
  avisos: [
    [
      'Para questões de produção agrícola ou avaliação de máquinas, consulte a página de ',
      { texto: 'Perícias Agrícolas', href: '/pericias-agricolas' },
      '.',
    ],
    [
      'Para exames de assinaturas ou documentos questionados, conheça as ',
      { texto: 'Perícias Grafotécnicas e Documentoscópicas', href: '/pericias-grafotecnicas' },
      '.',
    ],
    [
      'O alcance do exame e suas conclusões dependem do material disponível e das condições de análise. Essas condições são consideradas na definição do serviço e na apresentação dos resultados.',
    ],
  ],
  perfil: {
    paragrafos: [
      'Engenheiro de Segurança do Trabalho e Engenheiro Agrícola, Doutor em Agronomia, com formação também em Mecânica e mais de 25 anos de experiência técnica.',
    ],
  },
  whatsappAssistencia:
    'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20seguran%C3%A7a%20do%20trabalho%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20assist%C3%AAncia%20t%C3%A9cnica%20pericial.',
  duvidas: [
    {
      pergunta: duvidas.primeiraPergunta,
      resposta:
        'Descreva a questão em discussão, o local de trabalho, a atividade envolvida, o prazo e os documentos disponíveis. O escopo e as diligências necessárias serão definidos na análise inicial.',
    },
    ...duvidas.demais,
  ],
  contato: {
    whatsapp,
    emails: [
      { endereco: 'peritocerto.rs@gmail.com' },
      { endereco: 'e2.engenhariadoar@gmail.com', rotulo: '(E² Engenharia do Ar)' },
    ],
  },
  rodape: rodapePericias(
    'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Gostaria%20de%20conversar%20sobre%20per%C3%ADcia%20em%20seguran%C3%A7a%20do%20trabalho%20ou%20assist%C3%AAncia%20t%C3%A9cnica.',
  ),
};
