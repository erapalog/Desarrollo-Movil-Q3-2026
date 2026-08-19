import React, { useContext } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import RecetasProvider from './src/provider/RecetasProvider';
import { RecetasContext } from './src/context/RecetasContext';
import AgregarReceta from './src/components/AgregarReceta';
import ListaRecetas from './src/components/ListaRecetas';
import DetalleReceta from './src/components/DetalleReceta';
import estilos from './src/estilos';

export default function App() {
  return (
    <RecetasProvider>
      <Pantalla />
    </RecetasProvider>
  );
}

// Toda la aplicacion es UNA sola pagina con scroll.
function Pantalla() {
  const { mensaje } = useContext(RecetasContext);

  return (
    <View style={estilos.pantalla}>
      <StatusBar />
      <ScrollView contentContainerStyle={estilos.contenido}>
        <Text style={estilos.titulo}>Recetas Culinarias</Text>

        {mensaje !== '' && (
          <View style={estilos.aviso}>
            <Text style={estilos.textoAviso}>{mensaje}</Text>
          </View>
        )}

        <AgregarReceta />
        <ListaRecetas />
        <DetalleReceta />
      </ScrollView>
    </View>
  );
}
