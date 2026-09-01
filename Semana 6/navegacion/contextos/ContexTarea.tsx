import { createContext } from "react";
import { Tarea } from "../Modelos/Tarea";

export const ContextTarea = createContext({

    listaTareas: [] as Tarea[],
    setListaTareas: (tareas: Tarea[]) => { },
    agregarTarea: (tarea: Tarea) => { }
})