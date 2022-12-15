import React, {Component, useEffect, useState} from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from "react-native";
import { Button } from "@react-native-material/core";
import Logo from "../components/Logo";
import api from "../services/composables/api"

// import api from "../services/composables/api";
// import { global_styles } from 'src/styles/global-styles'
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";


export default function ConsultCar({navigation}) {
  const [carros, setCarros] = useState([])
  const cars = require('../data/cars.json')
  const [search, setSearch] = useState('')

  useEffect(() => {
    api.get('/cars').then(({data}) => {
      setCarros(data)
    })
  }, [])
  return (
    <ScrollView style={styles.container}>
      <Image
                style={styles.logo}
                source={require('../../public/images/logo-branca.png')}
            /> 
      
      <Text style={styles.white_text_title}>Consultar Autonomia</Text>
      <TextInput 
      placeholder="Pesquisar..." style={styles.search_input}
      onChangeText={setSearch}
      />

      {carros.filter((val) => {
        if(search == "") {
          return  val
        }else if(val.CarModel.includes(search)){
          return val
        }
      }).map(item  => (
      <View key={item.id}>
      <Text style={styles.white_text_car_name}>{item.CarModel} - {item.CarYear}</Text>
      <Text style={styles.white_text_city}>
             Autonomia com Gasolina na cidade: {item.AutoCityGas} Km/L 
      {'\n'} Autonomia com Etanol na cidade: {item.AutoCityAlc} Km/L 
      </Text>
      <Text style={styles.white_text_road}>
            Autonomia com Gasolina na estrada: {item.AutoRoadGas} Km/L 
      {'\n'} Autonomia com Etanol na estrada: {item.AutoRoadAlc} Km/L  
      </Text>
      </View>
      ))}
      <View style={{marginTop:20, marginBottom:20}}>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a3540',
    },
    button: {
      backgroundColor: "#808080",
      width: 250,
      padding:15,
      marginTop: 30,
      marginBottom:50,
      alignSelf:'center'
    },
    white_text_title: {
      color: 'white',
      textAlign:'center',
      fontSize:25,
      padding:20
    },
    white_text_car_name: {
      color: 'white',
      backgroundColor:'#32006A',
      textAlign:'center',
      fontSize:25,
      padding:15
    },
    white_text_city: {
      color: '#fff',
      textAlign:'center',
      fontSize:18,
      padding:12,
      backgroundColor:'#4682B4',
    },
    white_text_road: {
      color: 'white',
      textAlign:'center',
      fontSize:18,
      padding:12,
      backgroundColor:'#2E8B57',
    },
    search_input:{
      color: '#000',
      textAlign:'center',
      alignSelf:'center',
      fontSize:15,
      padding:12,
      backgroundColor:'#fff',
      marginBottom: 20,
      width:'90%',
      borderRadius: 30
    },
    logo: {
      width: 250,
      height: 80,
      marginTop: 25,
      marginBottom: 25,
      alignContent:'center',
      alignSelf:'center'
    },
  });

