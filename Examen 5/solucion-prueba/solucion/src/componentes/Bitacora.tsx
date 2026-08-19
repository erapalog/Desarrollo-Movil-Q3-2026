import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useMascota } from '../contexto/MascotaContext';

export default function Bitacora() {
  const { bitacora } = useMascota();

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Bitácora</Text>

      {bitacora.length === 0 ? (
        <Text style={estilos.vacio}>Todavía no ha pasado nada. ¡Interactúa con tu mascota!</Text>
      ) : (
        bitacora.map(entrada => (
          <View key={entrada.id} style={estilos.fila}>
            <Text style={estilos.hora}>{entrada.hora}</Text>
            <Text style={estilos.texto}>{entrada.texto}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { paddingVertical: 12, gap: 6 },
  titulo: { fontSize: 16, fontWeight: '700' },
  vacio: { color: '#888', fontStyle: 'italic' },
  fila: { flexDirection: 'row', gap: 8 },
  hora: { color: '#888', fontVariant: ['tabular-nums'] },
  texto: { color: '#333', flexShrink: 1 },
});
