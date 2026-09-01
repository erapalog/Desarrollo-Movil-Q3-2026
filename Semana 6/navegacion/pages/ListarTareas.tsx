import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useContextTarea } from '../provider/ProviderTarea';

export default function ListarTareas() {

    const { listaTareas } = useContextTarea();
    return (
        <View style={styles.container}>
            <Text>Lista de Tareas</Text>
            <FlatList
                data={listaTareas}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.titulo}</Text>
                        <Text style={styles.text}>{item.descripcion}</Text>
                        <Text style={styles.text}>{item.fecha}</Text>
                        <Text style={styles.text}>{item.estado.toString()}</Text>

                    </View>

                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})    