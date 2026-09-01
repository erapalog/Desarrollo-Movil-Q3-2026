import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import AgregarTareas from '../pages/AgregarTareas';
import { NavigationContainer } from '@react-navigation/native';
import ListarTareas from '../pages/ListarTareas';

export default function NavDrawer() {

    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="AgregarTareas" component={AgregarTareas} />
                <Drawer.Screen name="ListarTareas" component={ListarTareas} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}