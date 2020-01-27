export interface Usuario {
    _id: string;
    index: number;
    guid: string;
    ativo: boolean;
    nome: Nome;
    empresa: string;
    email: string;
    fone: string;
    endereco: Endereco;
    sobre: string;
    registro: string;
    amigos?: (AmigosEntity)[] | null;
    preferencia: Preferencia;
  }
  export interface Nome {
    primeiro: string;
    sobrenome: string;
  }
  export interface Endereco {
    logradouro: string;
    cidade: string;
    estado: string;
  }
  export interface AmigosEntity {
    id: number;
    nome: Nome;
  }
  export interface Preferencia {
    frutas: string;
  }
  