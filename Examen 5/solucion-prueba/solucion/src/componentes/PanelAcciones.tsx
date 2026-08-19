import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useMascota } from '../contexto/MascotaContext';

export default function PanelAcciones() {
  const { alimentar, jugar, descansar, reiniciar, puedeJugar } = useMascota();

  return (
    <View style={estilos.contenedor}>
      <Pressable style={estilos.boton} onPress={alimentar}>
        <Text style={estilos.texto}>Alimentar</Text>
      </Pressable>

      <Pressable
        style={puedeJugar ? estilos.boton : estilos.botonInactivo}
        onPress={jugar}
        disabled={!puedeJugar}
      >
        <Text style={estilos.texto}>Jugar</Text>
      </Pressable>

      <Pressable style={estilos.boton} onPress={descansar}>
        <Text style={estilos.texto}>Descansar</Text>
      </Pressable>

      <Pressable style={estilos.botonSecundario} onPress={reiniciar}>
        <Text style={estilos.texto}>Reiniciar</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, paddingVertical: 8 },
  boton: {
    backgroundColor: '#3b5bdb',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  botonSecundario: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  botonInactivo: {
    backgroundColor: '#adb5bd',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  texto: { color: '#fff', fontWeight: '600' },
});
