import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { MascotaProvider } from './src/contexto/MascotaContext';
import Cabecera from './src/componentes/Cabecera';
import ControlesMascota from './src/componentes/ControlesMascota';
import Indicadores from './src/componentes/Indicadores';
import PanelAcciones from './src/componentes/PanelAcciones';
import Bitacora from './src/componentes/Bitacora';

export default function App() {
  return (
    <MascotaProvider>
      <SafeAreaView style={estilos.pantalla}>
        <ScrollView contentContainerStyle={estilos.contenido}>
          <Cabecera />
          <ControlesMascota />
          <Indicadores />
          <PanelAcciones />
          <Bitacora />
        </ScrollView>
      </SafeAreaView>
    </MascotaProvider>
  );
}

const estilos = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f6f7fb' },
  contenido: { padding: 20 },
});
