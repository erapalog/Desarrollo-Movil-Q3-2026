import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from './Components/Saludo';
import ListaPersonas from './Components/ListaPersonas';


export default function App() {

  let sumatoria=4+3+6;

  return (
    <View style={styles.container}>
      <Text>Hola mundo!</Text>

    <Saludo nombre='Juan' apelllido='Garcia' edad={89}></Saludo>
    <ListaPersonas></ListaPersonas>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
