import { View, Text } from 'react-native'
import React from 'react'
import { ListaAnimales } from "../Modelos/ListaAnimales";



export default function ListaAnimalesComponent({lista}: ListaAnimales) {
  return (
    <View>
      <Text>Lista de animales</Text>
      {
        lista.map((item)=>(
          <View>
                  <Text>Especie: {item.especie}</Text>
                  <Text>Especie: {item.genero}</Text>
                  <Text>Especie: {item.fechaRegistro}</Text>
          </View>
      
        ))
       }
    </View>
  )
}