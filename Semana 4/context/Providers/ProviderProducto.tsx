import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../modelos/ViewReact'
import { Producto } from '../modelos/Producto';
import { ContextProducto } from '../Contextos/ContexProducto';

//componentrs ReactNode
// van tner funcionalidad que se definicio contexto y lo exporta
// vamos que exportar el contexto 

export default function ProviderProducto({ children }: ViewReact) {

    const [productos, setProductos] = useState<Producto[]>([]);

    const agregarProducto = (producto: Producto) => {
        setProductos([...productos, producto]);
    }

    const eliminarProducto = (id: number) => {
        setProductos(productos.filter(producto => producto.id !== id));
    }

    const actualizarProducto = (producto: Producto) => {
        setProductos(productos.map(p => p.id === producto.id ? producto : p));
    }



    return (
        <View>
            <ContextProducto.Provider value={{ productos, agregarProducto, eliminarProducto, actualizarProducto }}>
                {children}
            </ContextProducto.Provider>
        </View>
    )
}

export const useProducto = () => {
    return useContext(ContextProducto);
}