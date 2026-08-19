import React, { createContext, useContext, useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { EntradaBitacora, Indicador, ValorContextoMascota } from '../tipos';

// Las imágenes se cargan una sola vez, al inicio del archivo.
import perroFeliz from '../../assets/perro-feliz.png';
import perroNormal from '../../assets/perro-normal.png';
import perroTriste from '../../assets/perro-triste.png';
import perroCritico from '../../assets/perro-critico.png';

const VALOR_INICIAL = 60;

// Contador simple para dar un id distinto a cada entrada de la bitácora.
let contadorId = 0;

const MascotaContext = createContext<ValorContextoMascota | null>(null);

// Mantiene cualquier número dentro del rango 0-100.
function acotar(valor: number): number {
  return Math.max(0, Math.min(100, valor));
}

export function MascotaProvider({ children }: { children: React.ReactNode }) {
  const [nombre, setNombre] = useState<string>('Pixel');
  const [alimento, setAlimento] = useState<number>(VALOR_INICIAL);
  const [energia, setEnergia] = useState<number>(VALOR_INICIAL);
  const [animo, setAnimo] = useState<number>(VALOR_INICIAL);
  const [modoNoche, setModoNoche] = useState<boolean>(false);
  const [bitacora, setBitacora] = useState<EntradaBitacora[]>([]);

  function registrar(texto: string): void {
    contadorId = contadorId + 1;
    const entrada: EntradaBitacora = {
      id: String(contadorId),
      texto,
      hora: new Date().toLocaleTimeString(),
    };
    setBitacora(anteriores => [entrada, ...anteriores]);
  }

  // --- Valores derivados: se calculan en cada render, NO son useState --------
  const promedio = (alimento + energia + animo) / 3;
  const necesitaAyuda = alimento === 0 || energia === 0 || animo === 0;
  const puedeJugar = energia >= 15;

  let estadoAnimo = 'Crítico';
  let imagen: ImageSourcePropType = perroCritico;
  if (promedio >= 70) {
    estadoAnimo = 'Feliz';
    imagen = perroFeliz;
  } else if (promedio >= 40) {
    estadoAnimo = 'Normal';
    imagen = perroNormal;
  } else if (promedio >= 20) {
    estadoAnimo = 'Decaído';
    imagen = perroTriste;
  }

  // --- Efecto 1: se ejecuta una sola vez, al montar la app -------------------
  useEffect(() => {
    registrar('Hola, cuida bien de tu mascota');
  }, []);

  // --- Efecto 2: se ejecuta cada vez que CAMBIA el estado de ánimo -----------
  useEffect(() => {
    registrar(`Ahora tu mascota está ${estadoAnimo}`);
  }, [estadoAnimo]);

  // --- Acciones -------------------------------------------------------------
  function cambiarNombre(valor: string): void {
    setNombre(valor);
  }

  function alternarModoNoche(): void {
    const nuevoValor = !modoNoche;
    setModoNoche(nuevoValor);
    registrar(nuevoValor ? 'Modo noche activado' : 'Se encendieron las luces');
  }

  function alimentar(): void {
    setAlimento(acotar(alimento + 20));
    setEnergia(acotar(energia - 5));
    setAnimo(acotar(animo + 5));
    registrar('Comio su plato de croquetas');
  }

  function jugar(): void {
    setAlimento(acotar(alimento - 10));
    setEnergia(acotar(energia - 15));
    setAnimo(acotar(animo + 20));
    registrar('Jugaron con la pelota');
  }

  function descansar(): void {
    const recuperacion = modoNoche ? 40 : 25;
    setAlimento(acotar(alimento - 10));
    setEnergia(acotar(energia + recuperacion));
    setAnimo(acotar(animo - 5));
    registrar(modoNoche ? 'Durmio toda la noche' : 'Tomo una siesta');
  }

  function reiniciar(): void {
    setAlimento(VALOR_INICIAL);
    setEnergia(VALOR_INICIAL);
    setAnimo(VALOR_INICIAL);
    setBitacora([]);
  }

  // --- Lista que recorren los campos (así no hacen falta props) -------------
  const indicadores: Indicador[] = [
    { clave: 'alimento', etiqueta: 'Alimento', valor: alimento },
    { clave: 'energia', etiqueta: 'Energia', valor: energia },
    { clave: 'animo', etiqueta: 'Animo', valor: animo },
  ];

  const valor: ValorContextoMascota = {
    nombre,
    cambiarNombre,
    indicadores,
    estadoAnimo,
    imagen,
    necesitaAyuda,
    puedeJugar,
    modoNoche,
    alternarModoNoche,
    bitacora,
    alimentar,
    jugar,
    descansar,
    reiniciar,
  };

  return <MascotaContext.Provider value={valor}>{children}</MascotaContext.Provider>;
}

export function useMascota(): ValorContextoMascota {
  const contexto = useContext(MascotaContext);
  if (contexto === null) {
    throw new Error('useMascota() debe usarse dentro de <MascotaProvider>');
  }
  return contexto;
}
