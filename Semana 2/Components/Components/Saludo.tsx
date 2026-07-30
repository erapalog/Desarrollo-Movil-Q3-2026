import { View, Text } from 'react-native'
import React from 'react'
import Formulario from './Formulario'
import { Persona } from '../Models/Persona'

export default function Saludo(props:Persona) {
  return (
    <View>
      <Text>Saludos Alumno: {props.nombre} {props.apelllido} {props.edad}</Text>

      <Formulario nombre="Juan Garcia" edad={90}></Formulario>
    </View>
  )
}