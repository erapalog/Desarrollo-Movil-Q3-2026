//lista productos
//agregar producto
//eliminar producto
//actualizar producto

import { createContext } from "react";
import { Producto } from "../modelos/Producto";


export const ContextProducto = createContext({
    productos: [] as Producto[],
    agregarProducto: (producto: Producto) => { },
    eliminarProducto: (id: number) => { },
    actualizarProducto: (producto: Producto) => { },
});
