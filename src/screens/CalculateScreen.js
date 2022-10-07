import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform  } from 'react-native';
import { Button } from "@react-native-material/core";
import Logo from "../components/Logo"
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

// import { global_styles } from 'src/styles/global-styles'



export default function CalculateScreen({navigation}) {
  const [distance, setDistance] = useState()
  const [auto, setAuto] = useState()
  const [priceGas, setPriceGas] = useState()
  const [travel, setTravel] = useState()
  const [total, setTotal] = useState()
  const [googleMaps, setGoogleMaps] = useState(false)
 
function Calcular() {
  let dist = parseFloat(distance)
  let aut = parseFloat(auto)
  let gasPrice = parseFloat(priceGas)
  let trv = parseFloat(travel)

  let autonomia = (dist / aut)
  let totalGas = (autonomia * gasPrice)
  let resultTravel = (totalGas * trv)

  let err = 'Digite um valor válido.'
  let result = `Você gastará: R$${resultTravel.toFixed(2)} e prescisará de ${autonomia.toFixed(2)} Litros de gasolina.`
  if(isNaN(totalGas,autonomia)){
    setTotal(err)
  }else{
    setTotal(result)

  }
} 
  
  
  return (
    
    <View style={styles.container}> 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <ScrollView contentContainerStyle={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{alignItems:'center',justifyContent:'center'}}
      keyboardVerticalOffset={320}>
      <Logo/> 
      <Button title="Consultar Maps" style={styles.button_consultar} onPress={() => navigation.navigate('Google Maps')}></Button>
      <Text style={styles.white_text}>Calcular quanto irei gastar de combustível</Text>
      <Text style={{color:"#fff", fontSize:20, marginTop:15}}>Insira a distância do trageto em Km</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={distance}
                onChangeText={setDistance}
                keyboardType="numeric"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25}}>Insira a autonomia do seu veículo Km/l:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={auto}
                onChangeText={setAuto}
                keyboardType="numeric"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25}}>Insira o preço do Combustível:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={priceGas}
                onChangeText={setPriceGas}
                keyboardType="numeric"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25}}>Insira o número de viagens que irá fazer:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={travel}
                onChangeText={setTravel}
                keyboardType="numeric"
            />
      <Button title="Calcular" onPress={() => Calcular()} style={[styles.white_text, styles.button]}></Button>
      <Text style={{alignItems:'center', textAlign:'center', color: 'white',marginTop:10, fontSize:20}}>{total}</Text>
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
      justifyContent: 'start',
    },
    white_text: {
      color: 'white',
      marginTop: 20
    },
    button: {
      backgroundColor: '#5e4de0',
      width: 200,
      marginTop: 30,
      
    },
    button_consultar: {
      backgroundColor: '#808080',
      width: 200,
      marginTop: 20,
      
    },
    tinyLogo: {
      width: 180,
      height: 60,
    },
  });
