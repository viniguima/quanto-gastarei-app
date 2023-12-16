import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect, useState} from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Alert  } from 'react-native';
import { Button } from "@react-native-material/core";
import Logo from "../components/Logo"
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import api from "../services/composables/api"
// import { global_styles } from 'src/styles/global-styles'



export default function AddCar({navigation}) {
  const [model, setModel] = useState()
  const [year, setYear] = useState()
  const [gasoCity, setGasoCity] = useState()
  const [gasoRoad, setGasoRoad] = useState()

  
  const createPost = () => {
    api.post('/cars', {
        id:0,
        CarModel: model,
        CarYear: year,
        AutoCityGas: gasoCity,
        AutoCityAlc: alcCity,
        AutoRoadGas: gasoRoad,
        AutoRoadAlc: alcRoad
      })
      .then(({ data }) => console.log(data))

      if({ status: 'User created successfully!' }) {
        Alert.alert('Carro cadastrado com sucesso')
      }else{
        Alert.alert('Ocorreu um erro')
      }
  };


  
  return (
    
    <View style={styles.container}> 
      <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}      
      >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{alignItems:'center',justifyContent:'center'}}
      keyboardVerticalOffset={280}>
      <Logo/> 
      <Text style={{color:"#fff", fontSize:20, marginTop:15, textAlign:'center'}}>Insira o modelo do seu veículo</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={model}
                onChangeText={setModel}
                keyboardType="text"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25, textAlign:'center'}}>Insira o ano do seu veículo:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={year}
                onChangeText={setYear}
                keyboardType="numeric"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25, textAlign:'center', textAlign:'center'}}>Insira a autonomia do seu carro {'\n'} na cidade:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={gasoCity}
                onChangeText={setGasoCity}
                keyboardType="numeric"
            />
          
            <Text style={{color:"#fff", fontSize:20, marginTop:25, textAlign:'center'}}>Insira a autonomia do seu carro {'\n'} na estrada:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={gasoRoad}
                onChangeText={setGasoRoad}
                keyboardType="numeric"
            />
        
      <Button title="Cadastrar" onPress={() => createPost()} style={[styles.white_text, styles.button]}></Button>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
     </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a3540',
      alignItems: 'center',
      justifyContent: 'center',
    },
    white_text: {
      color: 'white',
      marginTop: 20
    },
    button: {
      backgroundColor: '#5e4de0',
      width: 200,
      marginTop: 30,
      padding:12,
      marginBottom:30
      
    },

    tinyLogo: {
      width: 180,
      height: 60,
    },
  });

  