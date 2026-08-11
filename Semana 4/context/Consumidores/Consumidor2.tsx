import { View, Text } from 'react-native'
import React from 'react'
import { useContador } from '../Providers/ProviderContador';

export default function Consumidor2() {
    const { contador } = useContador();
    return (
        <View>
            <Text>Valor del contador: {contador}</Text>

        </View>
    )
}