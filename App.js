import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import CalculateScreen from './src/screens/CalculateScreen';
import GasType from './src/screens/GasType';
import HowToUse from './src/screens/HowToUse';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calcular" component={CalculateScreen} />
      <Stack.Screen name="Combustivel" component={GasType} />
      <Stack.Screen name="Como Usar" component={HowToUse} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

