import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Persona } from './Modelos/Persona';

export default function App() {

  let nombres:string='Pedro'
  console.log(nombres)


  let numeros:number=0;
  let respuesta:boolean;


  const sumar = (a:number,b:number): number=>{

    return a+b

  }

  console.log(sumar(5,5))

  let persona={
    id:1,
    nombre: 'ana',
    apellido:'garcia',
    edad: 90,
    dni: '09090'
  }

  let persona2:{
    id:2,
    nombre: 'pedro',
    apellido:'garcia',
    edad: 91,
    dni:'sdd',
    lugarnacimineo:''
  }

  let persona3:Persona={
    id:3,
    nombre:'pablo',
    apellido:'gomez',
    edad:80,
    dni: '',
    
  }

  let persona4:Persona={
    id:3,
    nombre:'pablo',
    apellido:'gomez',
    edad:80,
    dni: ''
  }


  let persona5:Persona={
    id:3,
    nombre:'pablo',
    apellido:'gomez',
    edad:80,
    dni: '',
    fechaNaciminet:'2020-09-09'
  }

  type operacion= 'multiplicar' | 'sumar' | 'restar'

  const calculadora = (a:number,b:number,op:operacion): number=>{

    let resultado:number=0

    if(op=='sumar')
      resultado= a+b 
    if(op='restar')
      resultado = a-b
    if(op='multiplicar') 
      resultado= a*b      

    return resultado;

  }

  console.log(calculadora(4,10,'multiplicar'))

  let numeroPares : Array <number>=[2,8,10,20];

  let numeroImaares :  number[]=[2,8,10,20];


  for (let x of numeroPares){
    console.log(x)
  }

  for (let i=0; i< numeroImaares.length; i++){
    console.log(numeroImaares[i])

  }


  return (
    <View style={styles.container}>
      <Text>Hola Mundo!</Text>
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
