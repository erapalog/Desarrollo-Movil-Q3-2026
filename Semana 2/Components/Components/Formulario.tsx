import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../Models/Persona'

export default function Formulario({nombre,edad}:Persona) {
  return (
    <View>
      <Text>Componente Formulario que recibe el nombre {nombre}</Text>
      <Text>Componente Formulario que recibe la edad {edad}</Text>
    </View>
  )
}