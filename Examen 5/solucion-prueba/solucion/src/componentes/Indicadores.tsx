import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useMascota } from '../contexto/MascotaContext';

function colorDelValor(valor: number): string {
  if (valor >= 60) return '#2e9e5b';
  if (valor >= 30) return '#e0a800';
  return '#d64545';
}

// Los tres campos se dibujan recorriendo la lista del contexto:
// así ningún componente hijo necesita recibir props.
export default function Indicadores() {
  const { indicadores } = useMascota();

  return (
    <View style={estilos.contenedor}>
      {indicadores.map(indicador => (
        <View key={indicador.clave} style={estilos.fila}>
          <Text style={estilos.etiqueta}>{indicador.etiqueta}</Text>
          <View style={estilos.campo}>
            <Text style={[estilos.valor, { color: colorDelValor(indicador.valor) }]}>
              {indicador.valor}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { gap: 10, paddingVertical: 12 },
  fila: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  etiqueta: { fontSize: 15, fontWeight: '600', color: '#333' },
  campo: {
    minWidth: 70,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  valor: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
    fontVariant: ['tabular-nums'],
  },
});
