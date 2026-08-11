import { View, Text } from 'react-native'
import React from 'react'

export default function Contador2(props: { contador: number }) {
    return (
        <View>
            <Text>Contador2</Text>
            <Text>{props.contador}</Text>
        </View>
    )
}