// Modelo: define como se ve una receta y como se crea.

export type Receta = {
  numero: number;
  nombre: string;
  ingredientes: string[];
  fecha: string;
};

export function crearReceta(
  numero: number,
  nombre: string,
  ingredientes: string[]
): Receta {
  return {
    numero: numero,
    nombre: nombre,
    ingredientes: ingredientes,
    fecha: new Date().toLocaleDateString(),
  };
}
