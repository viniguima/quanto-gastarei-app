import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button } from "@react-native-material/core";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Calcular from './screens/Calcular';
import Etanol from './screens/Etanol_Gasolina';
import ComoUsar from './screens/Como_Usar';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Calcular" component={Calcular}/>
      <Stack.Screen name="Etanol ou Gasolina" component={Etanol}/>
      <Stack.Screen name="Como Usar" component={ComoUsar}/>
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