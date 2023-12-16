import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../services/composables/api";

export default function ConsultCar({ navigation }) {
  const [carros, setCarros] = useState([]);
  const cars = require('../data/cars.json');
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/cars').then(({ data }) => {
      setCarros(data);
    });
  }, []);

  const navigateToCalculateScreen = (carData, clickedCityGas) => {
    // Navegar para a tela CalculateScreen e passar os dados do carro como parâmetros
    navigation.navigate('Gasto no Trajeto', {
      auto: clickedCityGas ? carData.AutoCityGas : carData.AutoRoadGas,
      item: carData, // Passar os dados do carro como parâmetro
      clickedCityGas, // Indicar qual propriedade foi clicada
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../public/images/logo-branca.png')}
      />

      <Text style={styles.white_text_title}>Consultar Autonomia</Text>
      <TextInput
        placeholder="Pesquisar..."
        style={styles.search_input}
        onChangeText={setSearch}
      />

      {carros.filter((val) => {
        if (search === "") {
          return val;
        } else if (val.CarModel.includes(search)) {
          return val;
        }
      }).map((item) => (
        <View key={item.Id}>
            <Text style={styles.white_text_car_name}>{item.CarModel} - {item.CarYear}</Text>
          <TouchableOpacity onPress={() => navigateToCalculateScreen(item, true)}>
            <Text style={styles.white_text_city}>
              Autonomia aproximada na cidade: {item.AutoCityGas} Km/L
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToCalculateScreen(item, false)}>
            <Text style={styles.white_text_road}>
              Autonomia na estrada: {item.AutoRoadGas} Km/L
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={{ marginTop: 20, marginBottom: 20 }}></View>
    </ScrollView>
  );
}

// Restante do código permanece o mesmo


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a3540',
  },
  button: {
    backgroundColor: "#808080",
    width: 250,
    padding: 15,
    marginTop: 30,
    marginBottom: 50,
    alignSelf: 'center'
  },
  white_text_title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 20
  },
  white_text_car_name: {
    color: 'white',
    backgroundColor: '#32006A',
    textAlign: 'center',
    fontSize: 25,
    padding: 15
  },
  white_text_city: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    padding: 12,
    backgroundColor: '#4682B4',
  },
  white_text_road: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 12,
    backgroundColor: '#2E8B57',
  },
  search_input: {
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 20,
    width: '90%',
    borderRadius: 30
  },
  logo: {
    width: 250,
    height: 80,
    marginTop: 25,
    marginBottom: 25,
    alignContent: 'center',
    alignSelf: 'center'
  },
  link: {
    color: 'white',
    backgroundColor: '#32006A',
    textAlign: 'center',
    fontSize: 25,
    padding: 15,
  },
});

