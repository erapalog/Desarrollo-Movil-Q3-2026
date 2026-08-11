import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Contador from './components/Contador';
import Consumidor from './Consumidores/Consumidor';
import ProviderContador from './Providers/ProviderContador';
import Consumidor2 from './Consumidores/Consumidor2';
import Consumidor3 from './Consumidores/Consumidor3';
import ProviderProducto from './Providers/ProviderProducto';
import ConsumidorProducto from './Consumidores/ConsumidorProducto';
import ConsumidorListaProducto from './Consumidores/ConsumidorListaProducto';

export default function App() {

  /*const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1);
  }*/


  return (
    <ScrollView style={styles.container}>
      <Text>Uso de contextos!</Text>

      <Text>Consumidor</Text>

      <ProviderContador>
        <Consumidor />
        <Consumidor2 />
        <Consumidor3 />
      </ProviderContador>

      <ProviderProducto>
        <ConsumidorProducto />
        <ConsumidorListaProducto />
      </ProviderProducto>

      {/* <Text>{contador}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
      <Contador contador={contador} incrementar={incrementar} decrementar={decrementar} />*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
