# Notas para quien evalúa

## Cómo probar la solución

```bash
npm install
npm run web
```

No requiere dependencias adicionales: todo es React + React Native core.

## Decisiones de diseño

**Sin temporizadores.** Los indicadores no bajan solos: cambian únicamente
cuando el usuario pulsa un botón, y cada acción sube unos y baja otros. Eso
mantiene la tensión del juego sin obligar al alumno a entender `setInterval`,
cierres (*closures*), limpieza de efectos ni actualizaciones funcionales de
estado — temas que confunden a quien todavía no domina JavaScript.

`useEffect` se usa en sus dos formas más comprensibles:

- `[]` → se ejecuta una vez, al montar.
- `[estadoAnimo]` → se ejecuta cuando ese valor cambia.

**Sin emojis y con imagen.** La cabecera muestra un PNG del perrito en lugar de
un emoji, y los indicadores son campos de texto con el número, no barras. Así el
alumno practica `<Image />` e importación de assets, y la interfaz se ve igual en
cualquier navegador o dispositivo (los emojis cambian de forma según el sistema).

**Las cuatro imágenes.** `assets/` trae `perro-feliz`, `perro-normal`,
`perro-triste` y `perro-critico`. El requisito mínimo solo pide mostrar una; que
cambie con el ánimo es punto extra. Esta solución implementa el punto extra.
Se generaron con `../generar-imagenes.py` (Python puro, sin dependencias).

## Puntos donde suelen fallar los alumnos

1. **Rompen la restricción de props.**
   El error típico es crear `<Campo valor={alimento} etiqueta="Alimento" />`.
   Lo esperado es que `Indicadores` recorra con `.map()` la lista `indicadores`
   que entrega el contexto.

2. **Convierten los valores derivados en estado.**
   Ponen `const [estadoAnimo, setEstadoAnimo] = useState('Normal')` y luego
   intentan sincronizarlo a mano. `estadoAnimo`, `imagen`, `necesitaAyuda` y
   `puedeJugar` se **calculan** en cada render a partir de los tres números. Si
   lo hicieron con `useState`, explícales por qué sobra.

3. **Valores fuera de rango.**
   Sin la función `acotar()`, el número pasa de 100 o queda negativo. Se ve a
   simple vista pulsando "Alimentar" varias veces.

4. **Mutan el arreglo de la bitácora.**
   Usan `bitacora.push(entrada)` y la lista no se vuelve a pintar. Lo correcto es
   crear un arreglo nuevo: `setBitacora(anteriores => [entrada, ...anteriores])`.

5. **Consumir el contexto sin validar.**
   Si `useMascota()` no lanza error cuando el contexto es `null`, TypeScript
   obliga a poner `?.` en todos lados o a usar `any`. Se descuenta en el criterio
   de TypeScript.

6. **Falta `key` en el `.map()`.**
   No rompe la app, pero React lo advierte en consola. Vale como observación, no
   como descuento fuerte.

7. **Ruta de la imagen mal escrita.**
   Desde `src/contexto/` y `src/componentes/` hay que subir dos niveles:
   `'../../assets/perro-feliz.png'`. Si escriben una ruta que no existe, el
   bundler falla con un error claro; no es un problema de React.

## Respuestas esperadas a las preguntas de cierre

1. **Context vs props:** evita el *prop drilling* — pasar el mismo dato a través
   de componentes intermedios que no lo usan. Centraliza el estado compartido y
   permite que cualquier componente del árbol lo consuma directamente.

2. **Los tres `useEffect`:**
   - `useEffect(fn)` sin arreglo: se ejecuta después de **cada** render.
   - `useEffect(fn, [])`: se ejecuta **una sola vez**, al montar el componente.
   - `useEffect(fn, [estadoAnimo])`: se ejecuta al montar y cada vez que
     `estadoAnimo` **cambie de valor**.

3. **Por qué `setAlimento(...)`:** asignar directamente a la variable no le avisa
   a React de que algo cambió, así que la pantalla no se vuelve a pintar. Además
   la variable se recrea en cada render, por lo que el nuevo valor se perdería.
   El `set...` guarda el valor y dispara un nuevo render.

## Ajustes rápidos si la prueba resulta larga

- Quitar el segundo `useEffect` (el aviso de cambio de humor) y dejar solo el de
  bienvenida.
- Entregar `Indicadores.tsx` ya resuelto y pedir solo el contexto y las acciones.
- Quitar el `Switch` de modo noche.
- Reducir la bitácora a un único `Text` con el último evento.
