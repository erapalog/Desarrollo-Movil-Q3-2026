import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContador } from '../Providers/ProviderContador'

export default function Consumidor() {

    const { contador, incrementar, decrementar } = useContador();
    return (
        <View>
            <Text>Consumidor</Text>
            <Text>{contador}</Text>
            <Button title="Incrementar" onPress={incrementar} />
            <Button title="Decrementar" onPress={decrementar} />
        </View>
    )
}