import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent llama a AppRegistry.registerComponent('main', () => App).
// También configura el entorno para Expo Go y para la versión web.
registerRootComponent(App);
