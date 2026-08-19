import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RecetasContext } from '../context/RecetasContext';
import estilos from '../estilos';

export default function DetalleReceta() {
  const { seleccionada, eliminarReceta, cerrarDetalle } = useContext(RecetasContext);

  // Mientras no se busque una receta, esta seccion no se dibuja.
  if (seleccionada === null) return null;

  return (
    <View style={estilos.seccion}>
      <Text style={estilos.subtitulo}>Detalle de la Receta</Text>

      <Text style={estilos.texto}>Nro. Receta: {seleccionada.numero}</Text>
      <Text style={estilos.texto}>Nombre: {seleccionada.nombre}</Text>
      <Text style={estilos.texto}>Fecha: {seleccionada.fecha}</Text>
      <Text style={estilos.texto}>Ingredientes:</Text>

      {seleccionada.ingredientes.map((ingrediente, posicion) => (
        <Text key={posicion} style={estilos.texto}>
          - {ingrediente}
        </Text>
      ))}

      <View style={estilos.fila}>
        <TouchableOpacity style={estilos.botonGris} onPress={cerrarDetalle}>
          <Text style={estilos.textoBoton}>Cerrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botonRojo}
          onPress={() => eliminarReceta(seleccionada.numero)}
        >
          <Text style={estilos.textoBoton}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
