import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useProducto } from '../Providers/ProviderProducto';
import { Producto } from '../modelos/Producto';
import { useContador } from '../Providers/ProviderContador';

export default function ConsumidorProducto() {

    const [nombre, setNombre] = useState<string>('');
    const [precio, setPrecio] = useState<string>('');
    const [url, setUrl] = useState<string>('');


    const { agregarProducto } = useProducto();

    const { contador } = useContador()

    function agregarProductoHandler() {

        let producto: Producto = {
            id: Date.now(),
            nombre: nombre,
            precio: parseFloat(precio),
            url: url,
        }

        agregarProducto(producto);
        Alert.alert('Producto agregado correctamente');

        setNombre('');
        setPrecio('');
        setUrl('');



    }

    return (
        <View>
            <Text>Listado de productos</Text>

            <Text>Contador desde otro contexto: {contador}</Text>
            <TextInput placeholder='Ingrese Nombre del Producto'

                value={nombre}
                onChangeText={setNombre}
            ></TextInput>

            <TextInput placeholder='Ingrese Precio del Producto'

                value={precio}
                onChangeText={setPrecio}
            ></TextInput>

            <TextInput placeholder='Ingrese URL del Producto'

                value={url}
                onChangeText={setUrl}
            ></TextInput>

            <Button title='Agregar Producto' onPress={agregarProductoHandler} />
        </View>
    )
}