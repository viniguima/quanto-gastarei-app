import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform  } from 'react-native';
import { Button } from "@react-native-material/core";
import Logo from "../components/Logo"
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

// import { global_styles } from 'src/styles/global-styles'



export default function CalculateScreen({navigation}) {
  const [model, setModel] = useState()
  const [year, setYear] = useState()
  const [gasoCity, setGasoCity] = useState()
  const [gasoRoad, setGasoRoad] = useState()
  const [alcCity, setAlcCity] = useState()
  const [alcRoad, setAlcRoad] = useState(false)
  
  
  return (
    
    <View style={styles.container}> 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <ScrollView>
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
            <Text style={{color:"#fff", fontSize:20, marginTop:25, textAlign:'center', textAlign:'center'}}>Insira a autonomia do seu carro com {'\n'} Gasolina na cidade:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={gasoCity}
                onChangeText={setGasoCity}
                keyboardType="numeric"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25, textAlign:'center'}}>Insira a autonomia do seu carro com {'\n'} Etanol na cidade:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={alcCity}
                onChangeText={setAlcCity}
                keyboardType="numeric"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25, textAlign:'center'}}>Insira a autonomia do seu carro com {'\n'} Gasolina na estrada:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={gasoRoad}
                onChangeText={setGasoRoad}
                keyboardType="numeric"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25, textAlign:'center'}}>Insira a autonomia do seu carro com {'\n'} Etanol na estrada:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={alcRoad}
                onChangeText={setAlcRoad}
                keyboardType="numeric"
            />
      <Button title="Cadastrar" onPress={() => Calcular()} style={[styles.white_text, styles.button]}></Button>
      <Text style={{alignItems:'center', textAlign:'center', color: 'white',marginTop:10, fontSize:20}}></Text>
      </KeyboardAvoidingView>
     </ScrollView>
      </TouchableWithoutFeedback>
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
      padding:20,
      marginBottom:15
      
    },

    tinyLogo: {
      width: 180,
      height: 60,
    },
  });
