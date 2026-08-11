import { createContext } from "react";

//es la plantilla de definicion de los contextos
export const ContextContador = createContext({
    contador: 0,
    incrementar: () => { },
    decrementar: () => { },
})
