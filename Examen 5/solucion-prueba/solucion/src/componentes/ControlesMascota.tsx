import React from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { useMascota } from '../contexto/MascotaContext';

export default function ControlesMascota() {
  const { nombre, cambiarNombre, modoNoche, alternarModoNoche } = useMascota();

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.etiqueta}>Nombre de la mascota</Text>
      <TextInput
        style={estilos.entrada}
        placeholder="Escribe un nombre"
        value={nombre}
        onChangeText={cambiarNombre}
        maxLength={16}
      />

      <View style={estilos.fila}>
        <Text style={estilos.etiqueta}>Modo noche</Text>
        <Switch value={modoNoche} onValueChange={alternarModoNoche} />
      </View>
      <Text style={estilos.ayuda}>En modo noche, descansar recupera mas energia.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { gap: 8, paddingVertical: 8 },
  etiqueta: { fontSize: 14, fontWeight: '600', color: '#333' },
  ayuda: { fontSize: 12, color: '#777' },
  entrada: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
