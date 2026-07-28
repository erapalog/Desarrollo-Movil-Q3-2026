import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let nombres='Pedro'

  console.log(nombres);

  nombres=10

  console.log(nombres)

  nombres=[1,2,2,2]

  console.log(nombres)

  nombres=true
  console.log(nombres);

  nombres={
    id:5,
    apellido:'garcia'
  }
  console.log(nombres);


  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <StatusBar style="auto" />
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
