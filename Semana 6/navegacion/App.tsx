import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './componentes/Nav';
import NavDrawer from './componentes/NavDrawer';
import ProviderTarea from './provider/ProviderTarea';

export default function App() {
  return (

    <ProviderTarea>
      <NavDrawer />
    </ProviderTarea>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
