import { duvidas, rodapePericias, lattes } from './pericias-comum';
import type { DadosPaginaPericia } from './tipos';

const whatsapp =
  'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20grafot%C3%A9cnicas%20e%20documentosc%C3%B3picas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20per%C3%ADcia%20grafot%C3%A9cnica%20ou%20documentosc%C3%B3pica.';

export const periciasGrafotecnicas: DadosPaginaPericia = {
  meta: {
    titulo: 'Perícias Grafotécnicas e Documentoscópicas — Edson Lambrecht',
    descricao:
      'Exame de assinaturas, escritas e documentos questionados. Perícia judicial e assistência técnica por Edson Lambrecht, com base em Pelotas/RS.',
  },
  whatsapp,
  hero: {
    variante: 'grafotecnica',
    idTitulo: 'titulo-pericias',
    sobretitulo: 'Perito judicial · TJRS, TJSC e TJPR',
    titulo: { texto: 'Perícias grafotécnicas', quebraLinha: true, destaque: 'e documentoscópicas.' },
    cargo: 'Análise fundamentada. Comunicação clara.',
    paragrafo:
      'Exame de assinaturas, escritas e documentos questionados, com análise dos elementos disponíveis, demonstração dos achados e elaboração de laudos ou pareceres.',
    botoes: [
      { rotulo: 'Solicitar análise inicial', href: whatsapp, variante: 'cheio' },
      { rotulo: 'Conhecer os serviços', href: '#areas', variante: 'vazio' },
    ],
    local: 'Base em Pelotas/RS · Atendimento presencial e online em todo o Brasil',
    midia: {
      tipo: 'retrato-pericia',
      src: '/img/edson.jpg',
      alt: 'Edson Lambrecht, engenheiro e perito judicial',
      largura: 848,
      altura: 1010,
      selo: { nome: 'Edson Lambrecht', descricao: 'Engenheiro Agrícola · CREA/RS nº 190820' },
      identidade: {
        monograma: 'EL',
        ponto: true,
        nome: ['Edson Lambrecht'],
        cargo: ['Engenheiro Agrícola · Perito Judicial'],
      },
    },
  },
  provas: [
    { titulo: 'Atuação pericial', descricao: 'TJRS · TJSC · TJPR' },
    { titulo: 'Modalidades', descricao: 'Perito do juízo e assistente técnico' },
    { titulo: 'Formação em perícias', descricao: 'Jus Expert Grafotécnico — 50 h' },
  ],
  rotuloAtalhos: 'Seções de Perícias Grafotécnicas e Documentoscópicas',
  servicosDestaque: true,
  servicos: [
    {
      id: 'grafotecnica',
      icone: 'assinatura',
      rotulo: '01 · Assinaturas e escritas',
      titulo: 'Perícia grafotécnica',
      texto:
        'Exame comparativo de assinaturas e escritas questionadas, a partir dos padrões de confronto e do material disponível. A análise registra os elementos observados e as condições que permitem interpretá-los.',
      pontos: [
        'Confronto entre a peça questionada e os padrões.',
        'Laudo ou parecer com demonstração dos elementos examinados.',
      ],
      whatsapp:
        'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20grafot%C3%A9cnicas%20e%20documentosc%C3%B3picas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20per%C3%ADcia%20grafot%C3%A9cnica.',
      rotuloLink: 'Consultar sobre assinaturas',
    },
    {
      id: 'documentoscopia',
      icone: 'documento',
      rotulo: '02 · Documentos questionados',
      titulo: 'Documentoscopia',
      texto:
        'Análise técnica de documentos cuja autenticidade ou integridade está em discussão. O exame considera os aspectos observáveis do material apresentado e as condições necessárias à investigação.',
      pontos: [
        'Verificação de características e possíveis alterações documentais.',
        'Registro dos achados e das limitações do exame.',
      ],
      whatsapp:
        'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20grafot%C3%A9cnicas%20e%20documentosc%C3%B3picas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20documentoscopia.',
      rotuloLink: 'Consultar sobre documentos',
    },
  ],
  avisos: [
    [
      'O alcance do exame e suas conclusões dependem do material disponível e das condições de análise. Essas condições são consideradas na definição do serviço e na apresentação dos resultados. Para demandas de produção agrícola, máquinas, equipamentos ou vistoria em campo, conheça a página de ',
      { texto: 'Perícias Agrícolas', href: '/pericias-agricolas' },
      '.',
    ],
  ],
  perfil: {
    paragrafos: [
      'Doutor em Agronomia, Engenheiro Agrícola e Engenheiro de Segurança do Trabalho, com formação também em Mecânica e mais de 25 anos de experiência técnica.',
    ],
    lattes,
    cursos: ['Jus Expert Grafotécnico — 50 h, teoria e prática (2023)'],
  },
  whatsappAssistencia:
    'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Conheci%20sua%20p%C3%A1gina%20de%20per%C3%ADcias%20grafot%C3%A9cnicas%20e%20documentosc%C3%B3picas%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20assist%C3%AAncia%20t%C3%A9cnica%20pericial.',
  duvidas: [
    {
      pergunta: duvidas.primeiraPergunta,
      resposta:
        'Informe o documento questionado, os padrões de confronto disponíveis, se há originais ou cópias, a cidade e o prazo. A relação dos materiais necessários será definida na análise inicial.',
    },
    ...duvidas.demais,
  ],
  contato: {
    whatsapp,
    emails: [{ endereco: 'peritocerto.rs@gmail.com' }, { endereco: 'eng.edsonlambrecht@gmail.com' }],
  },
  rodape: rodapePericias(
    'https://wa.me/5553981031797?text=Ol%C3%A1%2C%20Edson.%20Gostaria%20de%20conversar%20sobre%20per%C3%ADcia%20grafot%C3%A9cnica%20ou%20documentosc%C3%B3pica.',
  ),
};
