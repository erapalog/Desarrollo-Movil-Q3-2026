import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Animales } from './Modelos/Animales';
import ListaAnimalesComponent from './componentes/ListaAnimalesComponent';

export default function App() {

  //usestate
  //get , set
  const [contador,setContador] =useState<number>(5);
  const [nombre, setNombre]= useState<string | null> (null);
  const [listaNombre, setListaNombres]=useState<[]>([]);
  const [listaAnimales, setListaAnimales]=useState<Animales[]>([])

  let contador2=10;

  function sumarContador(){
       setContador(contador+1);
       contador2=contador2+1;
  }

  function restarContador(a:number){

    if(contador==0)
        return

    setContador(contador-a)

  }

  useEffect(()=>{
     // alert('Componente cargado')
      let lista: Animales= {
          especie:'Roedor',
          genero: 'Hembra',
          fechaRegistro:'2020-08-09'
      }
     setListaAnimales(item=>[...item,lista])

     console.log('Lista Animales',listaAnimales)


  },[]);

  useEffect(()=>{
      console.log(contador2)
  },[contador2]);


  return (
    <View style={styles.container}>
      <Text>Uso de Hooks!</Text>
     
       <Text>El valor de contador {contador}</Text>

       <Text>El valor de la variable {contador2}</Text>

       <Button title='Sumar al Contador' onPress={sumarContador}></Button>
       <Button title='Restar Contador' onPress={()=>restarContador(1)}></Button>

      <ListaAnimalesComponent lista={listaAnimales}></ListaAnimalesComponent>
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
