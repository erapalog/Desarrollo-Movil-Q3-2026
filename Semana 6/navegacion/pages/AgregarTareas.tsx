import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useContextTarea } from '../provider/ProviderTarea';
import { Tarea } from '../Modelos/Tarea';

export default function AgregarTareas() {

    const { agregarTarea, listaTareas } = useContextTarea();

    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [estado, setEstado] = useState(false);


    function handleAgregarTarea() {
        const nuevaTarea: Tarea = {

            titulo: titulo,
            descripcion: descripcion,
            fecha: fecha,
            estado: estado
        }
        agregarTarea(nuevaTarea);
        setTitulo('');
        setDescripcion('');
        setFecha('');
        setEstado(false);
    }


    return (
        <View>
            <Text>Formulario de Agregar Tareas</Text>
            <TextInput
                placeholder="Titulo"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                placeholder="Descripcion"
                value={descripcion}
                onChangeText={setDescripcion}
            />
            <TextInput
                placeholder="Fecha"
                value={fecha}
                onChangeText={setFecha}
            />
            <TextInput
                placeholder="Estado"
                value={estado.toString()}
                onChangeText={(text) => setEstado(text === 'true')}
            />
            <Button title="Agregar Tarea" onPress={handleAgregarTarea} />
        </View>
    )
}