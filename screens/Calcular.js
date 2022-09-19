import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button } from "@react-native-material/core";
import TextBox from "../components/CaixaDeTexto"
// import { global_styles } from 'src/styles/global-styles'

let gas = '';

export const setGas = (params) => gas = params;
export const getGas = () => gas;

let distance = 0;

export const setDistance = (params) => { distance = params; console.log(distance);};
export const getDistance = () => distance;


export default function Calcular() {
  return (
    <View style={styles.container}> 
      <Image
        style={styles.tinyLogo}
        source={require('../public/images/logo-branca.png')}
      /> 
      <Text style={styles.white_text}>Calcular</Text>
      <TextBox/>
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
      
    },
    tinyLogo: {
      width: 180,
      height: 60,
    },
  });
