import React, { useState, ReactNode } from 'react';
import { RecetasContext, TipoContexto } from '../context/RecetasContext';
import { Receta, crearReceta } from '../models/Receta';

// El Provider guarda TODO el estado global.
// Ningun componente recibe props: todos leen de aqui.
export default function RecetasProvider({ children }: { children: ReactNode }) {
  const [recetas, setRecetas] = useState<Receta[]>([]);
  const [seleccionada, setSeleccionada] = useState<Receta | null>(null);
  const [mensaje, setMensaje] = useState<string>('');

  function agregarReceta(nombre: string, ingredientes: string[]) {
    const nueva = crearReceta(recetas.length + 1, nombre, ingredientes);
    setRecetas([...recetas, nueva]);
    setMensaje('La receta se agrego correctamente');
  }

  // Borra la receta y renumera las que quedan
  function eliminarReceta(numero: number) {
    const quedan = recetas.filter((receta) => receta.numero !== numero);
    const renumeradas = quedan.map((receta, indice) => ({
      ...receta,
      numero: indice + 1,
    }));

    setRecetas(renumeradas);
    setSeleccionada(null);
    setMensaje('Se elimino el registro correctamente');
  }

  // Busca por numero y muestra el detalle en la misma pagina
  function buscarReceta(numero: string) {
    const encontrada = recetas.find((receta) => receta.numero === Number(numero));

    if (encontrada) {
      setSeleccionada(encontrada);
      setMensaje('');
    } else {
      setSeleccionada(null);
      setMensaje('No existe una receta con ese numero');
    }
  }

  function cerrarDetalle() {
    setSeleccionada(null);
  }

  const datos: TipoContexto = {
    recetas,
    seleccionada,
    mensaje,
    agregarReceta,
    eliminarReceta,
    buscarReceta,
    cerrarDetalle,
  };

  return (
    <RecetasContext.Provider value={datos}>{children}</RecetasContext.Provider>
  );
}
