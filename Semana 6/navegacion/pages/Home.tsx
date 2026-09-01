import { View, Text, Alert, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { ContextTarea } from '../contextos/ContexTarea'
import { useContextTarea } from '../provider/ProviderTarea'
import { Tarea } from '../Modelos/Tarea'

export default function Home() {


    const { listaTareas, setListaTareas } = useContextTarea();


    async function cargarTareas() {
        try {
            const response = await fetch('https://v809lr4b-3000.use2.devtunnels.ms/tareas');
            const data = await response.json();
            setListaTareas(data);
        } catch (error) {
            Alert.alert('Error al cargar las tareas', (error as Error).message);
        }
    }

    useEffect(() => {

        cargarTareas();
    }, []);

    return (
        <View>
            <Text>Home</Text>
            <FlatList
                data={listaTareas}
                renderItem={({ item }: { item: Tarea }) => <Text>{item.titulo}</Text>}
            />
        </View>
    )
}