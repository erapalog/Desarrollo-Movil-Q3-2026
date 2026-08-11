import { View, Text, FlatList, Button, Alert } from 'react-native'
import React from 'react'
import { useProducto } from '../Providers/ProviderProducto';

export default function ConsumidorListaProducto() {

    const { productos, eliminarProducto } = useProducto();

    function eliminarProductoHandler(id: number) {
        eliminarProducto(id);
        Alert.alert('Producto eliminado correctamente');
    }

    return (
        <View>
            <Text>Listado de productos</Text>
            <FlatList
                data={productos}
                renderItem={({ item }) =>
                    <Text>{item.nombre} - {item.precio} - {item.url} -
                        <Button title='Eliminar' onPress={() => eliminarProductoHandler(item.id)} /></Text>}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListEmptyComponent={() => <Text>No hay productos</Text>}
                ListHeaderComponent={() => <Text>Listado de productos</Text>}
                ListFooterComponent={() => <Text>Listado de productos</Text>}
                ListFooterComponentStyle={{ height: 100 }}
                ListHeaderComponentStyle={{ height: 100 }}
            />
        </View>
    )
}