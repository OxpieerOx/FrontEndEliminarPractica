export interface Menu {
    id: number;
    url: string;
    titulo: string;
    icon: string;
    padre: number;
    perfil?: Array<string>;
    hijos?: Array<Menu>;
  }
  