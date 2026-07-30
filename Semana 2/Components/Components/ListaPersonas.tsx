import { View, Text } from 'react-native'
import React from 'react'

export default function ListaPersonas() {

    let persona: string[] = ['Ana', 'Pedro', 'Juan'];

    return (
        <View>

            <Text>Listado de personas</Text>
            {
                persona.map((item) => {
                    return <Text>{item}</Text>
                })
            }
        </View>
    )
}
