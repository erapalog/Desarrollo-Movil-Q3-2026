import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Tarea } from '../Modelos/Tarea'
import Listado from './Listado'

export default function FormularioComponent() {

    const [tarea, setTarea] = useState<Tarea[]>([]);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function agregarTarea() {

        let tareaparametro: Tarea = {
            id: tarea.length + 1,
            titulo: titulo,
            descripcion: descripcion,
            completado: false,
        }

        setTarea([...tarea, tareaparametro]);

        Alert.alert('Tarea agregada', 'Tarea agregada correctamente');
        setTitulo('');
        setDescripcion('');

    }


    return (
        <View>
            <Text>Formulario de tareas</Text>

            <TextInput placeholder="Ingrese el titulo de la tarea"
                style={styles.input}
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput placeholder="Ingrese la descripcion de la tarea"
                style={styles.input}
                value={descripcion}
                onChangeText={setDescripcion}
            />
            <Button title="Agregar tarea" onPress={agregarTarea} />

            <Listado lista={tarea} />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
})