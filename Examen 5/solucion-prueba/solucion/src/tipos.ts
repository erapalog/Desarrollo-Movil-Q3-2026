import { ImageSourcePropType } from 'react-native';

export type ClaveIndicador = 'alimento' | 'energia' | 'animo';

export type Indicador = {
  clave: ClaveIndicador;
  etiqueta: string;
  valor: number; // siempre entre 0 y 100
};

export type EntradaBitacora = {
  id: string;
  texto: string;
  hora: string;
};

export type ValorContextoMascota = {
  nombre: string;
  cambiarNombre: (valor: string) => void;
  indicadores: Indicador[];
  estadoAnimo: string;
  imagen: ImageSourcePropType;
  necesitaAyuda: boolean;
  puedeJugar: boolean;
  modoNoche: boolean;
  alternarModoNoche: () => void;
  bitacora: EntradaBitacora[];
  alimentar: () => void;
  jugar: () => void;
  descansar: () => void;
  reiniciar: () => void;
};
