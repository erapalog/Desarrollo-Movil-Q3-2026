import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, Switch, FlatList, Image, Modal } from 'react-native';
import FormularioComponent from './Componentes/FormularioComponent';
import Listado from './Componentes/Listado';

export default function App() {

  const [listaTextos, setListaTextos] = useState<string[]>([
    'Texto 1',
    'Texto 2',
    'Texto 3',
    'Texto 4',
    'Texto 5',
    'Texto 6',
    'Texto 7',
    'Texto 8',
    'Texto 9',
    'Texto 10',
    'Texto 11',
    'Texto 12',
    'Texto 13',
    'Texto 14',
    'Texto 15',
    'Texto 16',
    'Texto 17',
    'Texto 18',
    'Texto 19',
    'Texto 20',
    'Texto 21',
    'Texto 22',
    'Texto 23',
    'Texto 24',
    'Texto 25',
    'Texto 26',
    'Texto 27',
    'Texto 28',
    'Texto 29',
    'Texto 30',
    'Texto 31',
    'Texto 32',
    'Texto 33',
    'Texto 34',
    'Texto 35',
    'Texto 36',
    'Texto 37',
    'Texto 38',
    'Texto 39',
    'Texto 40',
    'Texto 41',
    'Texto 42',
    'Texto 43',
    'Texto 44',
    'Texto 45',
    'Texto 46',
    'Texto 47',
    'Texto 48',
    'Texto 49',
    'Texto 50',
    'Texto 51',
    'Texto 52',
    'Texto 53',
    'Texto 54',
    'Texto 55',
    'Texto 56',
    'Texto 57',
    'Texto 58',
    'Texto 59',
    'Texto 60',
    'Texto 61',
    'Texto 62',
    'Texto 63',
  ]);

  const [swichOn, setSwichOn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  function iniciarSesion() {
    Alert.alert('Iniciar sesión', 'El usuario y contraseña son correctos');
  }

  return (
    <ScrollView style={styles.container}>

      <FormularioComponent />


      {
        /*listaTextos.map((texto, index) => (
          <Text key={index}>{texto}</Text>
        ))*/
      }

      {/* <TextInput placeholder="Ingrese el nombre del usuario" style={styles.input} />
      <TextInput placeholder="Ingrese la contraseña" style={styles.input} />

      <Button title="Iniciar sesión" onPress={iniciarSesion} />

      <TouchableOpacity style={styles.touchableOpacity} onPress={iniciarSesion}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>

   <View>
        <Switch value={swichOn} onValueChange={setSwichOn}>
          <Text>Iniciar sesión</Text>
        </Switch>

      </View>*/}

      {/* <FlatList
        data={listaTextos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      >

      </FlatList>

      <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />

      <Button title="Abrir modal" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text>Modal</Text>
          <TextInput placeholder="Ingrese el nombre del usuario" style={styles.input} />
          <TextInput placeholder="Ingrese la contraseña" style={styles.input} />
          <Button title="Iniciar sesión" onPress={iniciarSesion} />
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      */}



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  touchableOpacity: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
