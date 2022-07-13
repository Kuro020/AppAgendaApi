import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const nav = createNativeStackNavigator();

import Home from './Home';
import CadastrarContatos from './CadastroContato';


export default function RotasBotao() {
    return (
    <NavigationContainer>
        <nav.Navigator>
            <nav.Screen name="Home" component={Home} />
            <nav.Screen name="CadastrarContatos" component={CadastrarContatos} />
        </nav.Navigator>
    </NavigationContainer>
    );
}