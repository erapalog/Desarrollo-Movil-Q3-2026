import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../modelos/ViewReact'
import { ContextContador } from '../Contextos/ContextContador';


//componentrs ReactNode 
// van tner funcionalidad que se definicio contexto y lo exporta 
// vamos que exportar el contexto 


export default function ProviderContador(props: ViewReact) {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1);
  }


  return (
    <View>

      <ContextContador.Provider value={{ contador, incrementar, decrementar }}>
        {props.children}
      </ContextContador.Provider>

    </View>
  )
}

export const useContador = () => {
  return useContext(ContextContador);
}