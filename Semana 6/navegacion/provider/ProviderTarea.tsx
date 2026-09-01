import { View, Text, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContextTarea } from '../contextos/ContexTarea'
import { Tarea } from '../Modelos/Tarea';

interface ViewProps {
    children: React.ReactNode;
}

export default function ProviderTarea(children: ViewProps) {

    const [listaTareas, setListaTareas] = useState<Tarea[]>([]);

    const agregarTarea = async (tarea: Tarea) => {
        // setListaTareas([...listaTareas, tarea]);

        try {

            const response = await fetch('https://v809lr4b-3000.use2.devtunnels.ms/tareas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarea)
            });
            const data = await response.json();
            console.log(data);
            Alert.alert('Tarea agregada correctamente');
            //setListaTareas([...listaTareas, data]);

        } catch (error) {
            Alert.alert('Error al agregar la tarea', (error as Error).message);
        }
    }
    return (
        <ContextTarea.Provider value={{ listaTareas, setListaTareas, agregarTarea }}>
            {children.children}
        </ContextTarea.Provider>
    )
}

export const useContextTarea = () => {
    return useContext(ContextTarea);
}