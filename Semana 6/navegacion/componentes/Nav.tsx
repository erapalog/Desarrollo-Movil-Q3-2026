import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AgregarTareas from '../pages/AgregarTareas';
import ListarTareas from '../pages/ListarTareas';
import Home from '../pages/Home';

export default function Nav() {

    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="AgregarTareas" component={AgregarTareas} />
                <Tab.Screen name="ListarTareas" component={ListarTareas} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}