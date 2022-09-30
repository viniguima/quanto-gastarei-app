import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView  } from 'react-native';
import { Button } from "@react-native-material/core";
import Logo from "../components/Logo"
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

// import { global_styles } from 'src/styles/global-styles'



export default function GasType({navigation}) {
  const [priceGas, setPriceGas] = useState()
  const [priceAlc, setPriceAlc] = useState()
  const [total, setTotal] = useState()
 
function CalcularEtorGas() {
 
  var resultConsult = (priceAlc / priceGas) 

  if(resultConsult < 0.7){
    setTotal('É recomendável abastecer com álcool(etanol).') 
} else if(resultConsult > 0.7) {
  setTotal('É recomendável abastecer com álcool(etanol).') 
}else{
  setTotal('Insira um valor válido') 
}

} 
  
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      
      <View style={styles.container}> 
      <ScrollView contentContainerStyle={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Logo/> 
      <Text style={styles.white_text}>Consulte se vale a pena abastecer com álcool ou gasolina:</Text>
      <Text style={{color:"#fff", fontSize:20, marginTop:15}}>Insira o preço da gasolina</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={priceGas}
                onChangeText={setPriceGas}
                keyboardType="numeric"
            />
            <Text style={{color:"#fff", fontSize:20, marginTop:25}}>Insira o preço do etanol:</Text>
            <TextInput
                style={{borderWidth:2,height:45,width:200,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={priceAlc}
                onChangeText={setPriceAlc}
                keyboardType="numeric"
            />
      <Button title="Calcular" onPress={() => CalcularEtorGas()} style={[styles.white_text, styles.button]}></Button>
      <Text style={{flex:1, alignItems:'center', textAlign:'center', color: 'white',marginTop: 20, fontSize:20}}>{total}</Text>
     </ScrollView>
      </View>
    
      </TouchableWithoutFeedback>
   
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
