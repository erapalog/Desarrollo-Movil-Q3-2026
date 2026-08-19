import { createContext } from 'react';
import { Receta } from '../models/Receta';

// Lo que cualquier componente puede leer del contexto.
export type TipoContexto = {
  recetas: Receta[];
  seleccionada: Receta | null;
  mensaje: string;
  agregarReceta: (nombre: string, ingredientes: string[]) => void;
  eliminarReceta: (numero: number) => void;
  buscarReceta: (numero: string) => void;
  cerrarDetalle: () => void;
};

// Se crea vacio. Los valores reales los pone el Provider.
export const RecetasContext = createContext<TipoContexto>({} as TipoContexto);
