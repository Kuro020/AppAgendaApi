import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation-stack';

const nav = createNativeStackNavigator();

import Home from './Home';
import Cadastro from './CadastroContato';

export default function RotasBotao() {
  return (
      <NavigationContainer>
          <nav.Navigator>
              <nav.Screen name="Home" component={Home}/>
              <nav.Screen name="Cadastro" component={Cadastro}/>
          </nav.Navigator>
      </NavigationContainer>
  );
}