import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useMascota } from '../contexto/MascotaContext';

export default function Cabecera() {
  const { nombre, imagen, estadoAnimo, necesitaAyuda, modoNoche } = useMascota();

  return (
    <View style={estilos.contenedor}>
      <Image source={imagen} style={estilos.imagen} resizeMode="contain" />
      <Text style={estilos.nombre}>{nombre.trim() === '' ? 'Sin nombre' : nombre}</Text>
      <Text style={estilos.estado}>
        Estado: {estadoAnimo}
        {modoNoche ? ' - modo noche' : ''}
      </Text>

      {necesitaAyuda && (
        <View style={estilos.aviso}>
          <Text style={estilos.avisoTexto}>{nombre} necesita ayuda</Text>
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { alignItems: 'center', paddingVertical: 16 },
  imagen: { width: 140, height: 140 },
  nombre: { fontSize: 24, fontWeight: '700', marginTop: 4 },
  estado: { fontSize: 15, color: '#555' },
  aviso: {
    marginTop: 10,
    backgroundColor: '#ffe3e3',
    borderColor: '#d64545',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  avisoTexto: { color: '#a52222', fontWeight: '700' },
});
