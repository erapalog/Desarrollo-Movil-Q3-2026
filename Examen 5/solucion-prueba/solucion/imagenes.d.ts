// Le dice a TypeScript que un archivo .png se puede importar y que lo que
// devuelve sirve como `source` de un <Image />. No hay que modificar nada aquí.
declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';

  const contenido: ImageSourcePropType;
  export default contenido;
}
