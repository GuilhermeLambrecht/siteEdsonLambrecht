/** Texto com links embutidos. Links que começam com "/" viram rotas internas. */
export type PartesTexto = Array<string | { texto: string; href: string }>;

export interface Meta {
  titulo: string;
  descricao: string;
}

export interface DadosBotao {
  rotulo: string;
  href: string;
  variante: 'cheio' | 'vazio';
}

/** Bloco de reserva mostrado quando a imagem do hero não carrega (`.identidade`). */
export interface DadosIdentidade {
  sobretitulo?: string;
  monograma: string;
  /** Mostra o ponto dourado após o monograma ("EL."). */
  ponto?: boolean;
  nome: string[];
  cargo: string[];
  registro?: string;
  /** Versão de fundo branco usada na E². */
  clara?: boolean;
}

interface ImagemBase {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  identidade: DadosIdentidade;
}

export type DadosMidiaHero =
  | (ImagemBase & { tipo: 'retrato'; legenda?: string })
  | (ImagemBase & { tipo: 'retrato-pericia'; selo?: { nome: string; descricao: string } })
  | (ImagemBase & { tipo: 'logo'; href: string; rotuloLink: string; legenda: string });

export type VarianteHero = 'inicio' | 'professor' | 'e2' | 'grafotecnica' | 'agricola' | 'seguranca';

export interface DadosHero {
  variante: VarianteHero;
  /** Rótulo da página atual no caminho "Início / …". */
  caminho?: string;
  idTitulo?: string;
  sobretitulo: string;
  titulo: { texto: string; destaque?: string; quebraLinha?: boolean };
  cargo?: string;
  paragrafo?: string;
  titulos?: string[];
  botoes: DadosBotao[];
  credenciais?: { titulo: string; descricao: string }[];
  local?: string;
  midia?: DadosMidiaHero;
}

export interface Credencial {
  titulo: string;
  descricao: string;
}

export type NomeIcone =
  | 'grafotecnica'
  | 'agricola'
  | 'seguranca'
  | 'e2'
  | 'professor'
  | 'assinatura'
  | 'documento'
  | 'planta'
  | 'trator'
  | 'casa'
  | 'capacete';

export interface DadosCardArea {
  icone: NomeIcone;
  numero: string;
  titulo: string;
  texto: string;
  href: string;
  rotuloLink: string;
}

export interface ItemLista {
  titulo: string;
  texto: string;
}

export interface DadosContato {
  whatsapp: string;
  emails: { endereco: string; rotulo?: string }[];
}

export type ItemRodape = string | { texto: string; href: string };

export interface DadosRodape {
  colunas: { titulo: string; itens: ItemRodape[] }[];
  assinatura: string;
}

export interface DadosPagina {
  meta: Meta;
  whatsapp: string;
  contato: DadosContato;
  rodape: DadosRodape;
}

export interface DadosServicoPericia {
  id: string;
  icone: NomeIcone;
  rotulo: string;
  titulo: string;
  texto: string;
  pontos: string[];
  whatsapp: string;
  rotuloLink: string;
}

export interface DadosPaginaPericia extends DadosPagina {
  hero: DadosHero;
  provas: Credencial[];
  rotuloAtalhos: string;
  indice?: { numero: string; titulo: string; ancora: string }[];
  servicos: DadosServicoPericia[];
  /** Cards com fundo e padding (`.pc-servico-destaque`). */
  servicosDestaque: boolean;
  avisos: PartesTexto[];
  perfil: {
    paragrafos: string[];
    lattes?: string;
    cursos?: string[];
  };
  whatsappAssistencia: string;
  duvidas: { pergunta: string; resposta: string }[];
}
