import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RecetasContext } from '../context/RecetasContext';
import estilos from '../estilos';

export default function AgregarReceta() {
  const { agregarReceta } = useContext(RecetasContext);

  const [nombre, setNombre] = useState<string>('');
  const [ingredientes, setIngredientes] = useState<string[]>(['', '', '', '', '']);

  // Cambia solo el ingrediente de la posicion indicada
  function cambiarIngrediente(texto: string, posicion: number) {
    const copia = [...ingredientes];
    copia[posicion] = texto;
    setIngredientes(copia);
  }

  function guardar() {
    if (nombre === '') return;

    // Se guardan unicamente los ingredientes que si fueron escritos
    const llenos = ingredientes.filter((ingrediente) => ingrediente !== '');

    agregarReceta(nombre, llenos);
    setNombre('');
    setIngredientes(['', '', '', '', '']);
  }

  return (
    <View style={estilos.seccion}>
      <Text style={estilos.subtitulo}>1. Agregar Receta</Text>

      <TextInput
        style={estilos.input}
        placeholder="Nombre Receta"
        value={nombre}
        onChangeText={setNombre}
      />

      {ingredientes.map((ingrediente, posicion) => (
        <TextInput
          key={posicion}
          style={estilos.input}
          placeholder={'Ingrediente ' + (posicion + 1)}
          value={ingrediente}
          onChangeText={(texto) => cambiarIngrediente(texto, posicion)}
        />
      ))}

      <TouchableOpacity style={estilos.boton} onPress={guardar}>
        <Text style={estilos.textoBoton}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}
