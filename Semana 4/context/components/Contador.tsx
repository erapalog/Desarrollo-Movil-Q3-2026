import { View, Text, Button } from 'react-native'
import React from 'react'
import Contador2 from './Contador2'

export default function Contador(props: { contador: number }) {
    return (
        <View>
            <Text>Contador</Text>
            <Text>{props.contador}</Text>
            <Button title="Incrementar" onPress={props.incrementar} />
            <Button title="Decrementar" onPress={props.decrementar} />

            <Contador2 contador={props.contador} />
        </View>
    )
}