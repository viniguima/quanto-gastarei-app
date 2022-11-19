import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import CalculateScreen from "./src/screens/CalculateScreen";
import GasType from "./src/screens/GasType";
import HowToUse from "./src/screens/HowToUse";
import AddCar from "./src/screens/AddCar";
import GoogleMaps from "./src/components/GoogleMaps";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quanto Gastarei" component={Home} />
      <Stack.Screen name="Gasto no Trajeto" component={CalculateScreen} />
      <Stack.Screen name="Etanol ou Gasolina" component={GasType} />
      <Stack.Screen name="Como Usar" component={HowToUse} />
      <Stack.Screen name="Cadastrar Carro" component={AddCar} />
      <Stack.Screen name="Google Maps" component={GoogleMaps} />
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
