import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ListadoTareas } from '../Modelos/ListadoTareas'

export default function Listado(props: ListadoTareas) {
    return (
        <View>
            <FlatList
                data={props.lista}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.titulo}</Text>}
            />
        </View>
    )
}