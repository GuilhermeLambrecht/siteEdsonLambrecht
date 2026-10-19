import { duvidas, rodapePericias, lattes } from './pericias-comum';
import type { DadosPaginaPericia } from './tipos';

const whatsapp =
  'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20agr%C3%ADcolas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20per%C3%ADcia%20agr%C3%ADcola%20ou%20assist%C3%AAncia%20t%C3%A9cnica.';

export const periciasAgricolas: DadosPaginaPericia = {
  meta: {
    titulo: 'Perícias Agrícolas — Edson Lambrecht',
    descricao:
      'Perícias em engenharia agrícola, avaliação de máquinas e equipamentos e apoio técnico em usucapião. Edson Lambrecht, CREA/RS nº 190820.',
  },
  whatsapp,
  hero: {
    variante: 'agricola',
    idTitulo: 'titulo-pericias',
    sobretitulo: 'Perito judicial · TJRS, TJSC e TJPR',
    titulo: { texto: 'Perícias ', destaque: 'Agrícolas.' },
    cargo: 'Análise fundamentada. Comunicação clara.',
    paragrafo:
      'Análise técnica de questões relacionadas à produção agropecuária, máquinas e equipamentos, avaliação de bens e apoio técnico em usucapião.',
    botoes: [
      { rotulo: 'Solicitar análise inicial', href: whatsapp, variante: 'cheio' },
      { rotulo: 'Conhecer os serviços', href: '#areas', variante: 'vazio' },
    ],
    local: 'Base em Pelotas/RS · Atendimento presencial e online em todo o Brasil',
  },
  provas: [
    { titulo: 'Atuação pericial', descricao: 'TJRS · TJSC · TJPR' },
    { titulo: 'Modalidades', descricao: 'Perito do juízo e assistente técnico' },
    { titulo: 'Formação em perícias', descricao: 'Jus Expert — bens móveis e usucapião' },
  ],
  rotuloAtalhos: 'Seções de Perícias Agrícolas',
  servicosDestaque: false,
  servicos: [
    {
      id: 'engenharia-agricola',
      icone: 'planta',
      rotulo: '01 · Produção e mecanização',
      titulo: 'Engenharia agrícola',
      texto:
        'Exames técnicos em questões relacionadas à lavoura, insumos, máquinas, armazenagem e produção agropecuária. A formação em engenharia e agronomia orienta a análise dos fatos e dos dados apresentados.',
      pontos: [
        'Vistoria e levantamento dos elementos relevantes.',
        'Análise técnica e resposta aos quesitos pertinentes.',
      ],
      whatsapp:
        'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20agr%C3%ADcolas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20per%C3%ADcia%20em%20engenharia%20agr%C3%ADcola.',
      rotuloLink: 'Consultar sobre engenharia agrícola',
    },
    {
      id: 'bens-moveis',
      icone: 'trator',
      rotulo: '02 · Máquinas e equipamentos',
      titulo: 'Avaliação de bens móveis',
      texto:
        'Avaliação de máquinas, equipamentos e outros bens móveis para instrução de demandas. O trabalho é definido a partir do bem, da finalidade da avaliação e dos elementos técnicos disponíveis.',
      pontos: [
        'Identificação do bem, vistoria e registro de suas condições.',
        'Laudo de avaliação ou parecer técnico, conforme a demanda.',
      ],
      whatsapp:
        'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20agr%C3%ADcolas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20avalia%C3%A7%C3%A3o%20de%20bens%20m%C3%B3veis.',
      rotuloLink: 'Consultar sobre avaliação',
    },
    {
      id: 'usucapiao',
      icone: 'casa',
      rotulo: '03 · Ocupação e delimitação',
      titulo: 'Apoio técnico em usucapião',
      texto:
        'Levantamentos e averiguações sobre ocupação, delimitação de área e elementos da posse para apoiar a instrução do procedimento. Os registros e as observações são organizados em documentação técnica.',
      pontos: [
        'Levantamento em campo e registro fotográfico.',
        'Organização dos elementos constatados e relatório técnico.',
      ],
      whatsapp:
        'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20agr%C3%ADcolas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20apoio%20t%C3%A9cnico%20em%20usucapi%C3%A3o.',
      rotuloLink: 'Consultar sobre usucapião',
    },
  ],
  avisos: [
    [
      'O alcance do exame e suas conclusões dependem do material disponível e das condições de análise. Essas condições são consideradas na definição do serviço e na apresentação dos resultados. Para insalubridade, periculosidade ou acidentes de trabalho, conheça a página de ',
      { texto: 'Segurança do Trabalho', href: '/seguranca-do-trabalho' },
      '. Para exames de assinaturas ou documentos questionados, conheça as ',
      { texto: 'Perícias Grafotécnicas e Documentoscópicas', href: '/pericias-grafotecnicas' },
      '.',
    ],
  ],
  perfil: {
    paragrafos: [
      'Doutor em Agronomia, Engenheiro Agrícola e Engenheiro de Segurança do Trabalho, com formação também em Mecânica e mais de 25 anos de experiência técnica.',
    ],
    lattes,
    cursos: [
      'Jus Expert Avaliação Patrimonial de Bens Móveis — 21 h (2023)',
      'Jus Expert Usucapião, averiguações e constatações — 21 h (2023)',
    ],
  },
  whatsappAssistencia:
    'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20agr%C3%ADcolas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20assist%C3%AAncia%20t%C3%A9cnica%20pericial.',
  duvidas: [
    {
      pergunta: duvidas.primeiraPergunta,
      resposta:
        'Descreva o objeto da perícia, a localização, o prazo e os documentos disponíveis. Para máquinas e equipamentos, informe também os dados de identificação e as condições conhecidas do bem.',
    },
    ...duvidas.demais,
  ],
  contato: {
    whatsapp,
    emails: [{ endereco: 'peritocerto.rs@gmail.com' }, { endereco: 'eng.edsonlambrecht@gmail.com' }],
  },
  rodape: rodapePericias(
    'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Gostaria%20de%20conversar%20sobre%20per%C3%ADcia%20agr%C3%ADcola%20ou%20assist%C3%AAncia%20t%C3%A9cnica.',
  ),
};
